let nav = document.getElementById("header");
let section = document.querySelector(".about");
let logo = document.getElementById("logo");
let items = document.querySelectorAll(".navbar-nav li a");
let spans = document.querySelectorAll(".skill-progress span");
let buttonBars = document.querySelector("#bars-icon img");

// Nav
window.addEventListener("scroll", function(){
    if(window.scrollY >= section.offsetTop){
        nav.classList.add("position-fixed");
        nav.style.backgroundColor="#fff" ;
        nav.style.boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px";
        logo.style.color="#1c1c1c";
        buttonBars.src = "/images/barsDark.png"
        items.forEach(item => {
            item.style.color ="#1c1c1c";
            item.classList.add("scrolled")
        });
        spans.forEach(span => {
            span.style.width = span.dataset.width;
        });
        
    }else{
        nav.classList.remove("position-fixed");
        nav.style.backgroundColor="transparent";
        nav.style.boxShadow="none";
        logo.style.color="#fff";
        buttonBars.src = "/images/bars-icon.jpg";
          items.forEach(item => {
            item.style.color ="#fff";
            item.classList.remove("scrolled");
            item.classList.add("scroll-color");
        });        
    }
})
// Typed Js
const options = {
    strings: ["Larry Daniels", "Developer","Designer"],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
};

const typed = new Typed("#typed-output", options);

//Progress
let nums = document.querySelectorAll(".num");
  let workStatus = document.getElementById("progress");
  let started = false;
  let duration = 2000; 

  window.addEventListener("scroll", () => {
    if (window.scrollY >= workStatus.offsetTop - 300) {
      if (!started) {
        nums.forEach((num) => {
          startCount(num);
        });
      }
      started = true;
    }
  });

  function startCount(el) {
    let goal = parseInt(el.dataset.goal);
    let startTime = 0; 

    function updateCount(timestamp) {
      if (!startTime) startTime = timestamp; 
      let progress = Math.min((timestamp - startTime) / duration, 1);
      let currentValue = Math.floor(progress * goal); 

      el.textContent = currentValue;

      if (currentValue < goal) {
        requestAnimationFrame(updateCount);
      }
    }

    requestAnimationFrame(updateCount);
  }

  // Loader

  window.addEventListener("load", () => {
    const myLoaderBG = document.querySelector(".loader-container");
    const myLoader = document.querySelector(".loader");

    AOS.init({
      duration: 1200,
    });
    
    setTimeout(() => {
        myLoaderBG.classList.add("loader-hidden");
        myLoaderBG.addEventListener("transitionend", () => {
            myLoader.remove();
        });
    }, 2000);
});

// Modal
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    const modalImage = document.querySelector(".modal-img");
    if (modalImage) {
      modalImage.src = src;
      const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
      myModal.show();
    } else {
      console.error("Modal image element not found.");
    }
    const images = Array.from(document.querySelectorAll('.gallery-item'));
    const index = images.findIndex(img => img.getAttribute('src') === src);

    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, idx) => {
      const img = item.querySelector('.modal-img');
      img.src = images[idx % images.length].getAttribute('src');
    });

    carouselItems.forEach((item, idx) => {
      item.classList.remove('active');
      if (idx === index) {
        item.classList.add('active');
      }
    });

    const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
    myModal.show();
  }
});

// SCROLL ARROW UP
let spanUp = document.getElementById("top");

window.addEventListener("scroll", function(){
  AOS.refresh();
  if(window.scrollY > 300){
    spanUp.classList.add("show")
  }else{
    spanUp.classList.remove("show")
  }
})

spanUp.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
})



