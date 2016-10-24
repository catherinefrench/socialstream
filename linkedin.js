$(document).ready(function() { //ready's document

 i = 0

 $('#facebook').click(function(){ //ajax request for Facebook feed
   $.ajax({
     url: 'http://q4modules.herokuapp.com/social/stream/linkedin/facebook',
     method: 'GET',
     data: { },
     dataType: 'JSONP'
   }).done(function(responseData){ //handles responseData upon completion of click event
      console.log(responseData);
    responseData.forEach(function(feed){ //For each object, appends its attributes to body and adds class name

           $('body').append($('<br><div class = "fb-feed'  + i + '" > <br>').text(feed.channel));
           $('body').append($('<div class = "from_now'  + i + '" > ').text(feed.from_now));
           $('body').append($('<div class = "date'  + i + '" > ').text(feed.date));
           $('body').append($('<div class = "title'  + i + '" > ').text(feed.title));
           $('body').append($('<div class = "link'  + i + '" > ').text(feed.link));
           i = i + 1
      });
    });
  });

  $('#twitter').click(function(){ //ajax request for Twitter feed
    $.ajax({
      url: 'http://q4modules.herokuapp.com/social/stream/linkedin/twitter',
      method: 'GET',
      data: { },
      dataType: 'JSONP'
    }).done(function(responseData){
       console.log(responseData);
     responseData.forEach(function(feed){ //For each object, appends its attributes to body and adds class name
      //  var responseJSON = responseData;

          $('body').append($('<br><div class = "twitter-feed">').text(feed.channel));
           $('body').append($('<div class = "twitter-title">').text(feed.title));
           $('body').append($('<div class = "twitter-from_now">').text(feed.from_now));
           $('body').append($('<div class = "twitter-link">').text(feed.link));
           $('body').append($('<div class = "twitter-favorites">').text(feed.favorites));
           $('body').append($('<div class = "twitter-retweets">').text(feed.retweets));
           // $('body').append($('<div class = "user'  + i + '" > ').text(feed.user));
           $('body').append($('<div class = "twitter-user-id">').text(feed.user.id)); //appends to id in user hash in feed hash
           $('body').append($('<div class = "twitter-user-name">').text(feed.user.name));
           $('body').append($('<div class = "twitter-user-screen_name">').text(feed.user.screen_name));
           $('body').append($('<div class = "twitter-user-image">').text(feed.user.image));

       });
     });
   });

   $('#youtube').click(function(){ //ajax request for YouTube feed
     $.ajax({
       url: 'http://q4modules.herokuapp.com/social/stream/linkedin/youtube',
       method: 'GET',
       data: { },
       dataType: 'JSONP'
     }).done(function(responseData){
        console.log(responseData);
      responseData.forEach(function(feed){ //For each object, appends its attributes to body and adds class name
              $('body').append($('<br><div class = "twitter-feed'  + i + '" > <br>').text(feed.channel));
              $('body').append($('<div class = "title'  + i + '" > ').text(feed.title));
              $('body').append($('<div class = "from_now'  + i + '" > ').text(feed.from_now));
              $('body').append($('<div class = "link'  + i + '" > ').text(feed.link));
              $('body').append($('<div class = "thumbnails'  + i + '" > ').text(feed.user));
        });
      });
    });



    });
