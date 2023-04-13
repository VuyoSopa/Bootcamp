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
  }

  // console.log(age);
  // console.log(years);
  return false;
}
