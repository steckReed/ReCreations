$( document ).ready(function() {
  var cassetteContianer = $('#cassette-tape-contianer');
  var cassetteSpinner   = $('.cassette-tape-center-spinner');


  // Event Listeners
    cassetteContianer.hover(
      function() { 
        cassetteSpinner.addClass('cassette-tape-spinner-rotate');
      },
      function() {
        cassetteSpinner.removeClass('cassette-tape-spinner-rotate');
      }
    );
  // Event Listeners

});