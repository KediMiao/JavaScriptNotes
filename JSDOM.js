//USing JS in HTML 
//Inline Internal External

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Kenny's Website</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body onload="alert('hello');"> // Inline
    <h1>Hello</h1>
    <script type="text/javascript"> //Internal
      alert("hello");
    </script>
  </body>
</html>


//DOM (Document Obeject Model)
document.firstElementChild.lastElementChild.....; //to target exact object we looking for
//query


//getElements

//Tag names
document.getElementsByTagName("li")[2]; //get the third list in HTML, something like this <li> Hello </li>
//and I can do things with it like:
document.getElementsByTagName("li")[1].style.color = "red";
document.getElementsByTagName("li").length; //how many li are there

//Class Names
documents.getElementsByClassName("btn"); //get all the buttton within the class btn

//ID Names
documents.getElementByID("firstId"); //this only have one in it, not array



//query selector
documents.querySelector("h1"); //first h1
documents.querySelector("ul li"); //first li inside of ul
documents.querySelector("li.list"); //inside li and within the class "list", this has to be the same level not child and parent

documents.querySelectorAll("list"); // selector all




// one example here

//HTML:
 <ul>
      <li class="list">
        <a href="https://www.google.com">Google</a>
      </li>
      <li class="list">Second</li>
      <li class="list">Third</li>
</ul>


document.querySelector("ul a").style.color = "red"; // work
document.querySelector("ul .list").style.color = "yellow"; // only change the dot, becuase list and a is actually not in the same tree
document.querySelector("ul .list a").style.color = "yellow"; // work

document.querySelector("button").style.backgroundColor = "yellow"; // change color but not good, do this inside of CSS


//use this to change style
document.querySelector("button").classList; //shouw class of this object
document.querySelector("button").classList.add("invisible");// use this to add and remove and toggle to change styles


//change text using JS
document.querySelector("h1").innerHTML = "<em> Hi </em>"; //we can change not only text but also style
document.querySelector("h1").textContent = "<em> Hi </em>"; // as for this one, only text, it will look like this: '<em> Hi </em>' on screen
//but I am guess both are useful, first one more for programmer do some tricks, second one more for viewers
//you don't want someone type '<em> Hi </em>' this on you website and then change your website style right?


//Attributes
document.querySelector("a").attributes; //let you know what kind of attributes are inside of this query
document.querySelector("a").getAttribute("href"); // get the Attribute
document.querySelector("a").setAttribute("href", "http://www.iccpra.org"); //change Attribute content to something else









