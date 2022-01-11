function fibonacciSequence(num) {
    let fibonacci = [];
    for (let i = 0; i < num; i++) {
        if (i<2) {
            fibonacci[i]=1
        }else{
            fibonacci[i]=fibonacci[i-1]+fibonacci[i-2];
        }
        
    }
    console.log(fibonacci[num-1])
}
fibonacciSequence(7)