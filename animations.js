'use strict';


// *----------------------------------------------* //
// *---------------  STICKY NAVBAR  --------------* //
// *----------------------------------------------* //


window.onscroll = function() {
    myFunction()
};
  
let navbar = document.getElementById("navbar");
let nextContent = document.getElementById("experiences");
let topValue = navbar.offsetTop;

function myFunction() {

    if (window.pageYOffset >= topValue) {
        navbar.classList.add("sticky");
        nextContent.classList.add("without-navbar");
    }
    else {
        navbar.classList.remove("sticky");
        nextContent.classList.remove("without-navbar");
    }
}


// *----------------------------------------------* //
// *----------------  BURGER MENU  ---------------* //
// *----------------------------------------------* //


function displayBurger() {

    let navId = document.getElementById("navbar");

    if (navId.className === "topnav" || navId.className === "topnav sticky") {
        navId.className += " responsive";
    } else if (navId.className === "topnav sticky responsive") {
        navId.className = "topnav sticky";
    } else {
        navId.className = "topnav";
    }
} 


