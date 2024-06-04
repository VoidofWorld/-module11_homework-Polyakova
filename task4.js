
function myFun (a , b) {
 let Int = setInterval(() => {
      console.log(a++); 
   if (a > b) clearInterval(Int)
    }, 1000)
  }


myFun ( 5 , 10)
