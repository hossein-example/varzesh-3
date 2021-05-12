function topFunction() { //click top page
 
    $('html, body').animate({scrollTop:0}, 'slow');
}



var slideIndexOne = 1;

var myTimerOne;

var slideshowContainerOne;

window.addEventListener("load",function() {
    showSlidesOne(slideIndexOne);
    myTimerOne = setInterval(function(){plusSlidesOne(1)}, 3000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainerOne = document.getElementsByClassName('slideshow-one-containerOptions')[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainerOne = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainerOne.addEventListener('mouseenter', pauseOne)
    slideshowContainerOne.addEventListener('mouseleave', resumeOne)
})

// NEXT AND PREVIOUS CONTROL
function plusSlidesOne(n){
  clearInterval(myTimerOne);
  if (n < 0){
    showSlidesOne(slideIndexOne -= 1);
  } else {
   showSlidesOne(slideIndexOne += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimerOne = setInterval(function(){plusSlidesOne(n + 2)}, 3000);
  } else {
    myTimerOne = setInterval(function(){plusSlidesOne(n + 1)}, 3000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlideOne(n){
  clearInterval(myTimerOne);
  myTimerOne = setInterval(function(){plusSlidesOne(n + 1)}, 3000);
  showSlidesOne(slideIndexOne = n);
}

function showSlidesOne(n){
  var i;
  var slides = document.getElementsByClassName("slideshow-one-options");
  var dots = document.getElementsByClassName("slideshow-one-dote");
  if (n > slides.length) {slideIndexOne = 1}
  if (n < 1) {slideIndexOne = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeTwo", "");
  }
  slides[slideIndexOne-1].style.display = "block";
  dots[slideIndexOne-1].className += " activeTwo";
}

pauseOne = () => {
  clearInterval(myTimerOne);
}

resumeOne = () =>{
  clearInterval(myTimerOne);
  myTimerOne = setInterval(function(){plusSlidesOne(slideIndexOne)}, 3000);
}


















var slideIndexVidO = 1;

var myTimerVidO;

var slideshowContainerVidO;

window.addEventListener("load",function() {
    showSlidesVidO(slideIndexVidO);
    myTimerVidO = setInterval(function(){plusSlidesVideoOne(1)}, 3000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainerVidO = document.getElementsByClassName('slideshow-video-containerOptions')[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainerVidO = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainerVidO.addEventListener('mouseenter', pauseVidOne)
    slideshowContainerVidO.addEventListener('mouseleave', resumeVidOne)
})

// NEXT AND PREVIOUS CONTROL
function plusSlidesVideoOne(n){
  clearInterval(myTimerVidO);
  if (n < 0){
    showSlidesVidO(slideIndexVidO -= 1);
  } else {
   showSlidesVidO(slideIndexVidO += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimerVidO = setInterval(function(){plusSlidesVideoOne(n + 2)}, 3000);
  } else {
    myTimerVidO = setInterval(function(){plusSlidesVideoOne(n + 1)}, 3000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlideVideoOne(n){
  clearInterval(myTimerVidO);
  myTimerVidO = setInterval(function(){plusSlidesVideoOne(n + 1)}, 3000);
  showSlidesVidO(slideIndexVidO = n);
}

function showSlidesVidO(n){
  var i;
  var slides = document.getElementsByClassName("slideshow-video-optionsOne");
  var dots = document.getElementsByClassName("slideshow-video-doteOne");
  if (n > slides.length) {slideIndexVidO = 1}
  if (n < 1) {slideIndexVidO = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeOne", "");
  }
  slides[slideIndexVidO-1].style.display = "block";
  dots[slideIndexVidO-1].className += " activeOne";
}

pauseVidOne = () => {
  clearInterval(myTimerVidO);
}

resumeVidOne = () =>{
  clearInterval(myTimerVidO);
  myTimerVidO = setInterval(function(){plusSlidesVideoOne(slideIndexVidO)}, 3000);
}




















var slideIndexNewsPa = 1;

var myTimerNewsPa;

var slideshowContainerNewsPa;

window.addEventListener("load",function() {
    showSlidesNewsPa(slideIndexNewsPa);
    myTimerNewsPa = setInterval(function(){plusSportsNews(1)}, 3000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainerNewsPa = document.getElementsByClassName('sportsNewsPa-slides')[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainerNewsPa = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainerNewsPa.addEventListener('mouseenter', pauseNews)
    slideshowContainerNewsPa.addEventListener('mouseleave', resumeNews)
})

// NEXT AND PREVIOUS CONTROL
function plusSportsNews(n){
  clearInterval(myTimerNewsPa);
  if (n < 0){
    showSlidesNewsPa(slideIndexNewsPa -= 1);
  } else {
   showSlidesNewsPa(slideIndexNewsPa += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimerNewsPa = setInterval(function(){plusSportsNews(n + 2)}, 3000);
  } else {
    myTimerNewsPa = setInterval(function(){plusSportsNews(n + 1)}, 3000);
  }
}

//Controls the current slide and resets interval if needed
function currentSportsNews(n){
  clearInterval(myTimerNewsPa);
  myTimerNewsPa = setInterval(function(){plusSportsNews(n + 1)}, 3000);
  showSlidesNewsPa(slideIndexNewsPa = n);
}

function showSlidesNewsPa(n){
  var i;
  var slides = document.getElementsByClassName("sportsNewsPa-slidesOption");
  var dots = document.getElementsByClassName("sportsNewsPa-dote");
  if (n > slides.length) {slideIndexNewsPa = 1}
  if (n < 1) {slideIndexNewsPa = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeTwo", "");
  }
  slides[slideIndexNewsPa-1].style.display = "block";
  dots[slideIndexNewsPa-1].className += " activeTwo";
}

pauseNews = () => {
  clearInterval(myTimerNewsPa);
}

resumeNews = () =>{
  clearInterval(myTimerNewsPa);
  myTimerNewsPa = setInterval(function(){plusSportsNews(slideIndexNewsPa)}, 3000);
}






















var slideIndexVidT = 1;

var myTimerVidT;

var slideshowContainerVidT;

window.addEventListener("load",function() {
    showSlidesVidT(slideIndexVidT);
    myTimerVidT = setInterval(function(){plusSlidesVideoTwo(1)}, 3000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainerVidT = document.getElementsByClassName('slideshow-video-containerOptions')[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainerVidT = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainerVidT.addEventListener('mouseenter', pause)
    slideshowContainerVidT.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlidesVideoTwo(n){
  clearInterval(myTimerVidT);
  if (n < 0){
    showSlidesVidT(slideIndexVidT -= 1);
  } else {
   showSlidesVidT(slideIndexVidT += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimerVidT = setInterval(function(){plusSlidesVideoTwo(n + 2)}, 3000);
  } else {
    myTimerVidT = setInterval(function(){plusSlidesVideoTwo(n + 1)}, 3000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlideVideoTwo(n){
  clearInterval(myTimerVidT);
  myTimerVidT = setInterval(function(){plusSlidesVideoTwo(n + 1)}, 3000);
  showSlidesVidT(slideIndexVidT = n);
}

function showSlidesVidT(n){
  var i;
  var slides = document.getElementsByClassName("slideshow-video-optionsTwo");
  var dots = document.getElementsByClassName("slideshow-video-doteTwo");
  if (n > slides.length) {slideIndexVidT = 1}
  if (n < 1) {slideIndexVidT = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeTwo", "");
  }
  slides[slideIndexVidT-1].style.display = "block";
  dots[slideIndexVidT-1].className += " activeTwo";
}

pause = () => {
  clearInterval(myTimerVidT);
}

resume = () =>{
  clearInterval(myTimerVidT);
  myTimerVidT = setInterval(function(){plusSlidesVideoTwo(slideIndexVidT)}, 3000);
}














var slideIndexadsTwo = 1;

var myTimeradsTwo;

var slideshowContaineradsTwo;

window.addEventListener("load",function() {
    showSlidesadsTwo(slideIndexadsTwo);
    myTimeradsTwo = setInterval(function(){plusreadsTwo(1)}, 3000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContaineradsTwo = document.getElementsByClassName('recomContent-mainSlides')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContaineradsTwo = document.getElementsByClassName('slideshow-container')[0];

})

// NEXT AND PREVIOUS CONTROL
function plusreadsTwo(m){
  clearInterval(myTimeradsTwo);
  if (m < 0){
    showSlidesadsTwo(slideIndexadsTwo -= 1);
  } else {
   showSlidesadsTwo(slideIndexadsTwo += 1); 
  }

  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

  if (m === -1){
    myTimeradsTwo = setInterval(function(){plusreadsTwo(m + 2)}, 3000);
  } else {
    myTimeradsTwo = setInterval(function(){plusreadsTwo(m + 1)}, 3000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(m){
  clearInterval(myTimeradsTwo);
  myTimeradsTwo = setInterval(function(){plusreadsTwo(m + 1)}, 3000);
  showSlidesadsTwo(slideIndexadsTwo = m);
}

function showSlidesadsTwo(m){
  var i;
  var slides = document.getElementsByClassName("adsTwo-optionSlides");
  if (m > slides.length) {slideIndexadsTwo = 1}
  if (m < 1) {slideIndexadsTwo = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexadsTwo-1].style.display = "block";
}






var slideIndexadsOne = 1;

var myTimeradsOne;

var slideshowContaineradsOne;

window.addEventListener("load",function() {
    showSlidesadsOne(slideIndexadsOne);
    myTimeradsOne = setInterval(function(){plusreadsOne(1)}, 3000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContaineradsOne = document.getElementsByClassName('recomContent-mainSlides')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContaineradsOne = document.getElementsByClassName('slideshow-container')[0];

})

// NEXT AND PREVIOUS CONTROL
function plusreadsOne(m){
  clearInterval(myTimeradsOne);
  if (m < 0){
    showSlidesadsOne(slideIndexadsOne -= 1);
  } else {
   showSlidesadsOne(slideIndexadsOne += 1); 
  }

  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

  if (m === -1){
    myTimeradsOne = setInterval(function(){plusreadsOne(m + 2)}, 3000);
  } else {
    myTimeradsOne = setInterval(function(){plusreadsOne(m + 1)}, 3000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(m){
  clearInterval(myTimeradsOne);
  myTimeradsOne = setInterval(function(){plusreadsOne(m + 1)}, 3000);
  showSlidesadsOne(slideIndexadsOne = m);
}

function showSlidesadsOne(m){
  var i;
  var slides = document.getElementsByClassName("recomContent-optionSlides");
  if (m > slides.length) {slideIndexadsOne = 1}
  if (m < 1) {slideIndexadsOne = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexadsOne-1].style.display = "block";
}





var slideIndexadsThree = 1;

var myTimeradsThree;

var slideshowContaineradsThree;

window.addEventListener("load",function() {
    showSlidesadsThree(slideIndexadsThree);
    myTimeradsThree = setInterval(function(){plusreadsThree(1)}, 3000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContaineradsThree = document.getElementsByClassName('recomContent-mainSlides')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContaineradsThree = document.getElementsByClassName('slideshow-container')[0];

})

// NEXT AND PREVIOUS CONTROL
function plusreadsThree(m){
  clearInterval(myTimeradsThree);
  if (m < 0){
    showSlidesadsThree(slideIndexadsThree -= 1);
  } else {
   showSlidesadsThree(slideIndexadsThree += 1); 
  }

  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

  if (m === -1){
    myTimeradsThree = setInterval(function(){plusreadsThree(m + 2)}, 3000);
  } else {
    myTimeradsThree = setInterval(function(){plusreadsThree(m + 1)}, 3000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(m){
  clearInterval(myTimeradsThree);
  myTimeradsThree = setInterval(function(){plusreadsThree(m + 1)}, 3000);
  showSlidesadsThree(slideIndexadsThree = m);
}

function showSlidesadsThree(m){
  var i;
  var slides = document.getElementsByClassName("adsThree-optionSlides");
  if (m > slides.length) {slideIndexadsThree = 1}
  if (m < 1) {slideIndexadsThree = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexadsThree-1].style.display = "block";
}



var slideIndexadsFour = 1;

var myTimeradsFour;

var slideshowContaineradsFour;

window.addEventListener("load",function() {
    showSlidesadsFour(slideIndexadsFour);
    myTimeradsFour = setInterval(function(){plusreadsFour(1)}, 3000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContaineradsFour = document.getElementsByClassName('recomContent-mainSlides')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContaineradsFour = document.getElementsByClassName('slideshow-container')[0];

})

// NEXT AND PREVIOUS CONTROL
function plusreadsFour(m){
  clearInterval(myTimeradsFour);
  if (m < 0){
    showSlidesadsFour(slideIndexadsFour -= 1);
  } else {
   showSlidesadsFour(slideIndexadsFour += 1); 
  }

  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

  if (m === -1){
    myTimeradsFour = setInterval(function(){plusreadsFour(m + 2)}, 3000);
  } else {
    myTimeradsFour = setInterval(function(){plusreadsFour(m + 1)}, 3000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(m){
  clearInterval(myTimeradsFour);
  myTimeradsFour = setInterval(function(){plusreadsFour(m + 1)}, 3000);
  showSlidesadsFour(slideIndexadsFour = m);
}

function showSlidesadsFour(m){
  var i;
  var slides = document.getElementsByClassName("adsFour-optionSlides");
  if (m > slides.length) {slideIndexadsFour = 1}
  if (m < 1) {slideIndexadsFour = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexadsFour-1].style.display = "block";
}



var slideIndexadsFive = 1;

var myTimeradsFive;

var slideshowContaineradsFive;

window.addEventListener("load",function() {
    showSlidesadsFive(slideIndexadsFive);
    myTimeradsFive = setInterval(function(){plusreadsFive(1)}, 3000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContaineradsFive = document.getElementsByClassName('recomContent-mainSlides')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContaineradsFive = document.getElementsByClassName('slideshow-container')[0];

})

// NEXT AND PREVIOUS CONTROL
function plusreadsFive(m){
  clearInterval(myTimeradsFive);
  if (m < 0){
    showSlidesadsFive(slideIndexadsFive -= 1);
  } else {
   showSlidesadsFive(slideIndexadsFive += 1); 
  }

  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

  if (m === -1){
    myTimeradsFive = setInterval(function(){plusreadsFive(m + 2)}, 3000);
  } else {
    myTimeradsFive = setInterval(function(){plusreadsFive(m + 1)}, 3000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(m){
  clearInterval(myTimeradsFive);
  myTimeradsFive = setInterval(function(){plusreadsFive(m + 1)}, 3000);
  showSlidesadsFive(slideIndexadsFive = m);
}

function showSlidesadsFive(m){
  var i;
  var slides = document.getElementsByClassName("adsFive-optionSlides");
  if (m > slides.length) {slideIndexadsFive = 1}
  if (m < 1) {slideIndexadsFive = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexadsFive-1].style.display = "block";
}


var slideIndexadsSeven = 1;

var myTimeradsSeven;

var slideshowContaineradsSeven;

window.addEventListener("load",function() {
    showSlidesadsSeven(slideIndexadsSeven);
    myTimeradsSeven = setInterval(function(){plusreadsSeven(1)}, 3000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContaineradsSeven = document.getElementsByClassName('recomContent-mainSlides')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContaineradsSeven = document.getElementsByClassName('slideshow-container')[0];

})

// NEXT AND PREVIOUS CONTROL
function plusreadsSeven(m){
  clearInterval(myTimeradsSeven);
  if (m < 0){
    showSlidesadsSeven(slideIndexadsSeven -= 1);
  } else {
   showSlidesadsSeven(slideIndexadsSeven += 1); 
  }

  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

  if (m === -1){
    myTimeradsSeven = setInterval(function(){plusreadsSeven(m + 2)}, 3000);
  } else {
    myTimeradsSeven = setInterval(function(){plusreadsSeven(m + 1)}, 3000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(m){
  clearInterval(myTimeradsSeven);
  myTimeradsSeven = setInterval(function(){plusreadsSeven(m + 1)}, 3000);
  showSlidesadsSeven(slideIndexadsSeven = m);
}

function showSlidesadsSeven(m){
  var i;
  var slides = document.getElementsByClassName("adsSeven-optionSlides");
  if (m > slides.length) {slideIndexadsSeven = 1}
  if (m < 1) {slideIndexadsSeven = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexadsSeven-1].style.display = "block";
}



var j = 0;
function change() {
  var doc = document.getElementById("background");
  var color = ["#03b62a", "#17882f"];
  doc.style.backgroundColor = color[j];
  j = (j + 1) % color.length;
}
setInterval(change, 500);



