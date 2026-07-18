/* Submit Button Banner */

            const form = document.getElementById('form_details');
            const banner = document.getElementById('success-banner');

            form.addEventListener('submit', function(event) {
                event.preventDefault();
                alert ("Thank you!");
            });


