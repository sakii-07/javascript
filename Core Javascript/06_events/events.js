function checkChar(){
    var char = /^[a-zA-Z]+$/;
    var name = document.getElementById("inp1").value;
    var correctMsg = document.getElementById("correctMsg");
    var incorrectMsg = document.getElementById("incorrectMsg");

    if(name.match(char)){
        incorrectMsg.innerHTML=""
        correctMsg.innerHTML="correct name"
    }else{
        incorrectMsg.innerHTML="only characters are allowed"
        correctMsg.innerHTML=""
    }
}

function checkChar2(){
    var char = /^[a-zA-Z]+$/;
    var name = document.getElementById("inp2").value;
    var correctMsg = document.getElementById("correctMsg2");
    var incorrectMsg = document.getElementById("incorrectMsg2");

    if(name.match(char)){
        incorrectMsg.innerHTML=""
        correctMsg.innerHTML="correct"
    }else{
        incorrectMsg.innerHTML="only characters are allowed"
        correctMsg.innerHTML=""
    }
}

function checkPass(){
    var pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var name = document.getElementById("inp3").value;
    var correctMsg = document.getElementById("correctMsg3");
    var incorrectMsg = document.getElementById("incorrectMsg3");

    if(name.match(pass)){
        incorrectMsg.innerHTML=""
        correctMsg.innerHTML="correct password"
    }else{
        incorrectMsg.innerHTML="Password must be at least 8 characters long and include one capital letter, one small letter, one number, and one special character."
        correctMsg.innerHTML=""
    }
}

function checkMoNo(){
    var pass = /^[0-9]+$/;
    var name = document.getElementById("inp4").value;
    var correctMsg = document.getElementById("correctMsg4");
    var incorrectMsg = document.getElementById("incorrectMsg4");

    if(name.match(pass)){
        incorrectMsg.innerHTML=""
        correctMsg.innerHTML="correct"
    }else{
        incorrectMsg.innerHTML="only numbers are allowed"
        correctMsg.innerHTML=""
    }
}

