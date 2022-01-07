function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



/*數量*/
function Add() {
    var num = parseInt(document.getElementById('itemcount').innerText);
    num++;
    document.getElementById('itemcount').innerText = num.toString();
    ProductNumberChange();
}

function Less() {
    var num = parseInt(document.getElementById('itemcount').innerText);
    if (num > 1) {
        num--;
        document.getElementById('itemcount').innerText = num.toString();
        ProductNumberChange();
    } else {
        Delete()
    }
}
/*購物車
function AddtoShoppingCart() {
    event.preventDefault();
    var input = parseInt(document.getElementById('itemcount').innerHTML);
    document.getElementById('shopping-cart-count').setAttribute('data-count', input + parseInt(document
        .getElementById('shopping-cart-count').getAttribute('data-count')));
}*/