// Define an array of arbitrary colors
let colors = ['blue', 'red', 'green', 'purple', 'yellow', 'orange', 'pink'];
let currentColorIndex;

// Function to get a random index from the colors array
function getRandomColorIndex() {
    return Math.floor(Math.random() * colors.length);
}

// Set the initial color randomly
currentColorIndex = getRandomColorIndex();
document.getElementById("mydiv").style.backgroundColor = colors[currentColorIndex];

// Add an event listener to handle clicks
document.getElementById("mydiv").addEventListener("click", function() {
    // Move to the next color in the array, looping back after the last color
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    // Apply the new color to the div
    document.getElementById("mydiv").style.backgroundColor = colors[currentColorIndex];
});
