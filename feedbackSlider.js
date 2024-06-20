// const ACTIVE_SLIDE_CLASSNAME = 'gallery__slide_active';

// const slidesNodes = Array.from(document.querySelectorAll('.gallery__slide'));
// console.log(slidesNodes);
// const prevButtonNode = document.querySelector('.gallery__control-prev');
// const nextButtonNode = document.querySelector('.gallery__control-next');
// let activeId;

// init();

// function init() {
//     activeId = 0;
    
//     prevButtonNode.addEventListener('click', () => {
//         setActiveSlideById(getPrevId());
//     });
    
//     nextButtonNode.addEventListener('click', () => {
//         setActiveSlideById(getNextId());
//     });
// }

// function setActiveSlideById(id) {
//     const currentId = activeId;
//     activeId = id;

//     slidesNodes[currentId].classList.remove(ACTIVE_SLIDE_CLASSNAME)
//     slidesNodes[activeId].classList.add(ACTIVE_SLIDE_CLASSNAME)
// }

// function getPrevId() {
//     return activeId === 0 ? slidesNodes.length - 1 : activeId - 1;
// }

// function getNextId() {
//     return activeId === (slidesNodes.length - 1) ? 0: activeId + 1;
// }

// const ACTIVE_SLIDE_CLASSNAME = 'gallery__slide_active';

// const slidesContainer = document.querySelector('.gallery__slides');
// let slidesNodes = Array.from(document.querySelectorAll('.gallery__slide'));
// const prevButtonNode = document.querySelector('.gallery__control-prev');
// const nextButtonNode = document.querySelector('.gallery__control-next');
// let activeIndex = 0;

// init();

// function init() {
//     setInitialPositions();
//     prevButtonNode.addEventListener('click', () => moveSlides('prev'));
//     nextButtonNode.addEventListener('click', () => moveSlides('next'));
// }

// function setInitialPositions() {
//     slidesNodes.forEach((slide, index) => {
//         slide.style.transition = 'none';
//         slide.style.transform = `translateX(${index * 100}%)`;
//     });
// }

// function moveSlides(direction) {
//     slidesNodes.forEach(slide => slide.style.transition = 'transform 0.5s ease');

//     if (direction === 'next') {
//         slidesNodes.forEach((slide, index) => {
//             slide.style.transform = `translateX(${(index - 1) * 100}%)`;
//         });
//         setTimeout(() => {
//             const firstSlide = slidesNodes.shift();
//             slidesNodes.push(firstSlide);
//             slidesContainer.appendChild(firstSlide);
//             setInitialPositions();
//         }, 500); // Duration of the CSS transition
//     } else {
//         slidesNodes.forEach((slide, index) => {
//             slide.style.transform = `translateX(${(index + 1) * 100}%)`;
//         });
//         setTimeout(() => {
//             const lastSlide = slidesNodes.pop();
//             slidesNodes.unshift(lastSlide);
//             slidesContainer.insertBefore(lastSlide, slidesNodes[0]);
//             setInitialPositions();
//         }, 500); // Duration of the CSS transition
//     }
// }


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });