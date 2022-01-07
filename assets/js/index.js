


//浮動目錄------------------------------------------------------------------------------------------------
// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 200) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("navbar").style.top = "-100px";
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

//登入/註冊 // Get the modal------------------------------------------------------------------------------
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function show_hide() {
    var login = document.getElementById("from-all-1");
    var signup = document.getElementById("from-all-2");


    if (login.style.display === "none") {
        login.style.display = "block";  //lonin出現
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        signup.style.display = "none";  //signup消失

    } else {
        login.style.display = "none";   //login消失
        signup.style.display = "block"; //signup出現
        signup.style.visibility = "visible";


    }
}


//購物車拉開
function openNav() {
    document.getElementById("mySidenav").style.width = "400px";

    //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

    document.body.style.backgroundColor = none;
}

function closelist() {
    document.getElementById("my-list").style.display = "none";
}

//動態廣告-------------------------------------------------------------------------------------------------
//var slideIndex = 0;
//
//function showSlides() {
//    var slides = document.getElementsByClassName("mySlides");
//    var i;
//    for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }

//    slideIndex++;
//   if (slideIndex > slides.length) { slideIndex = 1 }
//    slides[slideIndex - 1].style.display = "block";
//    setTimeout(showSlides, 1000); 
//}


//$('.slideshow-container').slick({
//
//     infinite: true,
//  slidesToShow: 1,
//  autoplay:true,
//  slidesToScroll: 1,
//  autoplaySpeed: 3000,

//     centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 1,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
//  });

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2400); // Change image every 2 seconds
}


//section-3 NEW GOODS--------------------------------------------
var slideIndex = 1;
showSlidesss(slideIndex);

function plusSlides(n) {
    showSlidesss(slideIndex += n);
}

function currentSlide(n) {
    showSlidesss(slideIndex = n);
}

function showSlidesss(n) {
    var i;
    var slidesss = document.getElementsByClassName("mySlidesss");
    var dottts = document.getElementsByClassName("dottt");
    if (n > slidesss.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slidesss.length }
    for (i = 0; i < slidesss.length; i++) {
        slidesss[i].style.display = "none";
    }
    for (i = 0; i < dottts.length; i++) {
        dottts[i].className = dottts[i].className.replace(" active", "");
    }
    slidesss[slideIndex - 1].style.display = "block";
    dottts[slideIndex - 1].className += " active";
}
