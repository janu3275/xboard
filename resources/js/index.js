console.log(magazines);

async function fe(j){
let mjson = await fetch('https://api.rss2json.com/v1/api.json?rss_url='+magazines[j] ).then(res=>res.json()).catch((err)=> console.log(err));
console.log(j)
console.log(mjson);
return mjson;
}


// fetch(url)
//     .then(response => {
//         // handle the response
//     })
//     .catch(error => {
//         // handle the error
//     });
async function addtodom(){
  let parent = document.getElementById("parent");
  let accord = document.createElement("div");
  accord.id = "accordion";
  
  
    for(let j=0;j<magazines.length;j++){
      console.log(magazines.length);
    let mydata = await fe(j);
    console.log(j);
    console.log(mydata);
   
    let crouselinner = document.createElement("div");
    crouselinner.className = "carousel-inner";
    console.log(mydata["items"].length);
    for(let i=0;i<mydata['items'].length;i++){
    let crouselitem = document.createElement("div");
    if(i===0){
      crouselitem.className = "carousel-item active";
    }else{
      crouselitem.className = "carousel-item";
    }
    crouselitem.innerHTML = `<a href = ${mydata["items"][i]["link"]}><div class="card" style="width:100%">
    <img class="card-img-top" src=${mydata["items"][i]["enclosure"]["link"]} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${mydata["items"][i]["title"]}</h5>
      <p class="card-text">${mydata["items"][i]["description"]}</p>
      
    </div>
  </div>
  </a>`
  crouselinner.append(crouselitem);
  
  console.log(crouselinner);
    }
    
    let crouse  = document.createElement("div");
    crouse.innerHTML =`
    
    <div id = "accordion">
    <div id="heading${j}">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed se" id = ${j} data-bs-toggle="collapse" data-bs-target="#collapse${j}" aria-expanded="true" aria-controls="collapse${j}">
        <i class="fa fa-lg fa-angle-down" aria-hidden="true"></i> ${mydata["feed"]["title"]}
        </button>
      </h5>
    </div>

    <div id="collapse${j}" class="collapse " aria-labelledby="heading${j}" data-bs-parent="#accordion">
    <div id="carouselExample${j}Controls" class="carousel slide " data-bs-ride="carousel">
    <div class="carousel-inner">
    ${crouselinner.innerHTML}
    
    </div>
    <a class="carousel-control-prev dir" href="#carouselExample${j}Controls" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next dir" href="#carouselExample${j}Controls" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
      </div>
      </div>
      

  
 

  
    
  
  `
  parent.append(crouse);
}
let firstele = document.getElementById("collapse0");
firstele.className = "collapse show";

// parent.append(accord);
}

addtodom();






/* <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${j}Example" aria-expanded="false" aria-controls="collapseExample">
      Button with data-target
    </button>
  </p> */
  // <div class="collapse" id="collapse${j}Example">
  