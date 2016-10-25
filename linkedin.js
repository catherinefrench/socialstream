$(document).ready(function() { //ready's document


 $('#facebook').click(function(){ //ajax request for Facebook feed
   $.ajax({
     url: 'http://q4modules.herokuapp.com/social/stream/linkedin/facebook',
     method: 'GET',
     data: { },
     dataType: 'JSONP'
   }).done(function(responseData){ //handles responseData upon completion of click event
      console.log(responseData);
    responseData.forEach(function(feed){ //For each object, appends its attributes to body and adds class name

           $('#social-stream-feed').append($('<br><div class = "fb-feed" > <br>').text(feed.channel));
           $('#social-stream-feed').append($('<div class = "fb-from_now" > ').text(feed.from_now));
           $('#social-stream-feed').append($('<div class = "fb-date" > ').text(feed.date));
           $('#social-stream-feed').append($('<div class = "fb-title" > ').text(feed.title));
           $('#social-stream-feed').append($('<div class = "fb-link" > ').text(feed.link));

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

          $('#social-stream-feed').append($('<br><div class = "twitter-feed">').text(feed.channel));
           $('#social-stream-feed').append($('<div class = "twitter-title">').text(feed.title));
           $('#social-stream-feed').append($('<div class = "twitter-from_now">').text(feed.from_now));
           $('#social-stream-feed').append($('<div class = "twitter-link">').text(feed.link));
           $('#social-stream-feed').append($('<div class = "twitter-favorites">').text(feed.favorites));
           $('#social-stream-feed').append($('<div class = "twitter-retweets">').text(feed.retweets));
           $('#social-stream-feed').append($('<div class = "twitter-user-id">').text(feed.user.id)); //appends to id in user hash in feed hash
           $('#social-stream-feed').append($('<div class = "twitter-user-name">').text(feed.user.name));
           $('#social-stream-feed').append($('<div class = "twitter-user-screen_name">').text(feed.user.screen_name));
           $('#social-stream-feed').append($('<div class = "twitter-user-image">').text(feed.user.image));


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
              // $('#social-stream-feed').append($('<br><div class = "youtube-feed" > <br>').text(feed.channel));
              $('#social-stream-feed').append($('<div class = "youtube-title" > ').text(feed.title));
              $('#social-stream-feed').append($('<div class = "youtube-from_now" > ').text(feed.from_now));
              // $('#social-stream-feed').append($('<div class = "youtube-link" > ').text(feed.link));
              var youtubeLink = ('<iframe src="' + feed.link + '&output=embed' + '"></iframe>');
              console.log('ED IS AWESOME');
              $('#social-stream-feed').append(youtubeLink);
              $('#social-stream-feed').append($('<div class = "youtube-thumbnails" > ').text(feed.thumbnails.default));
              $('#social-stream-feed').append($('<div class = "youtube-thumbnails" > ').text(feed.thumbnails.medium));
              $('#social-stream-feed').append($('<div class = "youtube-thumbnails" > ').text(feed.thumbnails.high));
        });
      });
    });

    });
