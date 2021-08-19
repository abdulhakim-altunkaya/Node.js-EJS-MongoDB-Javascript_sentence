$(document).ready(function(){
  $(".inputAreas2").click(function(){
    $(".dropdown-content").slideToggle(250);
  });

  if($( window ).width() < 960){
      $("#buttonSpace").remove();
  }
});
