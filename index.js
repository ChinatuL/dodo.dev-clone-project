const setTheme = (theme) => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
};

const pickName = (theName) => {
    let colorName = document.getElementById("color-scheme-name");
    const faviconTag = document.getElementById("favicon");
    if (theName === "dark-plus") {
        colorName.innerHTML = "Dark+";
        faviconTag.setAttribute("href", "./images/favicon-dark-plus.png");
    }
    if (theName === "light-plus") {
        colorName.innerHTML = "Light+";
        faviconTag.setAttribute("href", "./images/favicon-light-plus.png");
    }
    if (theName === "monokai") {
        colorName.innerHTML = "Monokai";
        faviconTag.setAttribute("href", "./images/favicon-monokai.png");
    }
    if (theName === "github-dark") {
        colorName.innerHTML = "Github Dark";
        faviconTag.setAttribute("href", "./images/favicon-github-dark.png");
    }
    if (theName === "github-light") {
        colorName.innerHTML = "Github Light";
        faviconTag.setAttribute("href", "./images/favicon-github-light.png");
    }
    if (theName === "solarized-light") {
        colorName.innerHTML = "Solarized Light";
        faviconTag.setAttribute("href", "./images/favicon-solarized-light.png");
    }
    localStorage.setItem("colorName", colorName.innerHTML);
    localStorage.setItem("favicon-tag", faviconTag.getAttribute("href"));
};

document.getElementById("theme-select").addEventListener("change", function () {
    setTheme(this.value);
    pickName(this.value);
});

const getTheme = () => {
    const theme = localStorage.getItem("theme");
    theme && setTheme(theme);
};

getTheme();

const getName = () => {
    const retrieveTheme = localStorage.getItem("colorName");
    document.getElementById("color-scheme-name").innerHTML = retrieveTheme;
};

getName();

const getFavicon = () => {
    retrieveFavicon = localStorage.getItem("favicon-tag");
    document.getElementById("favicon").setAttribute("href", retrieveFavicon);
};

getFavicon();
