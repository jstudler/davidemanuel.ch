jQuery(document).ready(function() {
  var width = jQuery('.facebook-album-container .facebook-album-wrapper .fbalbum .image').width();
  jQuery('.facebook-album-container .facebook-album-wrapper .fbalbum .image').css('height', width);
});
jQuery(window).resize(function() {
  var width = jQuery('.facebook-album-container .facebook-album-wrapper .fbalbum .image').width();
  jQuery('.facebook-album-container .facebook-album-wrapper .fbalbum .image').css('height', width);
});
