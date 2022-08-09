document.write("<h1> elzero </h1>")
document.querySelector('h1').style.color = "blue";
document.querySelector('h1').style.fontSize="80px"; 
document.querySelector('h1').style.fontWeight = "bold";
document.querySelector('h1').style.textAlign = "center";
document.querySelector('h1').style.fontFamily = "Arial";

//=====================================================================
console.log("%cElzero %cweb %cschool", "color:red;font-size:40px", "color:green;font-size:40px", "color:white;background-color:blue;font-size:40px")

//=====================================================================

console.group("group 1")
console.log("ahmed")
console.log("mohamed")

console.group("group 2")
console.log("ali")
console.log("ebrahim")

console.group("group 3")
console.log("khalid")
console.log("maged")

console.groupEnd(" ") // using for make perant group again 

console.group("group 4")
console.log("khalid")
console.log("maged")
//=====================================================================

console.table(["maged", "khalid", "ebrahim", "ali", "mohamed", "ahmed"])

//=====================================================================

// console.log("Iam In Console");
// document.write("Iam In Page");



