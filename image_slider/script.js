/*const prev = document.querySelector('.prev')
const next = document.querySelector('.next')





prev.addEventListener('click', () => {

}*/

// let image = document.querySelector('image')
// let prev = document.querySelector('prev')
// let next = document.querySelector('next')




let images= [
    "joker.jpg",
    "wallpapers.jpg",
    "anime.jpg"
];
let index = 0; 

img = document.getElementById('image')
function next() {
   //img = document.getElementById('image')
    
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
  //  img = document.getElementById('image')
   // console.log(show);
     index --;
    // image.src = images[index]
     if(index < 0){
       index=images.length-1
     }
     img.src = images [index];
  
}






