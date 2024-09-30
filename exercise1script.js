// Function to change text when mouse is over the div
function changeTextOnHover() {
    document.getElementById("mydiv").innerHTML = "Can I help you?";
}

// Function to change text back when mouse leaves the div
function changeTextOnMouseOut() {
    document.getElementById("mydiv").innerHTML = "Hello world!";
}

// Event listeners for mouse hover and mouse out
document.getElementById("mydiv").addEventListener("mouseover", changeTextOnHover);
document.getElementById("mydiv").addEventListener("mouseout", changeTextOnMouseOut);
