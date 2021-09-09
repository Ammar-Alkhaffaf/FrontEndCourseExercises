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

// --------------------------------------------------------------------------- selecting with querySelector
// document.querySelector("button").addEventListener("click", function () {
//   let bookTitle = document.querySelector("#title").value;
//   let bookAuthor = document.querySelector("#author").value;
//   let testBooks = [];
//   testBooks = document.querySelectorAll("input").value;
//   console.log(bookTitle, bookAuthor, testBooks);
// });

// -----------------------------------------------------------------------------using querySelectorAll
// function addBookToLibrary() {
//   // do stuff here

//   document.querySelector("button").addEventListener("click", function () {
//     let numberOfInputs = document.querySelectorAll(".inputBox").length;
//     let inputValues = [];
//     for (let i = 0; i < numberOfInputs; i++) {
//       // debugger;
//       let takingValue = document.querySelectorAll(".inputBox")[i].value;
//       inputValues.push(takingValue);
//       console.log(inputValues[i]);
//     }
//     console.log(inputValues);
//   });
// }

// let book1 = new Book(
//   inputValues[0],
//   inputValues[1],
//   inputValues[2],
//   inputValues[3]
// );
// ----------------------------------------------------------- Another way 😎😎😎

document.querySelector("button").addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
  let numberOfInputs = document.querySelectorAll(".inputBox").length;
  let inputValues = [];
  for (let i = 0; i < numberOfInputs; i++) {
    // debugger;
    let takingValue = document.querySelectorAll(".inputBox")[i].value;
    inputValues.push(takingValue);
    console.log(inputValues[i]);
  }
  console.log(inputValues);
  return inputValues;
}

// let book1 = new Book(
//   inputValues[0],
//   inputValues[1],
//   inputValues[2],
//   inputValues[3]
// );
