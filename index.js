// Write your code in this file!

function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  }

  if ((distance > 2000) && (distance < 2500)) {
    return "I will gladly take your thirty bucks.";
  }

  if (distance > 2500) {
    return "No can do.";
  }
}

scuberGreetingForFeet(2001);


function ternaryCheckCity(destination) {
  console.log("== ternaryCheckCity ==");
  destination === "NYC"
  ? 'Ok, sounds good.'
  : 'No go.';
}

ternaryCheckCity ("NYC")
