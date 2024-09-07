const sliders = document.querySelectorAll(".slider");
var counter = 0;
const slideInterval = 5000; // 5 seconds

sliders.forEach((slider, index) => {
    slider.style.left = `${index * 100}%`; // Use backticks for template literals
});



const goPrev=()=>{
    counter--
    if (counter < 0) counter = sliders.length - 1;
    slideimage()

}
const goNext=()=>{
    counter++
    if (counter >= sliders.length) counter = 0;
    slideimage()

}

const slideimage = ()=>{
    sliders.forEach(
        (slider)=>{
            slider.style.transform = `translateX(-${counter*100}%)` 
        }
        
    )
}

setInterval(goNext, slideInterval);