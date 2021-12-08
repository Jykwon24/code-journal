/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};
var previousDataModel = localStorage.getItem('data-model');

if (previousDataModel != null) {
  data = JSON.parse(previousDataModel);
}

window.addEventListener('beforeunload', function (event) {
  var localDataModel = JSON.stringify(data);
  localStorage.setItem('data-model', localDataModel);
});
