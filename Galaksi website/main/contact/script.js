document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("n8jAg6qqWofw0RjSG");  // Public Key dari EmailJS

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Tampilkan loading screen
        document.getElementById('loading-screen').style.display = 'block';

        emailjs.sendForm('service_a0q1ux3', 'template_5v73ojd', this)
            .then(function(response) {
                // Sembunyikan loading screen
                document.getElementById('loading-screen').style.display = 'none';

                // Tampilkan status pesan
                const statusElement = document.getElementById('status');
                statusElement.innerText = 'Message sent successfully!';
                statusElement.classList.add('show');

                // Sembunyikan status pesan setelah 5 detik
                setTimeout(function() {
                    statusElement.classList.remove('show');
                }, 5000);
            }, function(error) {
                // Sembunyikan loading screen
                document.getElementById('loading-screen').style.display = 'none';

                // Tampilkan status pesan
                const statusElement = document.getElementById('status');
                statusElement.innerText = 'Message failed to send.';
                statusElement.classList.add('show');

                // Sembunyikan status pesan setelah 5 detik
                setTimeout(function() {
                    statusElement.classList.remove('show');
                }, 5000);

                console.error('Error:', error);
            });
    });
});
