/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', function (event) {
  var localDataModel = JSON.stringify(data);
  localStorage.setItem('data-model', localDataModel);
});
