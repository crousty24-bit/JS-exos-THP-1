const codonMap = {
  "UCU": "Sérine", "UCC": "Sérine", "UCA": "Sérine", "UCG": "Sérine", "AGU": "Sérine", "AGC": "Sérine",
  "CCU": "Proline", "CCC": "Proline", "CCA": "Proline", "CCG": "Proline",
  "UUA": "Leucine", "UUG": "Leucine",
  "UUU": "Phénylalanine", "UUC": "Phénylalanine",
  "CGU": "Arginine", "CGC": "Arginine", "CGA": "Arginine", "CGG": "Arginine", "AGA": "Arginine", "AGG": "Arginine",
  "UAU": "Tyrosine", "UAC": "Tyrosine"
};

function getCodons(arn) {
  const codons = [];
  for (let i = 0; i < arn.length; i += 3) {
    codons.push(arn.slice(i, i + 3));
  }
  return codons;
}

function translateRNA(arn) {
  const codons = getCodons(arn);
  const aminoAcids = codons.map(codon => codonMap[codon]);
  return aminoAcids.join("-");
}

const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";

console.log(translateRNA(arn1));
console.log(translateRNA(arn2));



