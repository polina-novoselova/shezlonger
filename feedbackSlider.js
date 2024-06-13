// document.addEventListener('DOMContentLoaded', () => {
//   const slider = document.querySelector('.slider-inner');
//   const prevButton = document.querySelector('.prev');
//   const nextButton = document.querySelector('.next');
//   const totalItems = document.querySelectorAll('.feedback-item').length / 2; // Number of items in one row
//   let currentIndex = 0;

//   prevButton.addEventListener('click', () => {
//       currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
//       updateSlider();
//   });

//   nextButton.addEventListener('click', () => {
//       currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
//       updateSlider();
//   });

//   function updateSlider() {
//       const translateValue = -currentIndex * (document.querySelector('.feedback-item').clientWidth + 40); // 40px is the gap
//       document.querySelectorAll('.feedback-row').forEach(row => {
//           row.style.transform = `translateX(${translateValue}px)`;
//       });
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  const sliderInner = document.querySelector('.slider-inner');
  const feedbackRows = document.querySelectorAll('.feedback-row');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  feedbackRows.forEach(row => {
    const firstItem = row.children[0].cloneNode(true);
    const lastItem = row.children[row.children.length - 1].cloneNode(true);
    row.appendChild(firstItem);
    row.insertBefore(lastItem, row.children[0]);
  });

  let currentIndex = 1;
  const itemWidth = feedbackRows[0].children[0].offsetWidth + 40; // ширина элемента плюс gap
  
  feedbackRows.forEach(row => {
    row.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
  });

  function updateSlider() {
    feedbackRows.forEach(row => {
      row.style.transition = 'transform 0.5s ease';
      row.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    });
  }

  function handleTransitionEnd() {
    feedbackRows.forEach(row => {
      if (currentIndex === 0) {
        row.style.transition = 'none';
        currentIndex = row.children.length - 2;
        row.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
      } else if (currentIndex === row.children.length - 1) {
        row.style.transition = 'none';
        currentIndex = 1;
        row.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
      }
    });
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    }
    updateSlider();
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < feedbackRows[0].children.length - 1) {
      currentIndex++;
    }
    updateSlider();
  });

  feedbackRows.forEach(row => {
    row.addEventListener('transitionend', handleTransitionEnd);
  });
});
