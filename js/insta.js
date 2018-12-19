$(document).ready(function(){
    //var userfeed = new Instafeed({
//get: 'user',
//userId: '3316396077',
//limit:3,
//resolution: 'standard_resolution',
//accessToken:'9720192134.1677ed0.543018e5966e40ef8779ca1e199f9b31',
///sortBy: 'most_recent',
//template: '<div class="gallery"><a href="{{image}}"title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>",


//});
//userfeed.run();
//});

var feed = new Instafeed({
    get: 'user',
    userId:9720192134 , 
    accessToken: '9720192134.1677ed0.543018e5966e40ef8779ca1e199f9b31'
  });
  feed.run();
});