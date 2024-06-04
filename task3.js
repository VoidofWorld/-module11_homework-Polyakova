function one(a){
  return function summFun(b){
  return a + b
  }
}
console.log(one(5)(2))
