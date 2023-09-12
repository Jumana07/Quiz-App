# Quiz-App
Created this project with Basic Html,Css and Vanilla Javascript

## Pre-Requisites
# A CSV file in the FORMAT-question,option1,option2,option3,...option-n,correct-option
# Can have any number of questions and any number of options
# Must Strictly follow the FORMAT

## Documentation

# Quiz-App

## Overview
Welcome to the documentation for the Quiz App GitHub repository! In this guide, we will provide you with all the information you need to understand and contribute to the Quiz App project.
# Introduction
. The Quiz App is a web application designed to allow users to test their knowledge by answering multiple-choice questions. It provides an interactive and engaging way to learn and have fun at the same time.
. This documentation provides an overview of the project structure, dependencies, customization, and usage instructions.

## Project Structure
The project structure for the Quiz-App is as follows:
```
Quiz-App/
├── index.html
│     └── script.js
│     └── style.css
├── Questions.html
│     └── script1.js
│     └── quizstyle.css     
├──result.html
├── images/
│      ├── Back-Btn.svg
│      ├── bg.png
│      ├── workupload.png
│      ├── ...
```

- `index.html`: The main HTML file that serves as the entry point to the website.
- `style.css`: The CSS file containing custom styles for the website.
- `script.js`: The JavaScript file containing custom scripts for index.html.
- `Questions.html`: The HTML file containing code to display the Question and Answers from uploadee File.
- `quizstyle.css`: The CSS file containing custom styles for Questions.html page.
- `script1.js`: The JavaScript file containing custom scripts for Questions.html page.
- `result.html`: The HTML file containing code to display the Quiz Result in Correct and Wrong Buttons.
- `images/`: A directory containing Upload Button image,Background-image and other related images.

## Features
This documentation explains the process of uploading a CSV file containing questions and answers, displaying them as radio options on the next page, and showing the result with the count of correct and wrong answers on the following page.


## Getting Started
To view the Quiz-App Project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/jumana07/Quiz-App.git
   ```

2. Open the `index.html` file in a web browser.

## Dependencies
The My Quiz Project utilizes the following dependencies:

- None.

## Usage
To navigate and interact with the Quiz-App Project, follow these instructions:

1. Open the `index.html` file in a web browser.

2. Uploading the CSV File:

   - On the initial page, provide a file upload input field where users can select a CSV file containing the questions and answers.

   - Once the user selects the file and clicks the upload button, the system will validate the file format and content.

   - If the file is valid, the system will process it and store the questions and answers in a suitable data structure.

3. Displaying Questions and Answers as Radio Options:

   - After the file is uploaded and processed, the user will be redirected to the next page.

   - On this page, each question will be displayed along with multiple radio options representing the possible answers.

   - The user can select one option for each question.

4. Submitting Answers and Calculating Results:

   - Once the user has selected an option for each question, they can click the "Next" button to submit their answers.

   - On the next page, the system will calculate the results by comparing the selected answers with the correct answers stored from the uploaded file.

   - The system will count the number of correct and wrong answers.

   - The result page will display the number of correct and wrong answers, providing the user with feedback on their performance.

Note: It is important to ensure the security and validity of the uploaded file and the data processing to prevent any malicious activities or errors.


## Contributing
We welcome contributions to the Quiz App project. If you would like to contribute, please follow these guidelines:
1. Fork the repository on GitHub.
2. Make your changes in a new branch.
3. Test your changes thoroughly to ensure they do not introduce any bugs or issues.
4. Once you are confident in your changes, submit a pull request outlining the changes you have made and why they are beneficial to the project.

## Support
If you encounter any issues, have questions, or need assistance with the Quiz App, please feel free to reach out to me on the GitHub repository's issue tracker. We will do our best to provide prompt support and address any concerns you may have.


## License
No Licence is Required.

## Resources
Here are some resources that were helpful during the development of the  Quiz-App Project:

- Web Design Inspiration: Birthday Theme
- CSS Inspiration: [link](https://courses.webdevsimplified.com/)

## Author
The Quiz-App was developed by Jumana Haseen.

## Conclusion
The Quiz-App creation is Challenging and Enthusiastic to Work on and I learned a Lot like Handling Files,Handling Input Elements in Javascript





