var questions=[
    {
        question:"dummy question",
        answer: "a",
        options: ["a","b","c","d",]
    },
    {
        question:"dummy question2",
        answer: "b",
        options: ["a","b","c","d",]
    },
    {
        question:"dummy question3",
        answer: "c",
        options: ["a","b","c","d",]
    }
]

var startButtonEl = document.getElementById("startbtn")
var counter = -1
var timerId;
var score= 0
var time= questions.length *20
console.log(startButtonEl)

startButtonEl.addEventListener("click", function () {
    console.log("hello")
var timerDisplay=$("#timer-display")
timerId= setInterval(timer, 1000)
timerDisplay.text(time)
var headerEl = document.querySelector(".quiz-intro")
    headerEl.style.display = "none"

displayQuestion()
    
})

function displayQuestion(){
counter++
var question=$(".question-screen h2")
question.text(questions[counter].question)
$(".question-screen").css("display","block")
for (let i = 1; i < 5; i++) {
var button=$(`#option${i} `) 
button.attr("value", questions[counter].options[i-1])
button.html(questions[counter].options[i-1])
button.click(function(event){
    computeScore(event.target.value)
})
}
}


function computeScore(userChoice){
    if (!questions[counter]){
        return
    }
    if (userChoice === questions[counter].answer){
        score++ 
    } else {
        //add counter
        time-=10
    }
    displayQuestion()
}

function timer (){
time-- 
var timerDisplay=$("#timer-display")
timerDisplay.text(time)
if (time <0){
    clearInterval(timerId)
}
}