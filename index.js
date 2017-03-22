var randomwikiURL = 'https://en.wikipedia.org/wiki/Special:Random';

$(document).ready(function () {
  //Random button link functionality
  $(".randomBtn").on("click", function() {
  window.open(randomwikiURL, '_blank');
  });
  
  $('.searchBtn').on("click", function() {
    wikiSearch();
  });

});

function wikiSearch() {
  //reset search content to blank so searches don't stack
  $(".search-content").html("");
  
  var searchInput = document.getElementById('searchbox').value;
  var searchAPI = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchInput+'&limit=5&namespace=0&format=json&callback=?';
  
  $.getJSON(searchAPI, function(json) {    
    for (var x = 0; x<json[1].length; x++){
      $(".search-content").append("<a href = "+json[3][x]+" target='_blank'><div class='well'><b>"+json[1][x]+"</b><br>"+json[2][x]+"</div></a>");
    }
  });
  
}