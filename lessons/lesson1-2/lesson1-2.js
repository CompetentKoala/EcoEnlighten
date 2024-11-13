


const jsConfetti = new JSConfetti();

const starsContainer = document.querySelector('.stars');
//stars
for (let i = 0; i < 200; i++) { // Adjust the number of stars here
    const star = document.createElement('div');
    star.classList.add('star');

    // Random size, position, opacity, and animation delay
    const size = Math.random() * 3 + 1 + 'px';
    star.style.width = size;
    star.style.height = size;
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.opacity = Math.random() * 0.5 + 0.3;

    // Set a random delay for the twinkle animation
    star.style.animationDelay = Math.random() * 2 + 's';

    starsContainer.appendChild(star);
}
//PAGE 1//

//button site change

//continue button PAGE2
function continueButton() {
    setTimeout(function(){
        console.log("BTN PRESSED")
        window.location.href = '/Questions/Q2.html';
    },1000);

}

//button toggle highlight
document.querySelectorAll('.flex').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected'); // Toggles the highlight
    });
});



///////////////////////ANSWERING QUESTIONS
const correctAnswerQ1 = 1; // The correct answer for this question is option 2
let userAnswer = null

let answer1 = document.getElementById("answer1").addEventListener('click', () => selectAnswer(1));
let answer2 = document.getElementById("answer2").addEventListener('click', () => selectAnswer(2));
let answer3 = document.getElementById("answer3").addEventListener('click', () => selectAnswer(3));
let answer4 = document.getElementById("answer4").addEventListener('click', () => selectAnswer(4));

function selectAnswer(selectedOption) {
    userAnswer = selectedOption
}







///////////////////////////DECLARING VARIABLES
var questionCount = 1
const maxQuestions = 9
const headline = document.getElementById('headline')
const loadingBar = document.getElementById('loading-bar')
const loadingBarFull = document.getElementById('loading-bar-full')
const loadingBarGlimmer = document.getElementById('loading-bar-full')
var currentQuestionHtml = document.getElementById('question-main')
let continueButton1 = document.getElementById('continueButton');
var feedbackElement = document.getElementById('feedback')
let CurrentQuestionAnswer = correctAnswerQ1
let currentQuestionFeedback =  document.getElementById(`answer${CurrentQuestionAnswer}`).textContent;
const wrongSound = new Audio('/main/sounds/wrong.mp3'); // replace with your sound file's path
const rightSound = new Audio('/main/sounds/correct.mp3')
const passedSound = new Audio('/main/sounds/passed.mp3')
const yaySound = new Audio('/main/sounds/yay.mp3')
const startSound = new Audio('/main/sounds/start.mp3')
let hearts = parseInt(localStorage.getItem('hearts')) || 0; // Default to 0 if hearts is not set




///////////////////////WINDOW LOAD
window.onload = function() {
    //set feedback information
    feedbackElement = document.getElementById('feedback')
    currentQuestionFeedback =  document.getElementById(`answer${CurrentQuestionAnswer}`).textContent;

    //fade in information and attach listeners && set hearts
    console.log(`the question number is:${questionCount}`)
    document.body.classList.add('fade-in')
    showHearts()
    attachButtonListeners()
    continueButton1.disabled = true; // Disable by default


//enable continue buton upon selection
document.querySelectorAll('.flex').forEach(button => {
    button.addEventListener('click', () => {
        continueButton1.disabled = false; // Enable the button when any option is selected
    });
});



  };

/////////////////////ON CONTINUE BUTTON, TAKE THESE ACTIONS
function changeLoadingBar() {

    //LAST QUESTION SCREEN VISUAL CHANGE
    if (questionCount > maxQuestions){
        jsConfetti.addConfetti()
        headline.classList.add('slide-up')
        loadingBarGlimmer.classList.add('slide-up');
        loadingBar.classList.add('slide-up');
        loadingBarFull.classList.add('slide-up');
    };

    //IF THE ANSWER IS CORRECT
    if (userAnswer === CurrentQuestionAnswer){
        loadingBarFull.style.width = `${(questionCount / maxQuestions) * 100}%`
        rightSound.play()

        //IF THE ANSWER IS NOT CORRECT
    } else{
        feedbackElement = document.getElementById('feedback')
    currentQuestionFeedback =  document.getElementById(`answer${CurrentQuestionAnswer}`).textContent;

        //USER FEEDBACK
        wrongSound.play();
        currentQuestionFeedback =  document.getElementById(`answer${CurrentQuestionAnswer}`).textContent;
        console.log(currentQuestionFeedback)
        feedbackElement.textContent = `Oops! The correct answer is: ${currentQuestionFeedback}`;
        feedbackElement.style.color = "red";

        // SELECT 'selected' class and add 'wrong' class
        const selectedElement = document.getElementsByClassName("selected")[0];
        selectedElement.classList.add('wrong');

        //update heart count
        hearts = Math.max(0, hearts - 1 ); // Prevent hearts from going below 0
        localStorage.setItem('hearts', hearts); // Update the value in localStorage
        console.log(hearts)
        showHearts()

        return;

    }

    // Start the slide-out animation for the current question
    currentQuestionHtml.classList.add('slide-out');;
    setTimeout(() => {
        // Remove slide-out class and update question content
        currentQuestionHtml.classList.remove('slide-out');



        // Update progress bar and question count



        // Update question content based on question number

        if (questionCount === 1) {
            if(userAnswer === CurrentQuestionAnswer){
                questionCount += 1;
                console.log('Correct')
                console.log(`the question number is:${questionCount}`)
            }
        }

        if (questionCount === 2) {
            questionTwo()
            if(userAnswer === CurrentQuestionAnswer){
                questionCount += 1;
                console.log('correct')
                console.log(`the question number is:${questionCount}`)
            }
        }

        if (questionCount === 3){
            questionThree();
            if(userAnswer === CurrentQuestionAnswer){
                questionCount += 1;
                console.log('correct')
                console.log(`the question number is:${questionCount}`)
            }
        }
        if (questionCount === 4){
            questionFour();
            if(userAnswer === CurrentQuestionAnswer){
                questionCount += 1;
                console.log('correct')
                console.log(`the question number is:${questionCount}`)
            }
        }
        if (questionCount ===5){
            questionFive();
            if(userAnswer === CurrentQuestionAnswer){
                questionCount += 1;
                console.log('correct')
                console.log(`the question number is:${questionCount}`)
            }
        }

        if(questionCount === 6){
            questionSix()
            if(userAnswer === CurrentQuestionAnswer){
                questionCount += 1;
                console.log('correct')
                console.log(`the question number is:${questionCount}`)
            }
        }
        if(questionCount === 7){
            questionSeven()
            if(userAnswer === CurrentQuestionAnswer){
                questionCount += 1;
                console.log('correct')
                console.log(`the question number is:${questionCount}`)
            }
        }

        if(questionCount === 8){
            questionEight()
            if(userAnswer === CurrentQuestionAnswer){
                questionCount += 1;
                console.log('clicked')
                console.log(`the question number is:${questionCount}`)
            }
        }

        if(questionCount === 9){
            questionNine()
            if(userAnswer === CurrentQuestionAnswer){
                questionCount += 1;
                console.log('clicked')
                console.log(`the question number is:${questionCount}`)
            }
        }
        if(questionCount === 10){
            questionTen()

        }


        continueButton1.disabled = true;

        enableContinueOnSelection();
        // Add slide-in animation
        currentQuestionHtml.classList.add('slide-in');

        // Remove slide-in class after animation ends
        setTimeout(() => {
            currentQuestionHtml.classList.remove('slide-in');
        }, 1000);
    }, 1000); // Delay to finish slide-out before changing question
}


//RUN ON CLICK OF CONTINUE BUTTON------CHANGE THE INNER HTML TO LOADING DOTS
function continueButton() {


    const continueBtn = document.querySelector('.continue');

    // Show loader in the button
    continueBtn.innerHTML = `<div class="loader"></div>`;

    setTimeout(() => {
        // Revert to the original button text after the question has loaded
        continueBtn.innerHTML = "Continue";
    }, 2000); // Adjust delay as needed
}




function questionOne(){
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">Why are you learning about sustainability?</h1>
                <div class="answer-grid">
                    <button class="flex"><img class='icons' src="/icons/Q2/planet-earth (1).png" alt=""><br>Protect the Earth</button>
                    <button class="flex"><img class='icons' src="/icons/Q2/koala.png" alt=""><br>For the Animals</button>
                    <button class="flex"><img class='icons' src="/icons/Q2/money.png" alt=""><br>Save Money</button>
                    <button class="flex"><img class='icons' src="/icons/Q2/friends.png" alt=""><br>Friends/Family Influence</button>
                    <button class="flex"><img class='icons' src="/icons/Q2/confetti.png" alt=""><br>For Fun</button>
                    <button class="flex"><img class='icons' src="/icons/Q2/climate-change.png" alt=""><br>To Fight Climate Change</button>
                    <button class="flex"><img class='icons' src="/icons/other.svg" alt=""><br>Other</button>
                </div>
            </div>`;

    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionTwo() {
    CurrentQuestionAnswer = 2
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">What does the economic pillar of sustainability focus on?</h1>
                <div class="answer-grid">
                    <button class="flex" id="answer1">Providing social support and equal opportunities</button>
                    <button class="flex" id="answer2">Creating jobs that are safe, fair, and support long-term growth</button>
                    <button class="flex" id="answer3">Only cutting costs for businesses</button>
                    <button class="flex" id="answer4">Focusing only on environmental protection</button>
                </div>
                <p id="feedback" class="feedback-text"></p> <!-- Feedback message -->
            </div>`;
            answer1 = document.getElementById("answer1").addEventListener('click', () => selectAnswer(1));
            answer2 = document.getElementById("answer2").addEventListener('click', () => selectAnswer(2));
            answer3 = document.getElementById("answer3").addEventListener('click', () => selectAnswer(3));
            answer4 = document.getElementById("answer4").addEventListener('click', () => selectAnswer(4));
    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function attachButtonListeners() {
    document.querySelectorAll('.flex').forEach(button => {
        button.addEventListener('click', () => {
            // Ensure only one button per question is selected
            const questionButtons = button.closest('.answer-grid').querySelectorAll('.flex');

            // Remove the 'selected' class from all buttons in the current question
            questionButtons.forEach(btn => btn.classList.remove('selected'));

            // Add the 'selected' class to the clicked button
            button.classList.add('selected');

            const questionNumber = questionCount; // Use the current question number
            const answerText = button.textContent.trim(); // Get the answer text
            console.log(`the user is choosing answer #${userAnswer}`);
        });
    });
}

function enableContinueOnSelection() {
    const answerButtons = document.querySelectorAll('.flex');

    answerButtons.forEach(button => {
        button.addEventListener('click', () => {
            continueButton1.disabled = false; // Enable the button when any option is selected
        });
    });
}


function questionThree() {
    CurrentQuestionAnswer = 3
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">How do the three pillars of sustainability work together?</h1>
                <div class="answer-grid">
                    <button class="flex" id="answer1">They all focus solely on reducing environmental harm</button>
                    <button class="flex" id="answer2">They only benefit businesses</button>
                    <button class="flex" id="answer3"> They support each other to create a balanced, healthy world</button>
                    <button class="flex" id="answer4">They operate independently without influencing each other</button>
                </div>
                <p id="feedback" class="feedback-text"></p> <!-- Feedback message -->
            </div>`;
            answer1 = document.getElementById("answer1").addEventListener('click', () => selectAnswer(1));
            answer2 = document.getElementById("answer2").addEventListener('click', () => selectAnswer(2));
            answer3 = document.getElementById("answer3").addEventListener('click', () => selectAnswer(3));
            answer4 = document.getElementById("answer4").addEventListener('click', () => selectAnswer(4));
    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionFour() {
    CurrentQuestionAnswer = 4
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">Which of these is a key goal of the social pillar of sustainability?</h1>
                <div class="answer-grid">
                    <button class="flex" id="answer1"> Reducing emissions</button>
                    <button class="flex" id="answer2">Using only renewable energy</button>
                     <button class="flex" id="answer3">Reducing production costs</button>
                      <button class="flex" id="answer4"> Promoting equality and access to basic human needs</button>
                </div>
                <p id="feedback" class="feedback-text"></p> <!-- Feedback message -->
            </div>`;
            answer1 = document.getElementById("answer1").addEventListener('click', () => selectAnswer(1));
            answer2 = document.getElementById("answer2").addEventListener('click', () => selectAnswer(2));
            answer1 = document.getElementById("answer3").addEventListener('click', () => selectAnswer(3));
            answer2 = document.getElementById("answer4").addEventListener('click', () => selectAnswer(4));
    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionFive() {
    CurrentQuestionAnswer = 1
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">Which of the following best describes "economic sustainability"?</h1>
                <div class="answer-grid">
                    <button class="flex" id="answer1">Creating growth that also protects resources and communities</button>
                    <button class="flex" id="answer2">Cutting costs at the expense of worker rights</button>
                    <button class="flex" id="answer3">Reducing regulations to allow faster economic expansion</button>
                    <button class="flex" id="answer4">Using more fossil fuels to create jobs</button>
                </div>
                <p id="feedback" class="feedback-text"></p> <!-- Feedback message -->
            </div>`;
            answer1 = document.getElementById("answer1").addEventListener('click', () => selectAnswer(1));
            answer2 = document.getElementById("answer2").addEventListener('click', () => selectAnswer(2));
            answer3 = document.getElementById("answer3").addEventListener('click', () => selectAnswer(3));
            answer4 = document.getElementById("answer4").addEventListener('click', () => selectAnswer(4));
    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionSix() {
    CurrentQuestionAnswer = 3
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">Which of these actions is an example of environmental sustainability?</h1>
                <div class="answer-grid">
                    <button class="flex" id="answer1">Buying more products to increase economic activity</button>
                    <button class="flex" id="answer2">Creating a large profit for a company</button>
                    <button class="flex" id="answer3">Recycling and reducing waste</button>
                    <button class="flex" id="answer4">Ignoring pollution in water sources</button>
                </div>
                <p id="feedback" class="feedback-text"></p> <!-- Feedback message -->
            </div>`;
            answer1 = document.getElementById("answer1").addEventListener('click', () => selectAnswer(1));
            answer2 = document.getElementById("answer2").addEventListener('click', () => selectAnswer(2));
            answer3 = document.getElementById("answer3").addEventListener('click', () => selectAnswer(3));
            answer4 = document.getElementById("answer4").addEventListener('click', () => selectAnswer(4));
    // Reattach event listeners to the new buttons
    attachButtonListeners();
}
function questionSeven() {
    CurrentQuestionAnswer = 2
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">True or False: The social pillar of sustainability focuses mainly on protecting the environment.</h1>
                <div class="answer-grid">
                    <button class="flex" id="answer1">TRUE</button>
                    <button class="flex" id="answer2">FALSE</button>
                </div>
                <p id="feedback" class="feedback-text"></p> <!-- Feedback message -->
            </div>`;
            answer1 = document.getElementById("answer1").addEventListener('click', () => selectAnswer(1));
            answer2 = document.getElementById("answer2").addEventListener('click', () => selectAnswer(2));

    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionEight() {
    CurrentQuestionAnswer = 2
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">What is an example of a socially sustainable practice?</h1>
                <div class="answer-grid">
                    <button class="flex" id="answer1">Using renewable energy sources</button>
                    <button class="flex" id="answer2">Ensuring workers are paid fair wages and work in safe conditions</button>
                    <button class="flex" id="answer3">Reducing taxes for big businesses</button>
                    <button class="flex" id="answer4"> Lowering the prices of single-use plastic products</button>
                </div>
                <p id="feedback" class="feedback-text"></p> <!-- Feedback message -->
            </div>`;
            answer1 = document.getElementById("answer1").addEventListener('click', () => selectAnswer(1));
            answer2 = document.getElementById("answer2").addEventListener('click', () => selectAnswer(2));
            answer3 = document.getElementById("answer3").addEventListener('click', () => selectAnswer(3));
            answer4 = document.getElementById("answer4").addEventListener('click', () => selectAnswer(4));
    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionNine() {
    CurrentQuestionAnswer = 4
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">Which of these statements is true about the three pillars of sustainability?</h1>
                <div class="answer-grid">
                    <button class="flex" id="answer1">They only focus on environmental benefits</button>
                    <button class="flex" id="answer2">They have nothing to do with each other</button>
                    <button class="flex" id="answer3">They apply only to developed countries</button>
                    <button class="flex" id="answer4">They are interconnected and essential for sustainable development</button>
                </div>
                <p id="feedback" class="feedback-text"></p> <!-- Feedback message -->
            </div>`;
            answer1 = document.getElementById("answer1").addEventListener('click', () => selectAnswer(1));
            answer2 = document.getElementById("answer2").addEventListener('click', () => selectAnswer(2));
            answer3 = document.getElementById("answer3").addEventListener('click', () => selectAnswer(3));
            answer4 = document.getElementById("answer4").addEventListener('click', () => selectAnswer(4));
    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionTen() {
    if (localStorage.getItem('lessonNumber') > 1) {
        let lessonNumber = parseInt(localStorage.getItem('lessonNumber'), 10) + 1;
        localStorage.setItem('lessonNumber', lessonNumber);
    } else {}


    yaySound.play()
    passedSound.play()
    jsConfetti.addConfetti()
    setTimeout(function(){

            console.log("BTN PRESSED");
            window.location.href = '/main/main.html';
        },3400);
    currentQuestionHtml.innerHTML =
`<div id='question' class="main-content">

            <p class='startingLevel'>Awesome Job!<p>

            </div>
        </div>`;

// Reattach event listeners to the new buttons
attachButtonListeners();
}

function showHearts(){
    let hearts = localStorage.getItem('hearts')
    hearts = hearts ? parseInt(hearts, 10) : 0;
    document.querySelector('#hearts').innerHTML =  `<img class='heart-img' src="/main/icons/heart.png" alt="Hearts">${hearts}`
}


document.querySelector('.close').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior if necessary

        // Apply the fade-out effect
        document.body.classList.remove('fade-in');
        document.body.classList.add('fade-out');

        // Wait for the fade-out transition to complete before navigating to the new page
        setTimeout(function() {
            // Load the new page
            window.location.href = '/main/main.html'; // Replace with your target URL

            // After the page is loaded, apply fade-in effect
            document.body.classList.remove('fade-out');
            document.body.classList.add('fade-in');
        }, 1000); // Match the duration of the fade-out transition (in this case, 1s)
    });
