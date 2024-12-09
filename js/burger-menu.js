document.addEventListener("DOMContentLoaded", function () {
    const burger_menu_icon = document.getElementById("burger-menu");
    const header_nav = document.getElementById("header-nav");

    const dark_burger_icon = document.getElementById("dark-burger-icon");
    const light_burger_icon = document.getElementById("light-burger-icon");

    burger_menu_icon.addEventListener("click", function () {
        if (header_nav.style.display == "none" || header_nav.style.display == "") {
            header_nav.style.display = "block";
            dark_burger_icon.style.display = "";
            light_burger_icon.style.display = "none";
        } else {
            header_nav.style.display = "none";
            dark_burger_icon.style.display = "none";
            light_burger_icon.style.display = "";
        }
    });
}, false);