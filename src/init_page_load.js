import MapImg from "./map.png"

const initPageLoad = () => {
    // Load Header Bar
    document.querySelector("body").appendChild(loadHeaderBar());

    // Main Content Container
    const mainContent = document.createElement("div");
    mainContent.classList.add("mainContent");
    document.querySelector("body").appendChild(mainContent);

    // Load Menu Page

    // Load Location Page
    document.querySelector(".mainContent").appendChild(loadLocationPage());

    // Load About Page
    document.querySelector(".mainContent").appendChild(loadAboutPage());

    // Load Footer Bar
    document.querySelector("body").appendChild(loadFooterBar());
};

function loadHeaderBar() {
    const headerBar = document.createElement("div");
    headerBar.classList.add("headerBar");
    const mainTitle = document.createElement("p");
    mainTitle.textContent = "Carlton Hall";
    const tabButtonsParent = document.createElement("ul");
    const menuButton = document.createElement("li");
    menuButton.textContent = "Menu";
    const locationButton = document.createElement("li");
    locationButton.textContent = "Location";
    const aboutButton = document.createElement("li");
    aboutButton.textContent = "About"
    tabButtonsParent.appendChild(menuButton);
    tabButtonsParent.appendChild(locationButton);
    tabButtonsParent.appendChild(aboutButton);
    headerBar.appendChild(mainTitle);
    headerBar.appendChild(tabButtonsParent);
    return headerBar;
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
        "from Google Maps<br><br>" +
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