// ORIGINAL
$(document).ready(function() {
  var images = [
    "images/gal1.jpg",
    "images/gal2.jpg",
    "images/gal3.jpg",
    "images/gal4.jpg",
    "images/gal5.jpg",
    "images/gal6.jpg",
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
