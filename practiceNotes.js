var message = prompt("Write your message here");

// Length

var length = message.length;
var leftCharacters = 140 - length;
alert("You have written " + length + " characters, you have " + leftCharacters + " left.");


// Slice

var message = prompt("Wirte down here: ");
var newMessage = message.slice(0,140);
alert(newMessage);


alert(prompt("Wirte down here: ").slice(0,140));


// toUpperCase() toLowerCase()
var name = "kenny";
name = name.toUpperCase();
name = name.toLowerCase();

// First Letter Capitalize
var name = prompt("What is your name?");
var firstLetter = name.slice(0,1);
firstLetter = firstLetter.toUpperCase();
var restOfName = name.slice(1,name.length);
restOfName = restOfName.toLowerCase();
alert("Hello, " + firstLetter + restOfName);

//  Dog Age to Human Age
var dogAge = prompt("What is your puppy's age?");
alert("Your puppy's age to human age will be " + ((dogAge - 2) *4 + 21));


var x = 5;
x += 2; //7
var y = 3;
x += y;//10
x ++; //11
x --;//10

var x = 3;  //x=3,y undefined
var y = x++;  //x=4, y=3
y += 1; //x = 4, y = 4


// function getMilk() {
//     console.log("Haha");
// }

// getMilk();



