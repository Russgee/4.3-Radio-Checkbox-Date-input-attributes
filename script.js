//Getting Value From Radio Button
document.getElementById('btn').addEventListener('click', function() {
  var formInput = document.getElementById("numberForm");
  //Code here for step 5
  
  alert();
});
//Pre-setting Radio Button Value
function check() {
    //document.getElementById("r2").CODE HERE = true;
}

function uncheck() {
    //document.getElementById("r2").CODE HERE = false;
}


//Coffee
function myFunction() {
  var coffee = document.getElementById("coffee");
  var txt = "";
  var i;
  for (i = 0; i < coffee.length; i++) {
    if (coffee[i].checked) {
      txt = txt + coffee[i].value + " ";
    }
  }
  document.getElementById("order").innerHTML = "You ordered a coffee with: " + txt;
}
// Birthday
function dateFunction1() {
  var x = document.getElementById("date1").value;
  console.log(x);
  document.getElementById("dateTarget1").innerHTML = x;

}

function dateFunction2() {
   var x = document.getElementById("date2").value;
  console.log(x);
  document.getElementById("dateTarget2").innerHTML = x;
}
