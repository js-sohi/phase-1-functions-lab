function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs((start - destination) * 264);
}

function calculatesFarePrice(start, destination) {
  const free = 400;
  let totalfeettravelled = distanceTravelledInFeet(start, destination);
  if (totalfeettravelled <= free) return 0;
  else if (totalfeettravelled > free && totalfeettravelled < 2000)
    return (totalfeettravelled - 400) * 0.02;
  else if (totalfeettravelled >= 2000 && totalfeettravelled < 2500) return 25;
  else totalfeettravelled > 2500;
  return "cannot travel that far";
}
