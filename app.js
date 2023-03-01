// alert("Thank you for visiting!");

// let usersName = prompt("What is your name?");

// if (usersName == "") {
//   usersName = prompt("It would really enhance your enjoyment of the site if we knew!");
// }

// let usersFavoriteAnimal = prompt("Hi, " + usersName + "! What's your favorite animal?");
// if (usersFavoriteAnimal == "") {
//   usersFavoriteAnimal = prompt(usersName + ", it honestly would enhance your enjoyment of the site!");
// } else if (usersFavoriteAnimal == "Manatee") {
//   alert("Manatees are my favorite too!");
// } else {
//   alert("Great choice!");
// }

function helloUser() {
  alert("Thank you for visiting!");
  let usersName = prompt("What is your name?");
  if (usersName == "") {
    usersName = prompt("It would really enhance your enjoyment of the site if we knew!");
  }
  let usersFavoriteAnimal = prompt("Hi, " + usersName + "! What's your favorite animal?");
  if (usersFavoriteAnimal == "") {
    usersFavoriteAnimal = prompt(usersName + ", it honestly would enhance your enjoyment of the site!");
  } else if (usersFavoriteAnimal == "Manatee") {
    alert("Manatees are my favorite too!");
  } else {
    alert("Great choice!");
  }
  document.write("Hi, " + usersName + " welcome to my page! " + usersFavoriteAnimal + " are so cool! Let me know if you'd like more information about rewilding!");
}

function pickANumber(){
  let userNum = prompt("Pick a number between 1 & 3 please")
  for (let i = 0; i < userNum; i++) {
    document.write("<img src='Mt.BlueResized.jpg' alt='' />");
  }

  let myNumber = 12;

  let userGuess = prompt("Guess a number between 1 & 15");

  while (userGuess != myNumber) {
    userGuess = prompt("Wrong! Guess again. A number between 1 & 15");
  }
}