const step = (x , n) => {
  var result = x
  for (i = 1 ; i < n  ; i++ ){
    result *=x
  }
  return(result)
}

console.log(step( 3 , 5))
