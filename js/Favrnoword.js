jQuery(function($) {
    $('#swapLove').on('click', function() {
      var $el = $(this),
        textNode = this.lastChild;
      $el.find('span').toggleClass('bi-heart bi-heart-fill');
      $el.toggleClass('showLove');
    });
  });