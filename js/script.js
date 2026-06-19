console.log("script loaded");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        const target =
            document.querySelector(
                this.getAttribute('href')
            );

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }

});

const reveals = document.querySelectorAll(".reveal");
console.log("Found reveal sections:", reveals.length);

function reveal() {
    console.log("Reveal function called");

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        console.log(top);

        const trigger = window.innerHeight - 100;

        if (top < trigger) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


document.querySelectorAll("a").forEach(link => {

    if(link.hostname === window.location.hostname){

        link.addEventListener("click", e => {

            const href = link.href;

            e.preventDefault();

            document.body.classList.add(
                "fade-out"
            );

            setTimeout(() => {

                window.location = href;

            }, 250);

        });

    }

});
