---
title: "MPPT Kya Hota Hai: Solar Inverter Explained (2026)"
excerpt: "MPPT kya hota hai? Solar panel की I-V curve, maximum power point, tracking algorithm, MPPT voltage window aur घर के लिए कितने MPPT चाहिए, आसान Hindi explainer।"
description: "MPPT ka matlab, panel ki I-V curve, maximum power point kaise shift hota hai, spec sheet ka MPPT voltage window, aur ghar ke liye kitne MPPT chahiye - simple Hindi guide."
category: "Technology"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "12 min"
image: "/blog-images/mppt-kya-hota-hai.svg"
author: "Keyur Rakholiya"
keywords:
  - mppt kya hota hai
  - mppt full form in hindi
  - solar inverter mppt meaning
  - mppt voltage range kya hai
  - kitne mppt chahiye solar inverter
faqs:
  - q: "MPPT ka full form kya hai aur ये करता क्या है?"
    a: "MPPT का full form है Maximum Power Point Tracking। यह inverter के अंदर चलने वाला एक algorithm है जो solar panel को उस exact voltage पर operate कराता है जहाँ panel सबसे ज़्यादा watt देता है। धूप, temperature और shading बदलने पर वह best point भी हिलता रहता है, इसलिए MPPT हर कुछ milliseconds में voltage को थोड़ा ऊपर-नीचे करके check करता है कि power बढ़ी या घटी, और उसी दिशा में settle हो जाता है।"
  - q: "MPPT aur normal inverter mein kya difference hai?"
    a: "आम घरेलू battery inverter grid या battery से चलता है, उसमें solar panel की power optimise करने वाला कोई stage नहीं होता। Solar inverter में MPPT एक DC-DC stage होता है जो panel voltage को actively पकड़कर रखता है। इसी वजह से एक ही panel array से MPPT वाला inverter fixed-voltage arrangement के मुक़ाबले 10 से 30 percent ज़्यादा energy निकाल पाता है। आज India में बिकने वाला हर on-grid और hybrid inverter MPPT-based ही होता है।"
  - q: "Ghar ke rooftop ke liye kitne MPPT chahiye?"
    a: "अगर पूरी छत एक ही direction और एक ही tilt पर है, तो single MPPT काफी है। अगर panels दो अलग directions पर हैं, जैसे east और west, या दो अलग tilt पर हैं, तो dual MPPT चाहिए। तीन या उससे ज़्यादा alag orientations वाली complex छत पर तीन MPPT या ज़्यादा वाला inverter बेहतर रहता है। 3 kW से 10 kW के ज़्यादातर Indian rooftops dual MPPT से comfortably चल जाते हैं।"
  - q: "MPPT voltage range ka matlab kya hota hai spec sheet mein?"
    a: "Spec sheet पर लिखा MPPT voltage range वह window है जिसके अंदर string voltage रहनी चाहिए ताकि tracker काम कर सके, जैसे 80V से 550V। इससे नीचे जाने पर inverter tracking छोड़ देता है और सुबह-शाम की generation कम हो जाती है। ऊपर लिखा Max DC input voltage एक hard limit है, ठंडी सुबह में Voc बढ़ती है इसलिए उसमें 20 से 25 percent margin रखना चाहिए। String design हमेशा इसी window के हिसाब से करें।"
  - q: "Shading hone par MPPT kya karta hai?"
    a: "Partial shading में panel की power curve पर एक से ज़्यादा peak बन जाते हैं। साधारण tracker सबसे पास वाले local peak पर अटक सकता है और global peak miss कर देता है, जिससे 5 से 15 percent generation का नुकसान होता है। इसीलिए अच्छे inverters में global MPPT scan होता है जो periodically पूरी voltage range sweep करके असली peak ढूंढता है। Shaded panels को अलग MPPT पर रखना और भी बेहतर काम करता है।"
  - q: "Temperature badhne par MPPT point kyun shift hota hai?"
    a: "Solar cell का voltage temperature के साथ गिरता है, typically हर °C पर लगभग 0.3 percent। मई की दोपहर में panel का surface 60 से 70 °C तक जा सकता है, यानी Vmp 25 °C वाली rating से 10 से 12 percent नीचे। Current लगभग वैसी ही रहती है। इसलिए maximum power point नीचे खिसक जाता है और MPPT को उसे दोबारा ढूंढना पड़ता है। यही वजह है कि गर्मी में generation उम्मीद से कम दिखती है।"
  - q: "Kya do alag orientation ke panels ek hi MPPT par laga sakte hain?"
    a: "Technically लग जाते हैं, लेकिन नुकसान होता है। एक MPPT एक ही voltage set कर सकता है, तो जिस group पर ज़्यादा धूप है वह भी दूसरे group के हिसाब से compromise करता है। East-west split पर यह loss आमतौर पर 5 से 12 percent daily energy का होता है, roof geometry और shading पर depend करता है। Dual MPPT inverter दोनों strings को अलग-अलग track करता है और यह loss लगभग खत्म कर देता है।"
  - q: "MPPT efficiency aur conversion efficiency alag cheez hai kya?"
    a: "हाँ, दोनों अलग हैं। MPPT tracking efficiency बताती है कि tracker असली maximum power point के कितने पास रहता है, अच्छे inverters में 99 percent से ऊपर। Conversion efficiency बताती है कि DC को AC में बदलते समय कितनी power बचती है, typically 96 से 98.5 percent। Datasheet पर European efficiency दोनों का practical mix दिखाती है। खरीदते समय दोनों numbers अलग-अलग देखें।"
featured: false
---

Solar quotation में एक line लगभग हमेशा होती है: "dual MPPT inverter"। ज़्यादातर घर वाले उसे पढ़कर सिर हिला देते हैं और आगे बढ़ जाते हैं। लेकिन MPPT ही तय करता है कि आपकी छत के panels अपनी rated capacity का कितना हिस्सा सच में बिजली में बदल पाएंगे। यह guide MPPT को शुरू से समझाती है, बिना formula की भरमार के। Panel की power curve, maximum power point, धूप और गर्मी के साथ उसका हिलना, tracking algorithm, spec sheet का voltage window, और आपकी छत के लिए कितने MPPT चाहिए। अंत तक आप किसी भी inverter datasheet का MPPT section खुद पढ़ पाएंगे।

> **TL;DR**
> - MPPT का मतलब Maximum Power Point Tracking, यह inverter के अंदर का वह हिस्सा है जो panel को उसके सबसे productive voltage पर चलाता है।
> - Panel की I-V curve पर सिर्फ एक point ऐसा होता है जहाँ voltage × current सबसे ज़्यादा होता है, बाकी हर point पर energy बर्बाद होती है।
> - धूप और temperature बदलने से यह point दिनभर हिलता रहता है, गर्म दोपहर में Vmp rating से 10 से 12 percent तक नीचे चला जाता है।
> - Spec sheet का "MPPT voltage range" (जैसे 80V से 550V) वह window है जिसमें string voltage रहनी चाहिए, वरना सुबह-शाम tracking बंद हो जाती है।
> - एक direction वाली सादी छत पर single MPPT काफी है, east-west या mixed tilt वाली छत पर dual MPPT से आमतौर पर 5 से 12 percent ज़्यादा energy मिलती है।
> - Partial shading में curve पर कई peaks बनते हैं, global MPPT scan वाला inverter असली peak ढूंढता है, बिना उसके 5 से 15 percent loss हो सकता है।

**Short version.** MPPT यानी Maximum Power Point Tracking, solar inverter के अंदर लगा एक DC-DC stage और algorithm है जो panel array को उस voltage पर पकड़कर रखता है जहाँ वह सबसे ज़्यादा power देता है। धूप, बादल और panel temperature बदलने पर यह best point हिलता है, और tracker उसे हर कुछ milliseconds में दोबारा ढूंढ लेता है। इसी वजह से आधुनिक solar inverter fixed-voltage arrangement से 10 से 30 percent ज़्यादा energy निकालता है।

अगर आप MPPT और पुराने PWM charge controller का सीधा मुकाबला ढूंढ रहे हैं, वह अलग topic है और [MPPT vs PWM comparison](/blog/mppt-vs-pwm/) में detail से cover है। यहाँ हम सिर्फ यह समझेंगे कि MPPT चीज़ आख़िर है क्या।

## Solar Panel Ek Battery Nahi Hai

MPPT समझने के लिए पहले एक ग़लतफ़हमी हटानी पड़ती है। लोग सोचते हैं panel एक छोटी battery जैसा है जो fix voltage देता है। ऐसा नहीं है।

Panel का behaviour उस पर लगे load पर depend करता है। दो extreme cases देखिए।

तार खुले छोड़ दें, कोई load नहीं, तो voltage सबसे ज़्यादा और current शून्य। इसे [open-circuit voltage](/glossary/open-circuit-voltage/) या Voc कहते हैं। Power = voltage × current, current शून्य है, तो power भी शून्य।

तार आपस में जोड़ दें, यानी short circuit, तो current सबसे ज़्यादा और voltage लगभग शून्य। इसे Isc कहते हैं। यहाँ भी power शून्य।

तो दोनों सिरों पर power zero है। बीच में कहीं वह sweet spot है जहाँ voltage और current का गुणा सबसे बड़ा होता है। वही **maximum power point** है, और उस point की voltage को Vmp, current को Imp कहते हैं।

एक typical 550 W panel के numbers।

| Parameter | Typical value | मतलब |
| --- | --- | --- |
| Voc | 49 से 51 V | बिना load के voltage |
| Vmp | 41 से 43 V | maximum power वाली voltage |
| Isc | 13.8 से 14.2 A | short circuit current |
| Imp | 13.0 से 13.4 A | maximum power वाली current |
| Pmax | 545 से 555 W | Vmp × Imp |

ध्यान दीजिए, Vmp लगभग Voc का 82 से 85 percent होता है, silicon panels में यह ratio काफी consistent रहता है।

अब सोचिए inverter panel को 30 V पर चलाए। Current लगभग Imp जितनी ही रहेगी, मान लीजिए 13.2 A, लेकिन power सिर्फ 396 W। यानी 550 W panel से 150 W गायब। MPPT का पूरा काम यही है कि ऐसा न हो।

## I-V Curve Ko Aasan Bhasha Mein Samjhein

Panel की I-V curve एक graph है जिसमें x-axis पर voltage और y-axis पर current होती है। Curve शुरुआत में लगभग flat चलती है, फिर एक जगह जाकर तेज़ी से नीचे गिरती है। उसी data से बनी P-V curve एक पहाड़ी जैसी दिखती है, ऊपर उठती है, एक चोटी बनाती है, फिर गिर जाती है। MPPT को उसी चोटी पर बैठना है।

रोज़मर्रा की भाषा में, panel एक ऐसा नल है जिसका pressure और flow आपस में जुड़े हैं। बहुत pressure रखेंगे तो पानी बहेगा नहीं, बहुत खोल देंगे तो pressure गिर जाएगा। MPPT वही balance ढूंढने वाला हाथ है।

<div class="inline-cta">
<h3>Apni Chhat Ke Liye Sahi MPPT Configuration Chahiye?</h3>
<p>छत की direction, tilt और shading देखकर हमारे engineers बताते हैं कि आपको single MPPT चाहिए या dual, और कौन सा Qbits model उस layout पर सबसे ज़्यादा units देगा।</p>
<a href="/contact-us/" class="cta-btn">Free Quote Lein <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Site visit से पहले free consultation, कोई obligation नहीं।</p>
</div>

## Maximum Power Point Ek Jagah Nahi Rukta

अगर maximum power point हमेशा एक ही जगह होता, तो inverter में एक fix voltage set कर देते और काम ख़त्म। असली दिक्कत यह है कि वह point दिनभर हिलता रहता है। दो चीज़ें उसे हिलाती हैं।

### Dhoop (Irradiance) Current Badalti Hai

Panel पर पड़ने वाली धूप current को लगभग सीधे अनुपात में बदलती है। पूरी धूप में 1000 W/m² मिलता है, घने बादल में 200 W/m² रह जाता है, current भी लगभग पाँचवें हिस्से पर आ जाती है।

Voltage पर असर कम पड़ता है, Vmp शायद 5 से 8 percent गिरे। इसीलिए बादल वाले दिन inverter बंद नहीं होता, बस units कम बनती हैं।

### Temperature Voltage Girata Hai

यह हिस्सा India में सबसे ज़्यादा मायने रखता है। Solar cell का voltage temperature coefficient negative होता है, आमतौर पर हर °C पर लगभग 0.28 से 0.35 percent, exact value panel datasheet पर मिलती है।

Rating 25 °C cell temperature पर होती है। लेकिन Rajasthan या Gujarat की मई की दोपहर में panel की सतह 60 से 70 °C तक पहुँच जाती है, यानी rating से 35 से 45 °C ज़्यादा।

मोटा हिसाब, 43 V Vmp वाला panel, 0.3 percent per °C, 40 °C rise:
43 × 0.3% × 40 = लगभग 5.2 V की गिरावट। Vmp अब लगभग 37.8 V।

ठंडी सुबह में उल्टा होता है, Voc rating से ऊपर चली जाती है। यही वह moment है जिसके लिए string design में margin रखा जाता है। कुल मिलाकर, maximum power point एक ही दिन में लगातार घूमता रहता है और tracker का काम उसका पीछा करना है।

## Tracking Algorithm Peak Kaise Dhoondhta Hai

अंदर जो हो रहा है वह हैरान करने वाला सरल है। सबसे common algorithm का नाम है **Perturb and Observe**, यानी "छेड़ो और देखो"।

हर कुछ milliseconds में inverter यह चार कदम दोहराता है।

1. Panel की मौजूदा voltage और current माप लो, power निकाल लो।
2. Voltage को थोड़ा सा बदल दो, मान लीजिए 0.5 V ऊपर।
3. दोबारा power मापो।
4. अगर power बढ़ी, तो उसी दिशा में एक कदम और बढ़ो। अगर घटी, तो उल्टी दिशा में मुड़ जाओ।

बस इतना ही। Inverter को पहले से पता नहीं होता कि peak कहाँ है, वह पहाड़ी पर टटोलते हुए ऊपर चढ़ता रहता है और peak के आसपास छोटे कदमों में झूलता रहता है। अच्छा inverter यह झूलना इतना छोटा रखता है कि नुकसान न के बराबर हो। दूसरा common algorithm Incremental Conductance है, जो तेज़ी से बदलते बादलों में बेहतर settle करता है।

Datasheet पर इसे **MPPT tracking efficiency** के नाम से लिखा जाता है। अच्छे inverters में यह 99.5 percent से ऊपर होती है। ध्यान रखिए, यह conversion efficiency से अलग चीज़ है, conversion efficiency बताती है कि DC से AC बनाते समय कितनी power बचती है, जो 96 से 98.5 percent के बीच रहती है।

## Spec Sheet Par MPPT Voltage Window Kya Batata Hai

यहीं ज़्यादातर घर वाले उलझते हैं। किसी भी on-grid inverter की datasheet पर ये numbers पास-पास लिखे होते हैं।

| Spec line | Typical value | असल मतलब |
| --- | --- | --- |
| Max DC input voltage | 550 V | Hard limit, इससे ऊपर गया तो inverter damage |
| MPPT voltage range | 80 से 550 V | इस window में tracker काम करता है |
| Rated / nominal MPPT voltage | 360 V | जहाँ efficiency सबसे बेहतर रहती है |
| Startup voltage | 90 से 120 V | इससे नीचे inverter जागता ही नहीं |

String design का पूरा खेल इन्हीं numbers के इर्द-गिर्द है।

बहुत कम panels series में लगाए, तो सुबह-शाम string voltage startup voltage से नीचे चली जाएगी और inverter देर से चालू होकर जल्दी बंद हो जाएगा। दिन के दोनों सिरों की generation कट जाती है।

बहुत ज़्यादा panels series में लगा दिए, तो ठंडी सुबह में Voc बढ़कर max DC input voltage पार कर सकती है। यह warranty-void करने वाली गलती है।

Practical rule यही है कि cold-morning Voc निकालकर 20 से 25 percent margin रखा जाए। यह खुद check करना हो तो [string sizing calculator](/string-sizing-calculator/) से numbers निकाल लीजिए, पूरी method [solar inverter sizing guide](/blog/solar-inverter-sizing/) में है।

<div class="inline-cta">
<h3>String Voltage Khud Verify Kar Lein</h3>
<p>Panel का Voc, कितने panels series में, और आपके शहर की सबसे ठंडी सुबह, तीनों डालिए और देखिए कि string आपके inverter की MPPT window में सही बैठ रही है या नहीं।</p>
<a href="/string-sizing-calculator/" class="cta-btn">Size Calculate Karein <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Installer का design cross-check करने में 2 मिनट लगते हैं।</p>
</div>

## Ghar Ke Liye Kitne MPPT Chahiye

एक MPPT एक समय पर सिर्फ एक voltage set कर सकता है, यानी उससे जुड़े सारे panels एक ही operating condition पर चलते हैं। सारे panels एक जैसी धूप में हैं तो कोई दिक्कत नहीं। लेकिन आधे panels पूरब और आधे पश्चिम देख रहे हों, तो सुबह पूरब वाले 80 percent पर होंगे और पश्चिम वाले 30 percent पर, और एक ही voltage दोनों के लिए compromise बनेगी।

नीचे एक practical table है, roof situation के हिसाब से।

| Roof situation | Recommended MPPT count | क्यों |
| --- | --- | --- |
| एक ही direction, एक tilt, कोई shading नहीं | 1 MPPT | सभी panels की condition एक जैसी |
| एक direction, लेकिन सुबह/शाम partial shading | 1 MPPT global scan के साथ, या 2 बेहतर | shaded strings अलग रखने से loss घटता है |
| East-west split छत | 2 MPPT | दोनों sides अलग-अलग track होंगी |
| South + east, अलग tilt | 2 MPPT | tilt अलग तो Vmp भी अलग |
| तीन या ज़्यादा roof faces | 3 MPPT या ज़्यादा, तीन-phase model | हर face को अपना tracker |
| छोटी 1 से 2 kW installation, single face | 1 MPPT | दूसरा MPPT का cost justify नहीं होता |

Qbits range में QB 3.0KTLS और QB 5KTLS जैसे single-phase models सादी single-orientation छतों के लिए हैं, जबकि QB 6KTLD और three-phase QB 10KTLC multiple strings वाली layouts के लिए। किस model में कितने MPPT channels हैं, यह [download datasheets](/download-datasheets/) से confirm कर लीजिए, क्योंकि यह model-to-model बदलता है। Dual vs single का detailed cost-benefit [dual MPPT vs single MPPT](/blog/dual-mppt-vs-single-mppt/) में है।

## Worked Example: Sahi MPPT Use Se Kitni Energy Bachti Hai

यह एक illustrative example है, real installation का data नहीं। असली numbers location, shading pattern और panel model के हिसाब से बदलेंगे।

**Setup।** 5 kW rooftop, Pune, 10 panels × 545 W, 5 east face पर और 5 west face पर, दोनों लगभग 20 degree tilt। Average generation 4.2 units per kW per day मान लेते हैं।

**Case A: दोनों groups एक ही MPPT पर।**

सुबह east वाले panels तेज़ output दे रहे हैं, west वाले कम धूप में हैं। Tracker बीच का compromise voltage चुनता है और दोनों groups अपने peak से हटकर चलते हैं।

Field में east-west mismatch पर आमतौर पर 5 से 12 percent daily energy loss देखने को मिलता है, exact figure roof geometry, tilt difference और shading पर depend करता है। यहाँ बीच का आँकड़ा, 8 percent, लेते हैं।

- Ideal annual generation: 5 kW × 4.2 units × 365 = लगभग 7,665 units
- 8 percent mismatch loss: लगभग 613 units कम
- Actual: लगभग 7,052 units

**Case B: east और west अलग-अलग MPPT पर।** हर group अपने असली maximum power point पर चलता है, mismatch loss लगभग खत्म। Actual: लगभग 7,600 units।

**फ़र्क़।** करीब 550 units प्रति साल। ₹8 प्रति unit पर यह लगभग ₹4,400 सालाना है, और 25 साल में degradation के बाद भी ₹90,000 से ऊपर बैठता है। Dual MPPT का extra cost आमतौर पर ₹3,000 से ₹8,000 होता है, यानी payback दो साल के अंदर। यही वह calculation है जो quotation पढ़ते समय ज़्यादातर लोग नहीं करते। पूरी design सोच [east-west roof solar design](/blog/east-west-roof-solar-design/) में है।

## Shading Aur Multiple Peaks Ka Chakkar

अब तक हमने मान लिया कि power curve पर सिर्फ एक चोटी है। Partial shading में यह बात टूट जाती है।

मान लीजिए एक string के 8 panels में से 2 पर पानी की टंकी की छाया पड़ रही है। Panels के bypass diodes shaded हिस्से को बाहर निकाल देते हैं ताकि पूरी string रुक न जाए। Side-effect यह है कि power curve पर दो या तीन अलग चोटियाँ बन जाती हैं।

यहीं Perturb and Observe की कमज़ोरी सामने आती है। वह सिर्फ आसपास देखता है। किसी छोटी चोटी पर चढ़ गया तो चारों तरफ़ नीचे दिखेगा और वहीं बैठ जाएगा, यह मानकर कि यही peak है।

इसका इलाज है **global MPPT scan**। Inverter हर कुछ मिनट में पूरी voltage window तेज़ी से sweep करता है, सारी चोटियाँ नापता है, और सबसे बड़ी पर बैठ जाता है। Sweep के दौरान कुछ seconds की dip होती है, बदले में जो मिलता है वह कहीं ज़्यादा है। Shaded roofs पर global scan के बिना 5 से 15 percent तक annual loss हो सकता है, range इसलिए चौड़ी है क्योंकि नुकसान shading के pattern, timing और string layout पर निर्भर करता है।

Shading से निपटने के तीन तरीके, priority order में।

1. **Shading हटाइए।** पेड़ की डाल, पुराना antenna, टूटी tank cover, हट सकता है तो सबसे सस्ता उपाय यही है।
2. **String layout बदलिए।** छाया वाले panels एक ही string में रखिए और अलग MPPT पर डालिए, ताकि साफ़ panels उनकी वजह से न पिटें।
3. **Global scan वाला inverter लीजिए।** जब shading हटाई नहीं जा सकती, यह feature datasheet पर check कीजिए।

> **ज़्यादातर लोग यहीं गलती करते हैं।** MPPT count बढ़ाना shading का इलाज नहीं है, वह सिर्फ नुकसान को अलग-थलग करता है। छाया वाला panel छाया में ही रहेगा। पहले shading हटाने की कोशिश कीजिए, फिर design से manage कीजिए।

## MPPT Ke Baare Mein Teen Aam Galatfahmiyan

**"ज़्यादा MPPT मतलब ज़्यादा बिजली।"** ग़लत। single orientation और बिना shading वाली छत पर चार MPPT वाला inverter भी एक MPPT वाले जितनी ही units देगा। MPPT count तभी मायने रखता है जब panels की conditions अलग हों।

**"MPPT panel की efficiency बढ़ा देता है।"** नहीं। Panel efficiency cell technology से तय होती है। MPPT सिर्फ यह पक्का करता है कि panel जो बना सकता है वह बर्बाद न हो।

**"98 percent efficiency लिखी है तो tracking भी 98 percent है।"** ये दो अलग numbers हैं, एक tracking accuracy, दूसरा DC-to-AC conversion।

एक और बात, [ALMM](/glossary/almm-list/) listing और MPPT quality का सीधा रिश्ता नहीं है। ALMM subsidy eligibility की शर्त है, tracking performance की guarantee नहीं।

## Battery Aur Hybrid Systems Mein MPPT

Hybrid inverter में power तीन जगह जा सकती है, घर का load, battery, और grid। Tracker फिर भी वही काम करता है। लेकिन जब battery भर जाती है और export limit लग जाती है, तो inverter जान-बूझकर panel को peak से हटा देता है ताकि extra power बने ही नहीं। इसे power curtailment कहते हैं और यह fault नहीं है।

Monitoring app में तेज़ धूप के बावजूद दोपहर की generation flat दिखे, तो MPPT को दोष देने से पहले battery का state of charge और export settings देखिए।

Battery-ready घरों के लिए QBH 5KS48P, QBH 6KS48P और तीन-phase QBH 8KS48P3 इसी logic पर काम करते हैं। पूरी range [hybrid inverter](/hybrid-inverter/) page पर है, और बाकी technical terms का सादा मतलब [glossary](/glossary/) में मिलेगा।

<div class="inline-cta">
<h3>Battery Backup Ke Saath Solar Chahiye?</h3>
<p>QBH hybrid series solar tracking, battery charging और backup switchover तीनों एक ही box में करती है, 12-year warranty और IP66 build के साथ।</p>
<a href="/hybrid-inverter/" class="cta-btn">Hybrid Range Dekhein <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Load और backup hours बताइए, sizing हम कर देंगे।</p>
</div>

## Quotation Padhte Waqt Kya Poochhein

MPPT की समझ का असली फ़ायदा तब है जब आप vendor से सही सवाल पूछ सकें।

1. मेरी छत की layout पर कितने MPPT चाहिए, और यह आपने कैसे तय किया।
2. Proposed string length पर सबसे ठंडी सुबह की Voc कितनी बनेगी, max DC input voltage से margin कितना है।
3. मेरी छत पर shading है, इस model में global MPPT scan है या नहीं।
4. Datasheet पर MPPT tracking efficiency और conversion efficiency दोनों अलग-अलग दिखाइए।

अगर vendor इनमें से आधे सवालों का सीधा जवाब नहीं दे पा रहा, तो design शायद template से copy की गई है, आपकी छत के लिए बनाई नहीं गई।

Elsewhere in the Heaven Group network, see [sahi inverter kaise chunein](https://www.heavengreenenergy.com/blog/how-to-choose-the-right-solar-inverter) and [inverter replacement ka kharcha](https://www.heavengreenenergy.com/blog/solar-inverter-replacement-cost).

## Aage Kya Karein

MPPT कोई जादुई feature नहीं है, यह एक सादा काम बहुत तेज़ी से करने वाला algorithm है। लेकिन उसी काम पर आपकी सालाना generation का 10 से 30 percent टिका होता है।

- अपनी छत की directions और tilt कागज़ पर लिखिए, फिर ऊपर वाली table से तय कीजिए कि कितने MPPT चाहिए।
- Quote में लिखे panel model और string length पर cold-morning Voc की calculation माँगिए, या [string sizing calculator](/string-sizing-calculator/) पर खुद check कीजिए।
- Layout confirm करने और अपनी छत के लिए सही Qbits model चुनने के लिए [Qbits engineer से बात कीजिए](/contact-us/), consultation free है।
