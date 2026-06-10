jQuery(document).ready(function ($) {

  let map;
  let markers = [];
  let infoWindow;

  $('#aspMapBtn').on('click', function () {
    $(this).addClass('active');
    $('#aspListBtn').removeClass('active');

    $('#aspMapView').show();
    $('#aspListView').hide();

    loadMap();
  });

  $('#aspListBtn').on('click', function () {
      $(this).addClass('active');
      $('#aspMapBtn').removeClass('active');

      $('#aspMapView').hide();
      $('#aspListView').show();

      loadList();
  });

  $('#aspState').on('change', async function () {
      const stateId = $(this).val();
      const $district = $('#aspDistrict');

      $district.html('<option value="">Select District</option>');
      $district.prop('disabled', true);

      try {
          const res = await fetch(`${ASP_CONFIG.ajax_url}?action=asp_api&endpoint=states/${stateId}/cities`);
          const json = await res.json();

          $district.html('<option value="">Select District</option>');

          $.each(json.data, function (i, city) {
              $district.append(
                  `<option value="${city.id}">${city.name}</option>`
              );
          });
      } catch (error) {
          $district.html('<option value="">Failed to load</option>');
      }
      $district.prop('disabled', false);
  });

  $('#aspApply').on('click', function () {
      const stateId = $('#aspState').val();
      const cityId  = $('#aspDistrict').val();

      if (!stateId) {
          alert('Please select State');
          return;
      }

      loadList(stateId, cityId, 1);
  });

  $(document).on('click', '.asp-page-btn', function () {
    const $this = $(this);
    const page  = $this.data('page');
    const state = $this.data('state');
    const city  = $this.data('city');

    loadList(state, city, page);
  });

  $('#aspReset').on('click', function () {
    $('#aspState').val('');
    $('#aspDistrict').html('<option value="">Select District</option>').prop('disabled', false);

    loadList();
    loadMap();
  });


  async function loadMap() {
    try {
      const res = await fetch(`${ASP_CONFIG.ajax_url}?action=asp_api&endpoint=channel-partner/map-view`);

      const json = await res.json();
      if (!json || !json.data) return;

      if (!map) {
        map = new google.maps.Map(
            document.getElementById("aspMapView"),
            {
                center: { lat: 22.2587, lng: 71.1924 },
                zoom: 8,
            }
        );
      }

      if (!infoWindow) {
          infoWindow = new google.maps.InfoWindow();
      }

      markers.forEach(marker => marker.setMap(null));
      markers = [];

      const bounds = new google.maps.LatLngBounds();

      $.each(json.data, function (i, item) {
        if (!item.latitude || !item.longitude) return;

        const position = {
            lat: parseFloat(item.latitude),
            lng: parseFloat(item.longitude)
        };

        const marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: {
                url: `${ASP_CONFIG.plugin_url}assets/image/icon-marker.svg`,
                scaledSize: new google.maps.Size(44, 44)
            }
        });

        bounds.extend(position);

        const popupHTML = `
          <div class="asp-map-popup">
              <div class="asp-image">
                  ${item.photo
                      ? `<img src="https://qbits.quickestimate.co/storage/${item.photo}" alt="${item.name}">`
                      : `<img src="${ASP_CONFIG.plugin_url}assets/image/default-user.jpg">`
                  }
              </div>
              <div class="asp-info">
                ${item.name ? `<h4 class="title">${item.name}</h4>` : ''}
                ${item.company_name ? `<p class="designation">${item.company_name} | ${item.designation ?? ''}</p>` : ''}
                ${item.address ? `<p class="address">${item.address}, ${item.city_name}, ${item.state_name}</p>` : ''}
              </div>

              <div class="asp-actions">
                ${item.whatsapp_no ? `<a href="https://wa.me/${item.whatsapp_no}" target="_blank"><img src="${ASP_CONFIG.plugin_url}assets/image/icon-whatsapp.svg"></a>` : ''}
                ${item.mobile ? `<a href="tel:${item.mobile}"><img src="${ASP_CONFIG.plugin_url}assets/image/icon-mobile.svg"></a>` : ''}
              </div>
          </div>
        `;

        marker.addListener("click", function () {
            infoWindow.setContent(popupHTML);
            infoWindow.open(map, marker);
        });
        markers.push(marker);
      });

      if (markers.length > 0) {
        map.fitBounds(bounds);
      }
    } catch (err) {
      console.error("Map Load Error:", err);
    }
  }

  async function loadList(state = '', city = '', page = 1) {
    const $list = $('.asp-list-grid');
    if (!$list.length) return;

    $list.html('<p class="loading">Loading...</p>');

    try {
      const res = await fetch(`${ASP_CONFIG.ajax_url}?action=asp_api&endpoint=channel-partner/list-view&state_id=${state}&city=${city}&page=${page}`);
      const json = await res.json();
      const data = json?.data?.data;

      $list.html('');

      if (!data || data.length === 0) {
        $list.html(`<p class="asp-no-result">No service partners found.</p>`);
        $('.asp-pagination').html('');
        return;
      }

      data.forEach(item => {
        $list.append(`
          <div class="asp-card">
            <div class="asp-image">
              ${item.photo
                  ? `<img src="https://qbits.quickestimate.co/storage/${item.photo}" alt="${item.name}">`
                  : `<img src="${ASP_CONFIG.plugin_url}assets/image/default-user.jpg">`
              }
            </div>
            <div class="asp-info">
              ${item.name ? `<h4 class="title">${item.name}</h4>` : ''}
              ${item.designation ? `<p class="designation">${item.designation ?? ''}</p>` : ''}
              ${item.company_name ? `<p class="address">${item.company_name}, ${item.city_name}, ${item.state_name}</p>` : ''}
            </div>

            <div class="asp-actions">
              ${item.whatsapp_no ? `<a href="https://wa.me/${item.whatsapp_no}" target="_blank"><img src="${ASP_CONFIG.plugin_url}assets/image/icon-whatsapp.svg"></a>` : ''}
              ${item.mobile ? `<a href="tel:${item.mobile}"><img src="${ASP_CONFIG.plugin_url}assets/image/icon-mobile.svg"></a>` : ''}
            </div>
          </div>
        `);
      });
      renderPagination(json.data, state, city);
    } catch (err) {
      console.error('List Load Error:', err);
      $list.html(`<p class="asp-error">Something went wrong.</p>`);
    }
  }

  async function loadStates() {
    try {
      const res = await fetch(`${ASP_CONFIG.ajax_url}?action=asp_api&endpoint=state`);
      const json = await res.json();

      $.each(json.data, function (i, s) {
          $('#aspState').append(
            `<option value="${s.id}">${s.name}</option>`
          );
      });
    } catch (err) {
      console.error("State Load Error:", err);
    }
  }
  
  function renderPagination(paginate, state, city) {
    const $pagination = $('.asp-pagination');
    $pagination.html('');

    if (!paginate) return;

    if (paginate.prev_page_url) {
      $pagination.append(`<button class="asp-page-btn" data-page="${paginate.current_page - 1}" data-state="${state}" data-city="${city}">&#8249;</button>`);
    }

    $pagination.append(`<span class="asp-page-current">Page ${paginate.current_page}</span>`);

    if (paginate.next_page_url) {
      $pagination.append(`<button class="asp-page-btn" data-page="${paginate.current_page + 1}" data-state="${state}" data-city="${city}">&#8250;</button>`);
    }
  }

  $(document).on('click', '.asp-page-btn', function () {
    $('html, body').animate({
      scrollTop: $('#aspListView').offset().top - 100
    }, 500);
  });

  loadStates();
  loadMap();
  loadList();

});