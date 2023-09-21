import MapImg from "./map.png"
import IrishOldFashionedImg from "./drink_imgs/pylyp-sukhenko-ibh9J-fIgZU-unsplash.jpg" 
import MartiniImg from "./drink_imgs/daniel-lloyd-blunk-fernandez-NqgIxyUif48-unsplash.jpg" 
import AlmondWhiskeySourImg from "./drink_imgs/johann-trasch-psqaCoLj9QE-unsplash.jpg" 
import NegroniImg from "./drink_imgs/nuff-_JKy0LtToQc-unsplash.jpg" 
import MudslideImg from "./drink_imgs/yi-mun-loo-X3VbbKNDMSo-unsplash.jpg" 
import AngelsDelightImg from "./drink_imgs/emily-andreeva--bdbVAer7nI-unsplash.jpg" 

const initPageLoad = () => {
    // Load Header Bar
    document.querySelector("body").appendChild(loadHeaderBar());

    // Main Content Container
    const mainContent = document.createElement("div");
    mainContent.classList.add("mainContent");
    document.querySelector("body").appendChild(mainContent);

    // Load Menu Page
    document.querySelector(".mainContent").appendChild(loadMenuPage());

    // Load Location Page
    document.querySelector(".mainContent").appendChild(loadLocationPage());

    // Load About Page
    document.querySelector(".mainContent").appendChild(loadAboutPage());

    // Load Footer Bar
    document.querySelector("body").appendChild(loadFooterBar());
};

const DrinkCard = (drinkName, drinkDescription, drinkImg) => {
    return {
        drinkName,
        drinkDescription,
        drinkImg
    }
}

let irishOldFashioned = DrinkCard("Irish Old Fashioned", 
    "An Earthy, Bitter-Sweet Treat<br><br>Proper No. 12 &bull; Demerara Syrup &bull; Cocoa Bitters",
    IrishOldFashionedImg);
let martini = DrinkCard("Martini 1906", 
    "A Citrus-ey Twist on a Classic<br><br>Tanqueray &bull; Dry Vermouth &bull; Orange Curacao &bull; Orange Bitters",
    MartiniImg);
let almondWhiskeySour = DrinkCard("Almond Whiskey Sour", 
    "Merging Together Two Classics<br><br>Disaronno &bull; Four Roses Bourbon &bull; Lemon Juice &bull; Egg White",
    AlmondWhiskeySourImg);
let negroni = DrinkCard("Negroni", 
    "Bitter but... Oh Wow<br><br>Campari &bull; Tanqueray &bull; Sweet Vermouth &bull; Orange Peel",
    NegroniImg);
let mudslide = DrinkCard("Mudslide", 
    "Spicy Chocolate Milk<br><br>Vodka &bull; Baileys &bull; Kahlua &bull; Milk",
    MudslideImg);
let angelsDelight = DrinkCard("Angel's Delight", 
    "Holiday Cheer Anytime of Year<br><br>Tanqueray &bull; Triple Sec &bull; Heavy Cream &bull; Grenadine",
    AngelsDelightImg);

const classicDrinks = [irishOldFashioned, martini, almondWhiskeySour];  // list of drink cards 
const specialtyDrinks = [negroni, mudslide, angelsDelight];// list of drink cards 
const onTapDrinks = ["Guiness", "Yuengling", "Oktoberfest"];            // list of names

function loadHeaderBar() {
    const headerBar = document.createElement("div");
    headerBar.classList.add("headerBar");
    const mainTitle = document.createElement("p");
    mainTitle.textContent = "Carlton Hall";
    const tabButtonsParent = document.createElement("ul");
    const menuButton = document.createElement("li");
    menuButton.setAttribute("id", "menuButton");
    menuButton.textContent = "Menu";
    const locationButton = document.createElement("li");
    locationButton.setAttribute("id", "locationButton");
    locationButton.textContent = "Location";
    const aboutButton = document.createElement("li");
    aboutButton.setAttribute("id", "aboutButton");
    aboutButton.textContent = "About"
    tabButtonsParent.appendChild(menuButton);
    tabButtonsParent.appendChild(locationButton);
    tabButtonsParent.appendChild(aboutButton);
    headerBar.appendChild(mainTitle);
    headerBar.appendChild(tabButtonsParent);
    return headerBar;
}

function addSubMenu(sublist, drinkCards) {
    drinkCards.forEach((drink) => {
        const drinkCard = document.createElement("li");
        drinkCard.classList.add("drinkCard");
        const drinkTitle = document.createElement("p");
        drinkTitle.classList.add("drinkName");
        drinkTitle.textContent = drink.drinkName;
        const drinkDescription = document.createElement("p");
        drinkDescription.classList.add("drinkDescription");
        drinkDescription.innerHTML = drink.drinkDescription;
        const drinkImg = document.createElement("img");
        drinkImg.src = drink.drinkImg;

        drinkCard.appendChild(drinkTitle);
        drinkCard.appendChild(drinkDescription);
        drinkCard.appendChild(drinkImg);

        sublist.appendChild(drinkCard);
    });
}

function loadMenuPage() {
    const menuPage = document.createElement("div");
    menuPage.classList.add("menuPage");
    const menuTitle = document.createElement("p");
    menuTitle.classList.add("menu");
    menuTitle.textContent = "Menu";
    const drinkMasterList = document.createElement("ul");
    const classicListTitle = document.createElement("li");
    classicListTitle.classList.add("subMenu");
    classicListTitle.textContent = "Classic";
    drinkMasterList.appendChild(classicListTitle);

    const classicList = document.createElement("ul");
    addSubMenu(classicList, classicDrinks);
    drinkMasterList.appendChild(classicList);

    const specialtyListTitle = document.createElement("li");
    specialtyListTitle.classList.add("subMenu");
    specialtyListTitle.textContent = "Specialty";
    drinkMasterList.appendChild(specialtyListTitle);

    const specialtyList = document.createElement("ul");
    addSubMenu(specialtyList, specialtyDrinks);
    drinkMasterList.appendChild(specialtyList);

    const onTapListTitle = document.createElement("li");
    onTapListTitle.classList.add("subMenu");
    onTapListTitle.textContent = "On-Tap";
    drinkMasterList.appendChild(onTapListTitle);
    const onTapList = document.createElement("ul");
    onTapDrinks.forEach((drink) => {
        const drinkContainer = document.createElement("li");
        const drinkTitle = document.createElement("p");
        drinkTitle.classList.add("drinkName");
        drinkTitle.textContent = drink;

        drinkContainer.appendChild(drinkTitle);
        onTapList.appendChild(drinkContainer);
    });
    drinkMasterList.appendChild(onTapList);

    menuPage.appendChild(menuTitle);
    menuPage.appendChild(drinkMasterList);
    return menuPage;
}

function loadLocationPage() {
    const locationPage = document.createElement("div");
    locationPage.classList.add("locationPage");
    const menuTitle = document.createElement("p");
    menuTitle.classList.add("menu");
    menuTitle.textContent = "Location & Contact Info";
    const locationContent = document.createElement("p");
    locationContent.classList.add("locationContent");
    locationContent.innerHTML = "I don't actually have any information to put" +
        "in this section. So I am going to ramble here for " + 
        "a bit until I append a fake phone number and a picture" +
        " from Google Maps<br><br>" +
        "<strong>Phone Number</strong>: NNN-NNN-NNNN<br>" + 
        "<strong>Email</strong>: bruh@email.com";
    const locationImg = document.createElement("img");
    locationImg.src = MapImg;

    locationPage.appendChild(menuTitle);
    locationPage.appendChild(locationContent);
    locationPage.appendChild(locationImg);
    return locationPage;
}

function loadAboutPage() {
    const aboutPage = document.createElement("div");
    aboutPage.classList.add("aboutPage");
    const menuTitle = document.createElement("p");
    menuTitle.classList.add("menu");
    menuTitle.textContent = "About";
    const locationContent = document.createElement("p");
    locationContent.classList.add("locationContent");
    locationContent.innerHTML = "I've always wanted to open a bar as " +
    "a retirement project. So I'd rather make this page than a restaurant page." +
    " Other than that I don't actually have any information to put" + 
    " in this section. So I am going to ramble here for a bit.";

    aboutPage.appendChild(menuTitle);
    aboutPage.appendChild(locationContent);
    return aboutPage;
}

function loadFooterBar() {
    const footerBar = document.createElement("div");
    footerBar.classList.add("footerBar");
    const devCredit = document.createElement("p");
    devCredit.textContent = "Developed by Blakely Mayhall";
    footerBar.appendChild(devCredit);
    return footerBar;
}

export { initPageLoad };