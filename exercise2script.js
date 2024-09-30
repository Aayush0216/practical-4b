// Initial setup
let colors = ['blue', 'red', 'green'];
let currentColorIndex = 0;

// Add an event listener to handle clicks
document.getElementById("mydiv").addEventListener("click", function() {
    // Move to the next color in the array
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    // Apply the new color to the div
    document.getElementById("mydiv").style.backgroundColor = colors[currentColorIndex];
});
