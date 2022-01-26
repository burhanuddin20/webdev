function fibonacci(a = 0  ,b = 1,iterations = 10) {

    console.log(a)
    console.log(b)
    // for whatever start number we need to know the fib num from before
    //e.g fib(a)

  for (let i = 0; i < iterations; i++) { // controls number of iterations
    var c = a+b
    console.log(c);
    a = b; 
    b = c; 

  }
  return c;
}

fibonacci(1,1 ,undefined );


// fib nums 0,1,1,2,3,5,8,13,21,34...