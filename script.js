let slideIndex = 0

const slides = document.querySelectorAll(".slide")

function showSlide(index){

slides.forEach((slide)=>{

slide.classList.remove("active")

})

slides[index].classList.add("active")

}

function nextSlide(){

slideIndex++

if(slideIndex >= slides.length){

slideIndex = 0

}

showSlide(slideIndex)

}

function prevSlide(){

slideIndex--

if(slideIndex < 0){

slideIndex = slides.length - 1

}

showSlide(slideIndex)

}

document.addEventListener("keydown",(e)=>{

if(e.key === "ArrowRight"){

nextSlide()

}

if(e.key === "ArrowLeft"){

prevSlide()

}

})

// ===== MEMBERI WARNA PADA TITIK =====

function colorDots(){

const elements = document.querySelectorAll("p, li")

elements.forEach(el=>{

let text = el.innerHTML

text = text.replace(/\./g,'<span class="dot">.</span>')

el.innerHTML = text

})

}

colorDots()



