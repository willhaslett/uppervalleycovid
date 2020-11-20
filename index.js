function goToTwitter() {
  window.location.assign('https://twitter.com/willhaslett');
}

function goToGitHub() {
  window.location.assign('https://github.com/willhaslett/covid-19-growth');
}

function toggleCountOf() {
  console.log('toggling count-of');
}
function toggleMeasure() {
  console.log('toggling measure');
}

(function () {
  var switchCountOf = document.getElementById('switch-count-of');
  var switchMeasure = document.getElementById('switch-measure');
  switchCountOf.addEventListener('mousedown', toggleCountOf);
  switchMeasure.addEventListener('mousedown', toggleMeasure);
})();