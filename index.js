var showTotal = true;
var showCases = true;

function goToGitHub() {
  window.location.assign('https://github.com/willhaslett/covid-19-growth/blob/master/README.md');
}

function updateVisibility() {
  document.querySelectorAll('.chart').forEach((el) => el.style.display = 'none');
  switch (`${showTotal}${showCases}`) {
    case 'truetrue':
      document.querySelectorAll('.total.cases').forEach((el) => el.style.display = 'block');
      break;
    case 'truefalse':
      document.querySelectorAll('.total.deaths').forEach((el) => el.style.display = 'block');
      break;
    case 'falsetrue':
      document.querySelectorAll('.adj.cases').forEach((el) => el.style.display = 'block');
      break;
    case 'falsefalse':
      document.querySelectorAll('.adj.deaths').forEach((el) => el.style.display = 'block');
  }
}

function toggleCountOf() {
  showCases = !showCases;
  updateVisibility();
}

function toggleMeasure() {
  showTotal = !showTotal;
  updateVisibility();
}

(function () {
  document.querySelectorAll('input[type=checkbox]').forEach((el) => el.checked = false);
  updateVisibility();
  var switchCountOf = document.getElementById('switch-count-of');
  var switchMeasure = document.getElementById('switch-measure');
  switchCountOf.addEventListener('mousedown', toggleCountOf);
  switchMeasure.addEventListener('mousedown', toggleMeasure);
})();