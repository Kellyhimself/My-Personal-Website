const h2 = document.createElement("h2");
h2.textContent = "This content was added by JavaScript";
document.querySelector("body").appendChild(h2);
  
const button = document.getElementById("supriseMe");
button.addEventListener("click", function (){
    const randomNumber = Math.floor(Math.random()*6);
    

    switch (randomNumber){
        case 0:
        popTriviaWindow();
        function popTriviaWindow(){
            const triviaWindow = window.open("", "Trivia", 'width=400, height=300');
            const h1 = triviaWindow.document.createElement("h1");
            const p = triviaWindow.document.createElement("p");
            const ul = triviaWindow.document.createElement("ul");
            h1.textContent = "Trivia Question"
            p.textContent = "What is the largest planet in our solar system?"
            ul.innerHTML = `
            <li><button>Earth</button></li>
            <li><button>Saturn</button></li>
            <li><button>Jupiter</button></li>
            <li><button>Mars</button></li>
            `; 
            triviaWindow.document.querySelector("body").appendChild(h1);
            triviaWindow.document.querySelector("body").appendChild(p);
            triviaWindow.document.querySelector("body").appendChild(ul);
            const buttons = triviaWindow.document.querySelectorAll("button");

            buttons.forEach((button) => button.addEventListener("click", function (){
                
                if (button.textContent === "Jupiter"){
                    triviaWindow.close();
                    alert("correct!");
                }else{
                    triviaWindow.close();
                    alert("That was wrong, Jupiter is the largest planet");
                }
        }))
            
        }
        //POPS UP A TRIVIA WINDOW
        break;
        case 1:
            function openPopup() {
                // Open a new window with the specified URL, width, and height
                window.open('https://giphy.com/embed/f08cafueoCoRW', '', 'width=480,height=444');
              }            //this will pop up a funny video
              openPopup();
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
