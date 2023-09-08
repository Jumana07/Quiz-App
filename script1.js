let correct=0;
let wrong=0;
const csv_file = localStorage.getItem('fileData');
console.log(csv_file);
const lines = csv_file.split('\n');
 for (let i = 0; i < lines.length; i++) {
 const data = lines[i].split(',');
  const question = data[0];
  var correctAnswer = data[data.length - 1];
 const options = data.slice(1 , data.length - 1);

    // Create HTML elements for each question and options
    const questionElement = document.createElement("div");
    questionElement.classList.add("questions");
    questionElement.innerHTML = `<p>${question}</p>`;

    const optionsElement = document.createElement("ul");
    options.forEach((option) => {
        const optionItem = document.createElement("li");
        optionItem.classList.add("answeroption");
        optionItem.innerHTML =`<input type="radio" class="radio" name="question${i}" value="${option}"> ${option}`;
        optionsElement.appendChild(optionItem);
    });

// Append question and options to the quiz container
const quizContainer = document.getElementById("quiz-container");
quizContainer.appendChild(questionElement);
quizContainer.appendChild(optionsElement);
}
const showResult = () => {
    for(var i=0;i<7;i++){
    const selectedOption = document.querySelector(`input[name="question${i}"]:checked`);
if(selectedOption) {
     const selectedAnswer = selectedOption.value;
 if (selectedAnswer === correctAnswer.data) {
    // Increase the correct answer count
    correct++;
} else {
    // Increase the wrong answer count
    wrong++;
}
}
}
openNext();
}
const openNext = () => {
    localStorage.setItem('corr',correct);
localStorage.setItem('wro',wrong);
    window.open('./result.html');
}