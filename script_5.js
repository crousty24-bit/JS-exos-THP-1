const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Have all books been rented at least once ?")
let rented = books.filter(function(n){
  if (n.rented >= 1) {
    console.log("Yes !")
  }
});

console.log("What's the most rented book of the list ?")
let mostRented = books.reduce(function(a, b){
  if (a.rented > b.rented) {
    return a
  } else {
    return b
  } 
},);
console.log(`The most rented book is "${mostRented.title}" : rented ${mostRented.rented} times !`)

console.log("What's the least rented book of the list ?")
let leastRented = books.reduce(function(a, b){
  if (a.rented < b.rented){
    return a
  } else {
    return b
  } 
},);
console.log(`The least rented book is "${leastRented.title}" : rented ${leastRented.rented} times !`)

console.log("Find book ID: 873495")
let findBook = books.find(item => item.id === 873495);
console.log(`It's : ${findBook.title}`)

console.log("Delete book ID: 133712")
let index = books.findIndex(item => item.id === 133712);
if (index !== 1) {
  let removeBook = books.splice(index, 1);
  console.log(`Removed book :  "${removeBook[0].title}"`)
}

console.log("List of books by alphabetical order :")
let order = books.slice().sort(function(a, b) {
  return a.title.localeCompare(b.title) 
});
let newOrder = order.map(function(n){
  return `${n.title}`
})
console.log(newOrder)
