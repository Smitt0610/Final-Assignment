// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.


// Wait for the DOM to be loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('submit-button');
    
    // Set an onclick event handler for the submit button
    submitButton.onclick = function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        var contactPage = document.getElementById('contact-page');// Get the contact-page element
        var thankYouMessage = document.createElement('p');// Create a new <p> element
        thankYouMessage.textContent = "Thank you for your message";// Set the text content of the <p> element
        thankYouMessage.style.fontSize = "24px";// set the font size of the <p> element
        contactPage.innerHTML = ''; // Clear existing content
        contactPage.appendChild(thankYouMessage);// Append the new thank you message to the contact-page element
    };
});
