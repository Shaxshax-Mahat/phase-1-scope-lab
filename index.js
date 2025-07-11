// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob'; // no var/let/const => creates global variable (bad practice, but intentional here)
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Karen';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Not Karen'; // This will throw an error
}



