var MenuIcon = document.querySelector(".menu-icon");
var SideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container");


MenuIcon.onclick = function(){
    SideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}