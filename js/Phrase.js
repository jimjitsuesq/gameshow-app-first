/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const phraseDiv = document.getElementById('phrase');
const letterList = phraseDiv.firstElementChild;
let matchedLetterList = []
class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
        this.phraseArray = [];
    }
    createPhraseArray(str) {
        for (let i = 0; i < str.length; i++) {
            this.phraseArray.push(str[i]);
        } return this.phraseArray;
    }
    addPhraseToDisplay() {
        this.createPhraseArray(game.activePhrase.phrase);
        game.activePhrase.phraseArray.forEach(letter => {
            const li = document.createElement('li');
            letterList.appendChild(li);
            if (letter === ' ') {
                li.classList.add('space');
                li.innerHTML = (" ");
            } else {
                li.outerHTML = (`<li class="hide letter ${letter}">${letter}</li>`);
            }
        })
    }
    checkLetter(letter, button) {
       if (letter === button.textContent) {
            matchedLetterList.push(letter);
            return true;
        };
        }
    showMatchedLetter(letter) {
        let matchedLetters = letterList.getElementsByClassName(`hide letter ${letter}`);
        for (let i = 0; i < matchedLetters.length; i++) {
            matchedLetters[i].className = "show";
        }
        return matchedLetters;
    }
}