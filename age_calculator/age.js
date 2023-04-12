function submit() {
    let years = document.getElementById("submit").value;

    let age = (2023 - years);
    if (!years){
        alert ("Please enter your born Year")
      }

    else if (age < 0) {
        alert("error,age cannot be negative")
    }
    else if (age >= 0)
        alert(age)
    
    
     
    }
       


    