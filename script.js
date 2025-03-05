// alert()
const product = {
  name: "rasel",
  age: 25,
  profeson: "developer",
  country: "BD",
};

// console.log(product.name);

for (let name in product) {
  // console.log(`key : ${name} value : ${product[name]}`);
}

// console.log(Object.keys(product))
// console.log(Object.values(product))
// console.log(Object.entries(product))
// console.log(Object.seal(product))
// console.log(Object.freeze(product))
// const {name, age, profeson, country} = product;
// console.log(name, age, profeson, country)

const friend = ["sokina", "jorina", "morjina"];

const [fast, second, last] = friend;
// console.log(fast,second, last)

// const myName = () => {
//   console.log("okkkk");
// };

let numbers = [20, 50, 6, 5, 56, 1, 5, 3, 5];

// console.log(Math.max(...numbers))

// arrow function
let add = (a, b) => {
  return a + b;
};


// var lengthOfLastWord = function(s) {
//   const ppp = s.split(" ");
//   const result = ppp[ppp.length -1];
//     return result.length;

// };

// console.log(lengthOfLastWord('hello world'))


let arr = {
  name: 'jolil', 
  age: 30,
  profeson: 'probashi'
}

const {name, age, profeson} = arr;
console.log(name, age)

let friends = ['rsel', 'kholil'];
const newFriends = ['hero amal', ...friends];
const [frist, secent] = friends;
console.log(newFriends)