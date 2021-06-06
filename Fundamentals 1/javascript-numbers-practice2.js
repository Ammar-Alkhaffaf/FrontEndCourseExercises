// ------------------ linked to input tag
// let balance = document.getElementById("amount").value;

// --------------------------with prompt method
let balance = prompt("Please enter your balance:");
// let balance = 600;
const yearly_interest = 0.05;
let increase = balance * yearly_interest; // 600 * 0.05 = 30
console.log(increase);

// -------------------- linked to input tag
// let element = document.getElementById("years").value;

let m, y;
function calculating_balance(y) {
  for (m = 0; m < y; m++) {
    balance = +balance + balance * yearly_interest;
    console.log(balance);
    document.write(balance + " </br>");
  }
}

// calculating_balance(4);
// ---------- prompt method
calculating_balance(prompt("Please enter The period in Years"));

// ---------- input tag method
// calculating_balance();

// ----------------some explanation
// balance = balance + increase; // after 1 year  600 + (600 * 0.05) ==> 630
// console.log(balance);

// increase = increase + balance * yearly_interest;
// // after 2 years 600 + ( 630 * 0.05 ) + 30 = 661.50

// balance = balance + balance * yearly_interest;
// console.log(balance);

// after 3 years 600 + (661.50 * 0.05) + 61.50  = 694.575
