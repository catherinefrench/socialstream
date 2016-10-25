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

          //  $('#facebook-stream-feed').append($('<br><div class = "fb-feed" > <br>').text(feed.channel));
          //  $('#facebook-stream-feed').append($('<div class = "fb-date" > ').text(feed.date));
           $('#facebook-stream-feed').append($('<br><div class = "fb-title" > ').html(feed.title));
           $('#facebook-stream-feed').append($('<div class = "fb-from_now" > ').text(feed.from_now));
           $('#facebook-stream-feed').append($('<div class = "fb-link" > ').text(feed.link));
          //  $('#facebook-stream-feed').append($('<div class = "fb-link" > ').text(feed.id));
           //
          //  var fbId = feed.id;
          //  console.log(fbId);


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


          // $('#twitter-stream-feed').append($('<br><div class = "twitter-feed">').text(feed.channel));
          $('#twitter-stream-feed').append($('<br><div class = "twitter-user-name">').text(feed.user.name));

          var twitterUserScreenName = "<div class = 'twitter-user-screen-name'> @" + feed.user.name + "</div>";  // stores twitter user's screen name with an @ preceding it to var

          $('#twitter-stream-feed').append(twitterUserScreenName);
                 // appends twitterUserScreenName to feed

           $('#twitter-stream-feed').append($('<div class = "twitter-title">').text(feed.title));
           $('#twitter-stream-feed').append($('<div class = "twitter-from_now">').text(feed.from_now));
  
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

              $('#youtube-stream-feed').append($('<div class = "youtube-title" > ').text(feed.title));
              $('#youtube-stream-feed').append($('<div class = "youtube-from_now" > ').text(feed.from_now));
              $('#youtube-stream-feed').append($('<div class = "youtube-description" </br>> ').text(feed.description));

               var youtubeVid = feed.link.replace("watch?v=", "v/");

               $('<iframe>').attr('class', 'youtube-video-link').attr('src', youtubeVid).appendTo('#youtube-stream-feed') // defines what item to make (iFrame in this case), uses attribute method and makes class, then creates source within iframe where the source is the link, then appends to the div."



        });
      });
    });

    });
