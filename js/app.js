let game;
const startButton = document.getElementById("btn__reset");
const keyBoard = document.getElementById("qwerty");
const keyButtons = keyBoard.getElementsByTagName("BUTTON");

/**
 * Listens to the startButton and initializes a new Game instance  when clicked
 */
startButton.addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

/**
 * Adds an id attribute to each of the on-screen keyboard keys to allow for
 * their selection by the event listener for the physical keyboard
 * @param {Array} arr
 */
function idScreenKeys(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].setAttribute("id", `${arr[i].textContent}`);
  }
}
idScreenKeys(keyButtons);

/**
 * Simulates clicks on the onscreen keyboard when a letter is pressed on the
 * physical keyboard. First checks to make sure that the key pressed is an
 * alphabet key.
 */
function simulateClick() {
  document.addEventListener("keyup", (e) => {
    let regex = /^[A-Za-z]\b/;
    if (regex.test(e.key)) {
      const keyPressed = e.key.toLowerCase();
      const keyToPress = document.getElementById(`${keyPressed}`);
      let event = new MouseEvent("click");
      keyToPress.dispatchEvent(event);
    }
  });
}
simulateClick();

/**
 * Listens to the onscreen keyboard for clicks and after a key is clicked
 * invokes the handleInteraction function
 */
function listenToScreenKeys(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", (e) => {
      game.handleInteraction(e.target);
    });
  }
}
listenToScreenKeys(keyButtons);
