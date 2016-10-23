$(document).ready(function() {
 $('#facebook').click(function(){
   $.ajax({
     url: 'http://q4modules.herokuapp.com/social/stream/linkedin',
     method: 'GET',
     data: { },
     dataType: 'JSONP'
   }).done(function(responseData){
      console.log(responseData);
    responseData.forEach(function(feed){
              // $('body').append(feed.favorites)
              // $('body').append($('<div>').text(feed.favorites))
           $('body').append($('<div>').text(feed.title));
      });
    });

  });
    });
