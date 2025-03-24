const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);//gets all the array html elements to make eay manipulations 
const nextButton = document.querySelector('#nextBtn');
const prevButton = document.querySelector('#prevBtn');
let slideWidth = slides[0].getBoundingClientRect().width;//e actual width, considering margins and padding.

let currentIndex = 0;//first slide will be displayed 

function updateCarousel() {
    track.style.transform = 'translateX(-' + slideWidth * currentIndex + 'px)';
}

nextButton.addEventListener('click', () => {//f it's not the last slide, currentIndex is increased
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {//If it's not the first slide, currentIndex is decreased.

    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

window.addEventListener('resize', () => {
    slideWidth = slides[0].getBoundingClientRect().width;
    updateCarousel();
});

document.querySelectorAll('.order-now').forEach(button => {//Whenever a user clicks an Order Now button, they will be redirected to Nike’s website.
    button.addEventListener('click', () => {
        window.location.href = 'https://www.nike.com';
    });
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart');
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully');
    this.reset();
});