let n1= Math.ceil(Math.random()*10);
let n2= Math.ceil(Math.random()*10);

let question = document.getElementById('question');
question.innerText= `What is ${n1} multiply by ${n2} ?`;

let correct= n1*n2;
let input =document.getElementById('input');
let uscore =document.getElementById('score');



let form= document.getElementById('form');
let score= JSON.parse(localStorage.getItem("score")) 
 

if(!score){
    score=0;
}
uscore.innerText=`score:${score}`

form.addEventListener("submit",()=>{
    let givenvalue= +input.value;

    if(givenvalue=== correct){
        score++;
        localsTorage()
    }else{
        score--;
        localsTorage()
    }

})

function localsTorage(){
    localStorage.setItem("score",JSON.stringify(score));
}