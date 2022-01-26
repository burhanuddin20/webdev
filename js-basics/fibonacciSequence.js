function fibonacci(iterations) {
  var a = 0;
  var b = 1;
  console.log(a);
  console.log(b);

  for (let i = 0; i < iterations; i++) {

    let c = a+b;

    console.log(c);

    a = b; // move a along
    b = c; // b should be equal to current sum
    
  }
}

fibonacci(10);
