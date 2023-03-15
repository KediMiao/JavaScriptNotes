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



//Three different ways of Function

function getMilk(money, cost) {  
  var bottles = Math.floor(money / cost); 
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("buying " + bottles + " milks");
  console.log("buying " + calsBottles(money, cost) + " milks")
  console.log("moveLeft");
  console.log("enterHouse");
  return money % cost;
}

var change = getMilk(5, 1.5);
console.log(change);
console.log(getMilk(5, 1.5));
//Be aware these two are different, render different things


function calsBottles(money, cost) {
    var bottles = Math.floor(money / cost);
    return bottles;
}


console.log(Math.pow(7,3));
// 7 ^ 3

console.log(Math.round(3.5)); //4
console.log(Math.round(3.4)); //3
//round down the number to the closest one 


//love calculator, simple learning some if else and Math.random
var yourName = prompt("What is your name?");
var crashName = prompt("WHat is your crush's name?")
var n = Math.random();
n = Math.floor(n * 101); // 0 - 100
if (n > 30 && n <= 70) {
    // === euqal  !== not equal > < >= <=
    // && || !
    alert("Your Love Score is " + n + ". It's worth a try");
} else if (n > 70){
    alert("Your Love Score is " + n + ". OMG!" ); 
} else {
    alert("Your Love Score is " + n + ". RUN!!!"); 
}

console.log( yourName + " and " + crashName + " of be together is " + n + "%");





var guestList = ["Jack", "Angela", "Pam", "James", "Lara", "Jason"];
console.log(guestList[1]); //Angela
console.log(guestList.includes("Jack")); //true

function isGuestInTheList(name) {
    var guestList = ["Jack", "Angela", "Pam", "James", "Lara", "Jason"]; 
    if (guestList.includes(name) === true) {
        return "Welcome, " + name;
    } else {
        return "Maybe Next Time."
    }
    
}

console.log(isGuestInTheList("Jack")); //Welcome, Jack
console.log(isGuestInTheList("Sam")); //Maybe Next Time.

FizzBuzz

array.push(); //push items into the array, always on the end.
array.pop; //Take the last one out of the array.
var output = [];
var count = 1;
function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz");
        console.log(output);
    } else if (count % 3 === 0) {
        output.push("Fizz");
        console.log(output);
             
    }else if (count % 5 === 0) {
        output.push("Buzz");
        console.log(output);
    } else {
        output.push(count);
        console.log(output);
    }
    count++;
}
   

//who is pay for lunch
function whosPaying(names) {
    var peoplePayForLunch = Math.floor (Math.random() * names.length) ; // [0 - length) --> [0 to length - 1 Integer]
    return names[peoplePayForLunch] + " is going to buy lunch today!"
     
}


//while loop
var output = [];
var count = 1;
function fizzBuzz() {
        while (count <=100) {
            if (count % 3 === 0 && count % 5 === 0){
            output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
                 
        }else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
        count++;
        console.log(output);
    }
}


//beer songs
   function bottlesOfBeerSong() {
    var beerBottles = 99;
    while (beerBottles !== 0) {
        console.log(beerBottles + " bottles of beer on the wall, " + beerBottles + " bottles of beer. Take 1 down, pass it around, " + (beerBottles - 1) + "bottles of beer on the wall.")
        beerBottles--;
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
}


//For Loop
function fibonacciGenerator (n) {
    var fibo = [];
    if (n >= 1) {//assume n will not be 0
        fibo.push(0);
    }
    if (n >= 2) {
        fibo.push(1);
    }
    if (n > 2) {
        var fiboNum = 1;
        for (var i = 1; i < n - 1; i++) {
            fibo.push(fiboNum);
            fiboNum = fiboNum + fibo[i];
        }
    }
    console.log(fibo);
}


