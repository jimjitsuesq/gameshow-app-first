const overlay = document.getElementById("overlay");
const phrases = [
  "A Good Man is Hard to Find",
  "This Too Shall Pass",
  "Ignorance is Bliss",
  "A Stitch in Time Saves Nine",
  "You Live What You Learn",
];
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases(phrases);
    this.activePhrase = null;
  }
  createPhrases(arr) {
    const Phrases = [];
    arr.forEach((phrase) => Phrases.push(new Phrase(phrase)));
    return Phrases;
  }

  /**
   * Selects a phrase from the phrases array at random and uses it to create
   * a new Phrase object.
   */
  getRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNumber];
  }
  /**
   * Calls the getRandomPhrase function and assigns the result to the
   * activePhrase variable. Hides the overlay to display the game board.
   */
  startGame() {
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  /**
   * Takes the key and uses the checkLetter function to find any matches
   * between the key and each entry in the phraseArray array contained in
   * the Phrase object. If the key matches at least once, the key is assigned
   * the "chosen" class, the letter is added to the matchedLetterList,
   * and checkForWin is called. If there are no matches, the key is assigned
   * the "wrong" class and the removeLife function is called.
   * @param {Object} key The key clicked on the onscreen keyboard sent from
   * the event listener that called this function.
   */
  handleInteraction(key) {
    let matchCount = 0;
    key.disabled = true;
    game.activePhrase.phraseArray.forEach((letter) => {
      if (game.activePhrase.checkLetter(letter, key)) {
        game.activePhrase.showMatchedLetter(letter);
        matchedLetterList.push(letter);
        matchCount++;
      }
    });
    if (matchCount > 0) {
      key.classList.add("chosen");
      this.checkForWin();
    } else {
      key.classList.add("wrong");
      this.removeLife();
    }
    if (this.checkForWin()) {
      this.gameOver("win");
    }
  }
  /**
   * Selects the first liveHeart on the scoreboard and changes the image to a
   * lostHeart. Increments the missed variable and checks to see if there are
   * 5 "misses". If so, the gameOver function is called.
   */
  removeLife() {
    const liveHeart = document.querySelector("img[src='images/liveHeart.png']");
    liveHeart.setAttribute("src", "images/lostHeart.png");
    this.missed++;
    if (this.missed === 5) {
      this.gameOver();
    }
  }
  /**
   * Creates a noSpacesArray array to compare with the matchedLetterList and
   * checks to see if the length is the same as the array containing all
   * matched letters.
   */
  checkForWin() {
    const noSpacesArray = game.activePhrase.phraseArray.filter(
      (character) => character !== " "
    );
    return matchedLetterList.length === noSpacesArray.length;
  }
  /**
   * Hides the game board by revealing the overlay. Modifies the game-over
   * message, depending on the result, and resets the game board for another
   * game.
   * @param {String} result Passes the "win" string, if sent from the
   * checkForWin function.
   */
  gameOver(result) {
    const gameOverMessage = document.getElementById("game-over-message");
    overlay.style.display = "block";
    if (result === "win") {
      overlay.className = "win";
      gameOverMessage.innerHTML = "Congratulations! You win!";
    } else {
      overlay.className = "lose";
      gameOverMessage.innerHTML = "You lost. :( Try again!";
    }
    /**
     * Clears the Phrase ul of all li, resets all class names, scoreboard
     * display and running variables.
     */
    while (letterList.firstChild) {
      letterList.removeChild(letterList.firstChild);
    }
    matchedLetterList = [];
    game.missed = 0;
    for (let i = 0; i < keyButtons.length; i++) {
      keyButtons[i].className = "key";
      keyButtons[i].disabled = false;
    }
    const scoreboard = document.getElementById("scoreboard");
    const hearts = scoreboard.getElementsByTagName("IMG");
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].setAttribute("src", "images/liveHeart.png");
    }
  }
}
