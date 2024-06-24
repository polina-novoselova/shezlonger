document.addEventListener('DOMContentLoaded', () => {
    let cleanupSlider;

    const initializeSlider = () => {
        const prevButton = document.querySelector('.gallery__control-prev');
        const nextButton = document.querySelector('.gallery__control-next');
        const slidesContainer = document.querySelector('.gallery__slides');
        const slides = Array.from(slidesContainer.children);
        const numClones = 4; // Number of slides to clone at each end

        let currentIndex = numClones;
        let isTransitioning = false;

        const cloneSlides = () => {
            for (let i = 0; i < numClones; i++) {
                const firstClone = slides[i].cloneNode(true);
                const lastClone = slides[slides.length - 1 - i].cloneNode(true);

                firstClone.classList.add('clone');
                lastClone.classList.add('clone');

                slidesContainer.appendChild(firstClone);
                slidesContainer.insertBefore(lastClone, slides[0]);
            }
        };

        const updateSliderPosition = (instant = false) => {
            const slideWidth = updatedSlides[0].offsetWidth;
            slidesContainer.style.transition = instant ? 'none' : 'transform 0.5s ease';
            slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        };

        const handleTransitionEnd = () => {
            const slideWidth = updatedSlides[0].offsetWidth;
            if (updatedSlides[currentIndex].classList.contains('clone')) {
                slidesContainer.style.transition = 'none';
                if (currentIndex < numClones) {
                    currentIndex = updatedSlides.length - numClones * 2;
                } else if (currentIndex >= updatedSlides.length - numClones) {
                    currentIndex = numClones;
                }
                slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            }
            isTransitioning = false; // Allow new transitions
        };

        const handlePrevClick = () => {
            if (isTransitioning) return; // Prevent action if a transition is in progress
            isTransitioning = true;
            currentIndex--;
            updateSliderPosition();
        };

        const handleNextClick = () => {
            if (isTransitioning) return; // Prevent action if a transition is in progress
            isTransitioning = true;
            currentIndex++;
            updateSliderPosition();
        };

        cloneSlides();

        // Update the slides array
        const updatedSlides = Array.from(slidesContainer.children);

        slidesContainer.addEventListener('transitionend', handleTransitionEnd);
        prevButton.addEventListener('click', handlePrevClick);
        nextButton.addEventListener('click', handleNextClick);

        // Initial position adjustment
        updateSliderPosition(true);

        // Adjust position on window resize
        window.addEventListener('resize', () => updateSliderPosition(true));

        return () => {
            // Cleanup function to remove event listeners and reset styles
            slidesContainer.removeEventListener('transitionend', handleTransitionEnd);
            prevButton.removeEventListener('click', handlePrevClick);
            nextButton.removeEventListener('click', handleNextClick);
            window.removeEventListener('resize', () => updateSliderPosition(true));
            slidesContainer.style.transition = 'none';
            slidesContainer.style.transform = 'none';
        };
    };

    const handleResize = () => {
        if (window.innerWidth > 450) {
            if (!cleanupSlider) {
                cleanupSlider = initializeSlider();
            }
        } else {
            if (cleanupSlider) {
                cleanupSlider();
                cleanupSlider = null;
            }
        }
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();
});

