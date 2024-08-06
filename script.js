// console.log("Smile more :D !");
var humanScore = 0;
var computerScore = 0;
const arr = ['rock', 'paper', 'scissors'];

function getComputerChoice(arr){
  let randomInt = Math.floor(Math.random() * 3);
  return arr[randomInt];
}

function getHumanChoice(arr){
  let choice = prompt(`What is your choice? 1 - ${arr[0]}, 2 - ${arr[1]}, 3 - ${arr[2]}?`);
  return arr[choice-1];
}

function playRound(humanChoice, compChoice) {
 // 0 beats 2, 1 beats 0, 2 beats 1, 
  // console.log(arr.indexOf(humanChoice));
  switch(arr.indexOf(humanChoice))
  {
    //you chose rock
    case 0:
      if(compChoice == arr[2]){
        console.log(`You won! ${arr[0]} beats ${arr[2]}.`)
        humanScore += 1;
        break;
      } else if(compChoice==arr[1]){
        console.log(`You lost! ${arr[1]} beats ${arr[0]}.`)
        computerScore += 1;
        break;
      }else{
        console.log(`Draw. Both of you chose ${arr[0]}`)
        break;
      }
    //you chose paper
    case 1:
      if(compChoice == arr[0]){
        console.log(`You won! ${arr[1]} beats ${arr[0]}.`)
        humanScore += 1;
        break;
      } else if(compChoice==arr[2]){
        console.log(`You lost! ${arr[2]} beats ${arr[1]}.`)
        computerScore += 1;
        break;
      }else{
        console.log(`Draw. Both of you chose ${arr[1]}`)
        break;
      }
      //you chose scissors
      case 2:
      if(compChoice == arr[1]){
        console.log(`You won! ${arr[2]} beats ${arr[1]}.`)
        humanScore += 1;
        break;
      } else if(compChoice==arr[0]){
        console.log(`You lost! ${arr[0]} beats ${arr[2]}.`)
        computerScore += 1;
        break;
      }else{
        console.log(`Draw. Both of you chose ${arr[2]}`)
        break;
      }
    default:
      console.log('invalid choice!');
      
  } 
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
}

function playGame(rounds){
  let n = 0;
  while(n<5){
    let humanChoice = getHumanChoice(arr);
    let computerChoice = getComputerChoice(arr);
    playRound(humanChoice, computerChoice);
    n += 1;
  }
}

playGame(5);

