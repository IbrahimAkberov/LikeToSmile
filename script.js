document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const emoji = document.getElementById('emoji');
    const emojis = ['😠', '😐', '😕', '🙂', '😊'];

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            resetStars();
            fillStars(index);
            updateEmoji(index);
        });
    });

    function resetStars() {
        stars.forEach(star => {
            star.classList.remove('filled');
        });
    }

    function fillStars(index) {
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('filled');
        }
    }

    function updateEmoji(index) {
        emoji.textContent = emojis[index];
    }
});
