const thumbnails = document.getElementsByClassName('thumbnail');
const activeImages = document.getElementsByClassName('active');
const bigImage = document.querySelector('.big-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('mouseover', function() {
        if (activeImages.length > 0) {
            activeImages[0].classList.remove('active');
        }
        this.classList.add('active');
        bigImage.src = this.src;
    });
});
// const buttons = document.querySelectorAll('.memory-button');

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     buttons.forEach(btn => btn.classList.remove('active'));
//     button.classList.add('active');
//   });
// });

const buttons = document.querySelectorAll('.price-button');

function toggleButton(button) {
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.toggle('active');
}