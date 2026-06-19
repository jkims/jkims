document.querySelectorAll(".slideshow").forEach(slideshow => {

    const slides = slideshow.querySelectorAll(".slide");
    const prevBtn = slideshow.querySelector(".prev");
    const nextBtn = slideshow.querySelector(".next");

    let index = 0;

    function showSlide(i){
        slides.forEach(s => s.classList.remove("active"));
        slides[i].classList.add("active");
    }

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

});