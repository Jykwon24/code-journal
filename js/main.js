/* global data */
/* exported data */

var $photoUrl = document.getElementById('photo-url');
var $img = document.querySelector('.img-container');

$photoUrl.addEventListener('input', function (event) {
  $img.setAttribute('src', event.target.value);
});

var $form = document.getElementById('form-entry');

$form.addEventListener('submit', function (event) {
  var journalObj = {};
  event.preventDefault();
  journalObj.title = $form.elements.title.value;
  journalObj.photoUrl = $form.elements.photoUrl.value;
  journalObj.notes = $form.elements.notes.value;
  journalObj.entryId = data.nextEntryId++;
  data.entries.unshift(journalObj);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
});
