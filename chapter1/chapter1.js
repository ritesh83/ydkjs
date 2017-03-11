/*
 • Write a program to calculate the total price of your phone purchase.
   You will keep purchasing phones (hint: loop!) until you run out of money in your bank account.
   You’ll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
 • After you’ve calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
 • Finally, check the amount against your bank account balance to see if you can afford it or not.
 • You should set up some constants for the “tax rate,” “phone price,” “accessory price,” and “spending threshold,”
   as well as a variable for your “bank account balance.”
 • You should define functions for calculating the tax and for formatting the price with a “$” and rounding to two decimal places.
 • Bonus Challenge: Try to incorporate input into this program, perhaps with a prompt(..).
   You may prompt the user for their bank account balance, for example.
 */

const TAX_RATE = 0.09;
const PHONE_PRICE = 500;
const ACCESSORY_PRICE = 50;
const SPENDING_THRESHOLD = 5000;

let bank_balance = 10000;
let total_phones_bought = 0;
let total_accessories_bought = 0;
let amount_spent = 0;

function calculateTotalPrice(amount_spent) {
    while (bank_balance > 0) {
        amount_spent += PHONE_PRICE;
        bank_balance -= PHONE_PRICE;

        if (amount_spent < SPENDING_THRESHOLD) {
            amount_spent += ACCESSORY_PRICE;
            total_accessories_bought++;
        }

        total_phones_bought++;
    }

    return amount_spent;
}

function addTax(amount) {
    return amount + (TAX_RATE * amount);
}

function printFormattedAmount(amount) {
    console.log('Total Purchase Amount: $' + amount.toFixed(2));
}

let total_phone_purchase = calculateTotalPrice(amount_spent);

total_phone_purchase = addTax(total_phone_purchase);

printFormattedAmount(total_phone_purchase);

//console.log(total_phones_bought);
//console.log(total_accessories_bought);
