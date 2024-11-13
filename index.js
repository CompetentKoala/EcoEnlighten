const starsContainer = document.querySelector('.stars');

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

//button site change
function getStartedButton() {
    
    document.getElementById('getStarted').innerHTML =`<div class="loader"></div>`;
    setTimeout(function(){

        console.log("BTN PRESSED");
        window.location.href = '/Questions/Q2.html';
    },1600);

}




//change language
function changeLanguage() {
    const selectedLanguage = document.getElementById("language-dropdown").value;
    // Placeholder logic: Implement language switching here
    console.log("Language selected:", selectedLanguage);
    // Additional code to handle language change can go here
}
