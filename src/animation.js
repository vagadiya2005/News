// src/animations.js
export const initAnimations = () => {
    // Define the animations
    const animations = [
      {
        selector: '.fade-up',
        animation: 'fadeUp 1s ease-out'
      },
      {
        selector: '.fade-in',
        animation: 'fadeIn 1s ease-out'
      },
      {
        selector: '.slide-in',
        animation: 'slideIn 1s ease-out'
      },
      {
        selector: '.zoom-in',
        animation: 'zoomIn 1s ease-out'
      },
      {
        selector: '.bounce-in',
        animation: 'bounceIn 1s ease-out'
      },
      {
        selector: '.fade-in-slide-up',
        animation: 'fadeInSlideUp 1s ease-out'
      }
    ];
  
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const { target } = entry;
          animations.forEach((animation) => {
            if (target.matches(animation.selector)) {
              target.style.animation = animation.animation;
              target.classList.add('animated');
            }
          });
        }
      });
    }, { threshold: 0.2 }); // Trigger animation when 20% of the element is in view
  
    // Observe all elements with the specified selectors
    animations.forEach((animation) => {
      document.querySelectorAll(animation.selector).forEach((element) => {
        observer.observe(element);
      });
    });
  };
  