$(function(){
 $('.social-stream').on('click', function(){
   $.ajax({
     url: 'http://q4modules.herokuapp.com/social/stream/linkedin',
     method: 'GET',
     data: '',
     dataType: 'JSONP'
   }).done(function(response){
      console.log(response);
      })
    })
  })
