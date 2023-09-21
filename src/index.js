import { initPageLoad } from "./init_page_load";
import "./styles.css";

initPageLoad();

const menuPage = document.querySelector(".menuPage");
const locationPage = document.querySelector(".locationPage");
const aboutPage = document.querySelector(".aboutPage");

// Buttons that toggle the player config form
const menuButton = document.querySelector("#menuButton");
menuButton.addEventListener("click", () => {
    menuPage.style.display = "flex";
    locationPage.style.display = "none";
    aboutPage.style.display = "none";
});

const locationButton = document.querySelector("#locationButton");
locationButton.addEventListener("click", () => {
    menuPage.style.display = "none";
    locationPage.style.display = "flex";
    aboutPage.style.display = "none";
});

const aboutButton = document.querySelector("#aboutButton");
aboutButton.addEventListener("click", () => {
    menuPage.style.display = "none";
    locationPage.style.display = "none";
    aboutPage.style.display = "flex";
});