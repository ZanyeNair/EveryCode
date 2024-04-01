var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var vowels = ["A", "E", "I", "O", "U"];
var consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
var i = 0;




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
        document.getElementById("word").appendChild(ins);
    }
    // let inp = document.createElement("input");
    // document.getElementById("word").appendChild(inp);

}

function addVowel(){
    if(i<9){
        let car = document.createElement("div");
        car.innerText = vowels[Math.floor(Math.random() * 5)];
        car.classList.add("car");
        document.getElementById("letters").appendChild(car);
        i++;
    }
}
function addConsonants(){
    if(i<9){
    let car = document.createElement("div");
    car.innerText = consonants[Math.floor(Math.random() * 21)];
    car.classList.add("car");
    document.getElementById("letters").appendChild(car);
    i++;
    }
}

function afterTimer(){
    let word = "";
    for (let i = 1; i <= 9; i++) {
        const input = document.getElementById(i);
        word += input.value;
        input.value = "";
    }
    document.getElementById("finalWord").innerHTML = word;

}

function startTimer() {
    var countdownDuration = 30; // Countdown duration in seconds
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


