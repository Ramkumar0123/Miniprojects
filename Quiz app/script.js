const questions=[
 {
    question:"which is largest animal in the world?",
    answers:[
        {text:"Shark",correct:false},
        {text:"Blue Whale",correct:true},
        {text:"Elephant",correct:false},
        {text:"Giraffe",correct:false},

   ]
 },
 {
    question:"which is smallest country in the world?",
    answers:[
        {text:"Vatican city",correct:true},
        {text:"Bhutan",correct:false},
        {text:"Nepal",correct:false},
        {text:"Sri Lanka",correct:false},

   ]
 },
 {
    question:"which is largest desert in the world?",
    answers:[
        {text:"kalahari",correct:false},
        {text:"Gobi",correct:false},
        {text:"Sahara",correct:false},
        {text:"Antartica",correct:true},

   ]
 },
 {
    question:"which is smallest continent in the world?",
    answers:[
        {text:"Asia",correct:false},
        {text:"Australia",correct:true},
        {text:"Europe",correct:false},
        {text:"Africa",correct:false},

    ]
 }
];
const questionElement =document.getElementById("question");
const answerButtons =document.getElementById("answer-btn");
const nextButton =document.getElementById("next-btn");

let currentIndex=0;
let score=0;
function startQuiz(){
    currentIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentIndex];
    let  questionNo = currentIndex + 1 ;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;

        }
        button.addEventListener("click",selectAnswer);
        
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
      const selectedBtn=e.target;
      const isCorrect=selectedBtn.dataset.correct==="true";
      if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
      }else{
        selectedBtn.classList.add("Incorrect");
      }
      Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");

        }
         button.disabled=true;
      });
      nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentIndex++;
    if(currentIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();