
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
for (var i = 0; i < queries.length; i++)
{
  document.write(queries[i] + "<br>");
}

function searchByID(id){
    var myID = id;
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.themoviedb.org/3/search/movie/' + myID + '?api_key=fc762d52bec3d2991597a025cdb95b91&language=en-US&page=1&include_adult=false&');
    request.onload = function(){
        console.log(data.results);
        var html = '<div class="card">';
            html += '<p>';
            html += '</div>';
        var data = JSON.parse(this.response);
        const cont = document.getElementById("container");
        cont.append(html);
    };
}