
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
//SET PLANTED TREE COUNT
if (localStorage.getItem('plantedTreeCount') === null) {
    localStorage.setItem('plantedTreeCount', 0);
}

///////LESSON NUMBER / HEARTS / BEES --- AS AN INTIGER
let lessonNumber = parseInt(localStorage.getItem('lessonNumber'), 10);
let hearts = parseInt(localStorage.getItem('hearts')) || 0; // Default to 0 if hearts is not set
let bees = parseInt(localStorage.getItem('bees'), 10);
let plantedTreeCount = localStorage.getItem('plantedTreeCount');

//DISPALY HEARTS AND BEES
function showHearts(){
    let hearts = localStorage.getItem('hearts')
    hearts = hearts ? parseInt(hearts, 10) : 0;
    document.querySelector('#hearts').innerHTML =  `<img id='hearts' class='hearts' src="/main/icons/heart.png" alt="Hearts">${hearts}`
}
function setBees(){
    let bees= localStorage.getItem('bees')
    bees = bees ? parseInt(bees, 10) : 0;
    document.querySelector('#bees').innerHTML =  `<img src="/main/icons/bee.png" alt="Bees">${bees}`
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
    console.log('tree sounds?')
    waterSound.play();
    setTimeout(() => {
        treeGrowthSound.play();
        treeGrowthSound.play();
        treeGrowthSound.play();
    }, 1000);
    setTimeout(() => {
        popSound.play();
    }, 3500);
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
    console.log(`THE CURRENT MENU SELECTION IS :${currentMenuSelection}`)
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



//////////////PLANT A TREE
function checkAndPlantTree() {
    console.log(' PLANT TREE CHECK PART 1');
    const plantTree = document.querySelector('.plant-tree-1');
    if (plantTree) {
        console.log(' PLANT TREE CHECK PART 2');
        plantTree.addEventListener('click', function() {
            if (!localStorage.getItem('treeIconDisplayed')) {
                console.log(' PLANT CHECK PART 3');
                plantTree.classList.add('plant-tree-1-clicked');
                treeGrowSounds();

                let tree = document.querySelector('.quiz-1-1-ls');
                console.log(tree);
                tree.innerHTML = `<img class="earth-button eb1" src="/main/icons/tree-for main lesson.png" alt="">`;
                const selectedDiv4 = document.querySelector('.eb1');
                selectedDiv4.classList.add('growing-tree');
                selectedDiv4.classList.add('earth-button-selected-completed');

                setTimeout(() => {
                    selectedDiv4.classList.remove('growing-tree');
                    localStorage.setItem('globalHtmlCenter', document.querySelector('.center-area-global').innerHTML);
                }, 2500);

                localStorage.setItem('treeIconDisplayed', 'true');
            }
        });
    }
}



///////WHEN PAGE LOADS
window.onload = function() {
    // Set the current HTML as the new updated HTML if available
    if (localStorage.getItem('globalHtmlCenter')) {
        document.querySelector('.center-area-global').innerHTML = localStorage.getItem('globalHtmlCenter');
    }

    // Smooth transition
    document.body.classList.add('fade-in');

    // Set hearts and bees accurately
    showHearts();
    setBees();

    // Set the selected tab
    leftMenuItemSelector();

    // If a profile has been stored, do not show the profile login menu item
    if (storedProfile) {
        document.querySelector('.right-menu').innerHTML = mainHtmlRightProfile;
    }

    // Lesson 1 setup
    if (lessonNumber >= 1) {
        // Select and style the button if this lesson is next
        document.querySelector('.quiz-1-1-oc').classList.add('outer-circle-selected-complete');
        document.querySelector('.quiz-1-1-ls').classList.add('lesson-button-selected-complete');
        document.querySelector('.quiz-1-1-l').classList.add('lesson-selected-complete');

        // Add event listener for Lesson 1 button
        document.querySelector('.quiz-1-1-l').addEventListener('click', function(event) {
            event.preventDefault();
            startSound.play();
            document.body.classList.add('fade-out');

            setTimeout(function() {
                window.location.href = '/lessons/lesson1-1/lesson1-1-intro.html';
            }, 2000);
        });
    }

    // Lesson 2 setup
    if (lessonNumber >= 2) {
        // Hide start button
        document.getElementsByClassName('start-here')[0].classList.add('start-here-display-none');

        let currentCount = parseInt(localStorage.getItem('plantedTreeCount')) || 0;
        if (currentCount < 1) {
            currentCount += 1;
            localStorage.setItem('plantedTreeCount', currentCount);
        }

        // Display plant tree button if it's the first tree
        if (currentCount === 1) {
            console.log(`THE CURRENT TREE COUNT IS: ${currentCount}`);
            const PlantTreeButton = document.querySelector('.quiz-1-1-oc');
            PlantTreeButton.innerHTML = `
                <div class="plant-tree-1" id="plantTree">Click Here to Plant Your First Tree!</div>
                <div class="lesson-button quiz-1-1-ls lesson-button-selected-complete">
                    <button class="lesson quiz-1-1-l lesson-selected-complete"></button>
                </div>`;
            checkAndPlantTree();
        }

        // Add styles and listeners for Lesson 2 button
        document.querySelector('.quiz-1-2-oc').classList.add('outer-circle-selected-complete');
        document.querySelector('.quiz-1-2-ls').classList.add('lesson-button-selected-complete');
        document.querySelector('.quiz-1-2-l').classList.add('lesson-selected-complete');

        // Update global HTML center
        mainHtmlCenter = document.querySelector('.center-area-global').innerHTML;
        localStorage.setItem('globalHtmlCenter', mainHtmlCenter);

        // Add event listener for Lesson 2 button
        document.querySelector('.quiz-1-2-l').addEventListener('click', function(event) {
            event.preventDefault();
            startSound.play();
            document.body.classList.add('fade-out');

            setTimeout(function() {
                window.location.href = '/lessons/lesson1-2/lesson1-2.html';
            }, 2000);
        });
    }

    if(lessonNumber >= 3){

        //GROW TREE ON PREVIOUS LESSON
        // Check if the tree icon has been displayed before
        const PlantTreeButton = document.querySelector(`.quiz-1-${plantedTreeCount}-oc`)
        PlantTreeButton.innerHTML = `<div class="plant-tree-${plantedTreeCount}" id='plantTree'>Click Here to Plant Your First Tree!</div>
                <div class="lesson-button quiz-1-${plantedTreeCount}-ls">
                    <button class="lesson quiz-1-${plantedTreeCount}-l></button>
                </div>`
                checkAndPlantTree()



        //SELECT THE BUTTON AND CHANGE IT IF THE LESSON IS NEXT
        const firstLine =document.querySelector('.quiz-1-2-oc',)
        firstLine.classList.add('dotted-line')

        const selectedDiv1 = document.querySelector('.quiz-1-3-oc')
        const selectedDiv2 = document.querySelector('.quiz-1-3-ls')
        const selectedDiv3 = document.querySelector('.quiz-1-3-l',)
        selectedDiv1.classList.add('outer-circle-selected-complete')
        selectedDiv2.classList.add('lesson-button-selected-complete')
        selectedDiv3.classList.add('lesson-selected-complete')

        //UPDATE GLOBAL HTML CENTER BASED ON LESSON NUMBER
        mainHtmlCenter = document.querySelector('.center-area-global').innerHTML

        //ADD EVENT LISTENERS FOR BUTTON 2
        document.querySelector('.quiz-1-3-l').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior if necessary
            document.body.classList.remove('fade-in')
            startSound.play();
            // Apply the fade-out effect
            document.body.classList.add('fade-out');

            // Wait for the fade-out transition to complete before navigating to the new page
            setTimeout(function() {
                // Load the new page
                window.location.href = '/lessons/lession1-2/lesson1-2.html'; // Replace with your target URL

                // After the page is loaded, apply fade-in effect
                document.body.classList.remove('fade-out');
                document.body.classList.add('fade-in');
            }, 2000); // Match the duration of the fade-out transition (in this case, 1s)
        });
    }
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
