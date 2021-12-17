function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//meny2
function myFunction2() {
    document
        .getElementById("myDropdown2")
        .classList.toggle("show2");
}

//function toggleMenu(id) {
//    document.getElementById(id).classList.toggle("show");
//}

//close menu2
window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns =
            document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
    if (!event.target.matches(".dropbtn2")) {
        var dropdowns =
            document.getElementsByClassName("dropdown-content");
        var j;
        for (j = 0; j < dropdowns.length; j++) {
            var openDropdown = dropdowns[j];
            if (openDropdown.classList.contains("show2")) {
                openDropdown.classList.remove("show2");
            }
        }
    }
};