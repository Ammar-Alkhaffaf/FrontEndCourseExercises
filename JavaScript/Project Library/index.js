let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = function () {
    if (read === true) {
      return "It's read";
    } else {
      return "It's not read yet";
    }
  };
  this.info = function () {
    return (
      this.title +
      " by " +
      this.author +
      ", " +
      this.pages +
      " pages, " +
      this.read()
    );
  };
}

// -----------------------------------------------------------------------------using querySelectorAll
function addBookToLibrary() {
  // do stuff here

  let numberOfInputs = document.querySelectorAll(".inputBox").length;
  let inputValues = [];
  for (let i = 0; i < numberOfInputs; i++) {
    // debugger;
    let takingValue = document.querySelectorAll(".inputBox")[i].value;
    inputValues.push(takingValue);
    console.log(inputValues[i]);
  }
  console.log(inputValues);
  let newElement = document.createElement("div");
  newElement.innerText = inputValues;
  newElement.setAttribute("class", "newStyle");
  document.body.appendChild(newElement);
}

// let book1 = new Book(
//   inputValues[0],
//   inputValues[1],
//   inputValues[2],
//   inputValues[3]
// );
// ----------------------------------------------------------- Another way 😎😎😎

// document.querySelector("#button").addEventListener("click", addBookToLibrary);

// function addBookToLibrary() {
//   let numberOfInputs = document.querySelectorAll(".inputBox").length;
//   let inputValues = [];
//   for (let i = 0; i < numberOfInputs; i++) {
//     // debugger;
//     let takingValue = document.querySelectorAll(".inputBox")[i].value;
//     inputValues.push(takingValue);
//     console.log(inputValues[i]);
//   }
//   console.log(inputValues);
//   return inputValues;
// }

// let book1 = new Book(
//   inputValues[0],
//   inputValues[1],
//   inputValues[2],
//   inputValues[3]
// );
