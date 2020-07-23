/////////////////chapter no: 38-42////////////////////
//answer 1
// function power(a, b) {
//     var result = 1;
//     if (b == undefined) b = 2;
//     for (var i = 1; i <= b; i++) {
//       result = result * a;
//     }
//     return result;
//   }
//   //answer 2
//   function leapyear(year) {
//     return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
//   }
  
  
//   //answer 3
//   function calculateS(a, b, c) {
//     return (a + b + c) / 2;
//   }
  
  
//   function calculateArea(a, b, c) {
//     var S = calculateS(a, b, c);
//     var area = S * (S - a) * (S - b) * (S - c);
//     return area;
//   }
  
  
//   //answer 4
//   function average(m1, m2, m3) {
//     var sum = m1 + m2 + m3;
//     var avg = sum / 3;
//     return avg;
//   }
//   //assuming marks from 100
//   function percentage(m1, m2, m3) {
//     var sum = m1 + m2 + m3;
//     var per = (sum / 300) * 100;
//     return per;
//   }
  
  
//   function mainFunction(m1, m2, m3) {
//     var num1 = parseInt(m1);
//     var num2 = parseInt(m2);
//     var num3 = parseInt(m3);
//     console.log("Average: " + average(num1, num2, num3));
//     console.log("Percentage: " + percentage(num1, num2, num3));
//   }
  
  
//   //answer 5
//   function indexOf(str, character) {
//     var i = 0;
//     for (; i < str.length; i++)
//       if (str.charAt(i).toLowerCase() === character.toLowerCase()) return i;
//   }
  
  
//   //answer 6
//   //utility function check vowel
//   function isVowel(char) {
//     switch (char) {
//       case "a":
//       case "e":
//       case "i":
//       case "o":
//       case "u":
//         return true;
//     }
//     return false;
//   }
//   function removeVowels(str) {
//     var i = 0;
//     var output = "";
//     for (; i < str.length; i++) {
//       if (!isVowel(str.charAt(i))) output += str.charAt(i);
//     }
//     str = output;
//     return str;
//   }
  
  
//   //answer 7
//   function countVowelPair(str) {
//     var i = 0;
//     var count = 0;
  
  
//     for (; i < str.length - 1; i++) {
//       var char = str.charAt(i);
//       switch (char) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u": {
//           var char2 = str.charAt(i + 1);
//           switch (char2) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//               //console.log("" + char + char2);
//               count++;
//           }
//         }
//       }
//     }
//     return count;
//   }
  
  
//   //answer 8
//   function convertDistances(km) {
//     km = parseFloat(km);
//     var m = km * 1000.0;
//     var feet = m * 3.28084;
//     var inch = feet * 12.0;
//     var cm = m * 100.0;
//     console.log("Meter : " + m.toPrecision());
//     console.log("Feet : " + feet.toPrecision());
//     console.log("Inches : " + inch.toPrecision());
//     console.log("Centimeter : " + cm.toPrecision());
//   }
  
  
//   //answer  9
//   function calculatePay(hours) {
//     var pay = 0.0;
//     var over = 0.0;
//     if (hours > 40) {
//       over = hours - 40;
//     }
//     pay = 12 * over;
//     return pay;
//   }
// answer 10
//   function currency(total) {
//     var hundred = total / 100;
//     var fifty = (total % 100) / 50;
//     var ten = ((total % 100) % 50) / 10;
//     document.write(
//       "You will have " +
//         Math.floor(hundred) +
//         " hundred notes " +
//         Math.floor(fifty) +
//         " fifty notes " +
//         Math.floor(ten) +
//         " ten notes."
//     );
//     console.log(
//       "You will have " +
//         Math.floor(hundred) +
//         " hundred notes " +
//         Math.floor(fifty) +
//         " fifty notes " +
//         Math.floor(ten) +
//         " ten notes."
//     );
//   }

  //////////////////chapter 43 to 48////////////////
  //////////QNo:1///////////////
  // function myAlert() {
  //   alert("Thanks for purchasing a phone from us!");
  // }
/////////Q2/////////////
// var ctr = 0;
// function hit(temp) {
//     ctr = ctr + temp;
//     test.innerHTML = ctr;
// };
// window.onclick;

  ////////Q:3////////////////
  // function delRow(temp) {
  //   var parentRowIndex = temp.parentNode.parentNode.rowIndex;
  //   document.getElementById("table").deleteRow(parentRowIndex);
  // }
  
  ////////Q5//////////
//   var ctr = 0;
// function hit(temp) {
//     ctr = ctr + temp;
//     test.innerHTML = ctr;
// };
// // window.onclick;
// <button onclick="hit(-1)">Decrease</button>
// <span id="test">--</span>
// <button onclick="hit(1)">Increase</button>



////////Dom chapter 58 to 57/////////////
// Q1
//  var mainontent=document.getElementById("main-content");

//  var maincontent= document.getElementById("main-content").childNodes;

//  var outpout = "";

//  var i;

//  for (i = 0; i < c.length; i++) {

//  ouput= output + maincontent[i].nodeName + "<br>";

//  }

//  document.write (output);

// var render=document.getElementByClassName("render");

// 	document.write(render);

// 	var firstname=getElementById("first-name");

// 		firstname.value="First Name"

// 	var lastname=getElementById("last-name")

// 	lastname.value=("Last Name")

// 	var lastname=getElementById("email")

// 	lastname.value=("Email")


// // Q2

// var nodeType=document.getElementById("last-name").nodeType;

// var childNode=document.getElementById("last-name").childNode;

// document.write(nodeType);

// document.write(childNode);

// var newnode= document.createTextNode("newNode");

// 	var lastnamenode= document.getElementById("lastName").childNodes[0];

// 	lastnamenode.replaceChild(newnode, lastnamenode.childNodes[0]);

// var firstchild = document.getElementById("main-content").firstChild;

// var lastchild = document.getElementById("main-content").lastChild;


// var prev =  document.getElementById("lastName").previousElementSibling;

// var next =  document.getElementById("lastName").nextElementSibling;



// var parentNode = document.getElementById("myLI").parentNode.nodeType;

	