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



