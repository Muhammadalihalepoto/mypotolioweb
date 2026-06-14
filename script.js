/* =========================
   MOBILE MENU
========================= */

const menuToggle =
document.getElementById("menu-toggle");

const navbar =
document.getElementById("navbar");

if(menuToggle){

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}

/* =========================
   DARK / LIGHT MODE
========================= */

const themeToggle =
document.getElementById("theme-toggle");

if(themeToggle){

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const icon =
        themeToggle.querySelector("i");

        if(
        document.body.classList.contains("dark")
        ){

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

            localStorage.setItem(
                "theme",
                "dark"
            );

        }else{

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    });

}

/* =========================
   LOAD SAVED THEME
========================= */

window.addEventListener("load", () => {

    const savedTheme =
    localStorage.getItem("theme");

    if(savedTheme === "dark"){

        document.body.classList.add("dark");

        const icon =
        document.querySelector(
            "#theme-toggle i"
        );

        if(icon){

            icon.classList.remove(
                "fa-moon"
            );

            icon.classList.add(
                "fa-sun"
            );

        }

    }

});

/* =========================
   SMOOTH SCROLL
========================= */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute(
                    "href"
                )
            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

            if(
            window.innerWidth <= 768
            ){

                navbar.classList.remove(
                    "active"
                );

            }

        }
    );

});

/* =========================
   ACTIVE MENU LINK
========================= */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
"nav ul li a"
);

window.addEventListener(
"scroll",
() => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 120;

        const sectionHeight =
        section.clientHeight;

        if(
        pageYOffset >= sectionTop
        ){

            current =
            section.getAttribute(
                "id"
            );

        }

    });

    navLinks.forEach(link => {

        link.classList.remove(
            "active"
        );

        if(
        link.getAttribute("href")
        === "#" + current
        ){

            link.classList.add(
                "active"
            );

        }

    });

});

/* =========================
   HEADER SHADOW
========================= */

const header =
document.querySelector("header");

window.addEventListener(
"scroll",
() => {

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 25px rgba(0,0,0,.12)";

    }else{

        header.style.boxShadow =
        "0 2px 20px rgba(0,0,0,.05)";

    }

});

/* =========================
   READY
========================= */

console.log(
"Portfolio Website Loaded Successfully"
);