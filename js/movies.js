function searchOnClick(){
    var request = new XMLHttpRequest();
    var query = document.getElementById('searchfield').value
    request.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=fc762d52bec3d2991597a025cdb95b91&language=en-US&page=1&include_adult=false&query=' + query);
    request.onload = function() {
        var data = JSON.parse(this.response);
        console.log(data.results);
        $(document).ready(function(){
            var html = '<div class="col mb-4">';
            html += '<div class="card movie-image">';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            const printcard = document.getElementById("print-card");
            if(printcard.innerHTML !== ''){
                printcard.innerHTML = '';
            }
            for (var i = 0; i < data.results.length; i++) {
                $('#print-card').append(html);
                mytext = data.results[i].title;
                myimage = data.results[i].poster_path;
                myrating = data.results[i].vote_average;

                var $img = $("<img/>");
                if(myimage === null){
                    $img.attr("src", "img/Placeholder.png");
                }
                else{
                    $img.attr("src", "http://image.tmdb.org/t/p/w185_and_h278_bestv2/" + myimage);
                }
                $img.attr("onclick", "getMovieByID(" + data.results[i].id + ")");
                $(".movie-image:eq("+i+")").append($img);
                var $card = $("<div/>");
                $card.attr("class", "card-body");
                $card.text(mytext);
                $(".movie-image:eq("+i+")").append($card);
                var $container = $("<div/>")
                for(var y = 1; y <= 10; y++){
                    var $rating = $("<span/>");
                    $rating.attr("class", "fa fa-star");
                    if(myrating >= y){
                        $rating.toggleClass("checked");
                    }
                    $container.append($rating);
                }
                $(".movie-image:eq("+i+")").append($container);
              }
        });
    };
    request.send();
}

function getMovieByID(id){
    url = '/movieID.html?id=' + encodeURIComponent(id);
    document.location.href = url;
}

function search() {
    if(event.key === 'Enter') {
        event.preventDefault();
        searchOnClick();        
    }
}