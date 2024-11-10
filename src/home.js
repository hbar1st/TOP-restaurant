import restaurantImage from "./restaurant-1.jpg";

function createHomePage(documentObj, contentEl) {

    let divEl = documentObj.createElement("div");
    divEl.innerHTML = `            <h1>Egyptorante!</h1>
                <div>
                <h2>Good food made well!</h2>
                <p>We aim to delight you and satisfy your craving for a taste of Egypt.  See you soon!</p>
            </div>
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

export { createHomePage };