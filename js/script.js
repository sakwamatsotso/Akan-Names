var mNames= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var fNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
function akanNames(){
   var year = document.getElementById("year").value;
   var month = document.getElementById("month").value;
   var day = document.getElementById("day").value;
   var gender = document.getElementById ("gender").value;
   let birthday = new Date(`${year}-${month}-${day}`)
   let dateString = birthday.toDateString()
   let birthDate = birthday.getDay()

     if(gender == "male"){
    let name = mNames[birthDate]
    alert ("You were born on"+  dateString + "Your Akan Name is" + name)
  }
  else if (gender == "female"){
    let name = fNames[birthDate]
    alert ("You were born on:  " +  dateString + ", and Your Akan Name is: " + name)
  }
  else{
    alert("Kindly select your gender")
  }    
  if (month > 12 || month < 1){
     alert ("You've entered invalid month")
  }
  if (day > 31 || day <1){
    alert ("You've entered invalid date")
  }
}