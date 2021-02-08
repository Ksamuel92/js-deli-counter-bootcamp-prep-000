function takeANumber (katzDeliLine, name) {
  for (let i=0; i <= katzDeliLine.length; i++){
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}
}

function nowServing (katzDeliLine) {
 var firstPersonInLine = katzDeliLine.shift();
 if (firstPersonInLine === undefined) {
   return "There is nobody waiting to be served!";
 }
 return `Currently serving ${firstPersonInLine}.`;
}

function currentLine (katzDeliLine) {
var lineCount = katzDeliLine.slice(0, katzDeliLine.length - 1);
  for (let i = 0; i < lineCount.length; i++){
    return `The line is currently:${i+1}. ${lineCount}`;}
  if (lineCount === undefined) {
    return "The line is currently empty.";
  }
}