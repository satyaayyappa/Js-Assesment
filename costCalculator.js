const transactions = [500, 200, 300, 400, 500];
const transactionFee = 3;
const interestRate = 0.01;

const totalAmount = transactions.reduce((acc, curr) => acc + curr, 0);

const interestFee = totalAmount * interestRate;

const totalCost = totalAmount + (transactions.length * transactionFee) + interestFee;

console.log(`Maria's total cost for the month is $${totalCost}`);
 