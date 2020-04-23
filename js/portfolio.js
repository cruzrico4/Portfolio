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
    $("#projectContainer").animate({
      left: "20px + 15vw"
    }, {duration:100, queue: false});

    $("#projectContainer").css("right", "5vw");

    x.animate({right:"0px"},200);
    fadeChildren();
  });
});

//Click darkness of ".listContainer" or "X" to close Projects List
//Also handles clicking list buttons to see detail
$(document).ready(function(){

  var drawer = $("#drawer");
  var listContainer = $("#listContainer");
  var page = $(".page");
  var x = $(".close");

  //Clicking on a listButton will shrink them, and move them to the left
  $(document).on("click", ".listButton", function(e){
    $(".listButton").animate({
      width: "15vw"
    }, {duration:100, queue: false});
    $("#listContainer").animate({
      paddingRight: "80vw"
    }, {duration:100, queue: false})
    $("#projectContainer").animate({
      height: "80vh",
      width: "70vw",
      outlineWidth: "2px",
    }, {duration:100, queue: false});

    $("#projectContainer").css("right", "5vw");

    // get an array of classes on clicked element
    var classes = $(this).attr("class").split(/\s+/);
    
    //get [1] item in class list to identify button clicked, and show info
    switch(classes[1]) {
      case "item1":
        $("#info1").css("display", "block");
        $("#info2").css("display", "none");
        $("#info3").css("display", "none");
        break;
      case "item2":
        $("#info1").css("display", "none");
        $("#info2").css("display", "block");
        $("#info3").css("display", "none");
        break;
      case "item3":
        $("#info1").css("display", "none");
        $("#info2").css("display", "none");
        $("#info3").css("display", "block");
        break;
    }
    //Show detail for button clicked
    // $(document).on("click", ".listButton, listImage", function(e) {
    //   console.log("clicked");
    //   //get an array of classes on clicked element
    //   var classes = $(this).className.split(/\s+/);
    //   console.log(classes);
    // })
  });

  //Clicking anything but a button will close the drawer
  $(document).on("click", ".listContainer", function(e){
    if(!($(e.target).hasClass("listButton")) && !($(e.target).hasClass("listImg"))){
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
      },1);
      $("#projectContainer").css({
        right: "-5000px"
      });
      $("body").css("overflow","visible");
    }
  });

});

function fadeChildren(){
  $(".listContainer").children().fadeToggle();
  $(".listButton").each(function(){
    $(this).css("display","flex");
  });
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
      // transform: "rotate(180deg)",
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

$(".page").css({"overflow":"hidden",'position':'fixed'});

//Menu list item listeners to show more detail
$(document).ready(function(){
  $(".listButton").click(function(){
    $(".listButton").animate({
      width: "20vw"
    }, 100,"swing");
    $("#listContainer").animate({
      alignItems: "left"
    })
  });
});

//Hover listeners for listButtons
// $(document).on("mouseenter", ".listButton, .listImg", function(e) {
//   console.log(e);
// });

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
