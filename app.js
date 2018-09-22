$.ajax({
    url: `https://newsapi.org/v2/top-headlines?sources=espn&apiKey=3de734e329934a479d6ba1bd8c63320f`,
    success: function(data) {
        console.log(data);
        for (i = 0; i < 7; i++) {
            document.querySelector(".news-story").innerHTML +=
                `
             <div>
                <h1> ${data.articles[i].title} </h1>
              
                <p> ${data.articles[i].description}</p>
            </div class="head-line">
            <span class="nwes-image" style="background-image: url(${data.articles[i].urlToImage});"></span>
    
        </div>`
        }

    }
})





// fetch(`https://newsapi.org/v2/top-headlines?sources=espn&apiKey=3de734e329934a479d6ba1bd8c63320f`) // Call the fetch function passing the url of the API as a parameter
//     .then(function(responce) {
//         return response.json();
//         console.log(responce)
//             // Your code for handling the data you get from the API
//     })
//     .catch(function() {
//         // This is where you run code if the server returns any errors
//     });


// let news;
// fetch(`https://newsapi.org/v2/top-headlines?sources=espn&apiKey=3de734e329934a479d6ba1bd8c63320f`)
//     .then((response) => response.json())
//     .then(function(myJson) {
//         console.log(myJson)
//         news = myJson

//     })

// function init() {
//     let newsList = document.querySelector(".news-story");
//     for (let i = 0; i < 7; i++) {

//         console.log(news.articles)
//         `url${urlToImage}`;
//         newsList.innerHTML += `<div>
//         <h1>${news.articles[0].title}</h1>
//         <h3> this is ab headline </h3>
//         <p>it a story aboutbe fgffgf g f fg fgsd fgsd fg fd fgf g fgsdfg s fgdfgd fgd fgdsd fgfgd gsffsd hdd fs hdfdfdfsasdgsdf sdfdfg fdg df gd gsffsd fdg df gdfsg dfgdfgdffgdgfdfg dfggdfgdfg dfs gdf
//         </p>
//                 </div class="head-line">
//                 <!-- <img src="news-1414325_960_720.jpg" alt="" class="nwes-image"> -->
//                 <span class="nwes-image"></span>

//             </div>
//         `
//     }
// }

// function changeTeam(teamIndex) {

//     document.querySelector("#team-name").innerHTML = crickerTeams[teamIndex].name
//     document.querySelector("#team-title").innerHTML = crickerTeams[teamIndex].name
//     document.querySelector("#odi-ranking").innerHTML = crickerTeams[teamIndex].odiRanking
//     document.querySelector("#t20-ranking").innerHTML = crickerTeams[teamIndex].t20Ranking



// }