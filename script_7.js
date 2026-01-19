const userInput = prompt("Hello, comment je peux t'aider ?")

const questionRegex = /\?$/; //check if '?' & is at the end with '$'
const capitalRegex = /^[A-Z0-9\s\W]+$/; //^[]$ start & end ; \s empty or spaces ; \W any special charac but letters & digits
const gameRegex = /Fortnite/i; //flag i = not case sensible
const emptyRegex = /^\s*$/; //check for empty OR spaces

function chatBot(u) {
  if (questionRegex.test(u)){
    return 'ChatBot dit : Ouais, ouais...'
  } else if (emptyRegex.test(u)){
    return 'ChatBot dit : tu es en PLS ?'
  } else if (capitalRegex.test(u)){
    return 'ChatBot dit : Pwa, calme-toi...'
  } else if (gameRegex.test(u)){
    return 'ChatBot dit : on sfait une partie soum-soum ?'
  } else {
    return 'ChatBot dit : balek'
  }
}
console.log(chatBot(userInput))
