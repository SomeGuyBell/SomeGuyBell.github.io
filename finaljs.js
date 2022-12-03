//OnLoad Function
const result = document.querySelector("#result");
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

window.onload = function () {
  var url = 'https://imdb-api.com/en/API/Top250Movies/k_n79r7x4f/';
  fetch(url, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      var resultsLength = 10;
      for (let i = 0; i < resultsLength; i++) {
        document.getElementById("result").innerHTML += "<div id='title' class='grid-item'>" + data.items[i].fullTitle + "<h2>" + data.items[i].crew + "</h2>" + "</div>";
      }
    })
    .catch((error) => console.log(error));
};
//End onLoad Function

// Search Feature
const fetchDataBtn = document.querySelector("#fetchdata");
const searchResult = document.querySelector("#result");
  var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
const getData = function () {
  var title = document.getElementById("searchVar").value;
  var url = 'https://imdb-api.com/en/API/SearchTitle/k_n79r7x4f/' + title;
  fetch(url, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      var resultsLength = 10;
      document.getElementById("result").innerHTML = "";
      for (let i = 0; i < resultsLength; i++) {
        document.getElementById("result").innerHTML += "<div id='title' class='grid-item'>" + data.results[i].title +"<h2>" + data.results[i].description + "</h2>" + "</div>";
      }
    })
    .catch((error) => console.log(error));
};
fetchDataBtn.addEventListener("click", getData);
//End Search Function


//Begin jQuery 
//Begin Search Button Animation
$('.search-button').click(function(){
  $(this).parent().toggleClass('open');
});
//End Search Button Animation
