const numRows = 5;

// Nested loop to construct the pattern
for (let i = 1; i <= numRows; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}