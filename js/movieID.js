function pageLoaded() {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    searchByID(data.id);
}

function searchByID(id){
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.themoviedb.org/3/movie/'+ id +'?api_key=fc762d52bec3d2991597a025cdb95b91');
    request.onload = function(){
        var data = JSON.parse(this.response);
        console.log(data);
        $(document).ready(function(){
            var html = '<div>';
            html += '<div class="card movie-image">';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            const printcard = document.getElementById("print-card");
            if(printcard.innerHTML !== ''){
                printcard.innerHTML = '';
            }
            mytitle = data.title;
            myimage = data.poster_path;
            mytext = data.overview;
            myrating = data.vote_average;
            mydate = data.release_date;

            $('#print-card').append(html);
            var $img = $("<img/>");
            if(myimage === null){
                $img.attr("src", "img/Placeholder.png");
            }
            else{
                $img.attr("src", "http://image.tmdb.org/t/p/w342/" + myimage);
            }
            $(".movie-image").append($img);
            var $card = $("<div/>");
            $card.attr("class", "card-body");
            $card.text(mytitle + '\n' + mytext);
            $(".movie-image").append($card);
            var $container = $("<div/>")
            for(var y = 1; y <= 10; y++){
                var $rating = $("<span/>");
                $rating.attr("class", "fa fa-star");
                if(myrating >= y){
                    $rating.toggleClass("checked");
                }
                $container.append($rating);
            }
            var $release = $("<p/>");
            $release.text("Release date: " + mydate);
            $container.append($release);
            $(".movie-image").append($container);
        });
    };
    request.send();
}