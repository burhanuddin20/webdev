function fibonacci(a) {

   if(a < 2)
       return a
   
   else return fibonacci(a-1) + fibonacci(a-2);
}

nTerms = 10;


    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }

// fib nums 0,1,1,2,3,5,8,13,21,34...