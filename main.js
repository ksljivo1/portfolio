document.querySelector("#scroll-down").addEventListener("click", () => {
    window.scrollTo({
        top: document.querySelector("#about-me").offsetTop - 20,
    });
});

document.querySelector("#toggle-theme").addEventListener("click", () => {
    document.documentElement.classList.toggle("light-theme");
});

const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if (prefersLight) {
    document.documentElement.classList.add("light-theme");
}

function setCarousel(allElements, index = 0) {
    function fnLeft() {
        console.log("radi li ovo")
        index = (index + 1) % allElements.length
        for (let i = 0; i < allElements.length; i++) {
            allElements[i].style.translate = `-${index * 100}%`
            allElements[i].style.opacity = "0"
        }
        allElements[index].style.opacity = "1"
    }

    function fnRight() {
        index = index === 0 ? allElements.length - 1 : index - 1
        for (let i = 0; i < allElements.length; i++) {
            allElements[i].style.translate = `-${index * 100}%`
            allElements[i].style.opacity = "0"
        }
        allElements[index].style.opacity = "1"
    }

    return {
        left: fnLeft,
        right: fnRight
    }
}

window.onload = function () {
    const carousel = setCarousel(document.getElementsByClassName("testimonial"))
    document.getElementById("left-button").addEventListener("click", function (event) {
        carousel.left()
    })
    document.getElementById("right-button").addEventListener("click", function (event) {
        carousel.right()
    })
}