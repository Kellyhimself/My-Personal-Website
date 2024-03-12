const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const button = document.getElementById("supriseMe");
button.addEventListener("click", function (){
    const randomNumber = Math.floor(Math.random()*6);
    

    switch (randomNumber){
        case 0:
            confetti.start();
            //trigger a confetti animation
        break;
        case 1:
            window.open("https://www.youtube.com/watch?v=QH2-TGUlwu4", "_blank");            //this will pop up a funny video
            //pops up a funny video
        break;
        case 2:
            // Display a motivational quote
            alert("The best way to predict the future is to create it. - Abraham Lincoln");
        break;
        case 3:
            alert("Congratulations! You've just helped me confirm the functionality of my Button, Thank you!");
            // Displays an award
        break;
        case 4:
            window.open("https://www.brainbashers.com/puzzles/riddles.asp", "_blank");
            //comes up with a riddle
        case 5:
            //asks a trivia question
            const answer = prompt("Is USA a country?")
            if (answer.toLocaleLowerCase() === "yes"){
                alert("correct")
            } else {
                alert("sorry, USA is a country")
            }

    }
})

