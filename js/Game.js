/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = document.getElementById('overlay');
let noSpacesArray = [];
class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [
            /* 'A Good Man is Hard to Find',
            'This Too Shall Pass',
            'Ignorance is Bliss',
            'A Stitch in Time Saves Nine',
            'A Problem Shared is a Problem Halved' */
            'A',
            'B',
            'C',
            'D',
            'E',
        ];
        this.activePhrase = null;
    }
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = new Phrase(this.phrases[randomNumber]);
        return randomPhrase;
    }
    startGame() {
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        noSpacesArray = game.activePhrase.phraseArray.filter(character => character !== " ");
    }
    handleInteraction(button) {
        let matchCount = 0;
        console.log(button);
        button.disabled = true;
        game.activePhrase.phraseArray.forEach(letter => {
            if (game.activePhrase.checkLetter(letter, button)) {
            game.activePhrase.showMatchedLetter(letter);
            matchCount ++;
            }
        });
        if (matchCount > 0) {
            button.classList.add('chosen');
            this.checkForWin();
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }
    removeLife() {
        const liveHeart = document.querySelector("img[src='images/liveHeart.png']");
        liveHeart.setAttribute('src', 'images/lostHeart.png');
        this.missed++;
        if (this.missed === 5) {
            this.gameOver();
        }
    }
    checkForWin() {
        if (matchedLetterList.length === noSpacesArray.length) {
            this.gameOver('win');
        }
    }
    gameOver(result) {
        const gameOverMessage = document.getElementById('game-over-message');
        overlay.style.display = 'block';
        console.log('Game Over');
        if (result === 'win') {
            overlay.className = 'win';
            gameOverMessage.innerHTML = "Congratuations! You win!"
        } else {
            overlay.className = 'lose';
            gameOverMessage.innerHTML = " :( Too bad.  Try again!"
        }
        while (letterList.firstChild) {
            letterList.removeChild(letterList.firstChild)
        }
        matchedLetterList = [];
        game.missed = 0;
        for (let i = 0; i < keyButtons.length; i++) {
            keyButtons[i].className = 'key';
            keyButtons[i].disabled = false;
        }
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].setAttribute('src', 'images/liveHeart.png')
        }
    }
}