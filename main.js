function capitalize(str) {
  return str.toUpperCase()
}

function exclaim(str) {
  return str + '!'
  
  
}

function firstCharacter(str) {
  return str[0];
}

function lastCharacter(str) {
  let last=str.length-1;
  return str[last];


}

function oneCharacter(str,num) {
  return str[num]


}

function twoCharacters(str,num1,num2) {
  return str[num1]+str[num2]
}

function initials(str) {
let first= firstCharacter(str)
let space= str.indexOf(' ')
return first+'.' + str[space+1] +'.'
}

function yeller(str) {
  let yell = capitalize(str)+ '!!!'
  return yell
}


module.exports = {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  initials,
  yeller,
};