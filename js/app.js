const questions = [{
    'que': 'Which of the following is markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JAVASCRIPT',
    'd': 'Node.js',
    'correct':'a'
},
{
    'que': 'Which of the following is Styling language?',
    'a': 'c++',
    'b': 'CSS',
    'c': 'JAVASCRIPT',
    'd': 'Node.js',
    'correct':'b'
},
{
    'que': 'Which of the following is for Backend language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'React',
    'd': 'Node.js',
    'correct':'d'
}

];


const questionBox = document.getElementById('questionBox');
const optionsInputs = document.querySelectorAll('.options');
let index=0;
let total = questions.length;
let right =0,wrong=0;

const loadQuestion = () => {
    resetOptions();
    if (index < total) {
        const data = questions[index];
        questionBox.innerText = `${index + 1}) ${data.que}`;
        optionsInputs[0].nextElementSibling.innerText = data.a;
        optionsInputs[1].nextElementSibling.innerText = data.b;
        optionsInputs[2].nextElementSibling.innerText = data.c;
        optionsInputs[3].nextElementSibling.innerText = data.d;
    } else {
        endQuize(); // Call endQuize if all questions have been answered
    }
}


const submitQuize = () =>{
    const data = questions[index];
    const ans = getAnser();
    console.log(ans,data.correct)
    if(ans==data.correct){
      right++;
    }
    else {
        wrong++;
    }
    index=index+1;
    if(index===total)endQuize();

    loadQuestion();
}
const getAnser = () =>{
    let answer;
      optionsInputs.forEach(input => {
        if(input.checked){
            answer= input.value;
        }
        
      });
      
      return answer;
         

}

 
const resetOptions = () =>{
       optionsInputs.forEach(input =>{
          if(input.checked) input.checked = false;
       })
}

const endQuize = () =>{
    document.getElementById("box").innerHTML = `
    <h1>Thank you for the quize</h1>
    <h3>${right}/${total} are the correct</h3>
    `

}
loadQuestion();