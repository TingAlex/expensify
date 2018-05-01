// const person = {
//   name: "Shi Chongzheng",
//   age: 20,
//   location: {
//     city: "Da Lian",
//     temp: 92
//   }
// };

// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: tempture } = person.location;
// if (tempture && city) {
//   console.log(`It's ${tempture} in ${city}`);
// }
// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };
// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName);

//
//Array destructuring
//
const address = [
  "1299 $ Juniper Street",
  "Philadelphia",
  "pennsylvania",
  "19147"
];
const [, city, state = "New York",] = address;
console.log(`Your in ${city} ${state}`);
// const item = ["Coffee hot", "$2.00", "$2.50", "$2.75"];
// const [name, , , large] = item;
// console.log(`${name} is ${large}`);
