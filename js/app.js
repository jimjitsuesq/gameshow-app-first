/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();
const startButton = document.getElementById('btn__reset');
const keyBoard = document.getElementById('qwerty');
const keyButtons = keyBoard.getElementsByTagName('BUTTON');
const scoreboard = document.getElementById('scoreboard');
const hearts = scoreboard.getElementsByTagName('IMG');

startButton.addEventListener('click', function() {
    game.startGame();
});

function listenToKeys (arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener('click', (e) => {
            game.handleInteraction(e.target);
    });
    }
}
listenToKeys(keyButtons);