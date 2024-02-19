let str1="Iftikar Jahan";
console.log(str1.length);

// Accessing Characters in string
console.log(str1[2]);          //t
console.log(str1.charAt(2));   //t

// Looping
for(let i=0;i<str1.length;i++){
    console.log(str1[i]);
}
for(let c of str1){
    console.log(c);
}

// Modifying Strings
// Strings in js are immutable
str1[2]='x';       //not allowed because strings are immutable in js
console.log(str1);

let str2=str1.replace("I","x");  //returns  a new string. So you need to catch it in a variable
console.log(str2);

let str3=str1.replaceAll("i","xxx"); //same as above

let str4=str1.concat(" is a good boy");  //returns a new string

let str5="      llll   lll       ";
let str6=str5.trim(); //removes spaces from the start and the end, cannot remove space from mid

// Searching
let str7="Hello, how are you all?";
console.log(str7.indexOf("e"));
console.log(str7.indexOf("how"));
console.log(str7.lastIndexOf("e"));
console.log(str7.startsWith("H"));
console.log(str7.startsWith("e"));
console.log(str7.endsWith("e"));
console.log(str7.endsWith("?"));

// Extraction of substrings
let str8="I am Iftikar. I really want to improve my life.";
console.log(str8.slice(2));
console.log(str8.slice(2,-1));
console.log(str8.slice(2,12));

// Converting a number to string
let no=1;
console.log(no,typeof(no));  //number
let nos=String(no);
console.log(nos,typeof(nos));  //string

// Converting a character to ascii code
let str9="Apple";
console.log(str9.charCodeAt(0)); //65

// Converting an ascii code to character
console.log(String.fromCharCode(65));  //A

// Check if a string contains a word or not
let str10="Hello, I am improving day by day";
console.log(str10.includes("papa"));  //false
console.log(str10.includes("day"));   //true

// Splitting and joining strings
let str11="Welcome to elevator empire";
let arr=str11.split("e");
console.log(arr);

let arr2=["Apple","Banana"];
console.log(arr2.join("#"));
