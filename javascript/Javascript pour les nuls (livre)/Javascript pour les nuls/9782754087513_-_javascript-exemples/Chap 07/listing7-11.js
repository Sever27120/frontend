function squareItUp(startingNumber) {
  square = startingNumber * startingNumber;
  console.log(square);
  squareItUp(square);
}