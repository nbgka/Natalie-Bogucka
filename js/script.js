document.addEventListener("DOMContentLoaded", function() {
    // Random color for header text
    var header = document.querySelector(".containerMenu h1");
    var footer = document.querySelector(".containerMenuFooter h1"); // Selecting the footer header
    var colors = ["rgb(104, 0, 0)", "white"];
    var randomIndex = Math.floor(Math.random() * colors.length);
    header.style.color = colors[randomIndex];
    footer.style.color = colors[randomIndex]; // Applying the random color to the footer header as well

    // Event listener for form submission button
    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault();
        handleFormSubmit();
    });

    // Function to handle form submission
    function handleFormSubmit() {
        const name = document.getElementById('name').value;
        const lastName = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const confirmationEmail = document.getElementById('yes').checked;

        // Create an object to store the form data
        const formData = {
            name: name,
            email: email,
            message: message,
            confirmationEmail: confirmationEmail
        };

        // Log form data to console
        console.log(formData);

        // // Display the variable name as an h1 element
        // let h1Element = document.createElement('h1');
        // h1Element.textContent = name;
        // document.body.appendChild(h1Element);

        // Change background color based on confirmation email checkbox
        document.body.style.backgroundColor = confirmationEmail ? '#11011c' : 'black';

        // Show thank you message
        showThankYouMessage();

        // Reset form
        document.getElementById('form-container').reset();  
    }

    // Function to show thank you message
    function showThankYouMessage() {
        var thankYouMessage = document.getElementById('thankYouMessage');
        thankYouMessage.style.display = 'block';
    }

    // Add image display on hover functionality
    var projectLinks = document.querySelectorAll('.projectsAll a');

    projectLinks.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            var image = link.previousElementSibling;
            if (image.tagName === 'IMG') {
                image.style.display = 'block';
            }
        });

        link.addEventListener('mouseleave', function() {
            var image = link.previousElementSibling;
            if (image.tagName === 'IMG') {
                image.style.display = 'none';
            }
        });
    });
});
