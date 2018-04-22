// const square = function(x) {
//   return x * x;
// };

// const squareArrow = x => x * x;
// console.log(squareArrow(8));

// const getName = x => [x.split(" ")[0], x.split(" ")[1]];
// console.log(getName("Hai he"));

//arguments object no longer bound with arrow function

// const add=function(a,b){
//     console.log(arguments);

//     return a+b;
// }
// const add = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// console.log(add(55, 1, 3));

//this keyword no longer bound
// const user = {
//   name: "lala",
//   cities: ["lala", "gaga", "tata"],
//   printPlacesLived() {
//     return (cityMessages = this.cities.map(
//       city => this.name + " lived in " + city + "!"
//     ));
//   }
// };
// console.log(user.printPlacesLived());

const multiplier = {
  nums: [1, 6,8],
  multiplyBy: 2,
  multiply() {
    return this.nums.map(num => num * this.multiplyBy);
  }
};
console.log(multiplier.multiply());
