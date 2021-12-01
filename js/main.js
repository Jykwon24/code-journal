/* global data */
/* exported data */

var $photoUrl = document.getElementById('photo-url');
var $img = document.querySelector('.img-container');

$photoUrl.addEventListener('input', function (event) {
  $img.setAttribute('src', event.target.value);
});
