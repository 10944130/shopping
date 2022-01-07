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

    /*document.body.style.backgroundColor = "none";*/
}

function closelist() {
    document.getElementById("my-list").style.display = "none";
}


//會員=--------------------------------------------------------------------------------------------------------

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}



//動態廣告-------------------------------------------------------------------------------------------------
//var slideIndex = 0;
//showSlides();
//function showSlides() {
//    var i;
//    var slides = document.getElementsByClassName("mySlides");
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    slideIndex++;
//    if (slideIndex > slides.length) { slideIndex = 1 }
//    slides[slideIndex - 1].style.display = "block";
//    setTimeout(showSlides, 3600); // Change image every 4 seconds
//}


//顫抖member按鈕--------------------------------------------------------------------------------------------------
var rector = 5
var stopit = 0
var a = 1
function init(which) {
    stopit = 0
    shake = which
    shake.style.left = 0
    shake.style.top = 0
}
function rattleimage() {
    if ((!document.all && !document.getElementById) || stopit == 1)
        return
    if (a == 1) {
        shake.style.top = parseInt(shake.style.top) + rector
    }
    else if (a == 2) {
        shake.style.left = parseInt(shake.style.left) + rector
    }
    else if (a == 3) {
        shake.style.top = parseInt(shake.style.top) - rector
    }
    else {
        shake.style.left = parseInt(shake.style.left) - rector
    }
    if (a < 4)
        a++
    else
        a = 1
    setTimeout("rattleimage()", 50)
}
function stoprattle(which) {
    stopit = 1
    which.style.left = 0
    which.style.top = 0
}
