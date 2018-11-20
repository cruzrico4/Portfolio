$(document).ready(function(){
  if ($(this).scrollTop() >= 200) {
      document.getElementById("top_arrow").style.filter = "opacity(1)";
      document.getElementById("top_arrow").style['pointer-events'] = "auto";
  } else {
      document.getElementById("top_arrow").style.filter = "opacity(0)";
      document.getElementById("top_arrow").style['pointer-events'] = "none";
  }
      $(window).scroll(function(){
        if ($(this).scrollTop() >= 200) {
            document.getElementById("top_arrow").style.filter = "opacity(1)";
            document.getElementById("top_arrow").style['pointer-events'] = "auto";
        } else {
            document.getElementById("top_arrow").style.filter = "opacity(0)";
            document.getElementById("top_arrow").style['pointer-events'] = "none";
        }
    });
    $('#top_arrow').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
});
