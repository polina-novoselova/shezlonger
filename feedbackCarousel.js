// document.addEventListener("DOMContentLoaded", () => {
//     const feedback = document.querySelector(".feedback");
//     const items = document.querySelectorAll(".feedback-item");

//     let position = 0;
//     const speed = 1; // Скорость движения
//     const itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(items[0]).marginRight);

//     // Копируем первый элемент в конец, чтобы создать эффект бесконечной карусели
//     feedback.appendChild(feedback.firstElementChild.cloneNode(true));

//     const moveCarousel = () => {
//         position -= speed;

//         if (Math.abs(position) >= itemWidth) {
//             position += itemWidth;
//             feedback.style.transition = "none"; // Убираем переход, чтобы карусель сразу сместилась
//             feedback.style.transform = `translateX(${-position}px)`;

//             setTimeout(() => {
//                 feedback.style.transition = ""; // Возвращаем переход после смещения
//             }, 0);
//         } else {
//             feedback.style.transform = `translateX(${-position}px)`;
//         }

//         requestAnimationFrame(moveCarousel);
//     };

//     moveCarousel();
// });

document.addEventListener("DOMContentLoaded", () => {
    const feedback = document.querySelector(".feedback");
    const items = document.querySelectorAll(".feedback-item");
    const totalWidth = feedback.clientWidth; // Общая ширина контейнера .feedback
    const itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(items[0]).marginRight);
    
    let position = 0;
    const speed = 1; // Скорость движения
    
    // Добавляем копию первого элемента в конец, чтобы создать эффект бесконечной карусели
    feedback.appendChild(items[0].cloneNode(true));
    
    const moveCarousel = () => {
        position -= speed;
        
        if (Math.abs(position) >= itemWidth) {
            position += itemWidth;
            feedback.appendChild(feedback.firstElementChild); // Перемещаем первый элемент в конец
        }
        
        feedback.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveCarousel);
    };
    
    moveCarousel();
});
