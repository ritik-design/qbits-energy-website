<?php
/**
 * Plugin Name: Authorized Service Partners
 * Description: Map & List view with State/District filter using external API
 * Version: 1.0
 * Author: Umesh Patoliya
 */

if (!defined('ABSPATH')) exit;

/* =============================
 * ENQUEUE SCRIPTS & STYLES
 * ============================= */
add_action('wp_enqueue_scripts', function () {

    wp_enqueue_style( 'asp-css', plugin_dir_url(__FILE__) . 'assets/css/asp.css', [], '1.0' );

    wp_enqueue_script( 'google-maps', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCi9epoAEzqNpsuLSIGACaojRdEmL1cLTI', [], null, true );

    wp_enqueue_script( 'asp-js', plugin_dir_url(__FILE__) . 'assets/js/asp.js', ['google-maps'], '1.0', true );

    wp_localize_script('asp-js', 'ASP_CONFIG', [
        'ajax_url'   => admin_url('admin-ajax.php'),
        'plugin_url' => plugin_dir_url(__FILE__)
    ]);
});

/* =============================
 * API PROXY (PASS ALL PARAMS)
 * ============================= */
add_action('wp_ajax_asp_api', 'asp_api_proxy');
add_action('wp_ajax_nopriv_asp_api', 'asp_api_proxy');

function asp_api_proxy() {

    $endpoint = sanitize_text_field($_GET['endpoint']);
    unset($_GET['action'], $_GET['endpoint']);

    $query = http_build_query($_GET);
    $url   = 'https://qbits.quickestimate.co/api/v1/webhook/' . $endpoint;

    if ($query) {
        $url .= '?' . $query;
    }

    $response = wp_remote_get($url, [
        'headers' => [
            'Accept'       => 'application/json',
            'X-Signature'  => 'eyJhbGciOi3nMiGM6H9FNFUROf3wh7SmQ30'
        ]
    ]);

    if (is_wp_error($response)) {
        wp_send_json_error();
    }

    wp_send_json(json_decode(wp_remote_retrieve_body($response), true));
}

/* =============================
 * SHORTCODE
 * ============================= */
add_shortcode('authorized_service_partners', function () {
    ob_start(); ?>

    <div class="asp-wrapper">

        <div class="asp-toggle">
            <div class="asp-toggle-wrap">
                <button id="aspMapBtn" class="active">Map View</button>
                <button id="aspListBtn">List View</button>
            </div>
        </div>

        <div id="aspMapView"></div>
        <div id="aspListView" style="display:none">
            <div class="asp-container">
                <div class="asp-filter">
                    <div class="asp-filter-header">
                        <h4>Filter</h4>
                    </div>

                    <div class="asp-filter-content">
                        <div class="asp-filter-filed">
                            <label>State</label>
                            <select id="aspState">
                                <option value="">Select State</option>
                            </select>
                        </div>

                        <div class="asp-filter-filed">
                            <label>District</label>
                            <select id="aspDistrict">
                                <option value="">Select District</option>
                            </select>
                        </div>

                        <div class="asp-filter-actions">
                            <button id="aspReset">Reset</button>
                            <button id="aspApply" class="apply">Apply</button>
                        </div>
                    </div>
                </div>

                <div class="asp-list-grid"></div>
				<div class="asp-pagination"></div>
            </div>
        </div>

    </div>

    <?php
    return ob_get_clean();
});
