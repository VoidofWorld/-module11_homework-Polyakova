function checkingPrime (a) {
  for( let i=2 ; i< a ; i++){
    if (a % i === 0){
      return "сложное"
    }
    else{
      return "простое"
      break
    }
  }
}
let nomber = prompt("введите любое число до 1000")
  if ( (nomber < 2) || (nomber > 1001) ){
   console.log("ввели некоректное число") 
 }
  else {
  checkingPrime (nomber)
  console.log(`${checkingPrime (nomber)}`)
  }

