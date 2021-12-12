var maleNames= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"]
function nameGenerator(){
   var year = document.getElementById("year").value;
   var month = document.getElementById("month").value;
   var day = document.getElementById("day").value;
   var gender = document.getElementById ("gender").value;
   let birthday = new Date(`${year}-${month}-${day}`)
   let dateString = birthday.toDateString()
   let birthDate = birthday.getDay()
     if (gender == "male"){
    let name = maleNames[birthDate]
    alert ("Your Akan Name is " +  name + "You were born on" + dateString)
  }
  else if (gender == "female"){
    let name = femaleNames[birthDate]
    alert ("Your Akan Name is " +  name + "You were born on" + dateString)
  }
  else {
    alert("Kindly select your gender")
  }    

  if (month > 12 || month < 1){
     alert ("You've entered invalid month")
  }
  if (day > 31 || month <1){
    alert ("You've entered invalid date")
  }
}