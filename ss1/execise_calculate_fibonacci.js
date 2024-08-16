function generateFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

function sumFibonacci(fib) {
    return fib.reduce((acc, val) => acc + val, 0);
}

const n = 10; // Số lượng số Fibonacci cần tính
const fibonacciSequence = generateFibonacci(n);
const fibonacciSum = sumFibonacci(fibonacciSequence);

console.log(`Dãy số Fibonacci với ${n} số là: [${fibonacciSequence.join(', ')}]`);
console.log(`Tổng các số trong dãy Fibonacci: ${fibonacciSum}`);