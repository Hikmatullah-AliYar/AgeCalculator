function showAge() {
  let birthDate = document.querySelector(".date-birth").value;
  let dob = new Date(birthDate);
  let today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  let montdiff = today.getMonth() - dob.getMonth();
  let daydiff = today.getDate() - dob.getDate();

  if (montdiff < 0 || (montdiff === 0 && daydiff < 0)) {
    age--;
  }

  if (birthDate === "") {
    alert("Please Enter Your Birth date?!");
  } else {
    // console.log(age);
    document.querySelector(".result").style.display = "block";
    document.querySelector(".calculated-age").textContent =
      "You are " +
      age +
      " years," +
      montdiff +
      " months and " +
      daydiff +
      " days.";
  }
  
}
