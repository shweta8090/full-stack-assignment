//Q1  counting number of occurence of string
/*function countWords(str) {
    const words = str.split(" ");
    const map = new Map();
  
    for (let word of words) {
      if (map.has(word)) {
        map.set(word, map.get(word) + 1);
      } else {
        map.set(word, 1);
      }
    }
  
    return map;
  }
  
  const sentence = "I am shweta. I am learning web development from PW Skills.";
  console.log(countWords(sentence));*/

  //Q2  unique element

/*  
function uniqueElements(arr) {
  return new Set(arr);
}

console.log(uniqueElements([1, 2, 2, 3, 4, 4])); // Set { 1, 2, 3, 4 }
console.log(uniqueElements([5, 6, 7, 7, 8, 8])); // Set { 5, 6, 7, 8 }*/

//Q3

// swap the values
/*function swap(a, b) {
    [a, b] = [b, a];
    return [a, b];
  }
  
  let x = 3;
  let y = 2;
  [x, y] = swap(x, y);
  console.log(x, y);*/


  //Q4 access random elements
 /* function extract(arr) {
    const [first, second, , , , last] = arr;
    return [first, second, last];
  }
  
  const array = [1, 2, 3, 4, 5, 6];
  console.log(extract(array));*/

  //Q5 min and max

  /*function maxMin(arr) {
    return {
      max: Math.max(...arr),
      min: Math.min(...arr),
    };
  }
  
  const array = [3, 7, 2, 9, 4, 1];
  console.log(maxMin(array)); */


  //Q6  nested object

  
const person = {
    name: "Mithun",
    age: 21,
    address: {
      street: "B8, Block B, Industrial Area.",
      city: "Sector 62, Noida",
      state: "Uttar Pradesh",
    },
  };
  
  function extractData(obj) {
    const {
      name,
      address: { street },
    } = obj;
    return { name, street };
  }
  
  console.log(extractData(person));
  
  
  
  