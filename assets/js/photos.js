$("#search_flickr").submit((event) => {
  event.preventDefault();
  var searchTerm = $("#photo_search").val();

  var url = 'https://api.flickr.com/services/rest/';

  var data = {
    method: 'flickr.photos.search',
    api_key: '2ac60198ac377645dd12f1e4bf645633', //* Need to generate your own unique API from Flikr's page. It's fine, they are chill.
    text: searchTerm,
    format: "json",
    nojsoncallback: "1"
  };

  function renderPhotos(data) {
    var HTML = '';

    for (var i = 0; i < data.photos.photo.length; i++) {
      HTML += '<figure class="inline_photos"><img src="https://farm' + data.photos.photo[i].farm + '.staticflickr.com/' + data.photos.photo[i].server + '/' +
      data.photos.photo[i].id + '_' + data.photos.photo[i].secret +
      '.jpg" alt="Image" class="searched_photos"><figcaption>Title</figcaption></figure>'
    };
    $(".photos").html(HTML);
  };

  $.getJSON(url, data, showPhotos);
});
