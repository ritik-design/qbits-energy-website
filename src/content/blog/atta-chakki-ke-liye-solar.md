---
title: "Atta Chakki ke Liye Solar: Kharcha, Sizing aur Fayda (2026)"
excerpt: "Atta chakki ke liye solar: motor HP se system sizing, starting current ka असली problem, cost, payback aur commercial net metering, poori Hindi guide।"
description: "Flour mill ya atta chakki ke liye solar system kaise size karein? Motor HP to kW conversion, starting surge, on-grid vs hybrid, cost aur payback, sab kuch 2026 ke realistic numbers ke saath।"
category: "Guide"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "12 min"
image: "/blog-images/atta-chakki-ke-liye-solar.svg"
author: "Nirav Dhanani"
keywords:
  - atta chakki ke liye solar
  - flour mill solar system india
  - chakki motor solar inverter sizing
  - commercial solar net metering india
  - solar for rural business hindi
faqs:
  - q: "Atta chakki ke liye kitne kW ka solar system chahiye?"
    a: "यह motor HP और daily running hours पर depend करता है। 5 HP chakki (लगभग 3.7 kW motor) जो रोज़ 6 घंटे चलती है, उसके लिए 5 kW से 6 kW का system ठीक बैठता है। 10 HP chakki (लगभग 7.5 kW) के लिए 10 kW से 12 kW, और 15 HP (लगभग 11.2 kW) के लिए 15 kW से 18 kW। Sizing सिर्फ motor rating से नहीं, actual running hours और bijli bill के units से तय करनी चाहिए।"
  - q: "Chakki motor ka starting current solar inverter par kya asar dalta hai?"
    a: "Direct on line (DOL) starter वाला induction motor start होते समय running current से कई गुना ज़्यादा current खींचता है, और यह surge कुछ seconds रहता है। On-grid system में यह surge grid से आ जाता है, इसलिए दिक्कत कम होती है। लेकिन hybrid या off-grid mode में inverter को यह surge खुद देना पड़ता है, इसलिए या तो soft starter या VFD लगाइए, या inverter में generous headroom रखिए। सही multiplier आपके motor और starter पर depend करता है, इसलिए site survey कराइए।"
  - q: "Kya atta chakki par PM Surya Ghar subsidy milti hai?"
    a: "आम तौर पर नहीं। PM Surya Ghar Muft Bijli Yojana एक residential rooftop scheme है और यह domestic electricity connection वाले घरों के लिए है। Atta chakki आमतौर पर commercial या LT industrial connection पर चलती है, इसलिए वह connection scheme के लिए eligible नहीं होता। किसी भी vendor का ₹78,000 subsidy का वादा commercial chakki के लिए मानने से पहले अपने DISCOM से लिखित में confirm कराइए।"
  - q: "Atta chakki ke liye on-grid theek hai ya hybrid?"
    a: "अगर आपके इलाके में बिजली ठीक-ठाक रहती है तो on-grid सबसे सस्ता और सबसे तेज़ payback देता है, क्योंकि battery का कोई खर्च नहीं होता। Hybrid तब लीजिए जब दिन में बार-बार cut लगते हों और आप अभी diesel genset पर चल रहे हों। Hybrid में battery की वजह से capital cost 40 से 80 percent तक बढ़ जाता है, इसलिए यह तभी justify होता है जब downtime का नुकसान बड़ा हो।"
  - q: "Chakki ke liye three phase supply zaroori hai kya?"
    a: "3 HP से ऊपर के ज़्यादातर chakki motors three phase होते हैं, इसलिए connection भी three phase चाहिए। Solar side पर भी तब three phase inverter लगेगा, जैसे QB 10KTLC या QB 15KTLC, ताकi phases पर load और generation balanced रहे। Single phase supply पर बड़ी chakki चलाना न तो practical है और न ही DISCOM आमतौर पर allow करता है।"
  - q: "Commercial connection par net metering milti hai?"
    a: "हाँ, ज़्यादातर states में commercial और LT industrial consumers के लिए net metering या net billing available है, लेकिन sanctioned load के अनुपात में capacity limit और settlement rules अलग होते हैं। कई states में commercial category में surplus export का credit घरेलू category से कम rate पर मिलता है। इसलिए chakki के लिए system को export के भरोसे नहीं, self-consumption के हिसाब से size करना बेहतर है।"
  - q: "Solar lagane ke baad chakki ka bijli bill kitna kam hoga?"
    a: "अगर system सही size किया गया है और chakki दिन में चलती है, तो 60 से 85 percent तक energy charges कम हो सकते हैं। Fixed demand charges solar से कम नहीं होते, वे sanctioned load पर लगते रहते हैं। Diesel genset replace करने पर बचत और बड़ी दिखती है, क्योंकि genset की per unit cost grid tariff से कई गुना ज़्यादा बैठती है।"
  - q: "Atta chakki solar system ka payback kitne saal me hota hai?"
    a: "Commercial tariff ₹8 से ₹10 प्रति unit वाले इलाकों में, अच्छी self-consumption के साथ, 3.5 से 5 साल का payback सामान्य है। अगर आप diesel genset हटाते हैं तो यह 2.5 से 3.5 साल तक आ सकता है। Accelerated depreciation का फायदा लेने वाली registered firms का effective payback और छोटा हो जाता है। Panels की life 25 साल की होती है, इसलिए payback के बाद के साल लगभग pure बचत हैं।"
featured: false
---

गाँव और कस्बे की atta chakki solar के लिए शायद सबसे अच्छे candidates में से एक है, और बात सबसे कम इसी पर होती है। Chakki का पूरा load दिन में होता है, ठीक उन्हीं घंटों में जब panels सबसे ज़्यादा बना रहे होते हैं। बनी हुई बिजली लगभग पूरी वहीं खप जाती है, export बहुत कम होता है, और [net metering](https://www.heavengreenenergy.com/blog/net-metering-in-india) के rate की झंझट भी घट जाती है। लेकिन एक technical बात है जिस पर ज़्यादातर local vendor ध्यान नहीं देते और वही systems को fail कराती है, chakki motor का starting current। यह guide उसी पर सबसे ज़्यादा समय देती है, साथ में sizing, कीमत, payback, और यह साफ़ बात कि commercial connection पर कौन सी subsidy मिलती है और कौन सी नहीं।

> **TL;DR**
> - Chakki का daytime load generation curve से match करता है, इसलिए self-consumption 80 percent से ऊपर जा सकती है।
> - 1 HP लगभग 0.746 kW, तो 10 HP motor के लिए आमतौर पर 10 से 12 kW का system बैठता है।
> - सबसे बड़ी गलती starting current ignore करना है; DOL start पर surge कई गुना होता है, इसलिए soft starter, VFD या inverter headroom ज़रूरी है।
> - [PM Surya Ghar](/glossary/pm-surya-ghar/) residential scheme है; commercial chakki connection आमतौर पर eligible नहीं, इसलिए ₹78,000 का वादा मत मानिए।
> - Commercial tariff ₹8 से ₹10 प्रति unit पर payback 3.5 से 5 साल, diesel genset replace करने पर 2.5 से 3.5 साल।
> - Grid ठीक हो तो on-grid लीजिए; cuts या genset चल रहा हो तभी hybrid justify होता है।

**छोटा जवाब।** Atta chakki ke liye solar में motor HP से शुरू कीजिए। HP को 0.746 से गुणा करके kW निकालिए, फिर daily running hours जोड़कर actual units। ज़्यादातर 10 HP chakki के लिए 10 से 12 kW on-grid three phase system बैठता है, कीमत लगभग ₹5.5 लाख से ₹7.5 लाख, payback 3.5 से 5 साल।

एक बात पहले साफ़ कर लें। Chakki के लिए design करना घर के rooftop system जैसा नहीं है। घर में load छोटा और बिखरा होता है, यहाँ एक बड़ा motor है जो दिन में कई बार start और stop होता है। Focus उसी motor के behaviour पर होना चाहिए, सिर्फ़ monthly units पर नहीं।

## Atta Chakki Solar ke Liye Achha Candidate Kyun Hai

Solar की सबसे बड़ी कमज़ोरी timing है। बनती दिन में है, खपत ज़्यादातर घरों में शाम को होती है, इसीलिए battery या net metering की ज़रूरत पड़ती है।

Chakki में यह problem है ही नहीं। Mill सुबह 8 या 9 बजे खुलती है और शाम तक चलती है, जबकि peak generation 10 से 4 के बीच होता है। दोनों curves लगभग एक ही shape के हैं।

इसका practical फायदा तीन तरह से मिलता है। पहला, जो unit आप खुद खपाते हैं उसकी value आपके पूरे commercial tariff के बराबर होती है, जबकि export की value कम होती है क्योंकि कई states commercial category में export कम rate पर settle करते हैं। दूसरा, कम export का मतलब है कि आपको [net metering के settlement rules](/blog/net-metering-india-complete-guide/) पर कम निर्भर रहना पड़ता है। तीसरा, chakki का load predictable होता है, रोज़ लगभग उतने ही घंटे और उतना ही load, जो design करने वाले के लिए सबसे आसान case है।

> **जो ज़्यादातर mill मालिक गलत समझते हैं।** लोग सोचते हैं फ़ायदा "बिजली free हो जाएगी" है। असली फ़ायदा यह है कि per unit cost अगले 25 साल के लिए लगभग lock हो जाती है, जबकि commercial tariff हर साल बढ़ता है।

## Motor Load ka Asli Problem: Starting Current

यह guide का सबसे ज़रूरी section है। बाकी सब ठीक कर लीजिए और यह छोड़ दीजिए तो system चलेगा नहीं।

Chakki में आमतौर पर three phase squirrel cage induction motor लगा होता है, 5 HP से 15 HP के बीच। जब यह motor **direct on line (DOL)** starter से start होता है, तो पहले कुछ seconds में यह अपने running current से कई गुना ज़्यादा current खींचता है। यह fault नहीं, induction motor का normal behaviour है। Rotor अभी घूमा नहीं है, इसलिए motor शुरुआत में लगभग short circuit जैसा दिखता है।

Grid इसे आसानी से झेल लेता है क्योंकि पीछे बड़ा transformer है। Solar inverter नहीं झेलता, उसकी output current electronics से limited होती है। यहीं on-grid और hybrid का फ़र्क़ बड़ा हो जाता है।

**On-grid system में** inverter grid के साथ parallel चलता है। Motor start होने पर extra current grid से आ जाता है, इसलिए starting surge inverter sizing का बड़ा issue नहीं बनता। असली issue यह है कि बार-बार आने वाले voltage dips से inverter trip न हो, जिसके लिए cable sizing और connection quality सही होनी चाहिए।

**Hybrid या backup mode में** कहानी उलट जाती है। Grid गया हुआ है, अब वह surge inverter और battery को देना है। Headroom कम हुआ तो inverter overload पर बंद हो जाएगा और mill रुक जाएगी।

Solution तीन में से कोई एक या इनका मिला जुला रूप है।

1. **Soft starter।** Motor को धीरे-धीरे voltage देता है, जिससे starting surge काफ़ी कम हो जाता है। Chakki के लिए सबसे सस्ता और common उपाय।
2. **VFD (variable frequency drive)।** Surge और कम करता है और speed control भी देता है। Cost ज़्यादा है, पर grinding पर control चाहिए तो फ़ायदेमंद।
3. **Inverter headroom।** Backup पर चलाना है तो inverter को motor की running rating से काफ़ी ऊपर size कीजिए।

अब एक ईमानदार बात। इंटरनेट पर "6 गुना current" या "3 गुना inverter लो" जैसे universal numbers मिलेंगे, इन पर design मत कीजिए। Actual starting current motor के design, उसकी उम्र, starter type, load inertia और cable length पर depend करता है, और एक ही 10 HP rating के दो motors अलग surge दे सकते हैं। सही तरीका clamp meter से actual starting current नापना है। इसीलिए हम motor load के लिए हमेशा site survey पर ज़ोर देते हैं।

<div class="inline-cta">
<h3>Apni Chakki ka Motor Load Humein Batayein</h3>
<p>Motor HP, starter type aur daily running hours bhejiye. Hamari team aapke liye sahi inverter aur system size nikaal kar realistic quote deti hai, bina koi tuka lagaye.</p>
<a href="/contact-us/" class="cta-btn">Free Quote Lein <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Site survey ke baad hi final sizing, koi guesswork nahi।</p>
</div>

## HP se kW: Sizing ki Buniyaad

Conversion सीधा है। **1 HP लगभग 0.746 kW** होता है। लेकिन यह motor की shaft output है, input नहीं। Motor खुद losses लेता है, इसलिए grid से खींची गई power इससे कुछ ज़्यादा होती है। दूसरी तरफ़ chakki कभी full load पर लगातार नहीं चलती, बीच में हल्का load और stop भी होता है, इसलिए actual average draw rated input से कम रहता है।

नीचे की table इन सब को मिलाकर practical starting point देती है। Final number हमेशा पिछले 12 महीने के bijli bill के units से cross check होना चाहिए।

| Motor rating | Approx shaft kW | Typical daily run | Suggested PV size | Suggested Qbits inverter |
| --- | --- | --- | --- | --- |
| 3 HP | ~2.2 kW | 4 to 6 hrs | 3 to 4 kW | QB 4.6KTLS (single phase) |
| 5 HP | ~3.7 kW | 5 to 7 hrs | 5 to 6 kW | QB 6KTLC |
| 7.5 HP | ~5.6 kW | 6 to 8 hrs | 8 to 10 kW | QB 8KTLC or QB 10KTLC |
| 10 HP | ~7.5 kW | 6 to 8 hrs | 10 to 12 kW | QB 10KTLC or QB 12KTLC |
| 15 HP | ~11.2 kW | 7 to 9 hrs | 15 to 18 kW | QB 15KTLC or QB 17KTLC |
| 2 x 10 HP | ~15 kW | 7 to 9 hrs | 20 to 25 kW | QB 20KTLC or QB 25KTLC |

ध्यान दीजिए कि suggested PV size लगभग हमेशा motor की shaft rating से बड़ा है। वजह यह है कि panels rated capacity पर पूरे दिन नहीं चलते, सुबह शाम output कम रहता है और बादल में और कम। अगर mill के साथ घर भी उसी premises पर है तो दोनों loads अलग गिनिए, क्योंकि घर का connection domestic और chakki का commercial होगा।

## Three Phase Supply ki Baatein

3 HP से बड़े लगभग सारे chakki motors three phase होते हैं, इसलिए DISCOM connection और solar inverter दोनों three phase होने चाहिए। तीन बातें जिन पर mill owners अक्सर फँसते हैं।

**Phase balance।** Single phase inverter को three phase supply के एक phase पर लगा देंगे तो generation एक ही phase पर आएगी जबकि motor तीनों से खींचेगा। सही तरीका three phase inverter है, जैसे QB 10KTLC या QB 15KTLC।

**Sanctioned load।** ज़्यादातर states में solar capacity sanctioned load या contract demand से जुड़ी होती है। Sanctioned load 10 kW है और 18 kW लगाना है, तो पहले load enhancement की application दीजिए, वरना net meter approval अटकेगा।

**Phase failure protection।** Rural feeders पर single phasing आम है और यही motor जलाने की सबसे बड़ी वजह है। Solar इससे नहीं बचाता, अलग से phase failure relay लगवाइए। गाँव के feeder पर voltage दिन भर ऊपर नीचे होता है, इसीलिए हमारे inverters India के grid के हिसाब से tuned firmware पर चलते हैं।

<div class="inline-cta">
<h3>Chakki, Dal Mill ya Cold Storage, Sabke Liye Ek Hi Team</h3>
<p>Rural commercial load ka design alag hota hai. Qbits C&I team motor loads, three phase balance aur DISCOM paperwork ke saath end to end plan banati hai.</p>
<a href="/c-i-solution/" class="cta-btn">C&amp;I Solutions Dekhein <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Commercial connection, commercial tariff, commercial design।</p>
</div>

## On-Grid vs Hybrid: Mill ke Liye Kya Sahi Hai

सीधी बात, ज़्यादातर chakki के लिए **on-grid सही जवाब है।** Battery महँगी है और chakki का load भारी। 10 HP motor को battery पर चलाना मतलब बड़ी battery bank, जिसकी कीमत पूरे solar system से भी ज़्यादा जा सकती है।

Hybrid तब सोचिए जब दिन में रोज़ लंबे cuts लगते हों, या आप diesel genset चला रहे हों जिसकी per unit cost grid से कई गुना ज़्यादा बैठती है। ऐसे case में QBH 10KS48P3 जैसा three phase hybrid inverter देखिए और soft starter ज़रूर लगवाइए। Battery उतनी ही रखिए जितने में एक दो घंटे का grinding निकल जाए।

तीसरा रास्ता अक्सर सबसे practical है, on-grid solar लगाइए और मौजूदा genset को backup पर रहने दीजिए। [On-grid inverter range](/on-grid-inverter/) में QB 6KTLC से QB 30KTLC तक हर chakki size के लिए option है।

## Kharcha aur Payback: Mill Size ke Hisaab se

नीचे 2026 के indicative numbers हैं, पूरे installed system की cost यानी panels, inverter, structure, cabling, protection और labour मिलाकर। Payback निकालते समय ₹8 से ₹10 प्रति unit का commercial tariff और अच्छी self-consumption मानी है।

| Mill size | System size | Installed cost (approx) | Yearly units (approx) | Yearly bachat | Simple payback |
| --- | --- | --- | --- | --- | --- |
| 3 HP small chakki | 4 kW | ₹2.2 L to ₹2.8 L | 5,800 to 6,200 | ₹50,000 to ₹60,000 | 4 to 5 yrs |
| 5 HP chakki | 6 kW | ₹3.2 L to ₹4.0 L | 8,700 to 9,400 | ₹75,000 to ₹90,000 | 4 to 5 yrs |
| 10 HP chakki | 12 kW | ₹5.5 L to ₹7.5 L | 17,000 to 19,000 | ₹1.5 L to ₹1.8 L | 3.5 to 4.5 yrs |
| 15 HP chakki | 18 kW | ₹8.0 L to ₹10.5 L | 26,000 to 28,000 | ₹2.2 L to ₹2.7 L | 3.5 to 4.5 yrs |
| Multi motor mill | 25 kW | ₹11 L to ₹14.5 L | 36,000 to 39,000 | ₹3.0 L to ₹3.7 L | 3.5 to 4.5 yrs |

दो चीज़ें payback छोटा करती हैं, diesel genset की units replace करना और accelerated depreciation, जिस पर detail [capex vs opex वाली guide](/blog/solar-capex-vs-opex-business-india/) में है। एक चीज़ payback लंबा करती है, कम self-consumption। Chakki हफ़्ते में सिर्फ़ तीन दिन चलती है तो बाकी दिनों की generation export होगी और rate कम मिलेगा, ऐसे case में system छोटा रखिए।

### Misaal: 10 HP chakki, semi-rural kasba (illustrative example)

यह illustrative example है, actual customer case नहीं। Numbers realistic रखे हैं ताकि आप अपनी mill के हिसाब से बदल सकें।

एक 10 HP atta chakki, three phase LT commercial connection, sanctioned load 15 kW। Mill हफ़्ते में 6 दिन, रोज़ लगभग 7 घंटे चलती है। Average monthly consumption लगभग 1,450 units, energy charge ₹9 प्रति unit, monthly bill लगभग ₹15,000। गर्मियों में दिन के cuts पर 15 kVA diesel genset चलता है।

Design इस तरह बैठता है।

- 12 kW PV array, लगभग 26 panels, tin shed roof पर elevated structure के साथ।
- एक QB 12KTLC three phase on-grid inverter, और motor पर soft starter जो पहले नहीं था।
- Genset backup पर, कोई battery नहीं। Installed cost लगभग ₹6.4 लाख, load enhancement की ज़रूरत नहीं।

Expected नतीजा। सालाना लगभग 18,000 units generation, जिसमें से 80 से 85 percent सीधे mill में खप जाती हैं, और energy charges में लगभग ₹1.55 लाख सालाना की बचत। Fixed charges पहले जैसे रहेंगे। एक ईमानदार caveat, grid जाने पर plain on-grid inverter बंद हो जाता है, इसलिए genset पूरी तरह नहीं हटता। Simple payback लगभग 4 साल, inverter पर 12 साल की full replacement warranty।

## Subsidy aur Scheme: Saaf Baat

यहाँ बहुत गलतफ़हमी है, इसलिए सीधा लिखते हैं।

**PM Surya Ghar Muft Bijli Yojana commercial chakki के लिए नहीं है।** यह residential rooftop scheme है, जो domestic connection वाले घरों को central financial assistance देती है। आपका chakki connection commercial या LT industrial category में होगा, जो इस scheme के दायरे में नहीं आता। कोई vendor ₹78,000 subsidy का सपना दिखा रहा है तो या तो उसने scheme समझी नहीं, या वह घर का connection इस्तेमाल करने की सलाह दे रहा है, जो DISCOM inspection में दिक्कत बनेगी। Exact eligibility [PM Surya Ghar guide](/blog/pm-surya-ghar-yojana-complete-guide/) में देख लीजिए।

तो फिर क्या रास्ते हैं।

**Accelerated depreciation।** Registered business के लिए यह सबसे बड़ा और भरोसेमंद फ़ायदा है। अपने CA से exact treatment confirm कराइए।

**PM-KUSUM।** यह agricultural pump और farmer focused scheme है। सीधी atta chakki इसमें आमतौर पर नहीं आती, पर आपके पास agricultural connection और pump भी हो तो देखने लायक है, शर्तें [KUSUM Yojana की Hindi guide](/blog/kusum-yojana-hindi-guide/) में हैं।

**State MSME या industrial subsidy।** कुछ states अपनी industrial policy में rooftop solar पर capital subsidy या interest subvention देते हैं। ये state और साल के हिसाब से बदलती रहती हैं।

**Loan।** Capital एक साथ नहीं लगाना तो MSME solar loan एक रास्ता है, जहाँ EMI अक्सर बचत से कम रहती है, options [इस guide](/blog/solar-loan-for-business-msme/) में हैं।

## Commercial Tariff par Net Metering

Net metering commercial connections पर भी मिलती है, पर rules domestic से अलग हैं। Capacity limit आमतौर पर sanctioned load या contract demand के अनुपात में तय होती है, और settlement monthly या annual, state पर depend करता है। सबसे अहम बात, कई states commercial category में surplus export कम rate पर settle करते हैं या net billing model पर चले गए हैं।

Chakki के लिए इसका सीधा मतलब है, **export पर मत खेलिए, self-consumption पर खेलिए।** System उतना ही बड़ा रखिए जितना दिन में खप जाए।

Net metering और gross metering का फ़र्क़ समझने के लिए [यह comparison](/blog/gross-metering-vs-net-metering/) पढ़िए, क्योंकि कुछ states commercial consumers को gross metering की तरफ़ धकेलते हैं और उसमें पूरा गणित बदल जाता है।

Application के समय बिजली बिल, sanction letter, firm के registration papers, roof ownership या NOC, और inverter का ALMM व test certificate तैयार रखिए। Approval timeline states में अलग है, detail [net meter approval वाली post](/blog/net-meter-approval-timeline/) में है।

<div class="inline-cta">
<h3>Motor Load ke Liye Bane Inverters</h3>
<p>QB 6KTLC se QB 30KTLC tak three phase on-grid, aur QBH 10KS48P3 jaise hybrid options. Sab India ke grid ke hisaab se tuned, IP66, 12 saal ki full replacement warranty ke saath.</p>
<a href="/our-products/" class="cta-btn">Product Range Dekhein <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Har model ki datasheet aur rating khuli hui hai।</p>
</div>

## Kya Kya Galat Ho Sakta Hai

Mill installations में जो problems बार-बार दिखती हैं, वे design की नहीं, shortcut की होती हैं।

**Undersized cables।** Chakki अक्सर shed से दूर होती है और motor current ज़्यादा। पतले cable पर voltage drop होता है, motor गरम होता है और inverter trip करता है।

**Aata dust।** महीन आटा inverter के heatsink पर भी जमता है और panels पर भी। Inverter को हवादार जगह पर लगाइए और panels की cleaning frequency ज़्यादा रखिए।

**Shed की हालत।** पुराने tin shed पर panels का weight और wind load आता है। Structure डालने से पहले purlins और trusses देखिए, और earthing तीनों जगह ठीक कराइए।

**बिना survey के quote।** कोई vendor phone पर "10 HP है तो 10 kW लगा दो" कह दे तो रुक जाइए।

## Aage Kya Karein

- पिछले 12 महीने के बिजली बिल से monthly units, tariff category और sanctioned load note कीजिए। Sizing यहीं से शुरू होती है, motor nameplate से नहीं।
- Starter का type देखिए, और soft starter नहीं है तो उसे quote में शामिल कराइए। यह इस guide की सबसे सस्ती सलाह है।
- Site survey के साथ proper quote लीजिए, जिसमें cable sizing, earthing, protection और DISCOM paperwork लिखा हो, [contact form](/contact-us/) भरकर।
