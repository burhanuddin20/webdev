
let arr = Array.from({length:20},(v,k)=>k+1);
console.log(arr)

for(let i = 0 ; i<arr.length; i++){
    console.log(i);
}

for(let i = 1; i<20;i++){
    if(i%3 == 0) console.log(i);
}