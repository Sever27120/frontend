function squareItUp(startingNumber) {

  // Conditions d'arrêt, saisie invalide
  if ((typeof startingNumber != 'number') || (startingNumber <= 1)) {
  return - 1
  }

  square = staringNumber * startingNumber;

  //Condition de base
  if (square > 1000000) {
    return square; // Retourne la valeur finale
    } else { // Si la condition de base n'est pas remplie, recommencer.
    return squareItUp(square);
  }
  
}