/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
 
 
function main(){
   //your code here
 putBeeper();
 fiveTimeInARoll();
 fiveTimeInARoll();
 moveForward();
 moveForward();
}

function moveForward() {
   move();
   move();
   putBeeper();
   }
   
function rightUpper() {
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
   }
   
function leftUpper() {
   move();
   turnRight(); 
   move();
   putBeeper();
   turnRight();
}
      
function fiveTimeInARoll() {
   moveForward();
   moveForward();
   rightUpper();
   moveForward();
   leftUpper();
 }
