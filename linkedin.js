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

          var twitterUserScreenName = (' @' + feed.user.name);  // stores twitter user's screen name with an @ preceding it to var
          $('#twitter-stream-feed').append(twitterUserScreenName);
                 // appends twitterUserScreenName to feed

           $('#twitter-stream-feed').append($('<div class = "twitter-title">').text(feed.title));
           $('#twitter-stream-feed').append($('<div class = "twitter-from_now">').text(feed.from_now));
          //  $('#twitter-stream-feed').append($('<div class = "twitter-link">').text(feed.link));
          //  $('#twitter-stream-feed').append($('<div class = "twitter-favorites">').text(feed.favorites));
          //  $('#twitter-stream-feed').append($('<div class = "twitter-retweets">').text(feed.retweets));
          //  $('#twitter-stream-feed').append($('<div class = "twitter-user-id">').text(feed.user.id));


          //  $('#twitter-stream-feed').append($('<div class = "twitter-user-image">').html(feed.user.image));


//           $('#twitter-user-image').wrap($('<a>',{
//   href: feed.user.image
// }));
          //
          // <'div class = "twitter-user-image">').html(feed.user.image));

          //  $('.div_imagetranscrits').html('<img src="get_image_probes_via_ajax.pl?id_project=xxx" />')


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
              $('#youtube-stream-feed').append($('<div class = "youtube-title" > ').text(feed.title));
              $('#youtube-stream-feed').append($('<div class = "youtube-from_now" > ').text(feed.from_now));
              // $('#social-stream-feed').append($('<div class = "youtube-link" > ').text(feed.link));
              var youtubeLink = ('<iframe src="' + feed.link + '&output=embed' + '"></iframe>');
              // console.log('Q4 IS AWESOME');
              $('#youtube-stream-feed').append(youtubeLink);
              $('#youtube-stream-feed').append($('<div class = "youtube-thumbnails" > ').text(feed.thumbnails.default));
              $('#youtube-stream-feed').append($('<div class = "youtube-thumbnails" > ').text(feed.thumbnails.medium));
              $('#youtube-stream-feed').append($('<div class = "youtube-thumbnails" > ').text(feed.thumbnails.high));
        });
      });
    });

    });
