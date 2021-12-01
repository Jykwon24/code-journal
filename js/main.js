/* global data */
/* exported data */

var $journalObj = {};
var $photoUrl = document.getElementById('photo-url');
var $img = document.querySelector('.img-container');

$photoUrl.addEventListener('input', function (event) {
  $img.setAttribute('src', event.target.value);
});

var $form = document.getElementById('form-entry');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  $journalObj.title = $form.elements.title.value;
  $journalObj.photoUrl = $form.elements.photoUrl.value;
  $journalObj.notes = $form.elements.notes.value;
  $form.reset();
});
