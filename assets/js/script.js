    var countDownDate = new Date("Oct 26, 2023 09:00:00").getTime();
    var countdownfunction = setInterval(function() {
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
        document.getElementById("countdown").innerHTML = "😝 EVENTO EM ANDAMENTO 😝";
        }
    }, 1000);

    function aumentarFonte() {
        let elementos = document.querySelectorAll('body *');
        for (let i = 0; i < elementos.length; i++) {
            let estilo = window.getComputedStyle(elementos[i]);
            let tamanhoAtual = parseFloat(estilo.fontSize);
            elementos[i].style.fontSize = (tamanhoAtual + 1) + 'px';
        }
    }
  
    function diminuirFonte() {
        let elementos = document.querySelectorAll('body *');
        for (let i = 0; i < elementos.length; i++) {
            let estilo = window.getComputedStyle(elementos[i]);
            let tamanhoAtual = parseFloat(estilo.fontSize);
            elementos[i].style.fontSize = (tamanhoAtual - 1) + 'px';
        }
    }

    const slides = document.querySelector('#slide');
    const slideWidth = slides.clientWidth;
    let isPaused = false;
    let intervalId;
    let currentIndex = 0;
    
    function slideAnimation() {
        currentIndex++;
        if (currentIndex >= slides.children.length) {
            currentIndex = 0;
            slides.style.transition = 'none';
            slides.style.transform = 'translateX(0)';
        } else {
            slides.style.transition = 'transform 1s';
            slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
        }
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
        currentIndex = slides.children.length - 1;
            slides.style.transition = 'none';
            slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
        } else {
            slides.style.transition = 'transform 1s';
            slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
        }
    }

    function nextSlide() {
        slideAnimation();
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

    var audio = document.getElementById("audioPlayer");
    var progressBar = document.getElementById("progress");
    var playButton = document.getElementById("playButton");

    function playPause() {
        if (audio.paused) {
            audio.play();
            playButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            playButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    }

    audio.addEventListener("timeupdate", updateProgress);

    function updateProgress() {
        var progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = progress + "%";
    }

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const pauseButton = document.getElementById('pauseButton');

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    pauseButton.addEventListener('click', pauseSlide);

    intervalId = setInterval(slideAnimation, 5000);
    
    document.getElementById('btnAumentar').addEventListener('click', aumentarFonte);
    document.getElementById('btnDiminuir').addEventListener('click', diminuirFonte);