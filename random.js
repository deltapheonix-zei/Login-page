
var preloader = document.getElementById('loading');
function myFun(){
  preloader.style.display = 'none';
}

function randomImage(){
    var images = [
     '1.jpg',
     '2.jpg',
     '3.jpg',
     '4.jpg',
     '5.jpg',
     '6.jpg',
     '7.jpg',
     '8.jpg',
     '9.jpg',
     '10.jpg',
     '11.jpg',
     '12.jpg',
     '13.jpg',
     '14.jpg',
     '15.jpg',
     '16.jpg',
     '17.jpg'];
    var size = images.length;
    var x = Math.floor(size * Math.random());
    console.log(x);
    var element = document.getElementsByClassName('random-bg');
    console.log(element);
    element[0].style["background-image"] = "url("+ images[x] + ")";
  }
  
  document.addEventListener("DOMContentLoaded", randomImage);