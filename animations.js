// *----------------------------------------------* //
// *---------------  STICKY NAVBAR  --------------* //
// *----------------------------------------------* //


window.onscroll = function() {
    myFunction()
};
  
let navbar = document.getElementById("navbar");
let nextContent = document.getElementById("xp-location");
let topValue = navbar.offsetTop;

function myFunction() {
    console.log(window.pageYOffset);
    console.log(topValue);

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


// *----------------------------------------------* //
// *---------  MOUSEOVER PLAY YT VIDEOS  ---------* //
// *----------------------------------------------* //


let player;

let getId = function(id) { return document.getElementById(id); }
let getTag = function(tagname) { return document.getElementsByTagName(tagname); }

function onYouTubeIframeAPIReady() {

    let videos = getTag('iframe');
    let players = [];
    let playingId = null; 

    for (let i = 0; i < videos.length; i++)
    {
        let currentIframeId = videos[i].id;
        players[currentIframeId] = new YT.Player(currentIframeId);
        
        videos[i].onmouseover = function(event) {

            let currentHoveredElement = event.target;
            if (playingId) {
                players[playingId].pauseVideo();
            }

            players[currentHoveredElement.id].playVideo();
            playingId = currentHoveredElement.id;
        };
    }
}

onYouTubeIframeAPIReady();




/* 

TRIED TO STOP YOUTUBE VIDEO ON MOUSELEAVE

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
   let player;

   player = new YT.Player('player', {
       height: 'auto',
       weight: 'auto',
       videoId: 'rSVSUahmYLg',
       events: {
       'onReady': onPlayerReady,
       //'onStateChange': onPlayerStateChange
       },
       playerVars: { 'autoplay': 0, 'controls': 0, 'enablejsapi': 1, 'modestbranding': 1, 'playsinline': 1, 'showinfo': 0
       }   
   });
  }

let action = document.getElementById("player");

function onPlayerReady() {
   action.addEventListener("mouseenter", function(event) {
       event.target.playVideo(); 
   }); 

   action.addEventListener("mouseleave", function(event) {
       event.target.stopVideo(); 
   }); 
}   

*/