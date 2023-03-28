function squareItUp(startingNumber) {
  square = startingNumber * startingNumber;

  if (square > 1000000) {
    return square;
  } else {
    return squareItUp(square);
  }
}