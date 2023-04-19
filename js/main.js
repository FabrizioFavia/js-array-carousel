let nextBtn = document.getElementById("buttonRight");
let backBtn = document.getElementById("buttonLeft");

var slideContainer = document.getElementById("imgBox");
let slideElements = document.getElementsByClassName("slide")
let slideArray = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
let currentSlide = 0;

for (let i = 0; i < slideArray.length; i++) {

    if (i == 0) {
        let x = document.createElement("img");
        x.src = `../img/${slideArray[i]}`;
        x.className = "slide";
        slideContainer.append(x);
    } else {
        let x = document.createElement("img");
        x.src = `../img/${slideArray[i]}`;
        x.className = "slide hidden";
        slideContainer.append(x);
    }
}

nextBtn.addEventListener("click", function () {

    if (currentSlide < 4) {


        for (let i = 0; i < slideElements.length; i++) {
            const element = slideElements[i];

            if (i == currentSlide + 1) {
                element.classList.remove("hidden");
            } else {
                element.classList.add("hidden");
            }
        }
        currentSlide++
    
    }

});

backBtn.addEventListener("click", function () {

    if(currentSlide>0){
    for (let i = 0; i < slideElements.length; i++) {
        const element = slideElements[i];

        if (i == currentSlide - 1) {
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden");
        }
    }
    currentSlide--;
} 

});






