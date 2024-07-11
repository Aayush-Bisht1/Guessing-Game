let input = document.getElementById('Guessnumber');
let btn = document.getElementById('btn');
let wrng = document.querySelector('.wrng');
let guesses = document.getElementById('Guesses');

let rn = Math.floor(Math.random()*100)+1;
let numguesses = 0;

btn.addEventListener('click',function(event){
    if(input.value<1 || input.value>100 || isNaN(input.value)){
        wrng.innerHTML = "Enter a number between 1 to 100";
    }
    else{
        numguesses ++;
        guesses.innerHTML = "No. of Guess: "+ numguesses;
        if(input.value > rn){
            wrng.innerHTML = "You Guessed too High !!";
        }
        else if(input.value < rn){
            wrng.innerHTML = "You Guessed too Low !!";
        }
        else{
            wrng.innerHTML = "CONGRATULATIONS, Your Guess is Correct ! HOORAH";
            setTimeout(()=>{
                resetGame();
            },5000)
        }
    }
})
function resetGame(){
    numguesses = 0;
    rn = Math.floor(Math.random()*100)+1;
    input.value = "";
    wrng.innerHTML = "";
    guesses.innerHTML = "No. of Guess: 0";
}