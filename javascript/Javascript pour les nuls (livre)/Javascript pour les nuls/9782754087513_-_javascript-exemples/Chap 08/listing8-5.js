var sandwich = {
meat:"",
cheese:"",
bread:"",
condiment:"",
makeSandwich: function (meat,cheese,bread,condiment) {
  sandwich.meat = meat;
  sandwich.cheese = cheese;
  sandwich.bread = bread;
  sandwich.condiment = condiment;
  var mySandwich = sandwich.bread + ", " + sandwich.meat + ", " + sandwich.cheese + ", " + sandwich.condiment;
  return mySandwich;
}
}