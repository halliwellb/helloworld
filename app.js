alert("Thank you for visiting!");
let usersName = prompt("What is your name?");
if (usersName == ""){
  usersName = prompt("It would really enhance your enjoyment of the site if we knew!");
}
let usersFavoriteAnimal = prompt("Hi, " + usersName + "! What's your favorite animal?");
if (usersFavoriteAnimal == ""){
  usersFavoriteAnimal = prompt(usersName + ", it honestly would enhance your enjoyment of the site!");
} else if (usersFavoriteAnimal == "Manatee"){
  alert("Manatees are my favorite too!");
} else {
  alert("Great choice!");
}

document.write("Hi " + usersName + " welcome to my page! " + usersFavoriteAnimal + " are so cool! Let me know if you'd like more information about rewilding!");


// alert("Thank you for visiting!");
// let usersName = prompt("What is your name?");
// let usersFavoriteAnimal = prompt("What is your favorite animal?");
// console.log("Hi " + usersName + " welcome to my page! " + usersFavoriteAnimal + " are so cool!");
// if (usersFavoriteAnimal == "Manatee") {
//     alert("Manatees are my favorite too!");
//   } else {
//     alert("Great choice!");
// }
// document.write("Hi " + usersName + " welcome to my page! " + usersFavoriteAnimal + " are so cool!");
// document.write(" Let me know if you'd like more information about rewilding!");

// if (usersName) == "Kassie") {
//     alert("Great teaching!");
//     console.log("Hi " + usersName + " Great teaching!");
//     document.write("Hi " + usersName + " Great teaching!");
// }
// } else {
//     alert("Thanks for coming!");
// }


// if {
//     prompt("Would you like more information?");
// } if ("Yes"){
//     alert("Great!");
// } else {
//     alert("OK! Let us know if you change your mind!");
// }
