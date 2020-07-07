
const getNumbers = (numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}
console.log(getNumbers([1,2,3,4,5,6,7,8]))

// const numbers = ([1, 2, 3, 4, 5, 6, 7])