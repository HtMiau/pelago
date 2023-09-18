// ESTRELAS JS

// Estrelas// 

var starField = document.getElementById('star-field');

function randomPosition() {
  var randomDecimal = Math.random();
  var randomInt = Math.floor(Math.random() * 100) + 1
  return randomDecimal + randomInt;
}

function createStars(className, amount) {
  for (var i = 0; i < amount; i++) {
    var star = document.createElement('span');
    star.classList.add(className);
    star.style.left = randomPosition() + '%';
    star.style.top = randomPosition() + '%';
    console.log(star);
    starField.appendChild(star);
  }
}

createStars('bg-star', 1000);
createStars('mid-star', 435);
createStars('star', 200);

var stars = document.querySelectorAll('.star');
var midStars = document.querySelectorAll('.mid-star');

function calculateDrift(star) {
  var top = star.style.top; top = parseInt(top);
  var left = star.style.left; left = parseInt(left);
  var upOrDown = 'up';
  var leftOrRight = 'left';
  if (top > 50) {
    upOrDown = 'down';
  }
  if (left > 50) {
    leftOrRight = 'right';
  }
  star.classList.add(upOrDown + '-' + leftOrRight);
}

for (var i = 0; i < stars.length; i++) {
  calculateDrift(stars[i]);
}

for (var i = 0; i < midStars.length; i++) {
  calculateDrift(midStars[i]);
}


// fim das estrelas //



// CARROSSEL JS

$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });

