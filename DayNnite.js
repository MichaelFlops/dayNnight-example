(function($){
  var now = new Date().getHours();
  now = 12;
  if(now >= 18 || now <= 6){
    // load night.css at the end of the head tag
    // $('head').append('<link href="night-bootstrap.min.css" rel="stylesheet">');
    $("<link/>", {
       rel: "stylesheet",
       type: "text/css",
       href: "night-bootstrap.min.css"
    }).appendTo("head");
  }

}(jQuery));
