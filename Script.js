let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search")
// <i class='bx bx-x'></i>
searchBox.addEventListener("click", ()=>{
 navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
      searchBox.classList.replace("bx-search" ,"bx-x")
    }else {
      searchBox.classList.replace("bx-x" ,"bx-search")
    }
})


// sidebar open close js Code
let menuopenBtn = document.querySelector(".navbar .bx-menu");
let CloseopenBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");

menuopenBtn.addEventListener("click", ()=>{
   navLinks.style.left= "0";
});
CloseopenBtn.addEventListener("click", ()=>{
    navLinks.style.left= "-100%";
});

// sidebar sub menu open close js code

let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show1");
});
let moreArrow = document.querySelector(".more-arrow");
moreArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show2");
});
let jsArrow = document.querySelector(".js-arrow");
jsArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show3");
});

