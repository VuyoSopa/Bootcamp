 let yearAns =[]
 localStorage.setItem("calculator",JSON.stringify(yearAns))
  //age=JSON.parse(localStorage.getItem("calculator"))

function submit() {
  let year = document.getElementById("submit").value;
  if (year < 0) {
    alert("Your born year cannot be negative");
  } else if (!year) {
    alert("Please enter your born Year");
  } else {
    let age = 2023 - year;
  
    if (age <= 0) {
      alert("error,age cannot be negative or zero");
    } else if (age >= 0) {
      alert(age);
    }
    //number = document.getElementById('calculator').value
  }
}
function history(){
  let age = document.getElementById('calculator').value
  age.unshift(age)
  (localStorage.getItem("calculator"))
   yearAns =JSON.parse(localStorage.getItem("calculator"));

  }//yearAns.push(history)
  // console.log(age);
  // console.log(years);
  //return false;

