// When the document is ready
$(document).ready(function() {
  var dropOpen = true;
  var dropOpen2 = false;
  // When the rooms nav item is clicked
  $("#nav2dropItem").hover(function () {

    if(dropOpen ){
      dropOpen=false;

      $("#prod2Dropdown").removeClass("hidden");
    }else{
      dropOpen=true;
      $("#prod2Dropdown").addClass("hidden");

    }
    $("#prod2Dropdown").hover(function () {

      if(dropOpen2 ){
        dropOpen2=false;
        $("#prod2Dropdown").removeClass("hidden");
      }else{
        dropOpen2=true;
        $("#prod2Dropdown").addClass("hidden");

      }
});
  });
});
