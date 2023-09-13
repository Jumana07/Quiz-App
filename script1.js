let correct = 0;
let wrong = 0;
let lastClickTime = 0;
let file = localStorage.getItem('fileData');
console.log(file);
const lines = file.split('\n');
for (let i = 0; i < lines.length; i++) {
    //Separate file into questions,answeroptions and correct answers
    const data = lines[i].split(',');
    const questions = data[0];
    const correctAnswers = data[data.length - 1];
    const options = data.slice(1, data.length - 1);
    //Create Question and Option Elements div,input-radio answer buttons and question p element
    const questionElement = document.createElement('div');
    questionElement.classList.add('questions');
    questionElement.innerHTML = `<p>${questions}</p>`;
    const optionElement = document.createElement('ul');
    options.forEach((option) => {
        const optionItem = document.createElement("li");
        optionItem.classList.add("answeroption");
        optionItem.innerHTML = `<input type="radio" class="radio" name="questions${i}" value="${option}"> ${option}`;
        optionElement.appendChild(optionItem);
    });
    //Append Question and Answer Elements to Quiz Container 
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionElement);
}
//add Next button Listener
function showResult(e) {
    correct=0;
    wrong=0;
    //To Prevent Counting of Double-Clicks
    currentTime = new Date().getTime();
  const timeSinceLastClick = currentTime - lastClickTime;

  if (timeSinceLastClick < 300) {
    // Double click detected, handle it as one click
    e.preventDefault();
    
  }

  lastClickTime = currentTime;

    for (let i = 0; i < lines.length; i++) {
        //Separate file into questions,answeroptions and correct answers
        const data = lines[i].split(',');
        const questions = data[0];
        const correctAnswers = data[data.length - 1];

        const selectedOption = document.querySelector(`input[name="questions${i}"]:checked`);
        if (selectedOption) {
            const selectedAnswer = selectedOption.value;
            console.log(selectedAnswer);
            console.log(correctAnswers);
            if (selectedAnswer[i] == correctAnswers[i]) {
                correct++;
            }
            else {
                wrong++;
            }
        }
    }
    openNext();
}

const openNext = () => {
    localStorage.setItem('corr', correct);
    localStorage.setItem('wro', wrong);
    window.open('./result.html');
}
const resetPage = () => {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radioButton) => {
        radioButton.checked = false;
    });
}

