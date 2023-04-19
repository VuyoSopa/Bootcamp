/*const prev = document.querySelector('.prev')
const next = document.querySelector('.next')





prev.addEventListener('click', () => {

}*/

// let image = document.querySelector('image')
// let prev = document.querySelector('prev')
// let next = document.querySelector('next')

let images;

if(localStorage.getItem("slider")){
images=JSON.parse(localStorage.getItem("slider"));
}
else{
images = [
    "joker.jpg",
    "wallpapers.jpg",
    "anime.jpg",
    "met.webp",
    "harley.webp",
    "cartoon.jpg"
];
} //localStorage.removeItem()
/*if(localStorage.getItem("slider")  images ) {
  alert("Picture already exist")
}*/

/*let photos= [
    "joker.jpg",
    "wallpapers.jpg",
    "anime.jpg",
    "met.webp",
    "harley.webp",
    "cartoon.jpg"
];

localStorage.setItem('slider',JSON.stringify(photos))
let slider1 = localStorage.getItem("slider")
let slider = JSON.parse()
console.log(slider);

/*alert(photos2.length);*/

function addimage() {
  let img = document.getElementById('images').value;
    //images.push(Img)
    if(!img){
      return alert("Please insert image")
  }
    for (let i = 0; i < images.length; i++)
      {
      
      if(img == images[i]) {
      return alert("Picture already exist")
    }
      
    
      }
      images.push(img)
  //console.log(Img);

  localStorage.setItem("slider",JSON.stringify(images));
  document.getElementById('images').value='';

}

/*function removeDuplicates {
if(localStorage.getItem("slider") == "images" ) {
  alert("Picture already exist")
 //document.getElementById('Images').value='';*/



 let index = 0;

function next() {
   img = document.getElementById('image')
   // console.log(show);
     index ++;
    // image.src = images[index]
     if(index  >= images.length){
       index = 0
     }
     img.src = images [index]; 
}
//next()
//next()
//next()

function prev() {
    let img = document.getElementById('image')
   // console.log(show);
     index --;
    // image.src = images[index]
     if(index < 0){
       index=images.length-1
     }
     img.src = images [index];
  
}

function removeImage(){

  //images= document.getElementById('remove').value
  images.splice(index,1)
  localStorage.setItem("slider",JSON.stringify(images));
  return false
}

  






















/*let photos= [
  "joker.jpg",
    "wallpapers.jpg",
    "anime.jpg",
    "met.webp",
    "harley.webp",
    "cartoon.jpg"
];

localStorage.setItem("slider",JSON.stringify(photos))*/








