$(document).ready(function(){
  $("#get_color").click(function(event){
    event.preventDefault();

    var url = $(this).attr("href");

    $.post(url, function(response){
      $("#color_me li:nth-child(" + response.cell + ")").css("background-color", response.color)
    }, "json");
  });
});