// ==========================================
// SNOW
// ==========================================

const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Snowflake {

    constructor() {
        this.reset();
    }

    reset() {

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.radius = Math.random() * 3 + 1;

        this.speedY = Math.random() * 1.8 + 0.5;
        this.speedX = Math.random() * 0.8 - 0.4;

        this.opacity = Math.random() * 0.6 + 0.2;

    }

    update() {

        this.y += this.speedY;
        this.x += this.speedX;

        if (this.y > canvas.height + 10) {

            this.y = -10;
            this.x = Math.random() * canvas.width;

        }

    }

    draw() {

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
        ctx.fill();

    }

}

for (let i = 0; i < 180; i++) {
    particles.push(new Snowflake());
}

function animateSnow() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(flake=>{
        flake.update();
        flake.draw();
    });

    requestAnimationFrame(animateSnow);

}

animateSnow();


// ==========================================
// INTRO ANIMATION
// ==========================================

window.addEventListener("load",()=>{

    const small=document.querySelector(".hero-small");
    const title=document.querySelector(".heroLogo");
    const subtitle=document.querySelector(".hero-subtitle");
    const applyButton=document.querySelector(".applyButton");

    small.classList.remove("showSmall");
    title.classList.remove("showTitle");
    subtitle.classList.remove("showSubtitle");
    applyButton.classList.remove("showButton");

});


// ==========================================
// MUSIC
// ==========================================

const music=document.getElementById("bgMusic");
const musicButton=document.getElementById("musicToggle");

let playing=false;

musicButton.addEventListener("click",()=>{

    if(playing){

        music.pause();

        musicButton.innerHTML=
        '<i class="fa-solid fa-volume-xmark"></i>';

    }

    else{

        music.play();

        musicButton.innerHTML=
        '<i class="fa-solid fa-volume-high"></i>';

    }

    playing=!playing;

});


// ==========================================
// ENTRY OVERLAY
// ==========================================

const entryOverlay=document.getElementById("entryOverlay");
const enterButton=document.getElementById("enterButton");

enterButton.addEventListener("click",async()=>{

    try{

        await music.play();

        playing=true;

        musicButton.innerHTML=
        '<i class="fa-solid fa-volume-high"></i>';

    }

    catch(e){

        console.log(e);

    }

    entryOverlay.classList.add("hide");

    document.body.classList.remove("overlay-active");

    window.scrollTo({
        top:0,
        behavior:"instant"
    });

    document.querySelector(".hero").focus();

    const small=document.querySelector(".hero-small");
    const title=document.querySelector(".heroLogo");
    const subtitle=document.querySelector(".hero-subtitle");
    const applyButton=document.querySelector(".applyButton");

    setTimeout(()=>{

        small.classList.add("showSmall");

    },300);

    setTimeout(()=>{

        title.classList.add("showTitle");

    },1500);

    setTimeout(()=>{

        subtitle.classList.add("showSubtitle");

    },2600);

    setTimeout(()=>{

        applyButton.classList.add("showButton");

    },3200);

});
// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {

    en: {

        // Navigation
        navHome: "HOME",
        navWhy: "WHY 500",
        navApply: "APPLY",

        // Hero
        heroSmall: "LOOKING FOR A NEW HOME?",
       

        // Why
        whyTitle: "WHY KINGDOM 500?",

        whyText:
`Kingdom 500 is an international Viking Rise kingdom built around teamwork, organization and long-term success.<br><br>
Every victory is earned together.`,

        card1Title: "Competitive Kingdom",
        card1Text:
"Highly organized KvK battles, experienced leadership and strategic gameplay.",

        card2Title: "Strong Community",
        card2Text:
"Friendly players from all over the world working together as one family.",

        card3Title: "Active Leadership",
        card3Text:
"Experienced officers, daily communication and clear organization.",

        // Apply
        applyTitle: "READY TO JOIN US?",

        applyText:
`You can reach us via Discord or the application form.<br>
We look forward to hearing from you.`,

        // Discord
        discordTitle: "Join our Discord",

        discordText:
`Meet our officers.<br>
Apply directly.`,

        discordButton: "JOIN DISCORD",

        // Form
        formTitle: "Application Form",

        playerName: "Player Name",
        playerId: "Player ID",
        currentKingdom: "Current Kingdom",
        power: "Power",
        killPoints: "Kill Points",
        discordName: "Discord Name",
        message: "Tell us something about yourself...",
        submitButton: "Submit Application"

    },

    ru: {

        // Navigation
        navHome: "ГЛАВНАЯ",
        navWhy: "ПОЧЕМУ 500",
        navApply: "ПОДАТЬ ЗАЯВКУ",

        // Hero
        heroSmall: "ИЩЕТЕ НОВЫЙ ДОМ?",
       

        // Why
        whyTitle: "ПОЧЕМУ KINGDOM 500?",

        whyText:
`Kingdom 500 — международное королевство Viking Rise, основанное на командной работе, организации и долгосрочном успехе.<br><br>`,

        card1Title: "Конкурентное королевство",
        card1Text:
"Организованные KvK-сражения, опытное руководство и стратегический игровой процесс.",

        card2Title: "Сильное сообщество",
        card2Text:
"Дружелюбные игроки со всего мира, работающие вместе как одна семья.",

        card3Title: "Активное руководство",
        card3Text:
"Опытные офицеры, ежедневное общение и четкая организация.",

        // Apply
        applyTitle: "ГОТОВЫ ПРИСОЕДИНИТЬСЯ?",

        applyText:
`Свяжитесь с нами через Discord или заполните форму заявки.<br>
Мы будем рады познакомиться с вами.`,

        // Discord
        discordTitle: "Присоединяйтесь к Discord",

        discordText:
`Познакомьтесь с нашими офицерами.<br>
Подайте заявку напрямую.`,

        discordButton: "ПРИСОЕДИНИТЬСЯ",

        // Form
        formTitle: "Форма заявки",

        playerName: "Имя игрока",
        playerId: "ID игрока",
        currentKingdom: "Текущее королевство",
        power: "Мощь",
        killPoints: "Очки убийств",
        discordName: "Имя в Discord",
        message: "Расскажите немного о себе...",
        submitButton: "ОТПРАВИТЬ ЗАЯВКУ"

    }

};
// ==========================================
// LANGUAGE
// ==========================================

function changeLanguage(language){

    const t = translations[language];

    if(!t) return;

    // Navigation
    document.getElementById("navHome").textContent = t.navHome;
    document.getElementById("navWhy").textContent = t.navWhy;
    document.getElementById("navApply").textContent = t.navApply;

    // Hero
    document.getElementById("heroSmall").textContent = t.heroSmall;
    document.getElementById("heroSubtitle").textContent = t.heroSubtitle;

    // Why
    document.getElementById("whyTitle").textContent = t.whyTitle;

    const whyText = document.getElementById("whyTitleText");
    if(whyText){
        whyText.innerHTML = t.whyText;
    }

    document.getElementById("card1Title").textContent = t.card1Title;
    document.getElementById("card1Text").textContent = t.card1Text;

    document.getElementById("card2Title").textContent = t.card2Title;
    document.getElementById("card2Text").textContent = t.card2Text;

    document.getElementById("card3Title").textContent = t.card3Title;
    document.getElementById("card3Text").textContent = t.card3Text;

    // Apply
    document.getElementById("applyTitle").textContent = t.applyTitle;
    document.getElementById("applyText").innerHTML = t.applyText;

    // Discord
    document.getElementById("discordTitle").textContent = t.discordTitle;
    document.getElementById("discordText").innerHTML = t.discordText;
    document.getElementById("discordButton").textContent = t.discordButton;

    // Form
    document.getElementById("formTitle").textContent = t.formTitle;

    document.getElementById("playerName").placeholder = t.playerName;
    document.getElementById("playerId").placeholder = t.playerId;
    document.getElementById("currentKingdom").placeholder = t.currentKingdom;
    document.getElementById("power").placeholder = t.power;
    document.getElementById("killPoints").placeholder = t.killPoints;
    document.getElementById("discordName").placeholder = t.discordName;
    document.getElementById("message").placeholder = t.message;

    document.getElementById("submitButton").textContent = t.submitButton;

     // Bilder wechseln

    const heroLogo = document.querySelector(".heroLogo");
    const applyButton = document.querySelector(".applyButton img");

    if (language === "ru") {

        heroLogo.src = "images/join500ru.png";
        applyButton.src = "images/apply-buttonru.png";

    } else {

        heroLogo.src = "images/join500.png";
        applyButton.src = "images/apply-button.png";

    }
}


// ==========================================
// LANGUAGE SWITCHER
// ==========================================

const languageButtons = document.querySelectorAll(".lang");

const savedLanguage = "en";

changeLanguage(savedLanguage);

languageButtons.forEach(button=>{

    button.classList.toggle(
        "active",
        button.dataset.lang===savedLanguage
    );

});

languageButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const language = button.dataset.lang;

        languageButtons.forEach(b=>b.classList.remove("active"));

        button.classList.add("active");

        changeLanguage(language);

    });

});
// ==========================================
// FINAL CHECK
// ==========================================

// Hero Animation beim Laden zurücksetzen
window.addEventListener("load", () => {

    const small = document.querySelector(".hero-small");
    const title = document.querySelector(".heroLogo");
    const subtitle = document.querySelector(".hero-subtitle");
    const applyButton = document.querySelector(".applyButton");

    small.classList.remove("showSmall");
    title.classList.remove("showTitle");
    subtitle.classList.remove("showSubtitle");
    applyButton.classList.remove("showButton");

});

// Sicherheitsprüfung
document.addEventListener("DOMContentLoaded", () => {

    console.log("Kingdom 500 Website loaded.");

    // Falls keine Sprache gespeichert ist
    if (!localStorage.getItem("language")) {
        localStorage.setItem("language", "en");
    }

});