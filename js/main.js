$(document).ready(function() {
  //animator class for all progress bars
  var progressControl = new ProgressControl();
  progressControl.start();
  
  //map initialization
  initMap();
  
  //make header fixed on scroll
  fixedHeaderOnScroll();
});