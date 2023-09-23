
const matrixText = document.querySelector(".matrix-text");
let isMatrixActive = false;
let matrixInterval;
let popupTimeout;

function createMatrixLetter() {
    const letter = document.createElement("p");
    letter.innerText = String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Random uppercase letter
    letter.style.left = `${Math.random() * 100}%`;
    letter.style.animationDuration = `${Math.random() * 2 + 2}s`; // Random animation duration
    matrixText.appendChild(letter);

    letter.addEventListener("animationiteration", () => {
        letter.remove();
    });
}

function toggleMatrixEffect() {
    if (isMatrixActive) {
        clearInterval(matrixInterval);
        matrixInterval = null;
        hidePopup();
    } else {
        matrixInterval = setInterval(createMatrixLetter, 10);
        showPopup();
    }
    isMatrixActive = !isMatrixActive;
}

function showPopup() {
    const popup = document.createElement("div");
    popup.innerText = "Entering in the matrix..";
    popup.classList.add("popup");
    document.body.appendChild(popup);
    popupTimeout = setTimeout(() => {
        hidePopup();
    }, 2000);
}

function hidePopup() {
    if (popupTimeout) {
        clearTimeout(popupTimeout);
        popupTimeout = null;
    }
    const popup = document.querySelector(".popup");
    if (popup) {
        popup.remove();
    }
}

const name = document.getElementById("name");
name.addEventListener("click", toggleMatrixEffect);