//登入/註冊 // Get the modal------------------------------------------------------------------------------
var modal1, modal2 = document.getElementById('id01');

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

    document.body.style.backgroundColor = "none";
}

function closelist() {
    document.getElementById("my-list").style.display = "none";
}