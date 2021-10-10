// Set the date we're counting down to
var countDownDate = new Date("Oct 12, 2021 07:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


// alert("connected");
const questions=[
"https://practice.geeksforgeeks.org/problems/twisted-prime-number0500/1/?category[]=Prime%20Number&category[]=Prime%20Number&page=2&query=category[]Prime%20Numberpage2category[]Prime%20Number",

"https://practice.geeksforgeeks.org/problems/print-first-letter-of-every-word-in-the-string3632/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings#",

"https://practice.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1#",

"https://practice.geeksforgeeks.org/problems/minimum-indexed-character0221/1/?category[]=Strings&category[]=Strings&page=2&query=category[]Stringspage2category[]Strings",

"https://practice.geeksforgeeks.org/problems/facing-the-sun2126/1/?category[]=Arrays&category[]=Arrays&page=5&query=category[]Arrayspage5category[]Arrays",

"https://practice.geeksforgeeks.org/problems/palindrome-numbers0942/1/?category[]=Mathematical&category[]=Mathematical&page=4&query=category[]Mathematicalpage4category[]Mathematical",

"https://practice.geeksforgeeks.org/problems/rotate-by-90-degree0356/1/?category[]=Matrix&category[]=Matrix&page=1&query=category[]Matrixpage1category[]Matrix",

"https://practice.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1",

"https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1/?category[]=Matrix&category[]=Matrix&page=2&query=category[]Matrixpage2category[]Matrix",

"https://practice.geeksforgeeks.org/problems/reverse-each-word-in-a-given-string1001/1/?category[]=Strings&category[]=Strings&page=5&query=category[]Stringspage5category[]Strings"
];

let link= document.getElementById("que");
let time = new Date();
if(time.getHours()>7 && time.getHours()<19)
  link.removeAttribute("href");
else if(time.getHours()>=0 && time.getHours()<7)
	link.setAttribute("href",questions[time.getDate()-12])
else
    link.setAttribute("href",questions[time.getDate()-11])



