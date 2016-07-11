$(function(){
  var peanutButterJellyCount = 0;

  // $.ajax({
  //   url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'
  //
  // }).then(function(data){
  //   var giftype = data.data.type;
  //   var gifid = data.data.id;
  //   var gifurl = data.data.image_url;
  //   var imageWidth = data.data.image_width;
  //   var imageHeight = data.data.image_height;
  //   console.log(giftype, gifid, gifurl, imageWidth, imageHeight);
  //   console.log(data);
  //   gifAppend(giftype, gifid, gifurl, imageWidth, imageHeight);
  //
  // }).catch(function(){
  //
  //   console.log('An error occured.');
  //
  // });

  $('.randomButton').on('click', function(){
    event.preventDefault();
    $.ajax({
      url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'

    }).then(function(data){
      var giftype = data.data.type;
      var gifid = data.data.id;
      var gifurl = data.data.image_url;
      var imageWidth = data.data.fixed_height_small_width;
      var imageHeight = data.data.fixed_height_small_height;
      console.log(giftype, gifid, gifurl, imageWidth, imageHeight);
      console.log(data);
      $('.container').empty();
      gifAppend(giftype, gifid, gifurl, imageWidth, imageHeight);

    }).catch(function(){

      console.log('An error occured.');

    });

  });

  $('.whyRandom').on('click', function(){
    event.preventDefault();

    $.ajax({
      url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=peanut+butter+jelly+time'

    }).then(function(data){
      var giftype = data.data.type;
      var gifid = data.data.id;
      var gifurl = data.data.image_url;
      var imageWidth = data.data.fixed_height_small_width;
      var imageHeight = data.data.fixed_height_small_height;
      peanutButterJellyCount++;
      console.log(giftype, gifid, gifurl, imageWidth, imageHeight);
      console.log(data);
      // gifAppend(giftype, gifid, gifurl, imageWidth, imageHeight);
      $('.container').prepend('<div class="cube" id="' + giftype + '"> <img id="' + gifid + '" src="' + gifurl + '" height="' + imageHeight + '" width="' + imageWidth + '"></div>');
      $('#peanutButterJellyLove').text(peanutButterJellyCount);

    }).catch(function(){

      console.log('An error occured.');

    });
  });

  function gifAppend(giftype, gifid, gifurl, imageWidth, imageHeight){
    $('.container').append('<div class="cube" id="' + giftype + '"> <img id="' + gifid + '" src="' + gifurl + '" height="' + imageHeight + '" width="' + imageWidth + '"></div>');
  };
  // http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho
})
