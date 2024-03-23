// Ch # 8-14 | Concatenation | Prompts | if...else and else if statement
// Concatenate
document.getElementById("ConcatenateSomeString").onclick = function () {


    let message = "Thanks  ";
    let Name = "Abdullah";
    let banger = "!";
    let customMess = message + Name + banger;
    alert(customMess);
    document.write(message + Name + banger);
}
// Ask Name from user
document.getElementById("askNameFromUser").onclick = function () {

    let message = "Good day ";

    let firstName = prompt("please enter Your firstName");
    let lastName = prompt("please enter Your lastName");
    let banger = "!";
    let fullName = firstName + " " + lastName
    document.getElementById("OutPut").innerHTML = message + fullName + banger
}

// camparison operater
document.getElementById("ComparisonOperator").onclick  = function () {


    let num1 = 3;

    let num2 = 4;

    if (num1 <= num2) {
        alert("yes, your condition is true");
    }
    document.getElementById("OutPut"),innerHTML = num1 <= num2
}


  function checkComparisionOpertors (){
    alert("Js 2nd assignement is workink properly.")
    let check = " Js 2nd assignement is workink properly. "
    document.getElementById("OutPut").innerHTML = check
  }





// if else if statement
document.getElementById("ifElseIf").onclick = function () {

    var age = 20;
    var age = prompt("enter your age ")
    if (age >= 18) {
        alert("you are  eligible");
    } else {
        alert("you are not eligible");
    }

}
// testing of set condition

document.getElementById("testingSetsOfconditon").onclick = function () {

    var language = prompt("Enter your language");

    if (language === "javascript") {

        var city = prompt("Enter your city");
        if (city === "faisalabad") {
            var exp = prompt("Enter your experince");
            if (exp === "2 years") {
                alert("Congratulation,Hired")
            } else {
                alert("Need Experince")
            }
        } else {
            alert("Come faisalabad")
        }

    } else {
        alert("learn javaSacript")
    }
}

// if nested statement

document.getElementById("ifStatementNestd").onclick = function () {

    let age = +prompt("Enter your age?");

     age =18;

    if (18 >=18 ) {

        let weight = +prompt("Enter your weight?");
        if (weight <=70) {
            
                alert("you're a samart man")
            } else {
                alert("you're a fat guy.")
            }
        } else {
            alert("you're baby")
        }

    }

    // login
document.getElementById("login").onclick = function (){

    var userName =prompt(" your User Name"); 
    
     var pass = prompt("your password");

     if(userName === "abdullah" && pass === "123"){
        alert("user logged in")
    }else{
        alert("userName or password is incorect")
    }
}


document.getElementById("clearStatement").onclick = function () {

    document.getElementById("statement").innerHTML = "";

}         

document.getElementById("clearOutput").onclick = function () {

    document.getElementById("OutPut").innerHTML = "";

}  












