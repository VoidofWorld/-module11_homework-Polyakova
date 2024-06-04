
function countingEvenNumb () {
  let arr = [1, 2, 1, 8, 1, null, null]
let a = 0
let b = 0
let c = 0
for(let i = 0 ; i < arr.length ; i++) {
   const element = arr[i]
   if (typeof element === "number" && element % 2 === 0){
     a = a + 1
   }
  else if (typeof element === "number" && element % 2 !== 0 ) {
    b = b +1
   }
  else if (element === null) {
   c = c + 1
   }
}
console.log(a)
console.log(b)
console.log(c)
  
}

countingEvenNumb ();
