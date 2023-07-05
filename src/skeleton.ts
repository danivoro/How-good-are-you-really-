/**
 *
 * There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


INPUT: array of numbers and number
OUTPUT: boolean value

FUNCTION: betterThanAverage() 

PSEUDOCODE

FUNCTION betterThanAvewrage(arr, num)
  delaring variable sumClassPoints = 0
  declaring variable avPoint = 0
  FOR (let number of arr) {
    sumClassPoints += num
  }
  avPoint = (sumClassPoint + num) / (arr.length + 1)
  IF num > avPoint {
    return true
   else 
    return false
  
arr.reduce((sum, num) => sum + num, 0)


*/

function betterThanAverage(arr: number[], point: number): boolean{
  let sumClassPoints = arr.reduce((sum, num) => sum + num, 0)
  let avPoint = 0
  avPoint = (sumClassPoints + point) / (arr.length + 1)
  return (point > avPoint)   
}

console.log(betterThanAverage([2, 2, 2, 2], 2))
console.log(betterThanAverage([1, 1, 1, 1], 70))

export default betterThanAverage;