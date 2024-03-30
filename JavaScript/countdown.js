var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];





window.onload = function() {
    setGame();
}

function setGame() {

   
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let car = document.createElement("div");
        car.id = i;
        car.innerText = letters[Math.floor(Math.random() * 26)];
        car.classList.add("car");
        document.getElementById("letters").appendChild(car);
    }
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
        }
    }

    var x = setInterval(updateCountdown, 1000); // Update the countdown every second
}

document.getElementById("startButton").addEventListener("click", startTimer);
