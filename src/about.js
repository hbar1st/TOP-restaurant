import restaurantImage from "./restaurant-1.jpg";
import "./about-style.css";

function createAboutPage(documentObj, contentEl) {

    let divEl = documentObj.createElement("div");
    divEl.innerHTML = `            
                <h2>Our Philosophy</h2>
                <p>Authentically Egyptian. Our cooking traditions have been passed down from generation to generation. Egyptians love the grill, but we also have many vegan dishes.</p>
                <img src="${restaurantImage}" alt="the restaurant">`;
    contentEl.appendChild(divEl);
    let pEl = documentObj.createElement("p");
    pEl.innerHTML = `Photo by <a
                    href="https://unsplash.com/@lucabravo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Luca
                    Bravo</a> on <a
                    href="https://unsplash.com/photos/two-person-sitting-on-bar-stool-chair-in-front-of-bar-front-desk-8x_fFNrmeDk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;
    contentEl.appendChild(pEl);

    return contentEl;

}

export { createAboutPage };