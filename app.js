$(function(){

  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'

  }).then(function(data){
    var giftype = data.data.type;
    var gifid = data.data.id;
    var gifurl = data.data.image_url;
    var imageWidth = data.data.image_width;
    var imageHeight = data.data.image_height;
    console.log(giftype, gifid, gifurl, imageWidth, imageHeight);
    console.log(data);
    gifAppend(giftype, gifid, gifurl, imageWidth, imageHeight);

  }).catch(function(){

    console.log('An error occured.');

  });

  function gifAppend(giftype, gifid, gifurl, imageWidth, imageHeight){
    $('.container').append('<div id="' + giftype + '"> <img id="' + gifid + '" src="' + gifurl + '" height="' + imageHeight + '" width="' + imageWidth + '"></div>');
  };
  // http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho
})
