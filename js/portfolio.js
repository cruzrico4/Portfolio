//var timer = setInterval(typeFlash, 10);

$(document).ready(function(){
  if (window.pageYOffset >= 200) {
      document.getElementById("top_arrow").style.filter = "opacity(1)";
      document.getElementById("top_arrow").style["pointer-events"] = "auto";
  } else {
      document.getElementById("top_arrow").style.filter = "opacity(0)";
      document.getElementById("top_arrow").style["pointer-events"] = "none";
  }
      $(window).scroll(function(){
        if ($(this).scrollTop() >= 200) {
            document.getElementById("top_arrow").style.filter = "opacity(1)";
            document.getElementById("top_arrow").style["pointer-events"] = "auto";
        } else {
            document.getElementById("top_arrow").style.filter = "opacity(0)";
            document.getElementById("top_arrow").style["pointer-events"] = "none";
        }
    });

    $("#top_arrow").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
    document.getElementById("top_arrow").src = ".\\images\\top_arrow.png";
});

//set correct height for banner to take up on page load
$(document).ready(function($){
    $("#bannerWords").each(function(){
        $(this).css({
            "margin-top" : (window.innerHeight) - $(this).outerHeight() - $(".menuIconContainer").outerHeight() + "px"
        });
    });
});

window.addEventListener("scroll", function() {

  var image = document.getElementById("bannerImage");
  var pageTop = window.pageYOffset;

  image.style.top = -pageTop * .5 + "px";
});

//Click menu icon to open Projects List
$(document).ready(function(){
  $(".menuIcon").click(function(){

    var drawer = $("#drawer");
    var listContainer = $("#listContainer");
    var page = $(".page");
    var x = $(".close");

    $("body").css("overflow","hidden");
      page.animate({
      borderRightWidth: "22px",
      borderRightStyle: "solid",
      borderRightColor: "white"
    },1);
    drawer.animate({
      zIndex: "10"
    },1);
    drawer.animate({
      backgroundColor: "rgb(0,0,0,.7)",
    },300);
    listContainer.animate({
      left: "0px"
    },200);
    x.animate({right:"0px"},200);
    fadeChildren();
  });
});

//Click darkness of ".listContainer" or "X" to close Projects List
$(document).ready(function(){
  $(".listContainer").click(function(){
    var drawer = $("#drawer");
    var listContainer = $("#listContainer");
    var page = $(".page");
    var x = $(".close");

    fadeChildren();
    drawer.animate({
      backgroundColor: "rgb(0,0,0,0)",
    },100);
    listContainer.animate({
      left: "-1000px"
    },100)
    x.animate({right:"1000px"},100);
    drawer.animate({
      zIndex:"-1"
    },1);
    page.animate({
      borderRightWidth: "0px",
      borderRightStyle: "solid",
      borderRightColor: "white"
    },1)
    $("body").css("overflow","visible");
  });
});

function fadeChildren(){
  $(".listContainer").children().fadeToggle();
  $(".closeBox").css("display","inline-block");
}

//listen for hovers on menu and close buttons
$(document).ready(function(){
  //menu
  var tip = $(".menuTip");

  $(".iconContainer").mouseenter(function(){
    tip.animate({
      left: "10px"
    },200,"swing");
  });
  $(".iconContainer").mouseleave(function(){
    tip.finish();
    tip.animate({
      left: "-500px"
    },100,"swing");
  });

  //close
  var x = $(".close");
  $(".closeBox").mouseenter(function(){
    x.animate({
      transform: "rotate(180deg)",
      color: "#e06c75"
    },100,"swing").delay(100).toggleClass("transform");
  });
  $(".closeBox").mouseleave(function(){
    x.finish();
    x.animate({
      color: "white"
    },100,"swing").delay(100).toggleClass("transform");
  });
});

document.body.addEventListener('touchmove', function(e){
   document.getElementsByTagName('body')[0]. style .height = "100vh";
   document.getElementsByTagName('body')[0]. style. overflow = "hidden";
 });
// function changeColor() {
//   console.log(window.pageYOffset);
//
//   //Make title and subtitle readable
//   if(window.pageYOffset > 510){
//     (document).getElementById("bannerSubtitle").style.color="black";
//   }
//   else{
//     (document).getElementById("bannerSubtitle").style.color="white";
//   }
//   if(window.pageYOffset > 610){
//     (document).getElementById("bannerTitle").style.color="black";
//   }
//   else{
//     (document).getElementById("bannerTitle").style.color="white";
//   }
//   //Make contact info appear
//   if(window.pageYOffset > 470){
//     (document).getElementById("contact").style.color="rgb(0,0,0,1)";
//   }
//   else{
//     (document).getElementById("contact").style.color="rgb(255,255,255,1)";
//   }
// }


/*function typeFlash(){
    var text = document.getElementById("pageTitle").innerText;
    if(window.pageYOffset <= 200){
      if(text.includes("|"))
        text = text.replace("|", "");
      else
        text = text + "|";
    }
    else{
      text = text.replace("|", "");
      clearInterval(timer);
    }
    document.getElementById("pageTitle").innerText = text;

}*/
