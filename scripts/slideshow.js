// ORIGINAL
$(document).ready(function() {
  var images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
  ];

  var currentIndex = 0;


  // When the next button is clicked
  $("#slideshowNext").click(function () {
    currentIndex = (currentIndex+1)%(images.length);
    document.getElementById("slideshowImage").src=images[currentIndex];
  });

  $("#slideshowPrevious").click(function () {

    if(currentIndex > 0){
      currentIndex = (currentIndex-1)%(-(images.length));
    }

    else{
      currentIndex = images.length-1;
    }

    document.getElementById("slideshowImage").src=images[currentIndex];
  });

//
//   function slideshowing ()  {
//     currentIndex = (currentIndex+1)%(images.length);
//     $("#slideshowImage").attr('src',images[currentIndex]);
// }
//
//
// setInterval(function(){slideshowing();}, 3000);

});
