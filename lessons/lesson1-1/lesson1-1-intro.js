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


const rightSound = new Audio('/main/sounds/correct.mp3')
const passedSound = new Audio('/main/sounds/passed.mp3')
//button site change

//button toggle
document.querySelectorAll('.flex').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected'); // Toggles the highlight
    });
});


let answers = {};
var questionCount = 1
const maxQuestions = 5
const headline = document.getElementById('headline')
const loadingBar = document.getElementById('loading-bar')
const loadingBarFull = document.getElementById('loading-bar-full')
const loadingBarGlimmer = document.getElementById('loading-bar-full')
var currentQuestionHtml = document.getElementById('question')
let continueButton1 = document.getElementById('continueButton');

window.onload = function() {
    document.body.classList.add('fade-in')
continueButton1.disabled = false; // Disable by default

document.querySelectorAll('.flex').forEach(button => {
    button.addEventListener('click', () => {
        continueButton1.disabled = false; // Enable the button when any option is selected
    });
});



  };


function changeLoadingBar() {
    continueButton1.disabled = true
    console.log(questionCount)
    if (questionCount === maxQuestions){
        loadingBarGlimmer.classList.add('slide-up');
        loadingBar.classList.add('slide-up');
        loadingBarFull.classList.add('slide-up');
    };

    // Start the slide-out animation for the current question
    currentQuestionHtml.classList.add('slide-out');
loadingBarFull.style.width = `${(questionCount / maxQuestions) * 100}%`
    setTimeout(() => {
        continueButton1.disabled = false
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
            continueButton1.disabled = false
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

        if (questionCount >= 0)  {
            continueButton1.disabled = false;
        }
        enableContinueOnSelection();
        // Add slide-in animation
        currentQuestionHtml.classList.add('slide-in');

        // Remove slide-in class after animation ends
        setTimeout(() => {
            currentQuestionHtml.classList.remove('slide-in');
        }, 1000);
    }, 1900); // Delay to finish slide-out before changing question
    continueButton1.disabled = false
}

function continueButton() {
    rightSound.play();
    const continueBtn = document.querySelector('.continue');
if(questionCount===5){
    passedSound.play();
    jsConfetti.addConfetti()
}
if(questionCount===6){

    document.body.classList.add('fade-out')
    setTimeout(() => {
        window.location.href = '/lessons/lesson1-1/lesson1-1.html';
    }, 1000)

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
    continueButton1.disabled = false
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
                <h1 class="top-text">The Three Pillars of Sustainability</h1>
                <div class="answer-grid">
                     <p class="information">Sustainability is built on three essential pillars: environmental, economic, and social.<br><br> The environmental pillar focuses on protecting natural resources like air, water, and soil, aiming to reduce pollution and promote renewable resources.<br><br>  The economic pillar emphasizes financial practices that support long-term growth without harming the environment or society.<br><br>  Finally, the social pillar is about improving human quality of life, including health, education, and equity, while fostering strong communities.</p>
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
                <h1 class="top-text">What Does "Sustainable" Mean?</h1>
                <div class="answer-grid">
                     <p class="information">When something is sustainable, it can continue over time without
                     causing harm or depletion to resources.<br><br>For example, solar energy is sustainable
                     because it doesn't deplete natural resources and can be renewed by the sun.<br><br> In contrast,
                     fossil fuels are not sustainable; they produce harmful emissions and will eventually run
                     out.<br><br> Making sustainable choices means opting for things that can last and contribute to a
                     healthier planet.</p>
                </div>
            </div>`;

    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionFour(){
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">Understanding Your Carbon Footprint</h1>
                <div class="answer-grid">
                     <p class="information">Every action we take—whether it's driving a car or using electricity—adds to what’s
                     known as our carbon footprint, which is the total amount of greenhouse gases we produce.<br><br>
                     A larger carbon footprint means a greater negative impact on the environment. <br><br>By making
                     sustainable choices, like using public transportation or reducing energy waste, we can
                     reduce our carbon footprint and lessen our impact on climate change.</p>
                </div>
            </div>`;

    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionFive(){
    continueButton1.disabled = false
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
    <h1 class="top-text">Sustainable Consumption and Production</h1>
    <div class="answer-grid">
         <p class="information">Sustainable consumption means choosing products and
         practices that have a minimal impact on the environment. <br><br>This includes buying
         items that are reusable, recyclable, or made from renewable materials.
         <br><br>By reducing the number of single-use items we buy and looking for eco-friendly
         options, we can all play a role in conserving resources and reducing waste.</p>
    </div>
</div>`;

    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionSix(){
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">

                <h1  class="top-text">Thats the basics, Let's test your newfound knowledge!</h1>

                </div>
            </div>`;

    // Reattach event listeners to the new buttons
    attachButtonListeners();
}
function questionSeven(){
    document.body.classList.add('fade-out')
    // Reattach event listeners to the new buttons
    attachButtonListeners();
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
