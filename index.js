var sidePanel = document.getElementsByClassName('side-panel')[0];
var wanContainer = document.getElementsByClassName('wan-container')[0];
var lanContainer = document.getElementsByClassName('lan-container')[0];
var intranerContainer = document.getElementsByClassName('intranet-container')[0];
var crossButton = document.getElementsByClassName('cross-button')[0];
wanContainer.addEventListener('click', function () {
  sidePanel.style.display = "block";
});
lanContainer.addEventListener('click', function () {
  sidePanel.style.display = "block";
});
intranerContainer.addEventListener('click', function () {
  sidePanel.style.display = "block";
});
crossButton.addEventListener('click', function () {
  sidePanel.style.display = "none";
});