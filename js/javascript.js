var timer = document.querySelector("#timer");
var HS = document.querySelector("#HS");
var quetion = document.querySelector(".quetion");
var answer = document.querySelector("#answer");
var choiceButton = document.querySelectorAll(".choice");
var A = document.querySelector("#A");
var B = document.querySelector("#B");
var C = document.querySelector("#C");
var D = document.querySelector("#D");


var quetions = [
    {
    title:"what is  2 + 2?",
    choices:["5","10","4","0"],
    answer:"4"
},
{
    title:"What flys",
    choices:["bird","cup","car","house"],
    answer:"bird"
},
]

var quetionindex = 0;


function showque(){
 quetion.textContent = quetions[quetionindex].title  
 A.textContent = quetions[quetionindex].choices[0]
 B.textContent = quetions[quetionindex].choices[1] 
 C.textContent = quetions[quetionindex].choices[2] 
 D.textContent = quetions[quetionindex].choices[3]  
}
showque();


choiceButton.addEventListener("click", function(event){
    alert(event.target.innerText)
})

