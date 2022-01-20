console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1 = document.getElementById("node1");
node1.textContent = "This is what html looks like <span>Span Text</span>";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName("node2")[0];
node2.innerText =
  "I used the getElementByClassName('node2') method to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let node3Collection = document.getElementsByTagName("h3");
for (let index = 0; index < node3Collection.length; index++) {
  node3Collection[
    index
  ].textContent = `I used the getElementByTagName('h3') method to access all of these`;
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let newP = document.createElement("p");
newP.textContent = "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method
let parent2 = document.getElementById("parent");
parent2.appendChild(newP);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let newA = document.createElement("a");
newA.textContent = "I am a <a> tag";
// BONUS: Add a link href to the <a>
newA.href = "https://truecoders.io";
newA.target = "_blank";
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent2.insertBefore(newA, newP);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let parent3 = document.getElementById("exercise-container3");
let newerP = document.createElement("a");
newerP.textContent = "New Child Node";
let refChild = document.getElementById("N1");
parent3.replaceChild(newerP, refChild);
// TODO: Remove the "New Child Node"
setTimeout(() => parent3.removeChild(newerP), 5000);

/*----------- Exercise #4: ANIMATIONS ----------- */
// TODO: Write your JavaScript here to make the red box go from left to right
// let interval = setInterval(animate, 10);
let box = document.getElementById("box");
let container = document.getElementById("container");
let posX = 0;
let posY = 0;
let isX = true;
let dir = 1;

function animate() {
  // What axis am I moving on
  // What direction
  if (isX) {
    moveX();
  } else {
    moveY();
  }

  // Determines movement on X axis
  function moveX() {
    posX += dir;
    box.style.left = posX + "px";
    if (posX >= container.clientWidth - box.clientWidth) {
      isX = false;
    } else if (posX == 0) {
      isX = false;
    }
  }

  // Determines movement on Y axis
  function moveY() {
    posY += dir;
    box.style.top = posY + "px";
    if (posY >= container.clientHeight - box.clientHeight) {
      isX = true;
      dir = -1;
    } else if (posY == 0) {
      isX = true;
      dir = 1;
    }
  }
}

// BONUS - Make the red box go all the way around the perimeter of the green box

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show"
function show() {
  document.getElementById("btn").removeEventListener("click", show);
  //   Creates the modal backdrop
  let backdrop = document.createElement("div");
  backdrop.id = "modal";
  // creates a new div with an alerting message to the user with this message
  let div = document.createElement("div");
  // -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
  // Add a paragraph for alert text
  let p = document.createElement("p");
  p.textContent =
    "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
  div.appendChild(p);
  // Add a close
  let btn = document.createElement("button");
  btn.textContent = "Close";
  btn.onclick = close;
  div.appendChild(btn);
  // Add class styling to make it a "modal"
  div.classList.add("modal-card");
  //   Append the modal card to the backdrop
  backdrop.appendChild(div);
  // Append the backdrop to the main element
  document.getElementById("root").appendChild(backdrop);

  // Function that closes the modal (removes from the dom)
  function close() {
    document.getElementById("root").removeChild(backdrop);
    document.getElementById("btn").addEventListener("click", show);
  }
}

// This div should be a 'modal' that covers the main content on the screen when the button is clicked
document.getElementById("btn").addEventListener("click", show);
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

let guessBtn = document.getElementById("guessBtn");
guessBtn.addEventListener("click", () => {
  let value = document.getElementById("guess").value;
  alert(value);
});
