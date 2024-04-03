//var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var vowels = ["A", "E", "I", "O", "U"];
var consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
var i = 0;
let ls = "";
letters = [];
// const fs = require('fs');
// fs.readFile('words.txt', 'utf8', (err, data) =>{
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });



// "1".addEventListener("keyup", goToTwo);
// input2.addEventListener("2", goToThree);
// input3.addEventListener("3", goToFour);
// input4.addEventListener("4", goToFive);
// input5.addEventListener("5", goToSix);
// input6.addEventListener("6", goToSeven);
// input7.addEventListener("7", goToEight);
// input8.addEventListener("8", goToNine);

function goToTwo(){
    
    if(document.getElementById("1").value.length == 1){
        document.getElementById("2").focus();
    }
    if(document.getElementById("2").value.length == 1){
        document.getElementById("3").focus();
    }
    if(document.getElementById("3").value.length == 1){
        document.getElementById("4").focus();
    }
    if(document.getElementById("4").value.length == 1){
        document.getElementById("5").focus();
    }
    if(document.getElementById("5").value.length == 1){
        document.getElementById("6").focus();
    }
    if(document.getElementById("6").value.length == 1){
        document.getElementById("7").focus();
    }
    if(document.getElementById("7").value.length == 1){
        document.getElementById("8").focus();
    }
    if(document.getElementById("8").value.length == 1){
        document.getElementById("9").focus();
    }
}





window.onload = function() {
    setGame();
}

function setGame() {
    
   
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let ins = document.createElement("input");
        ins.id = i;
        ins.maxLength = 1;
        ins.classList.add("car");
        ins.addEventListener("keyup", goToTwo);
        document.getElementById("word").appendChild(ins);
    }
    // let inp = document.createElement("input");
    // document.getElementById("word").appendChild(inp);

}
function afterFilled(){
    if(i==9){

        alert(letters);
        document.getElementById("vowels").disabled = true;
        document.getElementById("consonants").disabled = true;
        startTimer();
    }
    
}


function addVowel(){
    if(i<9){
        
        let car = document.createElement("div");
        ls = vowels[Math.floor(Math.random() * 5)];
        letters.push(ls);
        car.innerText = ls;
        car.classList.add("car");
        document.getElementById("letters").appendChild(car);
        i++;
        
        afterFilled();
        
    }
}
function addConsonants(){
    if(i<9){
    let car = document.createElement("div");
    ls = consonants[Math.floor(Math.random() * 21)];
    letters.push(ls);
    car.innerText = ls;
    car.classList.add("car");
    document.getElementById("letters").appendChild(car);
    i++;
    
    afterFilled();
    
    }
}

function afterTimer(){
    alert("e")
    let word = "";
    for (let i = 1; i <= 9; i++) {
        const input = document.getElementById(i.toString());
        alert(input.value);
        input.toUpperCase();
        word += input.value;
        input.value = "";
        document.getElementById(i).disabled = true;
        alert(word);
       

        
    }
    alert(word);
    let wording = document.createElement("div");
    wording.innerText = word;
    document.getElementById("finalWord").appendChild(wording);
    

}

function startTimer() {
    var countdownDuration = 10; // Countdown duration in seconds
    var countdownStart = Date.now(); // Record the start time

    function updateCountdown() {
        var now = Date.now();
        var elapsed = Math.floor((now - countdownStart) / 1000); // Calculate elapsed time in seconds
        var remaining = countdownDuration - elapsed; // Calculate remaining time

        if (remaining >= 0) {
            document.getElementById("countdown").innerHTML = remaining + "s ";
        } else {
            clearInterval(x); // Stop the countdown when it reaches 0
            document.getElementById("countdown").innerHTML = "FINISHED";
            afterTimer();
            
        }
    }

    var x = setInterval(updateCountdown, 1000); // Update the countdown every second

}

document.getElementById("startButton").addEventListener("click", startTimer);


