function convertToCelsius(fahren) {
  var celc;
  celc = ((fahren - 32) * 5) / 9;
  return celc;
}

function createMessage(fahren, celc) {
  if (celc > 87) {
    return fahren + "F" + " " + Math.round(celc) + " " + "Hot";
  } else if (celc > 65 && celc <= 86) {
    return fahren + "F" + " " + Math.round(celc) + " " + "warm";
  } else if (celc > 33 && celc <= 64) {
    return fahren + "F" + " " + Math.round(celc) + " " + "cold";
  } else {
    return fahren + "F" + " " + Math.round(celc) + " " + "very cold";
  }
}

function rand(limit) {
  return Math.round(Math.random() * limit);
}

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
