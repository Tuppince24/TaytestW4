var timer = document.querySelector("#timer");
var HS = document.querySelector("#HS");
var quetion = document.querySelector(".quetion");
var answer = document.querySelector("#answer");
var choiceButton = document.querySelector("#choice");
choiceButton.addEventListener("click", doSomething, false);
var container = document.querySelector(".container");
var choiceButtons = document.querySelector(".choice");

var A = document.querySelector("#A");
var B = document.querySelector("#B");
var C = document.querySelector("#C");
var D = document.querySelector("#D");
var correct = new Audio("#");
var wrong = new Audio("#");


var quetions = [
    {
        title:"____ styles a webpage browser",
        choices:["java","python","html","css"],
        answer:"css"
    },
    {
        title:"what can a developer use to get code off their html",
        choices:["document.querySelector","document.querySelectorAll","document.getElementById","All The Above"],
        answer:"All the above"
    },
    {
    title:"If Logx (1 / 8) = - 3 / 2, then x is equal to",
    choices:["-4","1/4","4","10"],
    answer:"4"
    },
    {
    title:"In which process, a local variable has the same name as one of the instance variables?",
    choices:["Serialization","Variable Shadowing","Abstraction","Multi-threading"],
    answer:"Variable Shadowing"
    },
    {
        title:"Which of the following is a JavaScript data type?",
        choices:["null","undefined","object","All Of The Above"],
        answer:"All Of The Above"
    },
    {
        title:"Which of the following is a syntactically correct for loop?",
        choices:["for (i<=10;i++)","for i=1 to 10","for (i=0;i<=10;i++)","for (i=0;i<=10)"],
        answer:"for (i=0;i<=10;i++)"
    },
    {
    title:"Which anime had the demond slayer sword?",
    choices:["naruto","demon slayer","black clover","Attach on Titan"],
    answer:"black clover"
    }
]

var quetionindex = 0;
var scoreindex = 0;



function showque(){
 quetion.textContent = quetions[quetionindex].title  
 A.textContent = quetions[quetionindex].choices[0]
 B.textContent = quetions[quetionindex].choices[1] 
 C.textContent = quetions[quetionindex].choices[2] 
 D.textContent = quetions[quetionindex].choices[3]  
};
showque();

var currentquetion;
function navigate(direction) {
    quetionindex = quetionindex + direction;
    if (quetionindex < 0) { 
        quetionindex =quetions.length - 1; 
    } else if (quetionindex >quetions.length - 1) { 
      quetionindex = 0;
    }
    currentquetion = quetions[quetionindex];
    
    
};

function doSomething(e){
    if(e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        
    }

    e.stopPropagation();

    for(var i =0; i < quetions.length; i++){
       clickedItem = quetions[i];
    }    
    if(clickedItem == answer){
        
        alert("correct");
    }else {
        alert("WRONG!!");
    }
    

    navigate(1);
    
    
};



container.addEventListener("click" , function(){
    window.location.href = quetions[quetionindex];
});



navigate(0);




/*
function Buttons(){
    for (var i = 0; i < choiceButton.length; i++) {
        choiceButton[i].addEventListener("click", function (e) {
            e.preventDefault();
        });
    }    
}
*/

/*
choiceButton.forEach(el => el.addEventListener('click', event => {
    console.log(event.target.A.choices[0]);
    console.log(event.target.B.choices[1]);
    console.log(event.target.C.choices[2]);
    console.log(event.target.D.choices[3]);

    if(quetion.answer){
        alert(event.target.innertext);
    } else {
        alert("you got this wrong");
    }
  }));
*/



/*
function Buttons(){
    choiceButton.addEventListener("click");
    
    
    console.log("hello this is my cB function")
    if(title == answer){
        alert("you are right");
    }
    
    
    
}
*/







