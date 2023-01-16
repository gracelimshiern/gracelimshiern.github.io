// var index = 0;
// var images = document.querySelectorAll('.carousel-inner img');

// function prev() {
//   images[index].style.display = 'none';
//   index--;
//   if (index < 0) {
//     index = images.length - 1;
//   }
//   images[index].style.display = 'block';
// }

// function next() {
//   images[index].style.display = 'none';
//   index++;
//   if (index >= images.length) {
//     index = 0;
//   }
//   images[index].style.display = 'block';
// }

// for (var i = 0; i < images.length; i++) {
//     images[i].style.display = 'none';
// }s

// images[0].style.display = 'block';

function toggleMenu() {
    var element = document.getElementById("navbar-navigation");
    element.classList.toggle("collapse");
}

$(document).ready(function () {
  AOS.init();
  // Activate Carousel
  $(".carousel").carousel({ interval: false });

  $(".left").click(function () {
    $(".carousel").carousel("prev");
  });
  $(".right").click(function () {
    $(".carousel").carousel("next");
  });
});

