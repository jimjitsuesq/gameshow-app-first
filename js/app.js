/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();
const main = document.querySelector('body');
const startButton = document.getElementById('btn__reset');
const keyBoard = document.getElementById('qwerty');
const keyButtons = keyBoard.getElementsByTagName('BUTTON');
const scoreboard = document.getElementById('scoreboard');
const hearts = scoreboard.getElementsByTagName('IMG');

startButton.addEventListener('click', function() {
    game.startGame();
});


function idScreenKeys(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].setAttribute('id', `${arr[i].textContent}`)
    }
}
idScreenKeys(keyButtons);

function simulateClick () {
    document.addEventListener('keyup', (e) => {
        let regex = /^[A-Za-z]\b/
        if (regex.test(e.key)) {
            const keyToPress = document.getElementById(`${e.key}`);
            let event = new MouseEvent('click');
            keyToPress.dispatchEvent(event);
        }
    });
}
simulateClick();
function listenToScreenKeys (arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener('click', (e) => {
            game.handleInteraction(e.target);
        });
    }
}
listenToScreenKeys(keyButtons);