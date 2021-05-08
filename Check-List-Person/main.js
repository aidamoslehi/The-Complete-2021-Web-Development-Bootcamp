// --- Challenge: Checklist person for entry in party
// Write a program that checks the name of people, if they were on a list to be able to enter in the party.

var person=prompt("Enter your name");
var getList=["Aida","Jesi","Angela"];

if(getList.includes(person)){
alert("Welcome");
}else{
    alert("Sorry, maybe next time.");
}