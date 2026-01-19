const user_number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
function pyr(n) {
  if (n < 1 || n > 25) {
    return "Error"
  } else {
    console.log("Voici ta pyramide :");
    let count = 1;
    let pyramid = "#";
    while (count <= n) {
      let spacing = " ";
      let line = (`${spacing.repeat(n - count)}`) + (`${pyramid.repeat(count)}`);
      console.log(line);
      count += 1;
    }
  }
}
pyr(user_number);
//console.log(pyr(user_number))