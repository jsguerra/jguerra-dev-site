jQuery(function($) {

  'use strict';

  var HOME;

  // ================================
  // Home
  // ================================

  HOME = {

    init: function() {
      this.headerOpacity();
    },

    headerOpacity: function() {
      $(window).on('scroll', function() {
        if ($(document).scrollTop() > 150 && $(this).width() >= 600) {
          $('#master-header').addClass('darken');
        } else {
          $('#master-header').removeClass('darken');
        }
      });
    }

  };
  
  HOME.init();

}); //jQuery