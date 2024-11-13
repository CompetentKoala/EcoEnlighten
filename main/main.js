//////// BACKGROUND STARS
const starsContainer = document.querySelector('.stars');
for (let i = 0; i < 1000; i++) { // Adjust the number of stars here
    const star = document.createElement('div');
    star.classList.add('star');

    // Random size, position, opacity, and animation delay
    const size = Math.random() * 3 + 1 + 'px';
    star.style.width = size;
    star.style.height = size;
    star.style.top = Math.random() * 500 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.opacity = Math.random() * 0.5 + 0.3;

    // Set a random delay for the twinkle animation
    star.style.animationDelay = Math.random() * 2 + 's';

    starsContainer.appendChild(star);
}





//SET GLOBALHTMLCENTER
let updatedGlobalCenter = localStorage.getItem('globalHtmlCenter')

//////SET HEARTS IF NOT SET
if (localStorage.getItem('hearts') === null) {
    localStorage.setItem('hearts', 5);
}
///////SET BEES IF NOT SET
if (localStorage.getItem('bees') === null) {
    localStorage.setItem('bees', 300);
}
///////SET LESSON IF NOT SET
if (localStorage.getItem('lessonNumber') === null) {
    localStorage.setItem('lessonNumber', 1);
}
////////SET HOURS TILL NEW HEARTS
if (localStorage.getItem('hoursUntilNewHeart') === null) {
    localStorage.setItem('hoursUntilNewHeart', 5);
}
///////LESSON NUMBER / HEARTS AS AN INTIGER
let lessonNumber = parseInt(localStorage.getItem('lessonNumber'), 10);
let hearts = parseInt(localStorage.getItem('hearts')) || 0; // Default to 0 if hearts is not set
let bees = parseInt(localStorage.getItem('bees'), 10)
////////TIME UNTIL NEXT FREE HEART
let hoursUntilHeart = parseInt(localStorage.getItem('hoursUntilNewHeart'), 10)
////////DAILY STREAK INFORMTION
let streakCount = parseInt(localStorage.getItem('streakCount')) || 0;
let lastCompletionDate = localStorage.getItem('lastCompletionDate') || null;
let recordedDays = JSON.parse(localStorage.getItem('recordedDays')) || [];






//DISPALY HEARTS && ADD HEARTS EVERY 5 HOURS/// AND BEES
function showHearts(){
    let hearts = localStorage.getItem('hearts')
    hearts = hearts ? parseInt(hearts, 10) : 0;
    if(hearts === 5){
        document.querySelector('#hearts').innerHTML =  `

        <div class="popup popup-hearts">
        <div class='heart-box'
            <div class='hearts-item hi-1'><span>Hearts</span></div>
            <div class='hearts-item hi-2'>
                <img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">
                <img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">
                <img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">
                <img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">
                <img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">
            </div>
            <div class='hearts-item hi-3'>Next heart in 3 hours</div>
            <div class='hearts-item hi-4'>You still have hearts left! keep learning</div>
            <div class='hearts-item hi-5'>
                <p><img class ='popup-heart-inner' src="/main/icons/infiniteheart.png" alt="">Unlimited Hearts</p>
                <p>FREE TRIAL</p>
            </div>
            <div class='hearts-item hi-6'>
                <p><img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">REFILL HEARTS</p>
                <p class='hi-6-1'>350<img src="/main/icons/bee.png" alt=""></p>

            </div>
            <div class='hearts-item hi-7'>
             <p><img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">PRACTICE TO EARN HEARTS</p>
                <p class='hi-6-1'></p>
            </div>
        </div>
        <img id='hearts' class='hearts' src="/main/icons/heart.png" alt="Hearts">${hearts}
        </div>
        `;
    }
    if(hearts === 4){
        document.querySelector('#hearts').innerHTML =  `

    <div class="popup popup-hearts">
    <div class='heart-box'
        <div class='hearts-item hi-1'><span>Hearts</span></div>
        <div class='hearts-item hi-2'>
            <img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">
            <img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">
            <img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">
            <img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">
            <img class ='popup-heart-inner heart-missing' src="/main/icons/heartlight1.png" alt="">
        </div>
        <div class='hearts-item hi-3'>Next heart in <span class='red'>${hoursUntilHeart} hours </span></div>
        <div class='hearts-item hi-4'>You still have hearts left! Keep learning</div>
        <div class='hearts-item hi-5'>
            <p><img class ='popup-heart-inner' src="/main/icons/infiniteheart.png" alt="">Unlimited Hearts</p>
            <p>FREE TRIAL</p>
        </div>
        <div class='hearts-item hi-6'>
            <p><img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">REFILL HEARTS</p>
            <p class='hi-6-1'>350<img src="/main/icons/bee.png" alt=""></p>

        </div>
        <div class='hearts-item hi-7'>
         <p><img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">PRACTICE TO EARN HEARTS</p>
            <p class='hi-6-1'></p>
        </div>
    </div>
    <img id='hearts' class='hearts' src="/main/icons/heart.png" alt="Hearts">${hearts}
    </div>
    `
    }
    if(hearts === 3){
        document.querySelector('#hearts').innerHTML =  `

    <div class="popup popup-hearts">
    <div class='heart-box'
        <div class='hearts-item hi-1'><span>Hearts</span></div>
        <div class='hearts-item hi-2'>
            <img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">
            <img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">
            <img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">
            <img class ='popup-heart-inner heart-missing' src="/main/icons/heartlight1.png" alt="">
            <img class ='popup-heart-inner heart-missing' src="/main/icons/heartlight1.png" alt="">
        </div>
        <div class='hearts-item hi-3'>Next heart in <span class='red'>${hoursUntilHeart} hours </span></div>
        <div class='hearts-item hi-4'>You still have hearts left! Keep learning</div>
        <div class='hearts-item hi-5'>
            <p><img class ='popup-heart-inner' src="/main/icons/infiniteheart.png" alt="">Unlimited Hearts</p>
            <p>FREE TRIAL</p>
        </div>
        <div class='hearts-item hi-6'>
            <p><img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">REFILL HEARTS</p>
            <p class='hi-6-1'>350<img src="/main/icons/bee.png" alt=""></p>

        </div>
        <div class='hearts-item hi-7'>
         <p><img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">PRACTICE TO EARN HEARTS</p>
            <p class='hi-6-1'></p>
        </div>
    </div>
    <img id='hearts' class='hearts' src="/main/icons/heart.png" alt="Hearts">${hearts}
    </div>
    `
    }
    if(hearts === 2){
        document.querySelector('#hearts').innerHTML =  `

    <div class="popup popup-hearts">
    <div class='heart-box'
        <div class='hearts-item hi-1'><span>Hearts</span></div>
        <div class='hearts-item hi-2'>
            <img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">
            <img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">
            <img class ='popup-heart-inner heart-missing' src="/main/icons/heartlight1.png" alt="">
            <img class ='popup-heart-inner heart-missing' src="/main/icons/heartlight1.png" alt="">
            <img class ='popup-heart-inner heart-missing' src="/main/icons/heartlight1.png" alt="">
        </div>
        <div class='hearts-item hi-3'>Next heart in <span class='red'>${hoursUntilHeart} hours </span></div>
        <div class='hearts-item hi-4'>You still have hearts left! Keep learning</div>
        <div class='hearts-item hi-5'>
            <p><img class ='popup-heart-inner' src="/main/icons/infiniteheart.png" alt="">Unlimited Hearts</p>
            <p>FREE TRIAL</p>
        </div>
        <div class='hearts-item hi-6'>
            <p><img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">REFILL HEARTS</p>
            <p class='hi-6-1'>350<img src="/main/icons/bee.png" alt=""></p>

        </div>
        <div class='hearts-item hi-7'>
         <p><img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">PRACTICE TO EARN HEARTS</p>
            <p class='hi-6-1'></p>
        </div>
    </div>
    <img id='hearts' class='hearts' src="/main/icons/heart.png" alt="Hearts">${hearts}
    </div>
    `
    }
    if(hearts === 1){
        document.querySelector('#hearts').innerHTML =  `

    <div class="popup popup-hearts">
    <div class='heart-box'
        <div class='hearts-item hi-1'><span>Hearts</span></div>
        <div class='hearts-item hi-2'>
            <img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">
            <img class ='popup-heart-inner heart-missing' src="/main/icons/heartlight1.png" alt="">
            <img class ='popup-heart-inner heart-missing' src="/main/icons/heartlight1.png" alt="">
            <img class ='popup-heart-inner heart-missing' src="/main/icons/heartlight1.png" alt="">
            <img class ='popup-heart-inner heart-missing' src="/main/icons/heartlight1.png" alt="">
        </div>
        <div class='hearts-item hi-3'>Next heart in <span class='red'>${hoursUntilHeart} hours </span></div>
        <div class='hearts-item hi-4'>You still have hearts left! Keep learning</div>
        <div class='hearts-item hi-5'>
            <p><img class ='popup-heart-inner' src="/main/icons/infiniteheart.png" alt="">Unlimited Hearts</p>
            <p>FREE TRIAL</p>
        </div>
        <div class='hearts-item hi-6'>
            <p><img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">REFILL HEARTS</p>
            <p class='hi-6-1'>350<img src="/main/icons/bee.png" alt=""></p>

        </div>
        <div class='hearts-item hi-7'>
         <p><img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">PRACTICE TO EARN HEARTS</p>
            <p class='hi-6-1'></p>
        </div>
    </div>
    <img id='hearts' class='hearts' src="/main/icons/heart.png" alt="Hearts">${hearts}
    </div>
    `
    }
    if(hearts === 0){
        document.querySelector('#hearts').innerHTML =  `

    <div class="popup popup-hearts">
    <div class='heart-box'
        <div class='hearts-item hi-1'><span>Hearts</span></div>
        <div class='hearts-item hi-2'>
            <img class ='popup-heart-inner heart-missing' src="/main/icons/heartlight1.png" alt="">
            <img class ='popup-heart-inner heart-missing' src="/main/icons/heartlight1.png" alt="">
            <img class ='popup-heart-inner heart-missing' src="/main/icons/heartlight1.png" alt="">
            <img class ='popup-heart-inner heart-missing' src="/main/icons/heartlight1.png" alt="">
            <img class ='popup-heart-inner heart-missing' src="/main/icons/heartlight1.png" alt="">
        </div>
        <div class='hearts-item hi-3'>Next heart in <span class='red'>${hoursUntilHeart} hours </span></div>
        <div class='hearts-item hi-4'>You have no more hearts!</div>
        <div class='hearts-item hi-4'>You need to buy more with bees or wait</div>
        <div class='hearts-item hi-5'>
            <p><img class ='popup-heart-inner' src="/main/icons/infiniteheart.png" alt="">Unlimited Hearts</p>
            <p>FREE TRIAL</p>
        </div>
        <div class='hearts-item hi-6'>
            <p><img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">REFILL HEARTS</p>
            <p class='hi-6-1'>350<img src="/main/icons/bee.png" alt=""></p>

        </div>
        <div class='hearts-item hi-7'>
         <p><img class ='popup-heart-inner' src="/main/icons/heart.png" alt="">PRACTICE TO EARN HEARTS</p>
            <p class='hi-6-1'></p>
        </div>
    </div>
    <img id='hearts' class='hearts' src="/main/icons/heart.png" alt="Hearts">${hearts}
    </div>
    `
    }



}

function addHeart() {
    let hearts = parseInt(localStorage.getItem('hearts')) || 0;
    hearts += 1;
    localStorage.setItem('hearts', hearts);
    localStorage.setItem('lastHeartAdded', Date.now());
}

function checkHeartTimer() {
    const FIVE_HOURS = 5 * 60 * 60 * 1000; // 5 hours in milliseconds
    const lastHeartAdded = parseInt(localStorage.getItem('lastHeartAdded')) || 0;
    const now = Date.now();

    // Check if 5 hours have passed since the last heart addition
    if (now - lastHeartAdded >= FIVE_HOURS) {
        addHeart();
    }

    // Calculate time left until the next heart
    const timeLeft = FIVE_HOURS - (now - lastHeartAdded);

    // Convert time left to hours, minutes, and seconds
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update HTML with the time remaining
    hoursUntilHeart = hours;
}
setInterval(checkHeartTimer, 120000);
///daily streak fucntion
function completeLesson() {
    const now = new Date();
    const currentDate = now.toISOString().split('T')[0]; // Current date in YYYY-MM-DD format
    const currentDay = now.getDay(); // Day of the week (0 = Sunday, 6 = Saturday)

    // Check if the lesson was completed today
    if (lastCompletionDate !== currentDate) {
        // Increment the streak count for consecutive days
        streakCount += 1;
        lastCompletionDate = currentDate;
        localStorage.setItem('streakCount', streakCount);
        localStorage.setItem('lastCompletionDate', lastCompletionDate);

        // Update recorded days array
        recordedDays.push(currentDate);
        localStorage.setItem('recordedDays', JSON.stringify(recordedDays));
    }

    // Reset recorded days on Monday
    if (currentDay === 1) { // 1 = Monday
        recordedDays = [];
        localStorage.setItem('recordedDays', JSON.stringify(recordedDays));
    }

    // Update the display (or call a function to update your UI)
    updateStreakDisplay();
}


function setBees(){
    let bees= localStorage.getItem('bees')
    bees = bees ? parseInt(bees, 10) : 0;
    document.querySelector('#bees').innerHTML =  `

    <div class="popup popup-bees">
        <div class=bees-box>
            <img class=bee-hive src="/main/icons/beehive.png" alt="Beehive">
            <div class=bees-box-2>
                <p><span>BEES</span></p>
                <p>You have ${bees} bees</p>
                <button class=shop-button>GO TO SHOP</button>
            </div>
        </div>
    </div>
    <img src="/main/icons/bee.png" alt="Bees">${bees}`
}






////////SOUNDS
const startSound = new Audio('/main/sounds/start.mp3')
const treeGrowthSound = new Audio('/main/sounds/treegrowth.mp3')
const waterSound = new Audio('/main/sounds/water.mp3')
waterSound.volume = .2;
const popSound = new Audio('/main/sounds/pop.mp3')
popSound.volume = .03

//FINSIHED LEVEL, TREE GROWTH SOUNDS COLLECTION
function treeGrowSounds() {
    waterSound.play();
    setTimeout(() => {
        treeGrowthSound.play();
        treeGrowthSound.play();
        treeGrowthSound.play();
    }, 1000);
    setTimeout(() => {
        popSound.play();
    }, 2500);
}








///////////////DEFININTIONS OF HTML ELEMENTS
const centerHeader1 = document.querySelector('.center-header');
const centerHeader2 = document.querySelector('.center-area');
const scrollableArea = document.querySelector('.center-area-global');
/////////////HTML ELEMENTS FOR CREATING PROFILES
const popupOverlay = document.getElementById('popupOverlay');
const openPopupBtn = document.querySelector('.open-popup');
const closePopupBtn = document.getElementById('closePopup');










/////////////////////CREATE A PROFILE
openPopupBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
});
closePopupBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});
//account information saved to local storage
document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create an object to hold the user profile
    const userProfile = { username, email, password };

    // Store the user profile in local storage (for quick prototyping)
    localStorage.setItem('userProfile', JSON.stringify(userProfile));

    // Close the popup after account creation
    document.getElementById('popupOverlay').style.display = 'none';
    alert('Account created successfully!');

    // Optionally, trigger a login after account creation (for testing)
    loginUser(username, password);
});
// Function to log in a user by checking the profile in localStorage
function loginUser(username, password) {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));

    if (storedProfile && storedProfile.username === username && storedProfile.password === password) {
        alert('Login successful! Welcome, ' + storedProfile.username);
        document.querySelector('.right-menu').innerHTML = mainHtmlRightProfile;
    } else {
        alert('Login failed! Please check your username and password.');
    }
}
// Close the popup when the 'X' button is clicked
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popupOverlay').style.display = 'none';
});
const storedProfile = JSON.parse(localStorage.getItem('userProfile'));









/////////////////////CHANGE SCREEN INTERNALLY BASED ON WHAT TAB YOUR ON
let currentMenuSelection = 1;
const menuItems = {
    1: '.home',
    2: '.leaderboard',
    3: '.mission',
    4: '.market',
    5: '.profile',
    6: '.other',
};
//HIGHLIGHT THE SELECTED TAB
function leftMenuItemSelector() {
    // Remove the selected class from all items
    document.querySelectorAll('.left-menu-item').forEach(item => item.classList.remove('selected-left-menu-item'));

    // Get the selected menu item class based on currentMenuSelection
    const selectedMenuClass = menuItems[currentMenuSelection];

    // Add the selected class to the corresponding menu item
    if (selectedMenuClass) {
        const selectedDiv = document.querySelector(selectedMenuClass);
        if (selectedDiv) {
            selectedDiv.classList.add('selected-left-menu-item');
        }
    }
}
//CHANGE THE INNER-HTML BASED ON THE TAB SELECTION
function changeInnerHtml() {


    const centerArea = document.querySelector('.center-area-global');
    const rightArea = document.querySelector('.right-menu');


    // Only update content if the menu selection has changed
    if (currentMenuSelection !== previousMenuSelection) {

        // Remove existing dynamic CSS if necessary
        const dynamicCSS = document.querySelector('.dynamic-css');
        if (dynamicCSS) dynamicCSS.remove();

        // Switch based on the current menu selection
        switch (currentMenuSelection) {
            ////HOME
            case 1:
                // Remove dynamic CSS and set the main HTML content
                if (centerArea) centerArea.innerHTML = updatedGlobalCenter;
                if (rightArea) rightArea.innerHTML = storedProfile ? mainHtmlRightProfile : mainHtmlRight;
                break;
            //LEADERBOARD
            case 2:
                // Add leaderboard-specific CSS if not already added
                addStylesheet('/main/leaderboard.css');

                // Set leaderboard content
                if (centerArea) {
                    centerArea.innerHTML = `
                        <img class="leaderboardicon" src="/main/icons/leaderboardicon.png" alt="" />
                        <p class="leaderboard-heading-text">Unlock Leaderboards!</p>
                        <p class="leaderboard-text">Complete 10 more lessons to start competing</p>
                        <button class="leaderboard-start-lesson-button">START A LESSON</button>
                        <div class="leaderboard-profiles">
                            <img class="preprofile" src="/main/icons/leaderboards/preprofile.svg" alt="" />
                            <img class="profile" src="/main/icons/leaderboards/profiles.svg" alt="" />
                            <img class="line" src="/main/icons/leaderboards/line.svg" alt="" />
                        </div>`;
                }
                if (rightArea) rightArea.innerHTML = leaderboardHtmlRight;
                break;
            //MISSIONS
            case 3:
                // Add missions-specific CSS if not already added
                addStylesheet('/main/missions.css');

                // Set missions content
                if (centerArea) centerArea.innerHTML = missionHtmlCenter;
                if (rightArea) rightArea.innerHTML = missionHtmlRight;
                break;

            default:
                console.error("Invalid menu selection");
                break;
        }

        // Update the previous menu selection
        previousMenuSelection = currentMenuSelection;


    }
    quizEventListener1()
    quizEventListener2()
}

//SET HTML UPDATES FOR THE DIFFERENT TABS
let mainHtmlCenter = '';
let mainHtmlRight =`<div class="right-menu-header">
            <div class="right-menu-header-item"><img src="/main/icons/earth.png" alt="Earth"></div>
            <div class="right-menu-header-item"><img src="/main/icons/tree.png" alt="Earth">0</div>
            <div class="right-menu-header-item"><img src="/main/icons/bee.png" alt="Earth">300</div>
            <div class="right-menu-header-item"><img src="/main/icons/heart.png" alt="Earth">5</div>
        </div>
        <div class="right-menu-item-1">
            <div class="right-menu-item-1-1">
                <p>Unlock Leaderboards!</p>
            </div>
            <div class="right-menu-item-1-2">
                <img class="locked" src="/main/icons/lock.png" alt="">
                <p>Complete 10 more lessons to start competing!</p>
            </div>
        </div>
        <div class="right-menu-item-2">

            <div class="right-menu-item-2-1">
                <p>Daily Quests</p>
                <p>View All</p>
            </div>

            <div class="right-menu-item-2-2">
                <div class="lightning">
                    <img src="/main/icons/lightning.png" alt="">
                </div>

                <div class="right-menu-item-2-2-1">
                    <div>
                        <p>Earn 10 xp</p>
                    </div>
                    <div class='right-menu-item-2-2-2'>
                        <div class="progress-bar"></div>
                        <img class="treasure-chest" src="/main/icons/treasure-chest.png" alt="">
                    </div>
                </div>

            </div>

        </div>
        <div class="right-menu-item-3">
            <p>Create a profile to save your progress!</p>
            <button class="create-profile-button open-popup">CREATE A PROFILE</button>
            <button class="sign-in-button">SIGN IN</button>
        </div>`;
let mainHtmlRightProfile = `<div class="right-menu-item-1">
            <div class="right-menu-item-1-1">
                <p>Unlock Leaderboards!</p>
            </div>
            <div class="right-menu-item-1-2">
                <img class="locked" src="/main/icons/lock.png" alt="">
                <p>Complete 10 more lessons to start competing!</p>
            </div>
        </div>
        <div class="right-menu-item-2">

            <div class="right-menu-item-2-1">
                <p>Daily Quests</p>
                <p>View All</p>
            </div>

            <div class="right-menu-item-2-2">
                <div class="lightning">
                    <img src="/main/icons/lightning.png" alt="">
                </div>

                <div class="right-menu-item-2-2-1">
                    <div>
                        <p>Earn 10 xp</p>
                    </div>
                    <div class='right-menu-item-2-2-2'>
                        <div class="progress-bar"></div>
                        <img class="treasure-chest" src="/main/icons/treasure-chest.png" alt="">
                    </div>
                </div>

            </div>

        </div>`;
let leaderboardHtml = '';
let leaderboardHtmlRight = `<div class="right-menu-item-1">
        <div class="right-menu-item-1-1">
          <p>What is Leaderboards?</p>
        </div>
        <div class="right-menu-item-1-2">
          <p>Do quizes, complete daily missions, compete.</p>
        </div>
        <div class="right-menu-item-1-2">
          <p>
            Earn XP through lessons, then compete with players in a weekly
            leaderboard
          </p>
        </div>
      </div>`;
let missionHtmlCenter = `
    <div class="center-area-mission-1">
        <div class="center-area-mission-1-1">
            <p class="center-area-mission-1-1-1">Welcome!</p>
            <p class="center-area-mission-1-1-2">Complete quests to earn rewards! Quests refresh every day.</p>
        </div>
        <div class="center-area-mission-1-2">
            <img class="earthguysmile" src="/main/icons/earthguysmile.png" alt="">
        </div>
    </div>


    <div class="center-area-mission-2">
        <div class="center-area-mission-2-1">
            <p class="center-area-mission-2-1-1">Daily Quests</p>
            <p class="center-area-mission-2-1-2">13 Hours Left</p>
        </div>
        <div class='right-menu-item-2-2-2 center-area-mission-2-2'>
            <img src="/main/icons/lightning.png" alt="">
            <div class='center-area-mission-2-2-1'>
                <div class='center-area-mission-2-2-1-1'>
                    <p>Earn 10 XP</p>
                </div>
                <div class='center-area-mission-2-2-1-2'>
                    <div class="progress-bar">0 / 10</div>
                    <img class="treasure-chest" src="/main/icons/treasure-chest.png" alt="">
                </div>
            </div>
        </div>
    </div>


    <div class="center-area-mission-3">
        <img class="locked-mission" src="/main/icons/lock.png" alt="">
        <p class="center-area-mission-3-1">More quests unlock soon</p>
    </div>

`;
let missionHtmlRight = `<div class="right-menu-header">
            <div class="right-menu-header-item"><img src="/main/icons/earth.png" alt="Earth"></div>
            <div class="right-menu-header-item"><img src="/main/icons/tree.png" alt="Earth">0</div>
            <div class="right-menu-header-item"><img src="/main/icons/bee.png" alt="Earth">300</div>
            <div class="right-menu-header-item"><img src="/main/icons/heart.png" alt="Earth">5</div>
        </div>
        <div class="right-menu-item-1 missions">
                <p class="right-menu-item-1-1">Monthly challenges unlock soon!</p>
                <p class="missions2">Complete each month’s challenge to earn exclusive badges</p>
                <button class="start-mission-button">START A QUIZ</button>
        </div>
`;
let previousMenuSelection = null;

//DISPLAY THE CURRENT SELECTED TAB
function setMenuSelection(selection) {
    currentMenuSelection = selection;
    leftMenuItemSelector();
    console.log(currentMenuSelection)
    changeInnerHtml()
}
//QUIZ INFORMATION *************************NOT USED
let currentquizSelection = 1;
const quizSelection = {
    1: '.quiz-1-1',
    2: '.quiz-1-2',
    3: '.quiz-1-3',
    4: '.quiz-1-t',
    5: '.quiz-1-5',
    6: '.quiz-2-1',
    7: '.quiz-2-2',
    8: '.quiz-2-3',
    9: '.quiz-2-t',
    10: '.quiz-2-5',
};








///////////////REATTACH QUIZ EVENT
function quizEventListener1(){
    document.querySelector('.quiz-1-1-l').addEventListener('click', function(event) {
        startSound.play();
        event.preventDefault(); // Prevent default behavior if necessary
        document.body.classList.remove('fade-in')

        // Apply the fade-out effect
        document.body.classList.add('fade-out');

        // Wait for the fade-out transition to complete before navigating to the new page
        setTimeout(function() {
            // Load the new page
            window.location.href = '/lessons/lesson1-1/lesson1-1-intro.html'; // Replace with your target URL

            // After the page is loaded, apply fade-in effect
            document.body.classList.remove('fade-out');
            document.body.classList.add('fade-in');
        }, 2000); // Match the duration of the fade-out transition (in this case, 1s)
    });
}
function quizEventListener2(){
    document.querySelector('.quiz-1-2-l').addEventListener('click', function(event) {
        startSound.play();
        event.preventDefault(); // Prevent default behavior if necessary
        document.body.classList.remove('fade-in')

        // Apply the fade-out effect
        document.body.classList.add('fade-out');

        // Wait for the fade-out transition to complete before navigating to the new page
        setTimeout(function() {
            // Load the new page
            window.location.href = '/lessons/lessIon1-2/lesson1-2.html'; // Replace with your target URL

            // After the page is loaded, apply fade-in effect
            document.body.classList.remove('fade-out');
            document.body.classList.add('fade-in');
        }, 2000); // Match the duration of the fade-out transition (in this case, 1s)
    });
}







///////WHEN PAGE LOADS
window.onload = function() {
    //start timer for next free heart
    checkHeartTimer();

    if(!localStorage.getItem('globalHtmlCenter')){
        localStorage.setItem('globalHtmlCenter', '')
    }


    //////SET THE CURRENT HTML AS THE NEW UPDATED HTML
    if (localStorage.getItem('globalHtmlCenter')){
        document.querySelector('.center-area-global').innerHTML = localStorage.getItem('globalHtmlCenter');
    }



    // Add event listener for Lesson 2 button

    //FADE IN FOR SMOOTH TRANSITIONS
    document.body.classList.add('fade-in')

    //SET THE HEARTS AND BEES ACCURATELY
    showHearts();
    setBees();
    console.log(`THE USER HAS ${hearts} HEARTS`)
    console.log(`THE USER HAS ${bees} BEES`)

    //MAKE THE CURRENT TAB THE SELECTED TAB
    leftMenuItemSelector()

    //IF A PROFILE HAS BEEN STORED, DO NOT SHOW THE PROFILE LOGIN MENU ITEM
    if (storedProfile){
        document.querySelector('.right-menu').innerHTML = mainHtmlRightProfile;
    }


    //LESSONS ------------ VISUAL UPDATES && INTERACTIONS/

    //LESSONS
    function handleLesson(lessonNumber) {
        // Common function to add selected classes
        const addSelectedClasses = (lesson) => {
            const selectedDiv1 = document.querySelector(`.quiz-1-${lesson}-oc`);
            const selectedDiv2 = document.querySelector(`.quiz-1-${lesson}-ls`);
            const selectedDiv3 = document.querySelector(`.quiz-1-${lesson}-l`);
            selectedDiv1.classList.add('outer-circle-selected-complete');
            selectedDiv2.classList.add('lesson-button-selected-complete');
            selectedDiv3.classList.add('lesson-selected-complete');

            if(lesson > 1){
                document.querySelector(`.quiz-1-${lesson - 1}-oc`).classList.add('outer-circle-selected-complete-not-animated')
            }

            //SHOW THE NEXT LESSON
                switch (lesson) {
                    case 1:
                        document.querySelector(`.next-lesson-2`).classList.add(`start-here-display-none`);
                        document.querySelector(`.next-lesson-3`).classList.add(`start-here-display-none`);
                        break;

                    case 2:
                        document.querySelector(`.next-lesson-2`).classList.remove(`start-here-display-none`);
                        document.querySelector(`.start-here`).classList.add(`start-here-display-none`);
                        break;

                    case 3:
                        document.querySelector(`.next-lesson-2`).classList.add(`start-here-display-none`);
                        document.querySelector(`.next-lesson-3`).classList.remove(`start-here-display-none`);
                        break;

                    // Optional default case if needed
                    default:
                        console.log("Lesson not specified or out of range.");
                        break;
                }


            mainHtmlCenter = document.querySelector('.center-area-global').innerHTML;
        };


        // Common function to handle tree growth logic
        const growTree = (lesson) => {
            const treeIconKey = `tree${lesson}IconDisplayed`;
            if (!localStorage.getItem(treeIconKey)) {
                let tree = document.querySelector(`.quiz-1-${lesson}-l`);
                tree.innerHTML = `<img class="earth-button eb${lesson}" src="/main/icons/tree-for main lesson.png" alt="">`;
                const selectedDiv4 = document.querySelector(`.eb${lesson}`);
                selectedDiv4.classList.add('growing-tree', 'earth-button-selected-completed');



                setTimeout(() => {
                    selectedDiv4.classList.remove('growing-tree');
                    mainHtmlCenter = document.querySelector('.center-area-global').innerHTML;
                    updatedGlobalCenter = mainHtmlCenter;
                    localStorage.setItem('globalHtmlCenter', updatedGlobalCenter)
                }, 2500);
                mainHtmlCenter = document.querySelector('.center-area-global').innerHTML;

                treeGrowSounds();
                localStorage.setItem(treeIconKey, 'true');



            }

        };

        // Common function to add dotted line for the previous lesson
        const addDottedLine = (lesson) => {
            const firstLine = document.querySelector(`.quiz-1-${lesson}-oc`);
            firstLine.classList.add('dotted-line');

        };

        // Loop through lessons and apply changes
        for (let i = 1; i < lessonNumber; i++) {
            // Add dotted line for previous lessons
            addDottedLine(i);

            // Grow tree for previous lessons
            growTree(i);

            // Add selected classes for previous lessons
            addSelectedClasses(i);
        }

        // Add event listeners and transitions for the current lesson
        const currentLesson = lessonNumber;
        addSelectedClasses(currentLesson);

        document.querySelector(`.quiz-1-${currentLesson}-l`).addEventListener('click', function (event) {
            event.preventDefault();
            document.body.classList.remove('fade-in');
            startSound.play();

            // Apply the fade-out effect
            document.body.classList.add('fade-out');

            setTimeout(function () {
                // Load the new page
                window.location.href = `/lessons/lesson1-${currentLesson}/lesson1-${currentLesson}-intro.html`; // Target URL dynamic based on lesson
                document.body.classList.remove('fade-out');
                document.body.classList.add('fade-in');
            }, 2000);
        });
    }

    // Call handleLesson with the current lesson number
    handleLesson(lessonNumber);

    updatedGlobalCenter = mainHtmlCenter
};



// Helper function to add a new stylesheet link if it doesn’t exist
function addStylesheet(href) {
    const existingStylesheet = document.querySelector('.dynamic-css');
    if (!existingStylesheet) {
        const newStylesheet = document.createElement('link');
        newStylesheet.rel = 'stylesheet';
        newStylesheet.href = href;
        newStylesheet.classList.add('dynamic-css');
        document.head.appendChild(newStylesheet);
    }
}
