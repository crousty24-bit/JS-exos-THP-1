const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
//console.log(entrepreneurs)

// find entrepreneurs born in the 70's :
console.log("List of entrepreneurs born in the 70's :")
let bornIn70s = entrepreneurs.filter(function(e){
  return (e.year >= 1970 && e.year <= 1979) // return True = new array of entrepreneurs in 70's
});
let namesIn70s = bornIn70s.map(function(n){
  return `${n.first} ` + `${n.last}`
});
console.log(namesIn70s)

// array of first & last names :
console.log("List of all entrepreneurs names :")
let names = entrepreneurs.map(function(n){
  return `${n.first} ` + `${n.last}` // return new array w/ first name & last name
});
console.log(names)

// current age of entrepreneurs :
console.log("List of all entrepreneur's age in 2026 :")
let age = entrepreneurs.map(function(a){
  return `${a.first} ` + `${a.last} ` + `is ${(2026 - a.year)} years old`
});
console.log(age)

// entrepreneurs by alphabetical order :
console.log("List of all entrepreneurs in alphabetical order (by last name) :")
let order = entrepreneurs.slice().sort(function(a, b) { // .sort elements of an array 'in place' = modify original array! -> use slice() to create a 'copy'
  return a.last.localeCompare(b.last) // str method to sort letters
});
let newOrder = order.map(function(n){
  return `${n.first} ` + `${n.last}`
});
console.log(newOrder)