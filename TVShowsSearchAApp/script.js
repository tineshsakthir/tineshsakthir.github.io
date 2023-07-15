

const container = document.querySelector("#container");
const requestForm =  document.querySelector("#requestForm");
const resetBtn  = document.querySelector("#resetBtn")
const requestShow = document.querySelector("#requestShow")
requestForm.addEventListener("submit",async (event)=>{
  event.preventDefault();
  container.innerHTML=""
  const requestName  = requestShow.value;
  if(requestName){
    await getMovies(requestName);
    //clearing input field after submitting
    requestShow.value="";
  }
  else{
    alert("Please Enter A Movie Name!!!!!!!!1");
  }
})

const getMovies = async (requestName)=> {
  try{
    const config = { params : {q : requestName}}
  const movies = await axios.get('https://api.tvmaze.com/search/shows',config);
  console.log(movies);
  if(movies.data){
    createImages(movies.data)
  }
  else{
    container.elements.noImage.display = "block";
  }
  }
  catch(err){
    // const errorMessage = document.createElement("H3");
    // errorMessage.textContent= "Oops! Something went wrong" ;
    // const centeringTheError = document.createElement("CENTER");
    // centeringTheError.appendChild(errorMessage)
    // errorMessage.style.color = "red"
    // container.appendChild(centeringTheError);
  }
}

const createImages = (shows) => { 

  const container2 = document.createElement("DIV");
  for (let oneShow of shows){
    if(oneShow.show.image.medium){
      const img = document.createElement("IMG");
      img.classList.add("movieImg","mx-auto","p-2","g-col-6","col") 
    img.src = oneShow.show.image.medium
    container2.appendChild(img)
    container2.classList.add("row","row-col-2")
    container.appendChild(container2)
    }
  }
}

// clearing the images 

resetBtn.addEventListener("click",(evt)=> {
   evt.preventDefault();
   container.innerHTML=""
})