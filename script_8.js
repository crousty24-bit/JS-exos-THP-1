import {users} from "./module/users.js"

console.log("What's the average revenue per users ?")
let average = users.reduce((sum, current) => sum + current.revenue, 0) / users.length;
console.log(`${Math.round(average)} is the average revenue`)

let allRevenue = users.map(function(n){
  return `${n.firstName} ` + `${n.lastName} :` + ` ${n.revenue}`
});
//console.log(allRevenue)

console.log("What's the percentage of users earning revenue (> 0) ?")
let revenue = users.filter(function(e){
  return (e.revenue > 0)
});
let percent = Math.round((revenue.length / users.length) * 100);
console.log(`${percent} %`)

console.log("What's the average revenue of those users ?")
let avgRevenue = revenue.reduce((sum, current) => sum + current.revenue, 0) / revenue.length;
console.log(`${Math.round(avgRevenue)} is the average revenue`)

let list = revenue.map(function(n){
  return `${n.firstName} ` + `${n.lastName} :` + ` ${n.revenue}`
});
//console.log(list)
