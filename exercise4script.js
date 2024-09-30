// Function to apply styles dynamically based on user input
function applyFormatting() {
    let textElement = document.getElementById("text");

    // Get values from the form elements
    let fontFamily = document.getElementById("font_family").value;
    let fontSize = document.getElementById("font_size").value;
    let isItalic = document.getElementById("font_italic").checked;
    let isBold = document.getElementById("font_bold").checked;
    let isUnderline = document.getElementById("font_underline").checked;

    // Apply the font family and size
    textElement.style.fontFamily = fontFamily;
    textElement.style.fontSize = fontSize;

    // Apply italic, bold, and underline
    textElement.style.fontStyle = isItalic ? "italic" : "normal";
    textElement.style.fontWeight = isBold ? "bold" : "normal";
    textElement.style.textDecoration = isUnderline ? "underline" : "none";
}

// Add event listeners to form elements to trigger formatting changes
document.getElementById("font_family").addEventListener("change", applyFormatting);
document.getElementById("font_size").addEventListener("change", applyFormatting);
document.getElementById("font_italic").addEventListener("change", applyFormatting);
document.getElementById("font_bold").addEventListener("change", applyFormatting);
document.getElementById("font_underline").addEventListener("change", applyFormatting);
