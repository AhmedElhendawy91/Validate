
function validate() {
    var myInput = document.getElementById('myInput').value;
    var myEmail = document.getElementById('myEmail').value;
    var myPass = document.getElementById('myPass').value;
    var myConfirm = document.getElementById('myConfirm').value;
    var myMistake = document.getElementById('myMistake');

    myMistake.setAttribute("class","alert alert-danger text-center")

    if (myInput=="" && myEmail=="" && myPass=="" && myConfirm=="") {
        myMistake.innerHTML= "Please Fill In The Data"
        return false
    }
    else if (myInput.length<5 || myInput.length>20){
        myMistake.innerHTML= "Please Enter Name Grater Than 5 and Less Than 20 "
        return false
    }
    else if (myEmail.indexOf("@")==-1 ){
        myMistake.innerHTML= "Please Enter Valid Email "
        return false
    }
    else if (myPass.length<=8){
        myMistake.innerHTML= "Please Enter Strong Password "
        return false
    }
    else if (myConfirm != myPass) {
        myMistake.innerHTML= "Please Match Password "
        return false
    } 
    
}

