//= require         modernizr
//= require         jquery-1.11.1.min
//= require         foundation
//= require         foundation/modules
//= require_self

$(document).foundation();

$(document).ready(function() {
  console.log( "ready!" );
  initializeSlick();
  initializeGallery();
});
