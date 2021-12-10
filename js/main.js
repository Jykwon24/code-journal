/* global data */
/* exported data */

var $photoUrl = document.getElementById('photo-url');
var $img = document.querySelector('.img-container');
var $ul = document.querySelector('.ul-entry');

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

// var $containerDiv = document.createElement('div');
// $containerDiv.setAttribute('class', 'new-row');

// var $columnDiv1 = document.createElement('div');
// $columnDiv1.setAttribute('class', 'column-half');

// var $columnDiv2 = document.createElement('div');
// $columnDiv2.setAttribute('class', 'column-half');

// var $entryImg = document.createElement('img');
// $entryImg.setAttribute('class', 'img-container');
// var $entryImgUrl = document.createTextNode('imgurl');
// $entryImg.appendChild($entryImgUrl);

// var $entryTitle = document.createElement('h2');
// $entryTitle.setAttribute('class', 'list-style');
// var $titleTxt = document.createTextNode('title');
// $entryTitle.appendChild($titleTxt);

// var $entryContent = document.createElement('p');
// $entryContent.setAttribute('class', 'list-style');
// var $entryNotes = document.createTextNode('hello');
// $entryContent.appendChild($entryNotes);

// $containerDiv.appendChild($columnDiv1);
// $containerDiv.appendChild($columnDiv2);
// $columnDiv1.appendChild($entryImg);
// $columnDiv2.appendChild($entryTitle);
// $columnDiv2.appendChild($entryContent);

// console.log($containerDiv);
function journalEntry(entry) {
  var $containerDiv = document.createElement('div');
  $containerDiv.setAttribute('class', 'new-row');

  var $columnDiv1 = document.createElement('div');
  $columnDiv1.setAttribute('class', 'column-half');

  var $columnDiv2 = document.createElement('div');
  $columnDiv2.setAttribute('class', 'column-half');

  var $entryImg = document.createElement('img');
  $entryImg.setAttribute('class', 'img-container');
  $entryImg.setAttribute('src', entry.photoUrl);

  var $entryTitle = document.createElement('h2');
  $entryTitle.setAttribute('class', 'list-style');
  var $titleTxt = document.createTextNode(entry.title);
  $entryTitle.appendChild($titleTxt);

  var $entryContent = document.createElement('p');
  $entryContent.setAttribute('class', 'list-style');
  var $entryNotes = document.createTextNode(entry.notes);
  $entryContent.appendChild($entryNotes);

  $containerDiv.appendChild($columnDiv1);
  $containerDiv.appendChild($columnDiv2);
  $columnDiv1.appendChild($entryImg);
  $columnDiv2.appendChild($entryTitle);
  $columnDiv2.appendChild($entryContent);
  return $containerDiv;
}

document.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    var result = journalEntry(data.entries[i]);
    $ul.appendChild(result);
  }

});

var $navHeader = document.querySelector('.entry-header');
var $formContainer = document.querySelector('.container');
var $entryList = document.getElementById('entry-list');

$navHeader.addEventListener('click', function (event) {
  $formContainer.className = 'hidden';
  $entryList.className = 'new-row container';
});
