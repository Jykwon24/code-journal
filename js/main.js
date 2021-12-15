/* global data */
/* exported data */

var $photoUrl = document.getElementById('photo-url');
var $img = document.querySelector('.img-container');
var $ul = document.querySelector('.ul-entry');

$photoUrl.addEventListener('input', function (event) {
  $img.setAttribute('src', event.target.value);
});

function journalEntry(entry) {
  var $containerDiv = document.createElement('div');
  $containerDiv.setAttribute('class', 'new-row');
  $containerDiv.setAttribute('data-entry-id', entry.entryId);

  var $columnDiv1 = document.createElement('div');
  $columnDiv1.setAttribute('class', 'column-half');

  var $columnDiv2 = document.createElement('div');
  $columnDiv2.setAttribute('class', 'column-half');

  var $titleEditContainer = document.createElement('div');
  $titleEditContainer.setAttribute('class', 'edit-style');

  var $entryImg = document.createElement('img');
  $entryImg.setAttribute('class', 'img-container');
  $entryImg.setAttribute('src', entry.photoUrl);

  var $entryTitle = document.createElement('h2');
  var $editIcon = document.createElement('i');
  $entryTitle.setAttribute('class', 'list-style');
  $editIcon.setAttribute('class', 'fas fa-pen edit-button');
  $editIcon.setAttribute('data-entry-id', entry.entryId);
  var $titleTxt = document.createTextNode(entry.title);
  $entryTitle.appendChild($titleTxt);

  var $entryContent = document.createElement('p');
  $entryContent.setAttribute('class', 'list-style');
  var $entryNotes = document.createTextNode(entry.notes);
  $entryContent.appendChild($entryNotes);

  $containerDiv.appendChild($columnDiv1);
  $containerDiv.appendChild($columnDiv2);
  $columnDiv1.appendChild($entryImg);
  $columnDiv2.appendChild($titleEditContainer);
  $titleEditContainer.appendChild($entryTitle);
  $titleEditContainer.appendChild($editIcon);
  $columnDiv2.appendChild($entryContent);
  return $containerDiv;
}

function prependToList(entry) {
  var result = journalEntry(entry);
  $ul.prepend(result);
}

var $form = document.getElementById('form-entry');

$form.addEventListener('submit', function (event) {
  var journalObj = {};
  event.preventDefault();
  journalObj.title = $form.elements.title.value;
  journalObj.photoUrl = $form.elements.photoUrl.value;
  journalObj.notes = $form.elements.notes.value;
  journalObj.entryId = data.nextEntryId++;
  data.entries.unshift(journalObj);
  data.view = 'entries';
  prependToList(journalObj);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $formContainer.className = 'hidden';
  $entryList.className = 'new-row container';
  $entries.className = 'hidden';
  $form.reset();
});

document.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    var result = journalEntry(data.entries[i]);
    $ul.appendChild(result);
  }
  if (data.view === 'entries') {
    $formContainer.className = 'hidden';
    $entryList.className = 'new-row container';
  } else {
    $entryList.className = 'hidden';
    $formContainer.className = 'container';
  }
  if (data.entries.length > 0) {
    $entries.className = 'hidden';
  } else {
    $entries.className = 'container entries';
  }
});

var $navHeader = document.querySelector('.entry-header');
var $formContainer = document.querySelector('.container');
var $entryList = document.getElementById('entry-list');
var $entries = document.querySelector('.entries');

$navHeader.addEventListener('click', function (event) {
  $formContainer.className = 'hidden';
  $entryList.className = 'new-row container';
  data.view = 'entries';
  if (data.entries.length > 0) {
    $entries.className = 'hidden';
  } else {
    $entries.className = 'container entries';
  }
});

var $newButton = document.querySelector('.purp-header1');
$newButton.addEventListener('click', function (event) {
  $entryList.className = 'hidden';
  $formContainer.className = 'container';
  data.view = 'entry-form';
});

$ul.addEventListener('click', function (event) {
  var $editEntry = document.querySelectorAll('.edit-button');
  var $entryNumOnClick = parseInt(event.target.getAttribute('data-entry-id'));
  for (var i = 0; i < $editEntry.length; i++) {
    if (event.target === $editEntry[i]) {
      $entryList.className = 'hidden';
      $formContainer.className = 'container';
    }
  }
  for (i = 0; i < data.entries.length; i++) {
    var dataArr = data.entries[i].entryId;
    if ($entryNumOnClick === dataArr) {
      data.editing = $entryNumOnClick;
    }
  }
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
