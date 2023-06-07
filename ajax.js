let submitall= document.getElementById("submit")
let movie_name = document.getElementById("data1")
let movie_name2 = document.getElementById("data2")
let movie_name3 = document.getElementById("data3")
let movie_name4 = document.getElementById("data4")
let movie_name5 = document.getElementById("data5")
let xhr= new XMLHttpRequest();
submitall.onclick = function() {
    let inputall= document.getElementById("input").value;
   
    xhr.open("GET", "https://www.omdbapi.com/?t="+inputall+"&apikey=553b774a");
    
    xhr.onloadend = postAjaxFunction;
    xhr.send();
};
let postAjaxFunction = function () {
    if (xhr.status === 200) {        
        let response = JSON.parse(xhr.responseText);
        console.log(response);
        let c = response.Director;
        movie_name.innerHTML= "Director: -" +c

        let d = response.Actors;
        movie_name2.innerHTML= "Actors: -" +d

        let e = response.Country;
        movie_name3.innerHTML= "Country: -" +e   
      
        let f = response.Language;
        movie_name4.innerHTML = "Language:" +f

        let g = response.Released;
        movie_name5.innerHTML = "Released:" +g
          
    } else {
        inputall[0].innerHTML = "Something went wrong.";
    }
};

