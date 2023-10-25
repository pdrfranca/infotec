var countDownDate = new Date("Oct 26, 2023 09:00:00").getTime();
var countdownfunction = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timestamp").innerHTML = "😝 O evento começará em " + days + "d : " + hours + "h : "
        + minutes + "m : " + seconds + "s 😝";

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("countdown").innerHTML = "😝 Procure um monitor para conhecer de perto 😝";
    }
}, 1000);

const slides = document.querySelectorAll('.card');
const slideTransf = document.querySelector('#slide')
const prevBtn = document.querySelector('#prevButton');
const nextBtn = document.querySelector('#nextButton');
const pauseBtn = document.querySelector('#pauseButton');

let isPaused = false;
let intervalId;
let currentIndex = 0;

function slideAnimation() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.id = 'c2';
            switch (currentIndex) {
                case 1:
                    slideTransf.style.transform = 'translateX(81.5vw)';
                    break;
                case 2:
                    slideTransf.style.transform = 'translateX(49vw)';
                    break;
                case 3:
                    slideTransf.style.transform = 'translateX(16.5vw)';
                    break;
                case 4:
                    slideTransf.style.transform = 'translateX(-16vw)';
                    break;
                case 5:
                    slideTransf.style.transform = 'translateX(-48.5vw)';
                    break;
                case 6:
                    slideTransf.style.transform = 'translateX(-81vw)';
                    break;
                case 7:
                    slideTransf.style.transform = 'translateX(-113.5vw)';
                    break;
                case 8:
                    slideTransf.style.transform = 'translateX(-146vw)';
                    break;
                default:
                    slideTransf.style.transform = 'translateX(114vw)';
                    break;
            }
        } else {
            slide.id = 'c1';
            slide.style.transform = '';
        }
    });
}




function prevSlide() {
    currentIndex--;
    if (currentIndex  > 9 ) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = 8
    }
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.id = 'c2';
            switch (currentIndex) {
                case 1:
                    slideTransf.style.transform = 'translateX(81.5vw)';
                    break;
                case 2:
                    slideTransf.style.transform = 'translateX(49vw)';
                    break;
                case 3:
                    slideTransf.style.transform = 'translateX(16.5vw)';
                    break;
                case 4:
                    slideTransf.style.transform = 'translateX(-16vw)';
                    break;
                case 5:
                    slideTransf.style.transform = 'translateX(-48.5vw)';
                    break;
                case 6:
                    slideTransf.style.transform = 'translateX(-81vw)';
                    break;
                case 7:
                    slideTransf.style.transform = 'translateX(-113.5vw)';
                    break;
                case 8:
                    slideTransf.style.transform = 'translateX(-146vw)';
                    break;
                default:
                    slideTransf.style.transform = 'translateX(114vw)';
                    break;
            }
            console.log(currentIndex)
        } else {
            slide.id = 'c1';
            slide.style.transform = '';
        }
    })
}

function nextSlide() {
    slideAnimation()
}

function pauseSlide() {
    const pauseButton = document.getElementById('pauseButton');

    if (!isPaused) {
        clearInterval(intervalId);
        isPaused = true;
        pauseButton.classList.remove('fa-pause');
        pauseButton.classList.add('fa-play');
    } else {
        intervalId = setInterval(slideAnimation, 5000);
        isPaused = false;
        pauseButton.classList.remove('fa-play');
        pauseButton.classList.add('fa-pause');
    }
}

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const pauseButton = document.getElementById('pauseButton');

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
pauseButton.addEventListener('click', pauseSlide);

intervalId = setInterval(slideAnimation, 5000);

function inicio() {
    window.location.href = "../index.html";
}