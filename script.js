$(function() {
  $('.center-image').click(function() {
    var currentImage = $(this).find('img').attr('src');
    var images = $('.gallery img').map(function() {
      return $(this).attr('src');
    }).get();
    var currentIndex = images.indexOf(currentImage);
    var nextIndex = (currentIndex + 1) % images.length;
    var nextImage = images[nextIndex];
    $(this).find('img').attr('src', nextImage);
  });
});

  $(function() {
    var images = $(".gallery img");
    var currentIndex = images.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = images[currentIndex];
      images[currentIndex] = images[randomIndex];
      images[randomIndex] = temporaryValue;
    }
    
    $(".gallery").html(images);
  });