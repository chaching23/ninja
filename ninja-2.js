
  $('img').click(function() {
   var temp= $(this).attr("kian");
   var old= $(this).attr("src");
   $(this).attr("src", temp);
   $(this).attr("kian", old);

  });








  