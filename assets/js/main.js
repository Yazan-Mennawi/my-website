document.addEventListener('DOMContentLoaded', function() {

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const filter = searchInput.value.toLowerCase();
            const cards = document.querySelectorAll('.event-card');

            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(filter) ? '' : 'none';
            });
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const alertBox = document.getElementById('formAlert');

            if (name && email && message) {
                alertBox.innerHTML = '<div class="alert alert-success">تم إرسال الرسالة بنجاح!</div>';
                contactForm.reset();
            } else {
                alertBox.innerHTML = '<div class="alert alert-danger">يرجى تعبئة جميع الحقول.</div>';
            }
        });
    }

});