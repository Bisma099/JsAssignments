////////////////////////Program 1/////////////////////////////////

// var firstname=window.prompt("enter first name: ");
// var lastname=window.prompt("enter last name: ");
// var a = firstname.slice(0);
// var b = lastname.slice(0);
// a =a .toLowerCase();
// b=b.toLowerCase();
// var join= alert("full name: "+firstname+lastname);

/////////////////////program 2//////////////////////////////////////

// var fav=window.prompt("Enter your favorite phone company");
// var a = document.write ("Phone: " + fav)
// fav = document.write ("legnth: " +fav.length)

/////////////////program 3//////////////////////////////
  
// var a=window.prompt("enter string")
// var b=window.prompt("enter char to find index")
// var c= a.indexOf(b);
// var g=  alert("string: "+a)
// var d=alert("index of" + b + " "+"is"+c)

/////////////////program4//////////////////////

// var a="hello world"

// var b= a.lastIndexOf("l")

// var d=alert("index of" + "l" + " "+"is"+b)

///////////////////////program5/////////////////////////////
  
// var x=window.prompt("Enter string")
// var y=window.prompt("Enter index to find char")

//     if(y < x.length)
//     {
//         var z = x.charAt(b);
//         alert("at index" +" "+ y +": " + z)
//     }
/////////////////////////program 6////////////////////////////
  
// var firstname=window.prompt("Enter your first name: ");
// var lastname=window.prompt("Enter your last name: ");
// var b = firstname.slice(0,1);
// var c=firstname.slice(1)
// var d = lastname.slice(0);
// b =b.toUpperCase();
// c=c.toLowerCase();

// d=d.toLowerCase();
// var e=b.concat(c,d);
// document.write(e);

///////////////////////program 7///////////////////////
// var text= "hyder"
// var text2="abad"
// document.write("string : "+text+text2)
// var text1= text.replace("hyder","Islam");
// var text3= text1+text2;
// document.write("<br>"+ "replaced: "+text3)

////////////////////program 8////////////////////////
  
// var message = "Ali and Sami are best friends. They play cricket and football together"
// var msg= message.replace(/and/g ,"&")
// document.write(msg)

//////////////////program 9//////////////////////////

// var a ="472"
// document.write("value: "+a+"<br>"+"type : string");
// var b= parseInt(a);
// document.write("<br>"+"value: "+b+"<br>"+"type : number");

///////////////////program 10///////////////////////
// var str = "peanuts";
// var res = str.toUpperCase();

/////////////////////program 11//////////////////////
// var a=window.prompt("Enter a string")
// var b=a.slice(0,1);
// var c=a.slice(1);
//  b= b.toUpperCase();
//  c=c.toLowerCase();
// document.write("string :"+a +"<br>" + "Title: "+b+c);

// ///////////////////program 12//////////////////////////
// var num =35.36;
// var a= num.toString
// document.write(a);

//////////////////program 13//////////////////////////
// var a=window.prompt("user name")
// for (var i = 0; i < text.length; i++) {
//      if (a.charAt(i)===a.charCodeAt(33) ) {
//      document.write("Exclamation point found!");
//      }
//      }

///////////////////program 14//////////////
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var b= window.prompt("search by name in our bakery")
// var c= b.slice(0);
// var d= c.toLowerCase();

// if(d === a[0]){
//     document.write("cake is available at index 0 in our bakery")
// }
// if(d === a[1]){
//     document.write("apple pie is available at index 1 in our bakery")
// }
// if(d === a[2]){
//     document.write("cookie is available at index 2 in our bakery")
// }
// if(d === a[3]){
//     document.write("chips is available at index 3 in our bakery")
// }
// if(d === a[4]){
//     document.write("patties is available at index 4 in our bakery")
// }
// else{
//     document.write(b + " is not available  in our bakery")
// }


//////////////////////////program 15///////////////////////////
// var b= window.prompt("enter password")
// var c= b.slice(0,1);


// if(c === "1"||c === "2"||c === "3"||c === "4"||c === "5"||c === "6"||c === "7"||c === "8"||c === "9"||c === "0" ){
//     document.write("wrong, start with numbers")
// }

// else if(b.length<6 || b.length>6){
//     document.write("pswd should be 6 legnth")
// }

// else{
//     document.write("success")
// }

///////////////////program 16////////////////////////////
// var a = "University of Karachi";
// for( var i=0 ; i<a.length; i++){
//     var chars = a.split('');
//     document.write("<br>");
//     document.write(chars[i]);

// }

//////////////////program 17///////////////////
// var a=window.prompt("enter string");
// var b = a.slice(a.length-1,a.length)
// document.write("string : " +a)
// document.write("<br>"+"last char is"+" " +b)


/////////////////////program 18////////////////////
// function gfg() { 
//     var s = "“the quick brown fox jumps over the lazy dog"; 
//     var f = "the"; 
//     var r = s.indexOf(f); 
//     var c = 0; 
//     while (r != -1) { 
//         c++; 
//         r = s.indexOf(f, r + 1); 
//     } 
//     document.getElementById("rk").innerHTML = c; 
// } 

////////Data methods program 1//////////////////
  
// var a= 3.45214
// var b= Math.round(a);
// document.write("number: "+a)
// document.write("<br>"+"round: "+b)
// var c=Math.ceil(a)
// document.write("<br>"+"ceil: "+c)
// var d=Math.floor(a)
// document.write("<br>"+"floor: "+d)

/////////////////program2////////////////////
// var a=window.prompt("enter -ve float number")
// var b= Math.round(a);
// document.write("number: "+a)
// document.write("<br>"+"round: "+b)
// var c=Math.ceil(a)
// document.write("<br>"+"ceil: "+c)
// var d=Math.floor(a)
// document.write("<br>"+"floor: "+d)

/////////////////program 3/////////////////
  
// var a=-4;
// var b = Math.abs(a)
// var c= 5
// var d= Math.abs(c)
// document.write("Numbers are  "+ a +" , "+ c)
// document.write("<br>"+"absolute of -4: "+b)
// document.write("<br>"+"absolute of 5: "+d)

///////////program 4///////////////
// var a= (Math.floor(Math.random()*4)+1);
// var b= (Math.floor(Math.random()*6)+1);
// document.write("die of 4 is : " +a)
// document.write("die of 6 is : " +b)

/////////////program 5///////////////
// var a=Math.floor( Math.random()*2)+1;
// document.write("number "+a+"<br>")
// if(a===1){
//     document.write("head")
// }
// if(a===2){
//     document.write("tail")
// }


////////////program 6/////////////////
  
// var a = window.prompt("enter your weight in killograms")
// var c= parseFloat(a)
// document.write("the weight of user is "+c+"killograms")

//////////program 7//////////////////////

// var a = window.prompt("enter your weight in killograms")
// var c= parseFloat(a)
// document.write("the weight of user is "+c+"killograms")

///////////program 8/////////////////
// var a=["1","2","3","5"]
// var b= window.prompt("guess the number")
// if(b===1){
//     alert("your guess is right")
// }
// else if(b===2){
//     alert("your guess is right")
// }
// else if(b===3){
//     alert("your guess is right")
// }
// else if(b===5){
//     alert("your guess is right")
// }

//////////////31-34  Data methods program 1/////////////

// var today = new Date();

// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

// var dateTime = date+' '+time;

// /////////////program 2//////////////
// var dayNames = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//  var now = new Date();
//  var theDay = now.getMonth();
//  var nameOfToday = dayNames[theDay];
//  document.write("current month :" +nameOfToday);

// /////////program 3////////////
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write("today is: "+ nameOfToday);

///////////program 4////////////
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
//   if (nameOfToday=="Sat"|| nameOfToday=="Sun")
//   {
//       document.write("It's a fun day");
//   }

/////////////program 5/////////////
// var now = new Date();
//  var theDay = now.getDate();
//  if (theDay<=15 ){
//  document.write("First 15 days")
//  }
//  else if( theDay>15){
//     document.write("Last 15 days")
//  }

// ///////////program 6/////////////
// var d= new Date();

// document.write("today : "+ d+"<br>")
// var ms= d.getTime()
// document.write("ellapsed millisecond "+ ms+"<br>")
// var mn= (ms/60000)
// document.write("ellapsed minutes "+ mn)

//////////program 7/////////////
  
// var d= new Date()
// var c= d.getHours()
// if (c<12 ){
//     document.write("Its am")
//     }
//     else if( c>=12){
//        document.write("Its pm")
//     }

///////////program 8/////////////
  
// var d = new Date("May 28 , 2020")

// document.write(d)

// //////////program 9////////////////
// var n = new Date("June 18 , 2015")
// var n1= n.getTime();
// var g = new Date()
// var g1= g.getTime();
// var r =  g1-n1;
// var e = r/(1000*3600*24)
// document.write(r+"  days are passed since 1st ramadan 2015")
////////////program 10//////////////

// var e= new Date("Dec 05 , 2015")
// document.write(e)
// var d= e.getTime();
// var n=new Date("jan 01 , 2015")
// var g=n.getTime();
// var r= d-g;
// var sec = r/(1000)
// document.write("<br>"+"seconds fom begiining to end of 2015 is : "+ sec)

///////////////program 11///////////////
// var e = new Date()
// document.write(e);
// var r = new Date()
// r.setHours(16)
// document.write("<br>"+r);


//////////////program 12/////////////////
// var d= new Date()
// var c = new Date("jan 01 ,1920")
// document.write("TODAY : " + d + "<br>" + "BEFORE 100 YEARS: " + c )

// ////////////program 13///////////
  
// var r = window.prompt("enter age")
// var d = new Date();
// var y=d.getFullYear()-r;
// document.write("your age is  "+ r+"<br>"+"your birth year is   "+ y)

////////////////program 14///////////////
  

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// var unit= 410
// var p=16
// var n = unit*p;
// var l=350;
// var late=n+l;
// document.write("Customer Name: ABC customer"+"<br>"+"Month: "+nameOfToday+"<br>"+"No. of Units: "
// +unit+"<br>"+"No. of charges per unit: "+p+"<br>"+"<br>"+"<br>"+"Net Amount Payable (within Due Date): "+n
// +"<br>"+"Late Payment Surcharge: "+l+"<br>"+"Gross Amount Payable (after Due Date): "+ late);


////////////// Function program 1/////////////
  
// function telltime(){
//     var a= new Date()
//     document.write(a)
// }
// telltime();

///////////program 2///////////////
// function m(){
//     var a=window.prompt("enter your first name: ")
//     var b= window.prompt("enter your second name: ")
//     var c = a.toUpperCase()
//     var d= b.toUpperCase()
//     document.write("Your name is: " +c+d)

// }
// m();


////////program 3////////////
// function add(){
//     var a= window.prompt("enter a number :  ")
//  var b= window.prompt("enter a 2nd number:  ")
//  var c= a+b;
//  document.write("sum is " +c)


// }
// add();

////////////program 4//////////////
// function cal(a,b,c){
//     var a= window.prompt("enter a value")
//     var b= window.prompt("enter a value")
//     var c= window.prompt("enter operation")

//     if(c=="+"){
//         document.write(a+b)
//     }
//     else if(c=="-"){
//         document.write(a-b)
//     }
//     else if(c=="x"){
//         document.write(a*b)
//     }
//     else if(c=="/"){
//         document.write(a/b)
//     }


// }
// cal();

// /////////program 5/////////////
// function calc(a){
    
//     document.write(a*a);

// }

// calc(9);


///////////progranm 6/////////////
// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 5;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);

/////////////////program 7/////////////////
function add(a, b=20) {
    return a + b;
  }
  add(25);

//   ////////////program 8///////////
//   function pythagorean(sideA, sideB){
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
//   }
  
//   console.log(pythagorean(5, 3));


// //////////program 9////////////
// var height = prompt("Enter a whole number for the height of your rectangle.");
// var width = prompt("Enter a whole number for the width of your rectangle.");
// function area(length, width) {
//     return length * width;
// }
// function perimeter(height, width) {
//     return 2*( height + width);
// }

// document.writeln('The area of your rectangle is ' + area(height, width));         
// document.writeln('The perimeter of your rectangle is ' + perimeter(height, width));


/////////program 10/////////////


// function check_Palindrome(str_entry){
//     // Change the string into lower case and remove  all non-alphanumeric characters
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//     // Check whether the string is empty or not
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//         for (var x = 0; x < ccount; x++) {
//     // Compare characters and drop them if they do not match 
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return true;
//     }
//     check_Palindrome('madam');
    

// /////////////////program 11/////////////////
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));

//////////////program 12///////////
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];
// ​
//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));



// //////////program 13///////////////
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('google.com', 'o'));


///////////program 14/////////////////
// function calcCircumfrence(radius) {
//     var y = (Math.PI * radius) * 2;
//   console.log("The circumfrence is " + y + ".");
//   }
//   function calcArea(radius) {
//     var x = (Math.PI * radius) * radius;
//   console.log("The area is " + x + ".");
//   }
  
//   calcCircumfrence(30);
//   calcArea(10);
  