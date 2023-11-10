// задача №1
const fill = (arraySize, value) => {
const newArr = [];
 for (let i = 0; i < arraySize; i++) {
    newArr.push(value);
  } 
  return newArr;
}

const data1 = 3;
const valueToFill = 'a';
console.log(fill(data1, valueToFill))

// задача №2
const reverse = (array) => {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}; // решение здесь
 

const data2 = [1, 2, 3];
console.log(reverse(data2)); // [3, 2, 1]

// задача №3
const compact = (array)  => {
   return array.filter((item) => item);
 }; // решение здесь


const data3 = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data3)) // [1, 2, 3]
