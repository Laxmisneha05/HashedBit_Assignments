function displayRandomNumber() {
    // Generate a random whole number between -20 and 20
    var randomNumber = Math.floor(Math.random() * 41) - 20;
    
    // Display the random number
    document.getElementById("num").innerText = randomNumber;

    // Check if the number is negative and display "Cold" or "Hot" accordingly
    var feedback = document.createElement("div");
    if (randomNumber < 0) {
        feedback.innerText = "Cold";
    } else {
        feedback.innerText = "Hot";
    }
    document.body.appendChild(feedback);
}