// //strings
// const myVariable = "deepan chakkaravarthy";

// //Length
// console.log(myVariable.length);

// //String Methods
// console.log(myVariable.charAt(3));
// console.log(myVariable.indexOf("ch"));
// console.log(myVariable.slice(2,6));
// console.log(myVariable.toLowerCase());
// console.log(myVariable.includes("deep"));
// console.log(myVariable.split(" "))

// //Number

// const myName = "434.09"

// const myNumber = 17;

// const myFloat = 17.01;

// console.log(myNumber);
// console.log(myFloat);

// //Number Methods

// console.log(Number.isInteger(myFloat));

// console.log(Number.parseFloat(myName));

// //Math properties

// console.log(Math.PI)

// console.log(myVariable.charAt(Math.floor(Math.random()*myVariable.length)));

// //IF Statement

// let customerIsBanned = false;
// let viewer = "Js full Course";
// let reply;
// let finance = true;
// if (customerIsBanned){
//     reply = 'Sorry';
// }
// else if(viewer && finance){
//     reply = `Enjoy ${viewer} and finanace`
// }
// else if(viewer){
//     reply = `Enjoy ${viewer}`
// }
// else{
//     reply = `Sorry I am still Working`
// }
// console.log(reply);

// let testScore = 50;
// let grade;
// let collegeStudent = true;

// if (testScore>=90){
//     grade = `Grade 'A'`
// } 
// else if (testScore>=80){
//     grade =  `Grade 'B'`
// }
// else if (testScore>=70){
//     grade =  `Grade 'C'`
// }
// else if (testScore>=60){
//     grade =  `Grade 'D'`
// }
// else{
//     if (collegeStudent){
//         grade = `Re-Appear`
//     }else{
//     grade = `Fail`
//     }
// }
// console.log(grade);

// //Switch Statements

// switch (Math.floor(Math.random()*5)){
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     default:
//         console.log("No Match")
// }

// let player = "rock";
// let computer = "scissors";

// switch (player){
//     case computer:
//         console.log("Tie!")
//         break;
//     case "rock":
//         if (computer === "scissors"){
//             console.log("Player Wins")
//         }
//         else{
//             console.log("Computer Wins")
//         }
//         break;
//     default:
//         console.log("No Tie!")
// }

// //Ternary Operator (Conditional Operators);

// let subscriber;
// let responce = subscriber ? "Welcome!" : "Kindly Subscribe";
// console.log(responce);

// let testValue = 89;
// let result = testValue > 89 ? "A" : testValue > 79 ? "B" : testValue > 69 ? "C" : "Fail";
// console.log(result)

// //Rock,paper,scissor Game by using Trnary operator;

// let deepan = "Paper";
// let krishna = "Rock";

// let game = krishna === deepan ? "Tie" : deepan === "Rock" && krishna === "Scissor" ? "Deepan Wins!" : deepan === "Rock" && krishna === "Paper" ? "Deepan Wins!" : deepan === "Scisssor" && krishna === "Paper" ? "Deepan Wins!" : "Krishna Wins!"
// console.log(game);

// //User Input;
// //confirm;

// // let myBoolean = confirm("Subscribe");
// // console.log(myBoolean);


// // let point = prompt("done");
// // console.log(point);

// // ?? -> Null collasting operator -> by using this we can avoid getting null from user.

// let po = prompt("Enter your name");
// if (po){
//     console.log(po ?? "you didn't enter your name");
// }
// else{
//     console.log("you didn't enter your name");
// }

// // Your First Interactive Game
// let playGame = confirm("Shall we play rock, paper, or scissors?");
// if (playGame) {
//   //play
//   let playerChoice = prompt("Please enter rock, paper, or scissors.");
//   if (playerChoice) {
//     let playerOne = playerChoice.trim().toLowerCase();
//     if (
//       playerOne === "rock" ||
//       playerOne === "paper" ||
//       playerOne === "scissors"
//     ) {
//       let computerChoice = Math.floor(Math.random() * 3 + 1);
//       let computer =
//         computerChoice === 1
//           ? "rock"
//           : computerChoice === 2
//           ? "paper"
//           : "scissors";

//       let result =
//         playerOne === computer
//           ? "Tie game!"
//           : playerOne === "rock" && computer === "paper"
//           ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//           : playerOne === "paper" && computer === "scissors"
//           ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//           : playerOne === "scissors" && computer === "rock"
//           ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//           : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
//       alert(result);
//       let playAgain = confirm("Play Again?");
//       playAgain ? location.reload() : alert("Ok, thanks for playing.");
//     } else {
//       alert("You didn't enter rock, paper, or scissors.");
//     }
//   } else {
//     alert("I guess you changed your mind. Maybe next time.");
//   }
// } else {
//   alert("Ok, maybe next time.");
// }

// // Loops;
// // While Loops;

// i=0;
// while(i<=50){
//     console.log(i);
//     i++;
// }

// //Do While;

// i=50;
// do {
//     console.log(i);
//     i=i+50;
// }while(i<50);

// //for Loops;


// for(i=1;i<=50;i++)
// {
//     console.log(i);
// }

let name = "Deepan";
for(let i=0; i<=name.length;i+1)
{
    console.log(name.charAt(i));
}

