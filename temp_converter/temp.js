/*function conTemp(F) {
    if(F > 16){
        console.log("cold")
    }else if(16 < F < 21) {
      console.log("warm")
    }else if(F < 16) {
        console.log("hot")
    }
    
    return (F-32)*5/9
}
console.log(conTemp(59))*/

function submit() {
    // To get a value from Input tag
    let number = document.getElementById("submit").value;

    // To convert fahrenheits to celsius
    let c = (number-32)*5/9;
    let = document.getElementById("result").submit= result
    result.innerHTML = number


  if(!number)  result.innerHTML=("Please enter a number ")

   if (c < -273.15)
    { result.innerHTML=("it cannot be colder than this" /*+" "+ c +" °C"*/);}
    //alert("it cannot be colder than this" +" "+ c)

     else if (c < 16 ) {
      result.innerHTML=("It is cold,wear Jacket" +" "+ c +" °C");
     // alert("it cannot be colder than this" +" "+ c);
    }

      else if (c>=16 && c<21) {
        //alert("It is warm,wear T-shirt and Jeans" +" "+ c);
        result.innerHTML=("It is warm, wear T-shirt and Jeans" +" "+ c + " ° C")
    }
        
    else 
       result.innerHTML=("It is hot,wear shorts" +" "+ c + " °C")

      /* (!c <-273.15)
      {
       alert("it cannot be colder than this" +" "+ c);*/
       } 
       
       //return false
    



  

