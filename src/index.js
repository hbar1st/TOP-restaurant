import "./styles.css"; //side effect import statement because of webpack
import { createHomePage } from "./home.js";
import { createAboutPage } from "./about.js";

console.log("heyo!");

(function initializePage(documentObj) {
    const contentEl = documentObj.querySelector("#content");
    let el = createHomePage(documentObj, contentEl);

    const aboutBtn = documentObj.querySelector("#about");
    aboutBtn.addEventListener("click", () => {
        contentEl.innerHTML = "";
        el = createAboutPage(documentObj, contentEl);
    })
    const menuBtn = documentObj.querySelector("#menu");
    menuBtn.addEventListener("click", () => {
        contentEl.innerHTML = "";
    })
    const homeBtn = documentObj.querySelector("#home");
    homeBtn.addEventListener("click", () => {
        createHomePage(documentObj, contentEl);
    })
})(document);

