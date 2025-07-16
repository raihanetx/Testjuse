// Main JavaScript file
console.log("Welcome to the premium digital marketing agency website!");

// Kinetic typography animation
const kineticText = document.querySelector('.kinetic-text');
const textContent = kineticText.textContent;
kineticText.textContent = '';

for (let i = 0; i < textContent.length; i++) {
    const char = document.createElement('span');
    char.textContent = textContent[i];
    char.style.display = 'inline-block';
    kineticText.appendChild(char);
}

gsap.from('.kinetic-text span', {
    y: 100,
    opacity: 0,
    stagger: 0.05,
    ease: 'back.out(1.7)',
    duration: 1
});

// Animated stats counter
const statNumbers = document.querySelectorAll('.stat-number');

const animateStat = (element) => {
    const target = +element.getAttribute('data-target');
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            clearInterval(timer);
            current = target;
        }
        element.textContent = Math.floor(current);
    }, stepTime);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStat(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    observer.observe(stat);
});

// Before/after slider
const slider = document.querySelector('.before-after-slider');
const afterImage = slider.querySelector('img:last-child');

slider.addEventListener('mousemove', (e) => {
    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percentage = (x / width) * 100;
    afterImage.style.clipPath = `inset(0 0 0 ${percentage}%)`;
});

// Sticky CTA ribbon
const stickyCta = document.querySelector('.sticky-cta-ribbon');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        stickyCta.classList.add('visible');
    } else {
        stickyCta.classList.remove('visible');
    }
});

// Exit-intent popup
const exitIntentPopup = document.querySelector('.exit-intent-popup');
const closePopupButton = document.querySelector('.close-popup');

document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0) {
        exitIntentPopup.classList.add('visible');
    }
});

closePopupButton.addEventListener('click', () => {
    exitIntentPopup.classList.remove('visible');
});

// Smooth scrolling with GSAP
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray('section');
sections.forEach((section, i) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 100,
    duration: 1,
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: this.getAttribute('href')
            }
        });
    });
});

// Mega menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('click', () => {
    menuItems.classList.toggle('active');
});

// Dark mode toggle
const darkModeCheckbox = document.getElementById('dark-mode-checkbox');

darkModeCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Custom cursor
const cursor = document.querySelector('.custom-cursor');
const trail = document.querySelector('.custom-cursor.trail');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - scrollY)+"px; left: "+e.pageX+"px;")
    trail.setAttribute("style", "top: "+(e.pageY - scrollY)+"px; left: "+e.pageX+"px;")
});

// Parallax effects
gsap.to(".hero", {
  scrollTrigger: {
    trigger: ".hero",
    scrub: true
  },
  y: (i, target) => -ScrollTrigger.maxScroll(target) * 0.1,
  ease: "none"
});

gsap.to(".stat", {
  scrollTrigger: {
    trigger: ".stats",
    scrub: true
  },
  y: -100,
  stagger: 0.1
});

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#3E92CC"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#3E92CC",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
