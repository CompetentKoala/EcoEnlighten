const starsContainer = document.querySelector('.stars');
//stars
const jsConfetti = new JSConfetti();

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
function getStartedButton() {
    setTimeout(function(){
        console.log("BTN PRESSED")
        window.location.href = '/Questions/Q1.html';
    },1000);

}
//continue button PAGE2
function continueButton() {
    setTimeout(function(){
        console.log("BTN PRESSED")
        window.location.href = '/Questions/Q2.html';
    },1000);

}

//button toggle
document.querySelectorAll('.flex').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected'); // Toggles the highlight
    });
});


let answers = {};
var questionCount = 1
const maxQuestions = 6
const headline = document.getElementById('headline')
const loadingBar = document.getElementById('loading-bar')
const loadingBarFull = document.getElementById('loading-bar-full')
const loadingBarGlimmer = document.getElementById('loading-bar-full')
var currentQuestionHtml = document.getElementById('question')
let continueButton1 = document.getElementById('continueButton');

window.onload = function() {
document.body.classList.add('fade-in')
continueButton1.disabled = true; // Disable by default

document.querySelectorAll('.flex').forEach(button => {
    button.addEventListener('click', () => {
        continueButton1.disabled = false; // Enable the button when any option is selected
    });
});



  };


function changeLoadingBar() {

    console.log(questionCount)
    if (questionCount > maxQuestions){
        headline.classList.add('slide-up')
        loadingBarGlimmer.classList.add('slide-up');
        loadingBar.classList.add('slide-up');
        loadingBarFull.classList.add('slide-up');
    };

    // Start the slide-out animation for the current question
    currentQuestionHtml.classList.add('slide-out');
loadingBarFull.style.width = `${(questionCount / maxQuestions) * 100}%`
    setTimeout(() => {
        // Remove slide-out class and update question content
        currentQuestionHtml.classList.remove('slide-out');



        // Update progress bar and question count
        ;

        questionCount += 1;

        // Update question content based on question number
        if (questionCount === 2) {
            questionTwo();
        }

        if (questionCount === 3){
            questionThree();
        }
        if (questionCount === 4){
            questionFour();
        }
        if (questionCount ===5){
            questionFive();
        }

        if(questionCount === 6){
            questionSix()
        }
        if(questionCount === 7){
            questionSeven()
        }

        if(questionCount === 8){
            questionEight()
        }

        if(questionCount === 9){
            questionNine()
        }

        console.log(answers)
        continueButton1.disabled = true;
        if (questionCount === 4 || questionCount === 7 || questionCount === 8 || questionCount === 9) {
            continueButton1.disabled = false;
        }
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
if(questionCount===7){
    jsConfetti.addConfetti()
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

                <h1  class="top-text">How did you hear about us?</h1>
                <div class="answer-grid">
                    <button class="flex"><img src="/icons/f:i.svg" alt=""><br>Facebook/Instagram</button>
                    <button class="flex"><img src="/icons/tiktok.svg" alt=""><br>TikTok </button>
                    <button class="flex"><img src="/icons/google.svg" alt=""><br>Google</button>
                    <button class="flex"><img src="/icons/friends.svg" alt=""><br>Friends/Family</button>
                    <button class="flex"><img src="/icons/spotify.svg" alt=""><br>Spotify </button>
                    <button class="flex"><img src="/icons/tv.svg" alt=""><br>TV</button>
                    <button class="flex"><img src="/icons/other.svg" alt=""><br>Other</button>
                </div>
            </div>`;

    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionTwo() {

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
            selectAnswer(questionNumber, answerText);
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

function selectAnswer(questionNumber, answer) {
    answers[questionNumber] = answer; // Store the selected answer for the question
    console.log(`Question ${questionNumber} Answer: ${answer}`);
}

function questionThree(){
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">

                <h1  class="top-text">How much do you know about sustainability?</h1>
                <div class="answer-grid">
                    <button class="flex K"><img class = 'icons' src="/icons/Q3/1.svg" alt=""><br>I’m just starting to learn.</button>
                    <button class="flex K"><img class = 'icons' src="/icons/Q3/2.svg" alt=""><br>I know some basic concepts.</button>
                    <button class="flex K"><img class = 'icons' src="/icons/Q3/3.svg" alt=""><br>I understand key principles and practices.
                    </button>
                    <button class="flex K"><img class = 'icons' src="/icons/Q3/4.svg" alt=""><br>I’m knowledgeable about various topics.</button>
                    <button class="flex K"><img class = 'icons' src="/icons/Q3/5.svg" alt=""><br>I have extensive knowledge and experience.</button>
                </div>
            </div>`;

    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionFour(){
    currentQuestionHtml.innerHTML =
    ` <div id='question' class="main-content">

                <h1  class="top-text">Here is what you can acheive!</h1>
                <div class="answer-grid">
                    <div class="flex1"><img class = 'icons icons4' src="/icons/Q4/lifestyle.png" alt=""><br>A sustainable lifestyle</div>
                    <div class="flex1"><img class = 'icons icons4' src="/icons/Q4/carbon-footprint.png" alt=""><br>Reduced carbon footprint </div>
                    <div class="flex1"><img class = 'icons icons4' src="/icons/Q4/decision.png" alt=""><br>Informed consumer decisions</div>
                </div>
            </div>`;

    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionFive(){
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">

                <h1  class="top-text">How much of your life are you honestly wanting to change?</h1>
                <div class="answer-grid">
                    <button class="flex">Just a little bit, small steps first.</button>
                    <button class="flex">I’m open to changing some daily habits. </button>
                    <button class="flex">I’m willing to make significant lifestyle adjustments.</button>
                    <button class="flex">I’ll do whatever it takes for a sustainable future.</button>
                    <button class="flex">I don’t know yet; I want to learn and see what’s possible.</button>
                </div>
            </div>`;

    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionSix(){
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">

                <h1  class="top-text">Now lets find the best place for you to start!</h1>
                <div class="answer-grid">
                    <button class="flex">Start from the very beginning of your new journey</button>
                    <button class="flex">Let us figure out where you are in your journey</button>

                </div>
            </div>`;

    // Reattach event listeners to the new buttons
    attachButtonListeners();
}
function questionSeven(){
    if (answers[3] === "I’m just starting to learn.") {
        currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">

                <h1  class="top-text">I suggest you start as a </h1>
                <div class="answer-grid">
                <p class='startingLevel'>Level 1: Eco Novice!<p>

                </div>
            </div>`;
    }
    if (answers[3] === "I know some basic concepts.") {
        currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">

                <h1  class="top-text">I suggust you start as a </h1>
                <div class="answer-grid">
                <p class='startingLevel'>Level 2: Green Explorer!<p>

                </div>
            </div>`;
    }
    if (answers[3] === "I understand key principles and practices.") {
        currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">

                <h1  class="top-text">I suggust you start as a </h1>
                <div class="answer-grid">
                <p class='startingLevel'>Level 3: Planet Protector!<p>

                </div>
            </div>`;
    }
    if (answers[3] === "I’m knowledgeable about various topics.") {
        currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">

                <h1  class="top-text">I suggust you start as a </h1>
                <div class="answer-grid">
                <p class='startingLevel'>Level 3: Planet Protector!<p>

                </div>
            </div>`;
    }
    if (answers[3] === "I have extensive knowledge and experience.") {
        currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">

                <h1  class="top-text">I suggust you start as a </h1>
                <div class="answer-grid">
                <p class='startingLevel'>Level 6: Carbon Saver!<p>

                </div>
            </div>`;
    }


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

function questionEight(){
        currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">

                <p class='message'>Sustainability can be a hard journey,<br> so we designed EcoEnlighten to be fun,<br> like a game that will help you stay motivated! <p>
                </div>
            </div>`;

    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionNine(){
        setTimeout(function(){

            console.log("BTN PRESSED");
            window.location.href = '/main/main.html';
        },1600);
    currentQuestionHtml.innerHTML =
`<div id='question' class="main-content">

            <p class='startingLevel'>LETS DO IT!<p>

            </div>
        </div>`;

// Reattach event listeners to the new buttons
attachButtonListeners();
}

function questionTen(){
    currentQuestionHtml.innerHTML =
`<div id='question' class="main-content">



            </div>
        </div>`;

// Reattach event listeners to the new buttons
attachButtonListeners();
}
