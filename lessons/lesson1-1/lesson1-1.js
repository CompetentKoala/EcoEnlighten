


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
const correctAnswerQ1 = 2; // The correct answer for this question is option 2
let userAnswer = null

let answer1 = document.getElementById("answer1").addEventListener('click', () => selectAnswer(1));
let answer2 = document.getElementById("answer2").addEventListener('click', () => selectAnswer(2));
let answer3 = document.getElementById("answer3").addEventListener('click', () => selectAnswer(3));
let answer4 = document.getElementById("answer4").addEventListener('click', () => selectAnswer(4));

function selectAnswer(selectedOption) {
    userAnswer = selectedOption
}








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


function changeLoadingBar() {
    if (questionCount > maxQuestions){
        jsConfetti.addConfetti()
        headline.classList.add('slide-up')
        loadingBarGlimmer.classList.add('slide-up');
        loadingBar.classList.add('slide-up');
        loadingBarFull.classList.add('slide-up');
    };

    // Start the slide-out animation for the current question
    if (userAnswer === CurrentQuestionAnswer){
        loadingBarFull.style.width = `${(questionCount / maxQuestions) * 100}%`
        rightSound.play()
    } else{

        //USER FEEDBACK
        wrongSound.play();
        console.log(currentQuestionFeedback)
        feedbackElement.textContent = `Wrong! The correct answer is: ${currentQuestionFeedback}`;
        feedbackElement.style.color = "red";

        // SELCECT 'selected' class and add 'wrong' class
        const selectedElement = document.getElementsByClassName("selected")[0];
        selectedElement.classList.add('wrong');

        //update heart count
        hearts = Math.max(0, hearts - 1 ); // Prevent hearts from going below 0
        localStorage.setItem('hearts', hearts); // Update the value in localStorage
        console.log(hearts)
        showHearts()

        return;

    }
    currentQuestionHtml.classList.add('slide-out');;
    setTimeout(() => {
        // Remove slide-out class and update question content
        currentQuestionHtml.classList.remove('slide-out');



        // Update progress bar and question count



        // Update question content based on question number

        if (questionCount === 1) {
            if(userAnswer === 2){
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

function continueButton() {


    const continueBtn = document.querySelector('.continue');
if(questionCount===10){
}
    // Show loader in the button
    continueBtn.innerHTML = `<div class="loader"></div>`;

    setTimeout(() => {
        // Load the next question

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
    CurrentQuestionAnswer = 3
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">Which of these is NOT one of the three pillars of sustainability?</h1>
                <div class="answer-grid">
                    <button class="flex" id="answer1">Environmental</button>
                    <button class="flex" id="answer2">Economic</button>
                    <button class="flex" id="answer3">Industrial</button>
                    <button class="flex" id="answer4">Social</button>
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
    CurrentQuestionAnswer = 2
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">What is a key reason why sustainability is important?</h1>
                <div class="answer-grid">
                    <button class="flex" id="answer1">It helps us ignore environmental changes</button>
                    <button class="flex" id="answer2">It balances human needs with environmental protection</button>
                    <button class="flex" id="answer3">It promotes faster economic growth only</button>
                    <button class="flex" id="answer4"> It reduces the number of animals in the ecosystem</button>
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
    CurrentQuestionAnswer = 2
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">True or False: Sustainability only focuses on environmental issues.</h1>
                <div class="answer-grid">
                    <button class="flex" id="answer1">True</button>
                    <button class="flex" id="answer2">False</button>
                </div>
                <p id="feedback" class="feedback-text"></p> <!-- Feedback message -->
            </div>`;
            answer1 = document.getElementById("answer1").addEventListener('click', () => selectAnswer(1));
            answer2 = document.getElementById("answer2").addEventListener('click', () => selectAnswer(2));
    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionFive() {
    CurrentQuestionAnswer = 1
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">Which of these best describes a sustainable resource?</h1>
                <div class="answer-grid">
                    <button class="flex" id="answer1">One that can be replaced naturally and used indefinitely</button>
                    <button class="flex" id="answer2">One that is expensive to produce</button>
                    <button class="flex" id="answer3">One that is used up quickly</button>
                    <button class="flex" id="answer4">One that causes pollution</button>
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
    CurrentQuestionAnswer = 2
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">Which activity aligns with sustainability?</h1>
                <div class="answer-grid">
                    <button class="flex" id="answer1">Using single-use plastic for convenience</button>
                    <button class="flex" id="answer2">Planting trees to restore deforested areas</button>
                    <button class="flex" id="answer3">Burning more fossil fuels for energy</button>
                    <button class="flex" id="answer4">Dumping waste into rivers</button>
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
    CurrentQuestionAnswer = 4
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">What is the "carbon footprint"?</h1>
                <div class="answer-grid">
                    <button class="flex" id="answer1">The amount of carbon dioxide emitted by plants</button>
                    <button class="flex" id="answer2"> A type of carbon found in soil</button>
                    <button class="flex" id="answer3">The natural cycle of carbon in ecosystems</button>
                    <button class="flex" id="answer4">The measure of the greenhouse gases produced by human activities</button>
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


function launchConfetti() {
    const confettiCount = 200;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');

        // Generate random directions for explosion effect
        const xOffset = `${Math.random() * 200 - 100}vw`; // Random offset left or right
        const yOffset = `${Math.random() * 100 - 50}vh`; // Random offset up or down

        // Apply custom properties for the explode direction
        confetti.style.setProperty('--x-offset', xOffset);
        confetti.style.setProperty('--y-offset', yOffset);

        // Set a random color for each piece
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        document.body.appendChild(confetti);

        // Remove confetti after animation ends to clean up
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}


function questionEight() {
    CurrentQuestionAnswer = 3
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">Which of these statements is true about sustainable consumption?</h1>
                <div class="answer-grid">
                    <button class="flex" id="answer1">It involves buying as many products as possible</button>
                    <button class="flex" id="answer2">It is about only buying products that are cheap.</button>
                    <button class="flex" id="answer3"> It means choosing products that have minimal impact on the environment</button>
                    <button class="flex" id="answer4">It encourages the use of single-use items.</button>
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
    CurrentQuestionAnswer = 1
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">What does it mean for a practice to be "sustainable"?</h1>
                <div class="answer-grid">
                    <button class="flex" id="answer1">It can continue over time without causing harm to the environment or society.</button>
                    <button class="flex" id="answer2">It’s designed for short-term benefit only</button>
                    <button class="flex" id="answer3">It focuses only on reducing costs</button>
                    <button class="flex" id="answer4">It requires no resources</button>
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

    } else {let lessonNumber = parseInt(localStorage.getItem('lessonNumber'), 10) + 1;
        localStorage.setItem('lessonNumber', lessonNumber);}


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
