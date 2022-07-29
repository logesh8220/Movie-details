let div = document.createElement("div")
div.className = "container-fluid con"
div.innerHTML = `
<div class="container">
<ul class="headerbar">
<li><button class="lmdb">LMDb</button></li>
<li class="items">Home</li>
<li><input type="search" placeholder="Search LMDb" class="inputbar"><button class="searchicon"> <i class="fa-solid fa-magnifying-glass sicon"></i></li>
<li class="items">Watchlish</li>
<li class="items">Sign In</li>
<li class="items">About</li>
</ul>
</div>
`
let api = 'http://www.omdbapi.com/?t=naruto&apikey=bcea3e57'
async function users() {
    let res = await fetch(api)
    let data = await res.json()
    console.log(data)
document.body.append(div)
let div1 = document.createElement("div")
div.className = "container-fluid con"
div.appendChild(div1)
let div2 = document.createElement("div")
div2.className = " container-fluid div2"
document.body.append(div2)
let div3 = document.createElement("div")
div3.innerHTML = `<div class="container neseteddiv text-center text-light">
<h2>${data.Title}</h2>
<span>${data.Type} . </span><span>${data.Year} . </span><span>${data.Rated} . </span><span>${data.Runtime}</span><br>
<img src="${data.Poster}" alt="Poster"><br>
<div class="ratings text-secondary">
<span>LMDb Rating </span><span>LMDbVotes</span><span>LMDb Value</span>
</div>
<div class="rating">
<span><i class="fa-solid fa-star icons"></i>${data.imdbRating}</span><span><i class="fa-solid fa-comment vicon"></i>${data.imdbVotes}</span><span><i class="fa-solid fa-star icons"></i>${data.Ratings[0].Value}</span>
</div>
<hr>
<b>Released</b>
<p>${data.Released}</p>
<P class="genre"><b>Genre</b></p>
<p>${data.Genre}</p>
<hr>
<P><b>Plot</b></p>
<p>${data.Plot}</p>
<hr>
<b>Writer</b>
<p>${data.Writer}</p>
<hr>
<b>Actors</b>
<p>${data.Actors}</p>
<hr>
<b>Country</b>
<p>${data.Country}</p>
<hr>
<b>Language</b>
<p>${data.Language}</p>

</div>`
div2.appendChild(div3)

let input = document.querySelector(".inputbar")
let button = document.querySelector(".searchicon")
button.addEventListener("click",async function(){
    try{
    let resolve = await fetch(`https://www.omdbapi.com/?t=${input.value}&apikey=bcea3e57`)
    let dataa = await resolve.json()
div3.innerHTML = `<div class="container neseteddiv text-center text-light">
<h2>${dataa.Title}</h2>
<span>${dataa.Type} . </span><span>${dataa.Year} . </span><span>${dataa.Rated} . </span><span>${dataa.Runtime}</span><br>
<img src="${dataa.Poster}" alt="Poster"><br>
<div class="ratings text-secondary">
<span>LMDb Rating </span><span>LMDbVotes</span><span>LMDb Value</span>
</div>
<div class="rating">
<span><i class="fa-solid fa-star icons"></i>${dataa.imdbRating}</span><span><i class="fa-solid fa-comment vicon"></i>${dataa.imdbVotes}</span><span><i class="fa-solid fa-star icons"></i>${dataa.Ratings[0].Value}</span>
</div>
<b>Released</b>
<p>${dataa.Released}</p>
<P class="genre"><b>Genre</b></p>
<p>${dataa.Genre}</p>
<hr>
<P><b>Plot</b></p>
<p>${dataa.Plot}</p>
<hr>
<b>Writer</b>
<p>${dataa.Writer}</p>
<hr>
<b>Actors</b>
<p>${dataa.Actors}</p>
<hr>
<b>Country</b>
<p>${dataa.Country}</p>
<hr>
<b>Language</b>
<p>${dataa.Language}</p>

</div>`
div2.appendChild(div3)
    }
    catch (err){
        alert("Not Available")
    }
})
}
users()