$(document).ready(function() {
var request;
var type;
var totalLength;
var currentLength = 0;

$('#userInput').keyup(function(e) {
	request = $(this).val();
		if (e.keyCode == 13) {
	        callApi();
	    }
	});


function getType() {
	type = $('#select').val();
	}


$('#searchButton').click(callApi);

function callApi() {
	getType();
	$('#results').empty();

$.get('https://api.spotify.com/v1/search', {
	type: type,
	q: request
}).done(formatResults);
$('#results').append('<p id="searchHeadline"> Results for your search for: "' + request.toUpperCase() + '".</p>');
}

function formatResults(data) {
	var types = type + 's';
	totalLength = data[types].total;
	console.log(totalLength);
	currentLength += data[types].items.length;


if (data[types].items.length < 1) {
	$('#results').append('<p id="noResults">  No Artists/Albums found ' + type + '.</p>');
	 return;
	    }

	    for (var i = 0; i < data[types].items.length; i++) {
	        var spotifyLink = data[types].items[i].external_urls.spotify;
	        var imageLink;
	        if (data[types].items[i].images.length > 0) {
	            imageLink = "images/fallback.png";
	        } else {
	            imageLink = data[types].items[i].images[1].url;
	        }
	        $('#results').append('<div class="listing"> <a href="' + spotifyLink + '"> <img class="image" src="' + imageLink + '" /> </a> <a href="' + spotifyLink + '"> <p class="title">' + data[types].items[i].name + '</p></a></div>');
	    }
	
	}

	$(window).scroll(function() {
	    if($(window).scrollTop() == $(document).height() - $(window).height()) {
	        if(totalLength > currentLength) {
	            moreApi();
	        }
	    }
	});

	function moreApi() {
	    $('#loadMore').remove();

	    $.get('https://api.spotify.com/v1/search', {
	        type: type,
	        q: request,
	        offset: currentLength
	    }).done(formatResults);
	}
});
