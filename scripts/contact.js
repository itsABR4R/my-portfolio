document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init("vXtdkJp4WxFFICN9V"); // Your EmailJS public key

    // Handle form submission
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Send email using EmailJS
            emailjs.sendForm('service_n6kvnak', 'template_57a23rr', this)
                .then(function(response) {
                    console.log('Success:', response); // Log response to console for debugging
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent!',
                        text: 'Thanks for reaching out. I will get back to you soon!',
                        timer: 2500,
                        showConfirmButton: false
                    });
                    contactForm.reset();
                }, function(error) {
                    console.error('Error:', error); // Log error details to the console
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to send message. Please try again later!',
                    });
                });
        });
    }

    // Scroll to contact form when "Contact" button clicked
    const contactButton = document.getElementById('contact-btn');

    if (contactButton && contactForm) {
        contactButton.addEventListener('click', function() {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
