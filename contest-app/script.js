let url = "https://kontests.net/api/v1/all"
let cardContainer= document.getElementById("cardContainer");
let response = fetch(url);

response
.then((res)=>res.json())
.then((data)=>{
    // console.log(data);
    html = "";
    for (const item in data) {
        // console.log(data[item]);
        html += `<div class="card" style="width: 18rem;">
        <img src="https://startit.rs/media/coding-contest_march_18_1200px.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data[item].name}</h5>
            <p class="card-text">Start time is ${data[item].start_time}</p>
            <p class="card-text">End time is ${data[item].end_time}</p>
            <p> In 24 Hours? ${data[item].in_24_hours}</p>
            <p> Status ${data[item].status}</p>
            <a href="${data[item].url}" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`
    }
    cardContainer.innerHTML = html;
})
