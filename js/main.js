// var moveLeft = function() {
//   $('.ball').css('left', '45%');
//   window.setTimeout(function () {
//     $('.ball').css('left', '50%');
//   }, 600);
// };
//
// var moveRight = function() {
//   $('.ball').css('left', '55%');
//   window.setTimeout(function () {
//     $('.ball').css('left', '50%');
//   }, 600);
// };
//
// // moveRight();
//
// var jump = function() {
//   $('.ball').css('bottom', '50%');
//   window.setTimeout(function () {
//     $('.ball').css('bottom', '0');
//   }, 600);
// };
//
//
// $(window).bind('keydown', function(e) {
//   switch(e.keyCode) {
//     case 37: { //left arrow
//       moveLeft();
//       break;
//     }
//     case 39: { //right arrow
//       moveRight();
//       break;
//     }
//     case 38: {
//       jump();
//       break;
//     }
//     default: {
//       console.log(e.keyCode);
//     }
//
//   }
// });
//
// var boxFactory = function() {
//   var element = $('<div/>', {
//     class: 'box'
//   });
//
//   $('#app').append(element);
//   element.css('left', $(window).width() + element.width());
//
//   return element;
// };
//
//
//
// var move = function() {
//   var element = boxFactory();
//
//   var boxMove = function($el) {
//     $el.css('left', $el.offset().left - 2);
//     if($el.offset().left < -$el.width()) {
//       window.clearInterval(interval)
//     }
//   };
//
//   var interval = window.setInterval(function() {
//     boxMove(element);
//   }, 30);
// }
//
// move();
/*
var a = 5;
var b = 10;
if(a > b) {
 ...
} else {
 ...
}
*/

/*
i++ == i = i + 1
for(var i = 0; i < 10; i++) {
  ...
}
*/

for(var i = 0; i<=10; i++){
  console.log (i);
}
// pow(2, 3) => 8
