function setCarousel(allElements, index = 0) {
    // function fnLeft() {
    //     allElements[index].style.display = "none"
    //     index = index === 0 ? allElements.length - 1 : index - 1
    //     allElements[index].style.display = "initial"
    // }
    //
    // function fnRight() {
    //     const testimonialsContainer = document.querySelector('.testinomials');
    //     // Temporarily remove the class to reset the animation
    //     testimonialsContainer.classList.remove('animate');
    //     void testimonialsContainer.offsetWidth; // Trigger a DOM reflow to reset the animation
    //     testimonialsContainer.classList.add('animate');
    //
    //     allElements[index].style.display = "none";
    //     index = (index + 1) % allElements.length;
    //     allElements[index].style.display = "initial";
    // }

    function fnLeft() {
        //allElements[1].style.translate = "-100%";
        index = (index + 1) % allElements.length
        for (let i = 0; i < allElements.length; i++) {
            allElements[i].style.translate = `-${index * 100}%`;
            allElements[i].style.opacity = 0;// Applying the transform property
        }
        allElements[index].style.opacity = 1;
        // index = index === 0 ? allElements.length - 1 : index - 1
        // allElements[index].style.display = "initial"
        //allElements.forEach((el) => {el.style.translate = "-100%"})
    }

    function fnRight() {
        index = index === 0 ? allElements.length - 1 : index - 1
        for (let i = 0; i < allElements.length; i++) {
            allElements[i].style.translate = `-${index * 100}%`;
            allElements[i].style.opacity = 0;// Applying the transform property
        }
        allElements[index].style.opacity = 1;
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