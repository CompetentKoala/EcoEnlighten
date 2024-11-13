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
const maxQuestions = 6
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
if(questionCount===6){
    passedSound.play();
    jsConfetti.addConfetti()
}
if(questionCount===7){

    document.body.classList.add('fade-out')
    setTimeout(() => {
        window.location.href = '/lessons/lesson1-2/lesson1-2.html';
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
                <h1 class="top-text">Environmental Sustainability</h1>
                <div class="answer-grid">
                     <p class="information">Environmental sustainability focuses on
                     preserving natural resources and ecosystems.<br><br> This means reducing
                     pollution, conserving water, using renewable energy,
                     and protecting wildlife.<br><br> By managing our resources responsibly,
                     we can help ensure a healthy planet for the future.</p>
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
                <h1 class="top-text">Economic SustainabilityMean?</h1>
                <div class="answer-grid">
                     <p class="information">Environmental sustainability focuses on preserving natural
                     resources and ecosystems.<br><br> This means reducing pollution, conserving water,
                      using renewable energy, and protecting wildlife.<br><br>  By managing our resources
                      responsibly, we can help ensure a healthy planet for the future.</p>
                </div>
            </div>`;

    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionFour(){
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
                <h1 class="top-text">Economic Sustainability</h1>
                <div class="answer-grid">
                     <p class="information">Economic sustainability aims for steady economic growth
                      that doesn’t harm the environment or exploit people.<br><br>  This includes fair wages,
                       ethical business practices, and efficient resource use.<br><br>  Sustainable economies
                       balance growth with respect for both environmental and social needs./p>
                </div>
            </div>`;

    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionFive(){
    continueButton1.disabled = false
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
    <h1 class="top-text">Social Sustainability</h1>
    <div class="answer-grid">
         <p class="information">Social sustainability is about creating fair,
         inclusive societies.<br><br>  It values equity, human rights, and access to
          essential services like healthcare and education.<br><br>  By fostering strong,
          resilient communities, social sustainability works to improve quality
          of life for everyone.</p>
    </div>
</div>`;

    // Reattach event listeners to the new buttons
    attachButtonListeners();
}

function questionSix(){
    continueButton1.disabled = false
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">
    <h1 class="top-text">The Importance of Balance</h1>
    <div class="answer-grid">
         <p class="information">These three pillars are interconnected.<br><br>
         True sustainability happens when we find solutions that support
         all three pillars, creating a balance that benefits people,
         the economy, and the planet.</p>
    </div>
</div>`;

    // Reattach event listeners to the new buttons
    attachButtonListeners();
}
function questionSeven(){
    currentQuestionHtml.innerHTML =
    `<div id='question' class="main-content">

                <h1  class="top-text">Those are the three pillars! Now, let's test your newfound knowledge!</h1>

                </div>
            </div>`;

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
