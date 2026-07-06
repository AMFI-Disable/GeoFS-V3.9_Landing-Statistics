// ==UserScript==
// @name                GeoFS-V3.9_Landing-Statistics
// @name:vi             GeoFS-V3.9_Thống-Kê-Hạ-Cánh
// @name:zh-CN          GeoFS-V3.9_登陆统计
// @name:zh-TW          GeoFS-V3.9_登陸統計
// @name:ja             GeoFS-V3.9_着陸統計
// @name:ko             GeoFS-V3.9_착륙-통계
// @name:fr             GeoFS-V3.9_Statistiques-D'atterrissage
// @name:de             GeoFS-V3.9_Landungsstatistik
// @name:es             GeoFS-V3.9_Estadísticas-De-Aterrizaje
// @name:pt-BR          GeoFS-V3.9_Estatísticas-De-Pouso
// @name:pt-PT          GeoFS-V3.9_Estatísticas-De-Aterragem
// @name:ru             GeoFS-V3.9_Статистика-Лендинга
// @name:ar             GeoFS-V3.9_إحصائيات-الهبوط
// @name:tr             GeoFS-V3.9_İniş-İstatistikleri
// @name:id             GeoFS-V3.9_Statistik-Pendaratan
// @name:th             GeoFS-V3.9_สถิติการลงจอด
// @name:pl             GeoFS-V3.9_Statystyki-Lądowania
// @name:nl             GeoFS-V3.9_Landingsstatistieken
// @name:it             GeoFS-V3.9_Statistiche-Di-Atterraggio
// @name:sv             GeoFS-V3.9_Landningsstatistik
// @name:da             GeoFS-V3.9_Landingsstatistik
// @name:fi             GeoFS-V3.9_Laskeutumistilastot
// @name:nb             GeoFS-V3.9_Landingsstatistikk
// @name:cs             GeoFS-V3.9_Statistiky-Přistání
// @name:hu             GeoFS-V3.9_Leszállási-Statisztika
// @name:ro             GeoFS-V3.9_Statistici-De-Aterizare
// @name:uk             GeoFS-V3.9_Статистика-Посадок
// @name:hi             GeoFS-V3.9_लैंडिंग-सांख्यिकी
// @name:bn             GeoFS-V3.9_অবতরণ-পরিসংখ্যান
// @name:fa             GeoFS-V3.9_آمار-فرود
// @name:he             GeoFS-V3.9_סטטיסטיקת-נחיתה
// @name:ms             GeoFS-V3.9_Statistik-Pendaratan
// @name:fil            GeoFS-V3.9_Mga-Istatistika-Ng-Landing
// @name:el             GeoFS-V3.9_Στατιστικά-Προσγείωσης
// @name:hr             GeoFS-V3.9_Statistika-Slijetanja
// @name:sk             GeoFS-V3.9_Štatistika-Pristátia
// @name:bg             GeoFS-V3.9_Статистика-За-Кацане
// @name:sr             GeoFS-V3.9_Статистика-Слетања
// @name:lt             GeoFS-V3.9_Nusileidimo-Statistika
// @name:lv             GeoFS-V3.9_Piezemēšanās-Statistika
// @name:et             GeoFS-V3.9_Maandumisstatistika
// @name:sl             GeoFS-V3.9_Statistika-Pristanka
// @name:ca             GeoFS-V3.9_Estadístiques-D'aterratge
// @name:af             GeoFS-V3.9_Landing-Statistiek
// @name:sw             GeoFS-V3.9_Takwimu-Za-Kutua
// @name:zu             GeoFS-V3.9_Izibalo-Zokwehla
// @name:mn             GeoFS-V3.9_Буух-Статистик
// @name:my             GeoFS-V3.9_ကမ်းတက်စာရင်းအင်းများ
// @name:km             GeoFS-V3.9_ស្ថិតិចុះចត
// @name:lo             GeoFS-V3.9_ສະຖິຕິການລົງຈອດ
// @name:ur             GeoFS-V3.9_لینڈنگ-کے-اعدادوشمار

// @description         Precision flight analytics for GeoFS with G-force monitoring, vertical speed analysis, and passenger feedback. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:vi      Phân tích chuyến bay chính xác cho GeoFS với tính năng giám sát lực G, phân tích tốc độ thẳng đứng và phản hồi của hành khách. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:zh-CN   通过重力监测、垂直速度分析和乘客反馈对 GeoFS 进行精确飞行分析。 © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:zh-TW   透過重力監測、垂直速度分析和乘客回饋對 GeoFS 進行精確飛行分析。 © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ja      G フォース モニタリング、垂直速度分析、乗客のフィードバックを備えた GeoFS の精密な飛行分析。 © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ko      G-force 모니터링, 수직 속도 분석 및 승객 피드백을 갖춘 GeoFS용 정밀 비행 분석입니다. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fr      Analyses de vol de précision pour GeoFS avec surveillance de la force G, analyse de la vitesse verticale et commentaires des passagers. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:de      Präzise Fluganalysen für GeoFS mit G-Force-Überwachung, vertikaler Geschwindigkeitsanalyse und Passagier-Feedback. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:es      Análisis de vuelo de precisión para GeoFS con monitoreo de fuerza G, análisis de velocidad vertical y comentarios de los pasajeros. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:pt-BR   Análise precisa de voo para GeoFS com monitoramento de força G, análise de velocidade vertical e feedback dos passageiros. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:pt-PT   Análise precisa de voo para GeoFS com monitorização de força G, análise de velocidade vertical e feedback dos passageiros. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ru      Точная аналитика полета для GeoFS с мониторингом перегрузки, анализом вертикальной скорости и отзывами пассажиров. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ar      تحليلات دقيقة للطيران لنظام GeoFS مع مراقبة قوة الجاذبية وتحليل السرعة العمودية وتعليقات الركاب. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:tr      G kuvveti izleme, dikey hız analizi ve yolcu geri bildirimi ile GeoFS için hassas uçuş analitiği. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:id      Analisis penerbangan presisi untuk GeoFS dengan pemantauan G-force, analisis kecepatan vertikal, dan umpan balik penumpang. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:th      การวิเคราะห์การบินที่แม่นยำสำหรับ GeoFS พร้อมการตรวจสอบ G-force การวิเคราะห์ความเร็วในแนวดิ่ง และความคิดเห็นของผู้โดยสาร © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:pl      Precyzyjna analiza lotu dla GeoFS z monitorowaniem siły G, analizą prędkości pionowej i informacjami zwrotnymi od pasażerów. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:nl      Precisievluchtanalyse voor GeoFS met G-krachtmonitoring, verticale snelheidsanalyse en passagiersfeedback. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:it      Analisi di volo di precisione per GeoFS con monitoraggio della forza G, analisi della velocità verticale e feedback dei passeggeri. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sv      Precisionsflyganalys för GeoFS med G-kraftövervakning, vertikal hastighetsanalys och passagerarfeedback. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:da      Præcisionsflyvningsanalyse til GeoFS med G-kraftovervågning, vertikal hastighedsanalyse og passagerfeedback. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fi      Tarkkaa lentoanalytiikkaa GeoFS:lle G-force-valvonnalla, pystynopeusanalyysillä ja matkustajien palautteella. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:nb      Presisjonsflyvningsanalyse for GeoFS med G-kraftovervåking, vertikal hastighetsanalyse og passasjertilbakemelding. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:cs      Přesná letová analytika pro GeoFS s monitorováním G-force, analýzou vertikální rychlosti a zpětnou vazbou cestujících. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:hu      Precíziós repüléselemzés a GeoFS-hez G-force felügyelettel, függőleges sebesség elemzéssel és utasok visszajelzésével. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ro      Analiză de zbor de precizie pentru GeoFS cu monitorizare G-force, analiză verticală a vitezei și feedback al pasagerilor. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:uk      Точна аналітика польоту для GeoFS із моніторингом G-force, аналізом вертикальної швидкості та відгуками пасажирів. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:hi      जी-फोर्स मॉनिटरिंग, ऊर्ध्वाधर गति विश्लेषण और यात्री प्रतिक्रिया के साथ जियोएफएस के लिए सटीक उड़ान विश्लेषण। © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:bn      জি-ফোর্স মনিটরিং, উল্লম্ব গতি বিশ্লেষণ, এবং যাত্রীদের প্রতিক্রিয়া সহ GeoFS-এর জন্য যথার্থ ফ্লাইট বিশ্লেষণ। © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fa      تجزیه و تحلیل دقیق پرواز برای GeoFS با نظارت نیروی G، تجزیه و تحلیل سرعت عمودی، و بازخورد مسافران. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:he      ניתוח טיסה מדויק עבור GeoFS עם ניטור כוח G, ניתוח מהירות אנכית ומשוב נוסעים. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ms      Analitis penerbangan ketepatan untuk GeoFS dengan pemantauan G-force, analisis kelajuan menegak dan maklum balas penumpang. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fil     Precision flight analytics para sa GeoFS na may G-force monitoring, vertical speed analysis, at feedback ng pasahero. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:el      Αναλυτικά στοιχεία πτήσης ακριβείας για GeoFS με παρακολούθηση G-force, ανάλυση κάθετης ταχύτητας και ανατροφοδότηση επιβατών. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:hr      Precizna analitika leta za GeoFS s praćenjem G-sile, analizom vertikalne brzine i povratnim informacijama putnika. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sk      Presná letová analýza pre GeoFS s monitorovaním sily G, analýzou vertikálnej rýchlosti a spätnou väzbou cestujúcich. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:bg      Прецизен анализ на полета за GeoFS с мониторинг на G-силата, анализ на вертикалната скорост и обратна връзка от пътниците. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sr      Прецизна аналитика лета за ГеоФС са праћењем Г-форце, анализом вертикалне брзине и повратним информацијама путника. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:lt      Tiksli „GeoFS“ skrydžių analizė su „G-force“ stebėjimu, vertikalaus greičio analize ir keleivių atsiliepimais. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:lv      Precīza lidojumu analīze GeoFS ar G spēka uzraudzību, vertikālā ātruma analīzi un pasažieru atsauksmēm. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:et      GeoFS-i täpne lennuanalüüs koos G-jõu jälgimise, vertikaalkiiruse analüüsi ja reisijate tagasisidega. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sl      Natančna analitika letenja za GeoFS z nadzorom G-sile, analizo navpične hitrosti in povratnimi informacijami potnikov. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ca      Anàlisis de vol de precisió per a GeoFS amb monitorització de la força G, anàlisi de velocitat vertical i comentaris dels passatgers. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:af      Presisievluganalise vir GeoFS met G-kragmonitering, vertikale spoedanalise en passasierterugvoer. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sw      Uchanganuzi wa usahihi wa safari za ndege za GeoFS kwa ufuatiliaji wa nguvu ya G, uchanganuzi wa kasi wima na maoni ya abiria. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:zu      Izibalo zendiza eziqondile ze-GeoFS ezinokuqapha kwe-G-force, ukuhlaziya isivinini esiqondile, kanye nempendulo yomgibeli. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:mn      G-хүчний хяналт, босоо хурдны шинжилгээ, зорчигчдын санал хүсэлт бүхий GeoFS-ийн нислэгийн нарийн шинжилгээ. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:my      G-force စောင့်ကြည့်ခြင်း၊ ဒေါင်လိုက်အမြန်နှုန်းခွဲခြမ်းစိတ်ဖြာခြင်းနှင့် ခရီးသည်တုံ့ပြန်ချက်တို့ပါရှိသော GeoFS အတွက် တိကျသောပျံသန်းမှုပိုင်းခြားစိတ်ဖြာချက်။ © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:km      ការវិភាគជើងហោះហើរភាពជាក់លាក់សម្រាប់ GeoFS ជាមួយនឹងការត្រួតពិនិត្យកម្លាំង G ការវិភាគល្បឿនបញ្ឈរ និងមតិរបស់អ្នកដំណើរ។ © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:lo      ການວິເຄາະການບິນທີ່ຊັດເຈນສໍາລັບ GeoFS ດ້ວຍການຕິດຕາມຜົນບັງຄັບໃຊ້ G, ການວິເຄາະຄວາມໄວໃນແນວຕັ້ງ, ແລະຄໍາຄຶດຄໍາເຫັນຂອງຜູ້ໂດຍສານ. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ur      جی فورس مانیٹرنگ، عمودی رفتار کے تجزیہ، اور مسافروں کے تاثرات کے ساتھ جیو ایف ایس کے لیے درست پرواز کے تجزیات۔ © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.

// @require             https://update.greasyfork.org/scripts/581510/code.js
// @require             https://update.greasyfork.org/scripts/581511/code.js

// @homepageURL         https://sites.google.com/view/geofs-v39-ecosystem/home
// @connect             greasyfork.org
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          safari
// @compatible          brave
// @compatible          opera
// @copyright           2026, _init (https://greasyfork.org/users/1594049)

// @namespace           https://greasyfork.org/users/1594049
// @version             2.0.0
// @author              _init
// @icon                https://geofs-assets.evengao6688.workers.dev/icons/landing-statistics.png
// @match               https://www.geo-fs.com/geofs.php*
// @match               https://*.geo-fs.com/geofs.php*
// @grant               none
// @license             MIT
// ==/UserScript==

(function() {
    'use strict';

    window.MS_TO_KNOTS = window.MS_TO_KNOTS || 1.94384449;
    window.DEGREES_TO_RAD = window.DEGREES_TO_RAD || 0.017453292519943295769236907684886127134428718885417254560971914401710091146034494436822415696345094822123044925073790592483854692275281012398474218934047117319168245015010769561697553581238605305168789;
    window.RAD_TO_DEGREES = window.RAD_TO_DEGREES || 57.295779513082320876798154814105170332405472466564321549160243861202847148321552632440968995851110944186223381632864893281448264601248315036068267863411942122526388097467267926307988702893110767938261;
    
    // Utility function required for scoring math
    window.clamp = window.clamp || function(val, min, max) {
        return Math.max(min, Math.min(max, val));
    };

    window.closeTimer = true;
    window.closeSeconds = 15;
    window.closeTimeoutId = null;

    window.refreshRate = 20;
    window.counter = 0;
    window.isLoaded = false;

    // Mathematical State Buffers
    window.justLanded = false;
    window.vertSpeed = 0;
    window.lVS = 0;
    window.lRoll = 0;
    window.oldAGL = 0;
    window.newAGL = 0;
    window.calVertS = 0;
    window.groundSpeed = 0;
    window.ktias = 0;
    window.kTrue = 0;
    window.bounces = 0;
    window.statsOpen = false;
    window.isGrounded = true;
    window.isInTDZ = false;
    window.oldTime = Date.now();
    window.newTime = Date.now();

    // Audio Assets: CDN-hosted high-fidelity sound effects
    window.softLanding = new Audio('https://geofs-assets.evengao6688.workers.dev/audio/soft_landing.wav');
    window.hardLanding = new Audio('https://geofs-assets.evengao6688.workers.dev/audio/hard_landing.wav');
    window.crashLanding = new Audio('https://geofs-assets.evengao6688.workers.dev/audio/crash_landing.wav');

    /**
     * Sends telemetry event to track standalone usage.
     * 
     * @returns {Promise<void>} Resolves when the telemetry request finishes.
     */
    async function track() {
        if (true) {
            const SCRIPT_NAME = "Landing_Stats";
            let userId = localStorage.getItem("myScriptUserId");
            if (!userId) {
                userId = crypto.randomUUID();
                localStorage.setItem("myScriptUserId", userId);
            }
            try {
                await fetch("https://track.tylerbialowas-bard.workers.dev", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ script: SCRIPT_NAME, userId: userId }),
                });
            } catch (error) { console.error("Failed to track event:", error); }
        }
    }
    track();

    // Technical Module Initialization Entrypoint (called by SafeInit)
    window.initLandingStats = function() {
        if (window.isStatsLoaded) return;
        window.isStatsLoaded = true;

        console.log("[GeoFS-V3.9_Landing-Stats] >> INITIALIZING LANDING STATISTICS ENGINE...");

        // Inject Custom Styles
        if (!document.getElementById('statsStyles')) {
            const styleEl = document.createElement('style');
            styleEl.id = 'statsStyles';
            styleEl.textContent = `
                #statsCard {
                    width: 330px;
                    z-index: 100000;
                }
                .stats-main-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 15px;
                }
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 8px 12px;
                    margin-bottom: 15px;
                }
                .stat-item {
                    display: flex;
                    flex-direction: column;
                }
                .stat-label {
                    font-size: 9px;
                    color: rgba(100, 200, 255, 0.7);
                    text-transform: uppercase;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                }
                .stat-value {
                    font-size: 13px;
                    color: #fff;
                    font-weight: 600;
                    font-family: 'Roboto Mono', monospace;
                }
                .feedback-box {
                    padding: 10px 14px;
                    border-radius: 10px;
                    background: rgba(0, 0, 0, 0.25);
                    border-left: 4px solid #fff;
                    font-size: 11px;
                    line-height: 1.4;
                    color: #e2e8f0;
                }
                /* Fallback Card Styling for Standalone Mode */
                .addonpack-card {
                    position: fixed;
                    left: 20px;
                    bottom: 60px;
                    background: rgba(26, 26, 26, 0.95);
                    color: #fff;
                    border-radius: 18px;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    -webkit-backdrop-filter: blur(14px);
                    backdrop-filter: blur(14px);
                    box-shadow: 0 12px 50px rgba(0,0,0,0.6), inset 0 0 15px rgba(255,255,255,0.02);
                    font-family: 'Roboto', system-ui, sans-serif;
                    display: none;
                    flex-direction: column;
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.15), opacity 0.3s ease;
                    transform: translateX(-120%);
                    opacity: 0;
                    pointer-events: auto;
                }
                .addonpack-card.active {
                    display: flex;
                    transform: translateX(0);
                    opacity: 1;
                }
                .addonpack-card-header {
                    padding: 14px 18px;
                    background: rgba(255, 255, 255, 0.04);
                    border-radius: 18px 18px 0 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: move;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    -webkit-user-select: none;
                    user-select: none;
                }
                .addonpack-card-header span {
                    font-size: 0.75rem;
                    font-weight: 800;
                    letter-spacing: 1.5px;
                    color: #ff9f05;
                    text-transform: uppercase;
                }
                .addonpack-card-content {
                    padding: 20px;
                }
                .addonpack-score-circle {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    border: 3px solid #ff9f05;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 0 20px rgba(255, 159, 5, 0.3);
                    background: rgba(255, 159, 5, 0.05);
                    flex-shrink: 0;
                }
                .score-value {
                    font-size: 18px;
                    font-weight: 800;
                    color: #fff;
                    font-family: 'Roboto Mono', monospace;
                    line-height: 1.1;
                }
                .score-label {
                    font-size: 7px;
                    color: rgba(255, 255, 255, 0.8);
                    text-transform: uppercase;
                    font-weight: 700;
                }
                .addonpack-badge {
                    flex: 1;
                    margin-left: 15px;
                    padding: 12px;
                    border-radius: 12px;
                    text-align: center;
                    font-weight: 900;
                    font-size: 1rem;
                    letter-spacing: 1px;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
                    -webkit-user-select: none;
                    user-select: none;
                }
                .badge-butter { background: linear-gradient(135deg, #22c55e, #16a34a); color: #fff; box-shadow: 0 0 20px rgba(34, 197, 94, 0.4); }
                .badge-acceptable { background: linear-gradient(135deg, #eab308, #ca8a04); color: #000; box-shadow: 0 0 20px rgba(234, 179, 8, 0.4); }
                .badge-hard { background: linear-gradient(135deg, #ef4444, #dc2626); color: #fff; box-shadow: 0 0 20px rgba(239, 68, 68, 0.4); }
                .badge-crash { background: linear-gradient(135deg, #7f1d1d, #450a0a); color: #fff; box-shadow: 0 0 20px rgba(127, 29, 29, 0.6); }
            `;
            document.head.appendChild(styleEl);
        }

        // Instantiation of the Card component
        if (!document.getElementById('statsCard')) {
            window.statsCard = document.createElement('div');
            window.statsCard.id = 'statsCard';
            window.statsCard.className = 'addonpack-card';
            window.statsCard.innerHTML = `
                <div class="addonpack-card-header">
                    <span>Landing Statistics</span>
                    <div style="cursor:pointer; font-size: 14px; opacity: 0.6; line-height: 1;" onclick="window.closeLndgStats()">✕</div>
                </div>
                <div class="addonpack-card-content">
                </div>
            `;
            document.body.appendChild(window.statsCard);
        }

        // Draggable card helper binding
        if (window.initAddonDraggable) {
            window.initAddonDraggable(window.statsCard, 'geofs-addonpack-stats-pos');
        }

        // Start loops
        setTimeout(window.statsLoop, window.refreshRate);
        setInterval(window.updateCalVertS, 25);
    };

    // Passenger and Quality descriptive matrices
    const qualityPools = {
        butter: [
            "A flawless touchdown! Absolutely buttery smooth.",
            "Beautifully greased landing. A work of art!",
            "Stunning touchdown! Passengers barely felt the wheels kiss the tarmac."
        ],
        silky: [
            "Extremely smooth landing. Silky transition from air to ground.",
            "Superb landing technique. Very gentle touchdown.",
            "Excellent greaser! That was beautifully managed."
        ],
        great: [
            "Great landing! A solid, controlled touchdown.",
            "Very clean arrival. Standard professional landing.",
            "Well within limits. Comfortable touchdown."
        ],
        firm: [
            "A bit firm, but a positive touchdown.",
            "Firm landing. Definitely felt the gear compress.",
            "A positive touchdown to prevent aquaplaning."
        ],
        hard: [
            "Hard landing. Heavily compressed struts.",
            "Ouch! That was a rough touchdown.",
            "Hard arrival. Structural inspection might be needed."
        ],
        bone: [
            "Bone-shaking touchdown! That will rattle some teeth.",
            "Extremely hard impact. Main gear struts bottomed out.",
            "Severe hard landing. Cabin doors popped open!"
        ],
        crash: [
            "CRASH! Structural failure occurred on impact.",
            "Catastrophic touchdown. The gear has disintegrated.",
            "Hull loss landing. Major emergency response triggered."
        ]
    };

    const passengerPools = {
        perfect: [
            "Passengers are applauding! Some are weeping with joy.",
            "A quiet cabin filled with smiles. The perfect flight.",
            "Cabin crew are beaming. High praise all around."
        ],
        good: [
            "Passengers are pleased. A comfortable and safe arrival.",
            "Standard relaxed sighs in the cabin as the spoilers deploy.",
            "Very happy passengers. Standard arrival."
        ],
        nervous: [
            "A few gasps in the cabin. People checking their seatbelts.",
            "Some nervous looks exchanged. A bit of a jolt.",
            "Nervous giggles as the cabin realizes they're down."
        ],
        angry: [
            "Audible groans from the back. Bags shifted in the overhead bins.",
            "Spilled drinks and angry murmurs throughout the cabin.",
            "A passenger is complaining about neck pain."
        ],
        lawsuit: [
            "Lawsuits pending. Whiplash alerts activated!",
            "Chaos in the cabin. Sirens, screaming, and lawyer phone calls.",
            "The FAA and legal teams have already been notified."
        ]
    };

    /**
     * Evaluates landing vertical speed to determine landing quality and associated assets.
     * 
     * @param {number} vs - Vertical speed rate in feet per minute.
     * @returns {Object} Rating detail object including label, badge style, audio sound, and notification info.
     */
    function getLandingQuality(vs) {
        if (vs < 80) {
            return { label: "BUTTER", badgeClass: "badge-butter", pool: "butter", sound: window.softLanding, notifType: "success", notifText: "BUTTER - EXCELLENT TOUCHDOWN" };
        } else if (vs < 160) {
            return { label: "SILKY", badgeClass: "badge-butter", pool: "silky", sound: window.softLanding, notifType: "success", notifText: "SILKY SMOOTH TOUCHDOWN" };
        } else if (vs < 300) {
            return { label: "GREAT", badgeClass: "badge-acceptable", pool: "great", sound: window.softLanding, notifType: "success", notifText: "GREAT LANDING" };
        } else if (vs < 500) {
            return { label: "FIRM", badgeClass: "badge-acceptable", pool: "firm", sound: window.hardLanding, notifType: "info", notifText: "FIRM LANDING" };
        } else if (vs < 800) {
            return { label: "HARD", badgeClass: "badge-hard", pool: "hard", sound: window.hardLanding, notifType: "warn", notifText: "HARD LANDING - CHECK GEAR" };
        } else if (vs < 1100) {
            return { label: "BONE SHAKER", badgeClass: "badge-hard", pool: "bone", sound: window.hardLanding, notifType: "warn", notifText: "SEVERE HARD LANDING" };
        } else {
            return { label: "CRASH", badgeClass: "badge-crash", pool: "crash", sound: window.crashLanding, notifType: "critical", notifText: "CRASH LANDING" };
        }
    }

    /**
     * Generates a descriptive string for passenger and crew reactions based on landing statistics.
     * 
     * @param {number} vs - Touchdown vertical speed rate.
     * @param {number} bounces - Number of bounces detected.
     * @returns {Object} Object containing description text and style color.
     */
    function getPassengerFeedback(vs, bounces) {
        let poolName = "good";
        let color = "#10b981"; // Default emerald/green

        if (vs >= 1100 || bounces >= 3 || vs >= 800) {
            poolName = "lawsuit";
            color = "#7f1d1d"; // Dark red
        } else if (vs >= 500 || bounces === 2) {
            poolName = "angry";
            color = "#ef4444"; // Red
        } else if (vs >= 300 || bounces === 1) {
            poolName = "nervous";
            color = "#eab308"; // Yellow
        } else if (vs < 160) {
            poolName = "perfect";
            color = "#22c55e"; // Green
        } else {
            poolName = "good";
            color = "#84cc16"; // Lime
        }

        const pool = passengerPools[poolName];
        const text = pool[Math.floor(Math.random() * pool.length)];
        return { text, color };
    }

    /**
     * Computes the landing score and renders the details on the UI card.
     * 
     * @param {number} vSpeed - Pre-impact vertical speed rate.
     * @param {number} gForce - Impact G-force.
     * @param {number} calVS - Terrain-calibrated vertical speed rate.
     * @param {number} ias - Indicated airspeed in knots.
     * @param {number} tas - True airspeed in knots.
     * @param {number} gs - Ground speed in knots.
     * @param {number} roll - Roll angle in degrees.
     * @param {number} tilt - Pitch angle in degrees.
     * @param {boolean} isBounce - True if this represents a bounce touchdown.
     */
    window.renderLandingStats = function(vSpeed, gForce, calVS, ias, tas, gs, roll, tilt, isBounce) {
        // Penalty Logic
        let p_vs = window.clamp((vSpeed - 50) / 70, 0, 5);
        let p_g = window.clamp(Math.abs(gForce - 1.0) * 2, 0, 2.0);
        let p_b = Math.min(window.bounces * 2.0, 6.0);
        let p_r = window.clamp(Math.abs(roll) / 10, 0, 1.5);
        let p_tdz = window.isInTDZ ? 0 : 1.0;
        window.landingScore = window.clamp((10 - p_vs - p_g - p_b - p_r - p_tdz), 0, 10);

        const quality = getLandingQuality(vSpeed);
        const passenger = getPassengerFeedback(vSpeed, window.bounces);
        
        const qPool = qualityPools[quality.pool];
        const qText = qPool[Math.floor(Math.random() * qPool.length)];

        // Stop current audio, reset and play
        try {
            window.softLanding.pause();
            window.hardLanding.pause();
            window.crashLanding.pause();
            window.softLanding.currentTime = 0;
            window.hardLanding.currentTime = 0;
            window.crashLanding.currentTime = 0;
            quality.sound.play();
        } catch (e) {
            console.error("[GeoFS-V3.9_Landing-Stats] >> Audio error:", e);
        }

        // Notification Integration
        if (window.V39_NOTIF) {
            let prefix = "🛬";
            if (quality.notifType === "warn") prefix = "⚠️";
            else if (quality.notifType === "critical") prefix = "🚨";
            
            const vsVal = Math.round(vSpeed);
            const notifMsg = isBounce 
                ? `${prefix} BOUNCE #${window.bounces} TOUCHDOWN: ${quality.label} (-${vsVal} FPM)` 
                : `${prefix} TOUCHDOWN: ${quality.label} (-${vsVal} FPM)`;
            
            if (quality.notifType === "success") window.V39_NOTIF.success(notifMsg);
            else if (quality.notifType === "info") window.V39_NOTIF.info(notifMsg);
            else if (quality.notifType === "warn") window.V39_NOTIF.warn(notifMsg);
            else if (quality.notifType === "critical") window.V39_NOTIF.critical(notifMsg);
        }

        const content = window.statsCard.querySelector('.addonpack-card-content');
        if (content) {
            const badgeLabel = isBounce ? `${quality.label} (BOUNCE)` : quality.label;
            content.innerHTML = `
                <div class="stats-main-row">
                    <div class="addonpack-score-circle">
                        <span class="score-value">${window.landingScore.toFixed(1)}</span>
                        <span class="score-label">SCORE</span>
                    </div>
                    <div class="addonpack-badge ${quality.badgeClass}">
                        ${badgeLabel}
                    </div>
                </div>
                
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-label">VS Rate (Pre-Impact)</span>
                        <span class="stat-value">${vSpeed.toFixed(1)} fpm</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Touchdown G-Force</span>
                        <span class="stat-value">${gForce.toFixed(2)} G</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Calibrated V/S</span>
                        <span class="stat-value">${calVS.toFixed(1)} fpm</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Indicated Airspeed</span>
                        <span class="stat-value">${ias} kts</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">True Airspeed</span>
                        <span class="stat-value">${tas} kts</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Ground Speed</span>
                        <span class="stat-value">${gs.toFixed(1)} kts</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Roll Angle</span>
                        <span class="stat-value">${roll.toFixed(1)}°</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Pitch Angle</span>
                        <span class="stat-value">${tilt.toFixed(1)}°</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Touchdown Zone</span>
                        <span class="stat-value" style="color: ${window.isInTDZ ? '#22c55e' : '#ef4444'}; font-weight: bold;">
                            ${window.isInTDZ ? 'ON TARGET' : 'OFF TARGET'}
                        </span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Bounce Count</span>
                        <span class="stat-value">${window.bounces}</span>
                    </div>
                </div>

                <div class="feedback-box" style="border-left-color: ${passenger.color}">
                    <div style="font-size: 8px; font-weight: 800; color: rgba(100, 200, 255, 0.8); text-transform: uppercase; margin-bottom: 3px; letter-spacing: 0.5px;">Flight Report & Feedback</div>
                    <div style="font-weight: 600; margin-bottom: 3px;">${qText}</div>
                    <div style="opacity: 0.85; font-size: 10px;">${passenger.text}</div>
                </div>
            `;
        }

        window.statsCard.classList.add('active');

        if (window.closeTimer) {
            if (window.closeTimeoutId) clearTimeout(window.closeTimeoutId);
            window.closeTimeoutId = setTimeout(window.closeLndgStats, 1000 * window.closeSeconds);
        }
    };

    /**
     * Primary Refresh Loop: Impact Detection and Scoring
     * Monitores ground contact and calculates landing quality metrics.
     */
    window.updateLndgStats = function() {
        if (!window.geofs || !window.geofs.animation || !window.geofs.animation.values || !window.geofs.aircraft || !window.geofs.aircraft.instance) {
            return;
        }
        if (window.geofs.cautiousWithTerrain === false && !window.geofs.isPaused() && !(window.sd && window.sd.cam && window.sd.cam.data)) {
            // AGL Calculation: Resolves altitude vs ground elevation with collision offset
            let collisionOffset = 0;
            const inst = window.geofs.aircraft.instance;
            if (inst && inst.collisionPoints && inst.collisionPoints.length >= 2) {
                const pt = inst.collisionPoints[inst.collisionPoints.length - 2];
                if (pt && pt.worldPosition) {
                    collisionOffset = (pt.worldPosition[2] || 0) * 3.2808399;
                }
            }
            
            var ldgAGL = (window.geofs.animation.values.altitude !== undefined && window.geofs.animation.values.groundElevationFeet !== undefined) 
                ? ((window.geofs.animation.values.altitude - window.geofs.animation.values.groundElevationFeet) + collisionOffset) 
                : 'N/A';
            
            if (ldgAGL !== 'N/A' && ldgAGL < 500) {
                const groundContact = !!window.geofs.animation.values.groundContact;
                window.justLanded = (groundContact && !window.isGrounded);
                
                if (window.justLanded) {
                    if (!window.statsOpen) {
                        // Initial Touchdown Event
                        window.bounces = 0;
                        window.statsOpen = true;
                        window.isInTDZ = window.getTDZStatus();
                        
                        let vs = window.lVS || Math.abs(window.geofs.animation.values.verticalSpeed || 0);
                        let gForce = (window.geofs.animation.values.accZ !== undefined) ? (window.geofs.animation.values.accZ / 9.80665) : 1.0;
                        let calVS = window.calVertS;
                        let ias = window.ktias;
                        let tas = window.kTrue;
                        let gs = window.groundSpeed;
                        let roll = window.lRoll || Math.abs(window.geofs.animation.values.aroll || 0);
                        let tilt = Math.abs(window.geofs.animation.values.atilt || 0);
                        
                        window.renderLandingStats(vs, gForce, calVS, ias, tas, gs, roll, tilt, false);
                    } else {
                        // Bounce Detection: Multi-touch event tracking
                        window.bounces++;
                        
                        let vs = window.lVS || Math.abs(window.geofs.animation.values.verticalSpeed || 0);
                        let gForce = (window.geofs.animation.values.accZ !== undefined) ? (window.geofs.animation.values.accZ / 9.80665) : 1.0;
                        let calVS = window.calVertS;
                        let roll = window.lRoll || Math.abs(window.geofs.animation.values.aroll || 0);
                        let tilt = Math.abs(window.geofs.animation.values.atilt || 0);
                        
                        window.renderLandingStats(vs, gForce, calVS, window.ktias, window.kTrue, window.groundSpeed, roll, tilt, true);
                    }
                }

                // Airspeed/Orientation Buffers
                if (!groundContact) {
                    window.lVS = Math.abs(window.geofs.animation.values.verticalSpeed || 0);
                    window.lRoll = Math.abs(window.geofs.animation.values.aroll || 0);
                }

                // Data Synchronization
                window.isInTDZ = window.getTDZStatus();
                window.groundSpeed = window.geofs.animation.values.groundSpeedKnt || 0;
                window.ktias = (window.geofs.animation.values.kias !== undefined) ? window.geofs.animation.values.kias.toFixed(1) : "0.0";
                window.kTrue = (inst && inst.trueAirSpeed !== undefined) ? (inst.trueAirSpeed * window.MS_TO_KNOTS).toFixed(1) : "0.0";
                window.vertSpeed = (window.geofs.animation.values.verticalSpeed !== undefined) ? window.geofs.animation.values.verticalSpeed.toFixed(1) : "0.0";
                window.gForces = (window.geofs.animation.values.accZ !== undefined) ? (window.geofs.animation.values.accZ / 9.80665) : 1.0;
                window.isGrounded = groundContact;
                window.refreshRate = 12;
            } else {
                window.refreshRate = 60; // Hibernate state: high AGL
            }
        }
    };

    /**
     * Terrain-Calibrated V/S Engine
     * Calculates vertical speed relative to the ground surface rather than MSL.
     * Essential for mountainous landings or uneven terrain.
     */
    window.updateCalVertS = function() {
        if (window.geofs && window.geofs.animation && window.geofs.animation.values && window.geofs.aircraft && window.geofs.aircraft.instance && !window.geofs.isPaused()) {
            let collisionOffset = 0;
            const inst = window.geofs.aircraft.instance;
            if (inst && inst.collisionPoints && inst.collisionPoints.length >= 2) {
                const pt = inst.collisionPoints[inst.collisionPoints.length - 2];
                if (pt && pt.worldPosition) {
                    collisionOffset = (pt.worldPosition[2] || 0) * 3.2808399;
                }
            }
            
            let currentAGL = (window.geofs.animation.values.altitude !== undefined && window.geofs.animation.values.groundElevationFeet !== undefined) 
                ? ((window.geofs.animation.values.altitude - window.geofs.animation.values.groundElevationFeet) + collisionOffset) 
                : 'N/A';
                
            if (currentAGL !== window.oldAGL && currentAGL !== 'N/A') {
                window.newAGL = currentAGL;
                window.newTime = Date.now();
                window.calVertS = (window.newAGL - window.oldAGL) * (60000 / (window.newTime - window.oldTime));
                window.oldAGL = currentAGL;
                window.oldTime = Date.now();
            }
        }
    };

    /**
     * Touchdown Zone Detection
     * Calculates proximity to the nearest runway's aiming points (TDZ).
     * @returns {boolean} True if within 600m of a validated touchdown point.
     */
    window.getTDZStatus = function() {
        if (!window.geofs || !window.geofs.aircraft || !window.geofs.aircraft.instance || !window.geofs.runways || typeof window.geofs.runways.getNearestRunway !== 'function') return false;
        try {
            var nearestRw = window.geofs.runways.getNearestRunway(window.geofs.aircraft.instance.llaLocation);
            if (!nearestRw || !nearestRw.aimingPointLla1 || !nearestRw.aimingPointLla2) return false;
            var nearestRwDist = window.geofs.utils.distanceBetweenLocations(window.geofs.aircraft.instance.llaLocation, nearestRw.aimingPointLla1);
            var testDist = window.geofs.utils.distanceBetweenLocations(window.geofs.aircraft.instance.llaLocation, nearestRw.aimingPointLla2);
            if (nearestRwDist > testDist) nearestRwDist = testDist;
            return nearestRwDist < 600;
        } catch (e) {
            console.warn("[GeoFS-V3.9_Landing-Stats] >> Touchdown zone calculation failed:", e);
            return false;
        }
    };

    /**
     * Resets scoring state and hides the landing statistics card from the screen.
     */
    window.closeLndgStats = function() {
        if (window.closeTimeoutId) {
            clearTimeout(window.closeTimeoutId);
            window.closeTimeoutId = null;
        }
        if (window.statsCard) {
            window.statsCard.classList.remove('active');
        }
        window.statsOpen = false;
        window.bounces = 0;
    };

    // Start loops
    /**
     * Recursive loop execution to monitor landing telemetry at high frequency.
     */
    window.statsLoop = function() {
        try {
            window.updateLndgStats();
        } catch (e) {
            console.error("[GeoFS-V3.9_Landing-Stats] >> Error in stats loop:", e);
        }
        setTimeout(window.statsLoop, window.refreshRate);
    };
    if (window.SafeInit) {
        window.SafeInit('GeoFS-V3.9_Landing-Statistics', window.initLandingStats);
    } else {
        window.initLandingStats();
    }

})();
