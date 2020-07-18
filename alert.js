////////================CHAPTER 1 ALERTS=====================///////////////////////////////////////////////////////////////////////


// TASK 1
//alert("hello world");

// TASK 2
//alert("Error!Please enter a valid password.");

// TASK 3
//alert("Welcome to JS Land...\nHappy Coding!")

// TASK 4
//alert("Welcome to JS Land...");
//alert("Happy Coding!");

// TASK 5 RUN IN CONSOLE
//alert("Hello... I can run JS through my web browser's console");
// TASK 6 AND 7 DONE AND CHECKED.


//////////========= CHAPTER 2 VARIABLES FOR STRINGS==========/////////////////////////////////////////////////////////////////////


// TASK 1
//var username;

// TASK 2
//var myName="Bisma Shaikh";

// Task 3 (a,b,c)
//var message;
//message="Hello World";
//alert(message);

// TASK 4
// var name = "Jhone Doe";
// var age = "15 years old";
// var course = "Certified Mobile Application Development"
// alert(name);
// alert(age);
// alert(course);

// TASK 5
// var food="PIZZA"
// alert(food+"\n"+food.slice(0,4)+"\n"+food.slice(0,3)+"\n"+food.slice(0,2)+"\n"+food.slice(0,1));

// TASK 6
// var email="khanfrk700@gmail.com";
// alert("My email address is "+email);

// TASK 7
// var book="A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book "+book);

// TASK 8
//document.write("Yah! I can write HTML content through Javascript");

// TASK 9
// var x="▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
// alert(x);


//////////=========== CHAPTER 3 VARIABLES FOR NUMBERS=========//////////////////////////////////////////////////////////////////////


// TASK 1 
// var age = 15;
// alert("I am "+age+" years old");

// TASK 2
// var x = +prompt("How many times you visited this site ?");
// alert("You have visited this site "+x+" times");

// TASK 3 
// var birthYear=1999;
//  document.write("My birth year is "+birthYear);
//  document.write("<br>");
//  document.write("Data type of my declared variable is "+typeof birthYear);

// TASK 4
// var name= prompt("Your Name: ")
// var product = prompt("Your Product's Name: ")
// var quantity = +prompt("Product's Quantity: ")
// alert(name+" ordered "+quantity+" "+product+" (s) on XYZ Clothing store.");


////////================= CHAPTER 4====================////////////////////////////////////////////////////////////////////////////


// VARIABLES NAMES : LEGAL AND ILLEGAL
// TASK 1 
//var x="Hello " , y="World " , z="2020";
//document.write(x+y+z);

// TASK 2 
// illegal var
// var 1stvar;
// var 2_check;
// var third check;
// var 123name;
// var #name;
// legal var
//var name,$age,first_name,name123;

// TASK 3
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<br>");
// document.write("Variable name can only contain, numbers,$ and _.For example: $my_1stVariable <br> Variable must begin with a letter, $ or _.For example: $name, _name or name <br> Variable name are case sensitive <br> Variable name should not be JS keywords")


///////////////================ CHAPTER 5 =================/////////////////////////////////////////////////////////////////////////


// MATH EXPRESSIONS
// TASK 1
// var x= +prompt("Enter 1st number: ");
// var y= +prompt("Enter 2nd number: ");
// var z= x+y;
// document.write("Sum of "+x+" and "+y+" is "+z);

// TASK 2
// var x= +prompt("Enter 1st number: ");
// var y= +prompt("Enter 2nd number: ");
// var z= x-y;
// document.write("Subtraction of "+y+" and "+x+" is "+z);
// var x= +prompt("Enter 1st number: ");
// var y= +prompt("Enter 2nd number: ");
// var z= x*y;
// document.write("Multiplication of "+x+" and "+y+" is "+z);
// var x= +prompt("Enter 1st number: ");
// var y= +prompt("Enter 2nd number: ");
// var z= x/y;
// document.write("Division of "+x+" and "+y+" is "+z);
// var x= +prompt("Enter 1st number: ");
// var y= +prompt("Enter 2nd number: ");
// var z= x%y;
// document.write("Modulus of "+x+" and "+y+" is "+z);

// TASK 3
// var x;
// document.write("Value after variable declaration is "+x+ "<br>");
// x = 5;
// document.write("Initial value: "+x+"<br>");
// x++;
// document.write("Value after increment is: "+x+"<br>");
// x=x+7;
// document.write("Value after addition is: "+x+"<br>");
// x--;
// document.write("Value after decrement is: "+x+"<br>");
// x=x%3;
// document.write("The remainder is: "+x);

// TASK 4
// var price=600;
// var tickets=5;
// var total= price*tickets;
// document.write("Total cost to buy 5 tickets to a movie is "+total+"PKR");

// TASK 5
// document.write("Table of 4 <br>");
// for(var i = 1; i<=10;i++){
//   document.write("4 x "+i+" = "+4*i)
//   document.write("<br>")
// };

// TASK 6
// var c=25;
// var F = (c*9/5)+32;
// var f=70;
// var C = (f-32)*5/9;
// document.write("25°C is "+F+"°F <br>");
// document.write("70°F is "+C+"°C");

// TASK 7
// var p1=+prompt("Price of item 1: ");
// var p2=+prompt("Price of item 2: ");
// var q1=+prompt("Quantity of item 1: ");
// var q2=+prompt("Quantity of item 2: ");
// var shipping = 100;
// var totalp1=p1*q1;
// var totalp2=p2*q2;
// var total= totalp1+totalp2+shipping;
// document.write("Price of item 1 is "+p1+"<br>");
// document.write("Price of item 2 is "+p2+"<br>");
// document.write("Quantity of item 1 is "+q1+"<br>");
// document.write("Quantity of item 2 is "+q2+"<br>");
// document.write("Shipping Charges "+shipping+"<br><br>");
// document.write("Total cost of your order is "+total);

// TASK 8
// var total = 980;
// var marks = 804;
// var per = 804/980 * 100 ;
// document.write("Total marks: "+total+"<br>")
// document.write("Marks obtained: "+marks+"<br>")
// document.write("Percentage: "+per+"%");

// TASK 9
// var $=10;
// var R=25;
// var pkr=$*104.80 + R*28;
// document.write("<h1>Currency in  PKR</h1><br>")
// document.write("Total Currency in PKR: "+pkr);

// TASK 10
// var x = 2;
// x=((x+5)*10)/2;
// document.write("Result is: "+x);

// TASK 11
// var current_year=+prompt("Write current year: ");
// var birth_year=+prompt("Write your birth year: ");
// var age=current_year-birth_year;
// document.write("<h1>Age Calculator</h1><br>");
// document.write("Current Year: "+current_year+"<br>");
// document.write("Birth Year: "+birth_year+"<br>");
// document.write("Your age is: "+age+"<br>");

// TASK 12 
// var r=+prompt("Write radius of a circle: ");
// var a=3.142*r*r;
// var c=2*3.142*r;
// document.write("<h1>The Geometrizer</h1><br>");
// document.write("Radius of a circle is: "+r+"<br>");
// document.write("The circumference is: "+c+"<br>");
// document.write("The area is: "+a+"<br>");

// TASK 13 
// var snack=prompt("Write your favourite snack: ");
// var age=+prompt("Write your age: ");
// var maxAge=+prompt("Write your max age: ");
// var amount=+prompt("Write your per day snack amount: ");
// var cal=(maxAge-age)*365*amount;
// document.write("<h1>The Lifetime Supply Calculator</h1><br>");
// document.write("Favourite Snack: "+snack+"<br>");
// document.write("Current Age: "+age+"<br>");
// document.write("Estimated maximum age: "+maxAge+"<br>");
// document.write("Amount of snacks per day: "+amount+"<br>");
// document.write("You will need "+cal+" "+snack+" to last you untill the ripe old of "+maxAge);

////////////============= CHAPTER 6-9 ============//////////////////////////////////////////////////////////////////////////////////


// MATH EXPRESSIONS
// TASK 1 
// var a = +prompt("Write a number: ");
// document.write("Result: <br>");
// document.write("The value of a is: "+a+"<br>");
// document.write("..............................<br><br>");

// document.write("The value of ++a is: "+(++a)+"<br>");
// document.write("Now the value of a is: "+a+"<br>");

// document.write("The value of a++ is: "+(a++)+"<br>");
// document.write("Now the value of a is: "+a+"<br>");

// document.write("The value of --a is: "+(--a)+"<br>");
// document.write("Now the value of a is: "+a+"<br>");

// document.write("The value of a-- is: "+(a--)+"<br>");
// document.write("Now the value of a is: "+a+"<br>");

// TASK 2 
//  var a=2,b=1;
// document.write("a is "+a+"<br>");
// document.write("b is "+b+"<br>");
// document.write("result is "+(--a - --b + ++b + b--)+"<br>");
// a=2;
// b=1;
// document.write("Explanation: <br>");
// document.write("--a is "+(--a)+"<br>");
// a=2;
// --a - --b + ++b + b--;
// document.write("--a - --b is "+(--a - --b)+"<br>");
// a=2;
// b=1;
// document.write("--a - --b + ++b is "+(--a - --b + ++b)+"<br>");
// a=2;
// b=1;
// document.write("--a - --b + ++b + b-- is "+(--a - --b + ++b + b--)+"<br>");

// TASK 3
// var name = prompt("What is your name?");
// alert("Welcome "+name);

// TASK 5
//  var num = +prompt("Enter Table number: ");
// if(num==""){
//   for(var i=1; i<=10; i++){
//     document.write("5 x "+i+" = "+5*i)
//     document.write("<br>")}
// }
// else{
//   for(var i=1; i<=10; i++){
//     document.write(num+ " x "+i+" = "+num*i)
//     document.write("<br>")
//    }
// }

// TASK 6
//  var s1= prompt("Write subject 1: ");
//  var m1= +prompt("Marks of subject 1: ");
//  var s2= prompt("Write subject 2: ");
//  var m2= +prompt("Marks of subject 2: ");
//  var s3= prompt("Write subject 3: ");
//  var m3= +prompt("Marks of subject 3: ");
//  var t1=100, t2=100,t3=100;
//  var total=t1+t2+t3;
//  var p1=m1/t1*100,p2=m2/t2*100,p3=m3/t3*100;
//  var per=(p1+p2+p3)/total*100;
//  var marks=m1+m2+m3;
// document.write("<pre><h3>Subject  Total Marks  Obtained Marks  Percentage</h3></pre>");
// document.write("<pre>"+s1+"        "+t1+"             "+m1+"                "+p1+"</pre>");
// document.write("<pre>"+s2+"        "+t2+"             "+m2+"                "+p2+"</pre>");
// document.write("<pre>"+s3+"        "+t3+"             "+m3+"                "+p3+"</pre>");
// document.write("<pre>                  "+total+"             "+marks+"                "+per+"</pre>");


//////////============ CHAPTER 9-11m =============///////////////////////////////////////////////////////////////////////////////


// USER INPUT AND CONDITIONAL STATEMENT
// TASK 1 
// var city=prompt("Enter city name: ");
// if(city==="karachi" || city==="Karachi"){
//     alert("Welcome To City Of Lights");
// }

// TASK 2
// var gender=prompt("Enter your gender: ");
// if(gender==="male"|| gender==="Male"){
//     alert("Good Morning Sir");
// }
// else if(gender==="female"|| gender==="Female"){
//     alert("Good Morning Ma'am");
// }

// TASK 3
// var color = prompt("Enter Traffic Signal Color: ");
// if(color==="red"||color==="Red"||color==="RED"){
//     alert("Must Stop")
// }
// else if(color==="yellow"||color==="Yellow"||color==="YELLOW"){
//     alert("Ready To Move")
// }
// else if(color==="green"||color==="Green"||color==="GREEN"){
//     alert("Move Now")
// }

// TASK 4
// var fuel=+prompt("Enter remaining fuel in car in litres:","Answer should be in number");
// if (fuel<"0.25"){
//     alert("Please refill the fuel in your car")
// }

// TASK 5
// Running Scripts:
// a)
// var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }
// Ans.  "given condition for variable a is true"
// b)
// var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
// Ans. not alert
// c)
// var c = 12; if (c++ === 13){ alert("condition 1 is true"); } 
// if (c === 13){ alert("condition 2 is true"); } 
// if (++c < 14){ alert("condition 3 is true"); } 
// if(c === 14){ alert("condition 4 is true"); }
// Ans  "condition 2 is true" &  condition 4 is true
// d)
// var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
// Ans  "The cost equals"
// e)
// if (true){ alert("True"); } if (false){ alert("False"); }
// Ans  True
// f)
// if("car" < "cat"){ alert("car is smaller than cat"); }
// Ans  "car is smaller than cat"

// TASK 6
// var sub=+prompt("Enter marks obtained in all 3 subjects: ")
// var total=+prompt("Enter total marks of all 3 subjects: ")
// var per= sub/total*100;
// document.write("<h1>Marks Sheet</h1>")
// document.write("Total marks: "+total+"<br>");
// document.write("Marks obtained: "+sub+"<br>");
// document.write("Percentage: "+per+"%<br>");
// if (per>=80){
//     document.write("Grade: A-one <br>")
//     document.write("Remarks: Excellent <br>")
// }
// else if (per>=70){
//     document.write("Grade: A <br>")
//     document.write("Remarks: Good <br>")
// }
// else if (per>=60){
//     document.write("Grade: B <br>")
//     document.write("Remarks: You need to improve <br>")
// }
// else if (per<60){
//     document.write("Grade: Fail <br>")
//     document.write("Remarks: Sorry <br>")
// }

// TASK 7
// var secretnum = 7;
// var guessnum = +prompt("Guess the secret number (ranging from 1 to 10: ");
// if(guessnum===secretnum){
//     alert("Bingo! Correct answer")
// }
// else if(++guessnum===secretnum){
//     alert("Close enough to the correct answer")
// }

// TASK 8
// check whether the given number is divisible by 3
// var x = +prompt("Enter number: ")
// if(x%3===0){
//     alert("Your number is divisible by 3")
// }

// TASK 9
// checks whether the given input is an even number or an odd number
//  var x = +prompt("Enter number:  ")
//  if(x%2===0){
//      alert("Your number is even")
//  }
// else if(x%2!==0){
//     alert("Your number is odd")
// }

// TASK 10
// var T = +prompt("Enter temperature","Enter numeric values only")
// if(T>40){
//     alert("It is too hot outside.")
// }
// else if(T>30){
//     alert("The Weather today is Normal.")
// }
// else if(T>20){
//     alert("Today’s Weather is cool.")
// }
// else if(T>10){
//     alert("OMG! Today’s weather is so Cool.")
// }

// TASK 11 
// CALCULATOR
// var x = +prompt("Enter first number: ")
// var z = prompt("Enter Operation sign: ")
// var y = +prompt("Enter second number: ")
// if (z=="+"){
//     alert(x+y)
// }
// else if (z=="-"){
//     alert(x-y)
// }
// else if (z=="/"){
//     alert(x/y)
// }
// else if (z=="%"){
//     alert(x%y)
// }

///////////////////============ CHAPTER 12-13 ===========////////////////////////////////////////////////////////////////////////////


// IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS
// TASK 1 
// var x = prompt("enter char(number or string): ")
// var y =x.charCodeAt()
// if(y>=65 && y<=90){
//     alert("Your input is a uppercase letter")
// }
// else if(y>=97 && y<=122){
//     alert("Your input is a lower letter")
// }
// else(
//     alert("Your input is a number")
// )




// TASK 2
// var x= +prompt("Enter 1st integer: ")
// var y= +prompt("Enter 2nd integer: ")
// if(x>y){
//     alert("1st integer: "+x+", is greater than 2nd integer: "+y)
// }
// else if(y>x){
//     alert("2nd integer: "+y+", is greater than 1st integer: "+x)
// }
// else if(x===y){
//     alert("Both integers are equal")
// }

// TASK 3
// var num=+prompt("Enter number :")

// if (num>0)
// {
// document.write(num+" is positive ")
// }
// else if (num<0)
// {
//     document.write(num+" is negative")
// }
// else if (num==0)
// {
//     document.write(num+" is zero")
// }
// else
// {
//     document.write("please enter only integer to check")
// }

// TASK 4
// var x=prompt("Enter a character to check vowel or not: ")
// if(x=='a'||x=='e'||x=='i'||x=='o'||x=='u' ||x=='A'||x=='E'||x=='I'||x=='O'||x=='U'){
//     alert("True (vowel)")
// }
// else{
//     alert("False (not vowel)")
// }

// TASK 5
// var pass = "charcoal001"
// var x = prompt("Please enter your password: ")
// if(x==pass){
//     alert("Correct! The password you entered matches the original password")
// }
// else{
//     alert("Incorrect password")
// }

// TASK 6
//This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
//     greeting = "Good day";
//     alert(greeting);
//      } 
// else greeting = "Good evening";
// alert(greeting);

// TASK 7
// var time = +prompt("Enter time in 24 hours format (like: 1900 = 7pm): ")
// if(time>=0000 && time<1200){
//           alert("Good Morning!")
// }
// else if(time>=1200 && time<1700){
//     alert("Good Afternoon!")
// }
// else if(time>=1700 && time<2100){
//     alert("Good Evening!")
// }
// else if(time>=2100 && time<=2359){
//     alert("Good Night!")
// }

/////////////========== CHAPTER 14-16 ==================////////////////////////////////////////////////////////////////////////////


// ARRAYS 
// TASK 1 
// var empty_array=[""];

// TASK 2 
// var empty_array=["",];

// TASK 3
//var arr= ["web","mobile","app"];

// TASK 4
//var arr= [100,200,500];

// TASK 5 
//-var bol=[true,false,true];

// TASK 6
// var arr= ["web","mobile",200];


// TASK 7
// var x = ["","SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
// document.write("<h3>Qualifications:</h3>")
// for(var i=1; i<x.length;i++){
//     document.write(i+") "+x[i]+" <br>");
// }
// OR
//  var x = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
//  document.write("<h3>Qualifications:</h3>");
//  document.write("1) "+x[0]+"<br>");
//  document.write("2) "+x[1]+"<br>");
//  document.write("3) "+x[2]+"<br>");
//  document.write("4) "+x[3]+"<br>");
//  document.write("5) "+x[4]+"<br>");
//  document.write("6) "+x[5]+"<br>");
//  document.write("7) "+x[6]+"<br>");
//  document.write("8) "+x[7]+"<br>");


// TASK 8
// var x=["Michael","John","Tony"];
// var marks=[320,230,480];
// var total=500;
// for(var i=0; i<x.length;i++)
// {
//     document.write("Score of "+x[i]+" is "+marks[i]+". Percentage: "+marks[i]/total*100+"% <br>")
// }

// TASK 9 
// var color=["red","green","blue","orange","black"];

// var x = prompt("What color you want to add to the beginning: ");
// var y = prompt("What color you want to add to the end: ");
// color.unshift(x);

// color.push(y);

// var a = prompt("Add two more color to the beginning of the array, color 1: ");
// var b = prompt("Color 2: ");
// color.unshift(a);
// color.unshift(b);
// color.shift();
// color.pop();

// var c = prompt("At which index you want to add a color: ");
// var d = prompt("Color name: ");
// color.splice(c,0,d);
//  var e = prompt("At which index you want to delete color(s): ")
//  var f = prompt("How many colors you want to delete: ")
// color.splice(e,f)
// document.write(color);

// TASK 10
// var arr1 = [320,230,480,120]
// document.write("Scores of students: "+arr1+"<br>")
// arr1.sort();
// document.write("Ordered Scores of students: "+arr1+"<br>");

// TASK 11
// var arr1 = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities list: <br>"+arr1+"<br><br>");
// var arr2=arr1.slice(2,4);
// document.write("Selected cities list: <br>"+arr2);

// TASK 12 
// var arr = ["This", "is", "my","cat"];
// document.write("Array: <br> "+arr+"<br><br>");
// document.write("String: <br> "+arr.join(" "));

// TASK 13 FIFO METHOD
// var arr = [];
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");
// document.write("Devices: <br>"+arr+"<br><br>");
// document.write("Out: <br>"+arr.shift()+"<br>");
// document.write("Out: <br>"+arr.shift()+"<br>");
// document.write("Out: <br>"+arr.shift()+"<br>");
// document.write("Out: <br>"+arr.shift()+"<br>");

// OR By Loop
// var arr = [];
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");
// document.write("Devices: <br>"+arr+"<br><br>");
// for(var i=0; i<4; i++){
// document.write("Out: <br>"+arr.shift()+"<br>");
// }

// TASK 14 LIFO METHOD
// var arr = [];
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");
// document.write("Devices: <br>"+arr+"<br><br>");
// document.write("Out: <br>"+arr.pop()+"<br>");
// document.write("Out: <br>"+arr.pop()+"<br>");
// document.write("Out: <br>"+arr.pop()+"<br>");
// document.write("Out: <br>"+arr.pop()+"<br>");

// OR By Loop
// var arr = [];
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");
// document.write("Devices: <br>"+arr+"<br><br>");
// for(var i=0; i<4; i++){
// document.write("Out: <br>"+arr.pop()+"<br>");
// }

// TASK 15
// var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
// document.write("<select>")
// for(var i=0; i<arr.length; i++){
//     document.write("<option>"+arr[i]+"</option>")
// }
// document.write("</select>")







///////////////////========== CHAPTER 17-20 ==========///////////////////////////////////////////////////////////////////////////////


// ARRAYS AND LOOPS
// TASK 1 
// var mul_arr=[[],[],[]];

// TASK 2 
// var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// for (var i=0; i<arr.length; i++){
//     document.write(arr[i].join(" ")+"<br>")
// }

// TASK 3
// for(var i=1; i<=10; i++){
//     document.write(i+"<br>")
// }

// TASK 4
// var a=+prompt("Enter a number to show its multiplication table");
// var b=+prompt("Enter length of multiplication table");

// document.write("Multiplication table of "+a+"<br>");
// document.write("Length "+b+"<br><br>");
// for(var i=1; i<=b; i++){
//     document.write(a+" x "+i+" = "+a*i)
//     document.write("<br>")
// }

// TASK 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for(var i=0; i<fruits.length; i++){
//     document.write(fruits[i]+"<br>")  
// }
// document.write("<br>")
// for(var i=0; i<fruits.length; i++){
//     document.write("Element at index "+i+" is "+fruits[i]+"<br>")  
// }

// TASK 6
// document.write("<b>Counting:</b><br><br>")
// for(var i=0; i<=15; i++){
//     document.write(i+",")
// }
// document.write("<br><br><b>Reverse Counting:</b><br><br>")
// for(var i=10; i>=0; i--){
//     document.write(i+",")
// }
// document.write("<br><br><b>Even:</b><br><br>")
// for(var i=0; i<=20; i++){
//     if(i%2==0){
//         document.write(i+",")
//     }

// }
// document.write("<br><br><b>Odd:</b><br><br>")
// for(var i=0; i<=20; i++){
//     if(i%2!==0){
//         document.write(i+",")
//     }

// }
// document.write("<br><br><b>Series:</b><br><br>")
// for(var i=2; i<=20; i++){
//     if(i%2==0){
//         document.write(i+"k,")
//     }

// }

// TASK 7

//  var items = ["cake", "apple pie", "cookie", "chips", "patties"]
//  var search = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?")
//  if(items.indexOf(search)!==-1){
//      document.write(search+" is <b>available</b> at index "+items.indexOf(search)+" in our bakery")
//  }
//  else{
//     document.write("We are sorry, "+search+" is <b>not available</b>  in our bakery")
//  }

// OR 2nd Method
// var a=["cake","apple pie","cookie","chips","patties"]
// var item=prompt("Enter item to check: ")
// var match=false;
// for (var i=0; i<6; i++)
// {
//     if (item==a[i])
//     {
//         match=true
//         alert(item+" is available at index "+i+" in our bakery")
//     }

// }
// if (match===false)
// {
//     alert("We are sorry! "+item+" is not availabe in our bakery")
// }


// TASK 8
// var A = [24, 53, 78, 91,12];
// var largest="";
// for(var i=0; i<5; i++)
// {
//  if (largest==="")
//  {
//      largest=A[i]
//  }
//  else if(A[i]>largest)
//  {
//      largest=A[i]
//  }

// }
// document.write("Array items: "+A+"<br>")
// document.write(" The Largest number is: "+largest)

// OR 2ND METHOD
// var arr = [24, 53, 78, 91, 12]
// document.write("Array items: "+arr+"<br>")
// var max = Math.max.apply(Math, arr)
// document.write("The largest number is "+max)

// TASK 9

// var arr = [24, 53, 78, 91, 12]
// document.write("Array items: "+arr+"<br>")
// var min = Math.min.apply(Math, arr)
// document.write("The smallest number is "+min)

// OR
//var A = [24, 53, 78, 91,12];
// var smallest="";
// for(var i=0; i<5; i++)
// {
//  if (smallest==="")
//  {
//      smallest=A[i]
//  }
//  else if(A[i]<smallest)
//  {
//      smallest=A[i]
//  }

// }
// document.write("Array items: "+A+"<br>")
// document.write(" The Smallest number is: "+smallest)

// TASK 10
// for(var i=1; i<=100; i++){
//     if(i%5==0){
//         document.write(i+",")
//     }
// }

//----------------------20 CHAPTERS END--------------------//