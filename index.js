const productCard = document.querySelector(".productCard")
const advice = document.querySelector(".advice")
const discount_ = document.querySelector(".discount")


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const options = {
        root: null, 
        rootMargin: "0px",
        threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.contains("popular") && productCard.classList.add("slideLeft")
                entry.target.classList.contains("advice") && advice.classList.add("slideRight")
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
                productCard.classList.remove("slideLeft");
                advice.classList.remove("slideRight");          
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));
});


















let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const discount = document.querySelectorAll('.discountItem');
const totalDiscount = discount.length;
const totalSlides = slides.length;

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    discount.forEach(item => item.classList.remove('active', 'previous'));
    discount[currentIndex].classList.add('previous');
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].classList.add('active');
    discount[currentIndex].classList.add('active');

}

setInterval(showNextSlide, 5000);

// Set the date we're counting down to
const countdownDate = new Date("Oct 29, 2024 12:00:00").getTime();

// Update the count down every 1 second
const timerInterval = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements with corresponding ids
    document.getElementById("jou").innerText = days;
    document.getElementById("le").innerText = hours;
    document.getElementById("minit").innerText = minutes;
    document.getElementById("segond").innerText = seconds;

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.discountItem')[0].classList.add('active');
  });