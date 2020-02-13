function searchOnClick(){
    var request = new XMLHttpRequest();
    var query = document.getElementById('search-field').value
    request.open('GET', 'https://api.themoviedb.org/3/search/multi?api_key=fc762d52bec3d2991597a025cdb95b91&language=en-US&page=1&include_adult=false&query=' + query);
    request.onload = function() {
        var data = JSON.parse(this.response);
        console.log(data.results);
    };
    request.send();
}