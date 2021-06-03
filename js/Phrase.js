/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const phraseDiv = document.getElementById('phrase');
const letterList = phraseDiv.firstElementChild;
let matchedLetterList = [];

class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
        this.phraseArray = [];
    }
    /**
     * Creates an array containing a separate item for each letter in the
     * phrase for use in displaying the phrase and comparing each key pressed.
     * @param {String} str The phrase string used to create the array.
     */
    createPhraseArray(str) {
        for (let i = 0; i < str.length; i++) {
            this.phraseArray.push(str[i]);
        } 
    }
    /**
     * Calls the createPhraseArray function to create the phraseArray. Creates
     * a separate li for each letter and appends it to the letterList ul. If
     * the li is a letter, the class "hide letter ${letter}" is assigned. If
     * the li is a blank space, the class "space" is assigned.
     */
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
    /**
     * Compares the letter to the key. If they match, the letter is added to 
     * the matchedLetterList and the function returns "true".
     * @param {String} letter From the phrase array
     * @param {Object} key From the event listener added to the onscreen keys
     * @returns {Boolean}
     */
    checkLetter(letter, key) {
       if (letter === key.textContent) {
            matchedLetterList.push(letter);
            return true;
        };
    }
    /**
     * Retrieves all li elements that match the letter and shows them by 
     * changing their class names to "show"
     * @param {String} letter The letter from phraseArray to show 
     */
    showMatchedLetter(letter) {
        let matchedLetters = letterList.getElementsByClassName(`hide letter ${letter}`);
        for (let i = 0; i < matchedLetters.length; i++) {
            matchedLetters[i].className = "show";
        }
    }
}