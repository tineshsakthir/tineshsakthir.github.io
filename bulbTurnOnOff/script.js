const image = document.querySelector("img");


const onButton = document.querySelector("#on");
const offButton = document.querySelector("#off");

onButton.addEventListener("click",()=>{
    image.src = "on.jpeg";
})

offButton.addEventListener("click",()=>{
  image.src = "off.jpeg";
})
