function showSideBar() {
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = "flex";
}

function hideSideBar() {
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = "none";
}


// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.querySelectorAll(".mySlides");
//     if(n > slides.length) {
//         slideIndex = 1;
//     }

//     if(n < 1) {
//         slideIndex = slides.length;
//     }

//     for(i=0; i<slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slides[slideIndex-1].style.display = "block";
// }


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length)
   {
    slideIndex = 1
}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}