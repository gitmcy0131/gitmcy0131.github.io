document.addEventListener("DOMContentLoaded", function () {
    // Alert Button
    const alertButton = document.getElementById("alertMe");
    alertButton.addEventListener("click", function () {
        alert("Wish you a great weekend!");
    });

    // Hover Button
    const hoverButton = document.getElementById("hoverButton");
    hoverButton.onmouseover = function () {
        hoverButton.style.background = "#1abc9c";
    };
    hoverButton.onmouseleave = function () {
        hoverButton.style.background = "lightcoral";
    };

    // Incrementing Button
    let count = 0;
    const buttonCounter = document.getElementById("buttonCounter");
    const counterDisplay = document.getElementById("counter");

    buttonCounter.onclick = function () {
        count = count + 1;
        counterDisplay.innerHTML = "You have clicked " + count + " times.";

        // Check if the count is even or odd and change text color
        if (count % 2 === 0) {
            counterDisplay.style.color = "red";  
        } else {
            counterDisplay.style.color = "blue";  
        }
    };

    // For Loop to print message
    const container = document.getElementById("container");

for (let i = 0; i < 5; i++) {
    const message = document.createElement("p");
    message.textContent = "The world is better because you're in it!";
    container.append(message);
}
    
});