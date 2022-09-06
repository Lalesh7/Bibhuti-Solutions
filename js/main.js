
// Login and Signup Section
const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
});

// Header / navigation bar Section
$(function () {
  let headerElem = $("header");
  let logo = $("#logo");
  let navMenu = $("#nav-menu");
  let navToggle = $("#nav-toggle");

  navToggle.on("click", () => {
    navMenu.css("right", "0");
  });

  $("#close-flyout").on("click", () => {
    navMenu.css("right", "-100%");
  });

  $(document).on("click", (e) => {
    let target = $(e.target);
    if (
      !(
        target.closest("#nav-toggle").length > 0 ||
        target.closest("#nav-menu").length > 0
      )
    ) {
      navMenu.css("right", "-100%");
    }
  });

  // Nav-bar section
  $(document).scroll(() => {
    let scrollTop = $(document).scrollTop();

    if (scrollTop > 0) {
      navMenu.addClass("is-sticky");
      logo.css("color", "#fff");
      headerElem.css("background", "#007BFF");
      navToggle.css("border-color", "#000");
      navToggle.find(".strip").css("background-color", "#000");
    } else {
      navMenu.removeClass("is-sticky");
      logo.css("color", "#fff");
      headerElem.css("background", "transparent");
      navToggle.css("border-color", "#fff");
      navToggle.find(".strip").css("background-color", "#fff");
    }

    headerElem.css(
      scrollTop >= 200
        ? { padding: "0.5rem", "box-shadow": "0 -4px 10px 1px #999" }
        : { padding: "1rem 0", "box-shadow": "none" }
    );
  });

  $(document).trigger("scroll");
});

// About - Counter-wrap Section

$(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1200
  });
});

// // Services Read More / Read Less Section
// $(document).ready(function(){
//   $(".invisible-content").hide();
//   $(document).on('click',"#btn",function(){
//       var moreLessButton=$(".invisible-content").is(":visible")?'Read More':'Read Less';
//       $(this).text(moreLessButton);
//       $(this).parent(".box").find(".invisible-content").toggle();
//       $(this).parent(".box").find(".visible-content").toggle();
//   });
// });

// Services Read More and REad Less Section

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("btn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("btn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunction4() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("btn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunction5() {
  var dots = document.getElementById("dots5");
  var moreText = document.getElementById("more5");
  var btnText = document.getElementById("btn5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunction6() {
  var dots = document.getElementById("dots6");
  var moreText = document.getElementById("more6");
  var btnText = document.getElementById("btn6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}



// slider image section
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000);
// }
