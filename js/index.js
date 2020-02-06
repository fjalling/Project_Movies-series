document.getElementById("submit").addEventListener("click", callAPIs);

function callAPIs(){
    request = new XMLHttpRequest();
    request.open("GET", "https://api.themoviedb.org/3/movie/343611?api_key=fc762d52bec3d2991597a025cdb95b91");
    document.getElementById("nat-text").innerHTML = "";
    let data = JSON.parse(request.responseText);
        fetch("https://api.themoviedb.org/3/movie/343611?api_key=fc762d52bec3d2991597a025cdb95b91")
            .then(response => response.json())
            .then(json => {
                document.getElementById("nat-text").innerHTML += `You are likely from ${json.name}<br>`;
            });
}