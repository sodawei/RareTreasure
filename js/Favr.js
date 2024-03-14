jQuery(function($) {
    $('#swapLove').on('click', function() {
      var $el = $(this),
        textNode = this.lastChild;
      $el.find('span').toggleClass('bi-heart bi-heart-fill');
      textNode.nodeValue = ($el.hasClass('showLove') ? ' 已' : ' 加入')+'收藏'
      $el.toggleClass('showLove');
    });
  });