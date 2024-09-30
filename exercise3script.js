// Function to handle image change
function changeImage() {
    // Get the selected option
    let selectElement = document.getElementById("imageSelector");
    let selectedOption = selectElement.options[selectElement.selectedIndex];

    // Get the image element
    let imageElement = document.getElementById("image");

    // Set the image src to the value of the selected option (the file path)
    imageElement.src = selectedOption.value;

    // Set the image alt text to the text of the selected option (the image description)
    imageElement.alt = selectedOption.text;
}

// Add an event listener to handle selection change
document.getElementById("imageSelector").addEventListener("change", changeImage);
