function searchOnClick(){
    var request = new XMLHttpRequest();
    var query = document.getElementById('searchfield').value
    request.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=fc762d52bec3d2991597a025cdb95b91&language=en-US&page=1&include_adult=false&query=' + query);
    request.onload = function() {
        var data = JSON.parse(this.response);
        console.log(data.results);
        $(document).ready(function(){
            for(i = 0; i <= 20; i++){
                $('#movie-card-text-' + (i + 1)).text("");
            }
            for(i = 0; i < data.results.length; i++){
                $('#movie-card-' +(i + 1)).show();
                $('#movie-card-text-' + (i + 1)).text(data.results[i].title);
            }
            for(i = 0; i < 20; i++){
                if($('#movie-card-text-' + (i + 1)).text() === ""){
                    $('#movie-card-' +(i + 1)).hide();
                }
            }
        });
    };
    request.send();
}

function search() {
    if(event.key === 'Enter') {
        event.preventDefault();
        searchOnClick();        
    }
}