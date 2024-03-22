// Variables
const inputField = document.querySelector("#input");
const heading = document.querySelector("#main-heading");

// Function
function inputGained() {
    heading.innerHTML = inputField.value;
    console.log("Changed to:", inputField.value);
}

// Connection
inputField.addEventListener("blur", () => inputGained());