var image = document.querySelectorAll('.Image-wrapper img');
var imagedown = document.querySelectorAll('.Image-wrapperdown img');

var imagewrapper = document.getElementById('image-wrapper');
var imagewrapperdown = document.getElementById('image-wrapperdown');

var previousButton = document.getElementById('previous');
var nextButton = document.getElementById('next');
var previousButtonDown = document.getElementById('previousone');
var nextButtonDown = document.getElementById('nextone');

var index = 1;
var indexdown = 1;
var imageSize = image[0].width;
var imageSizedown = imagedown[0].width;

var imageTransition = index * - imageSize;
var imageTransitiondown = index * - imageSizedown;

var stopinterval;
var stopintervaldown;

window.onload = function() {
  stopinterval = setInterval(animate,3000);
  // stopintervaldown = setInterval(animatedown,3000);

}

function startSlider() {
  if (stopinterval === null) {
    stopinterval = setInterval(animate,3000);
  }
}

function stopSlider() {
  if (stopinterval) {
    clearInterval(stopinterval);
    stopinterval = null;
  }
}

var animate=()=>{
    imageTransition = index * - imageSize;
    imagewrapper.style.marginLeft = imageTransition + 'px';
    index ++;
    checkCounter();

}

nextButton.addEventListener('click',() =>{
  imageTransition = index * - imageSize;
  imagewrapper.style.marginLeft =imageTransition + 'px'  ;
  index++;

  checkCounter();
});

previousButton.addEventListener('click',()=>{
  index--;
  imagewrapper.style.marginLeft = parseInt(imagewrapper.style.marginLeft) + imageSize + 'px'  ;

  checkCounter();
});

let checkCounter=()=>{
  if(index>image.length){
    index=1;
    imagewrapper.style.marginLeft=`0px`;
  }

if(index<1){
  index=image.length;
  imagewrapper.style.marginLeft=`-${imageSize*(index-1)}px`;
  }
}


// function startSliderdown() {
//   if (stopintervaldown === null) {
//     stopintervaldown = setInterval(animatedown,3000);
//   }
// }
//
// function stopSliderdown() {
//   if (stopintervaldown) {
//     clearInterval(stopintervaldown);
//     stopintervaldown = null;
//   }
// }
//
// var animatedown=()=>{
//     imageTransitiondown = indexdown * - imageSizedown;
//     imagewrapperdown.style.marginLeft = imageTransitiondown + 'px';
//     indexdown ++;
//     checkCounterDown();
//
// }

nextButtonDown.addEventListener('click',() =>{
  imageTransitiondown = indexdown * - imageSizedown;
  imagewrapperdown.style.marginLeft =imageTransitiondown + 'px'  ;
  indexdown++;

  checkCounterDown();
});

previousButtonDown.addEventListener('click',()=>{
  indexdown--;
  imagewrapperdown.style.marginLeft = parseInt(imagewrapperdown.style.marginLeft) + imageSizedown + 'px'  ;

  checkCounterDown();
});

let checkCounterDown=()=>{
  if(indexdown > imagedown.length){
    indexdown = 1;
    imagewrapperdown.style.marginLeft=`0px`;
  }

if(indexdown < 1){
  indexdown = imagedown.length;
  imagewrapperdown.style.marginLeft=`-${imageSizedown*(indexdown-1)}px`;
  }
}
