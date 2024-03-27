// create a function that will take an argument that stands for the maximum integer you want to count to
// Initialize a starting value for the total sum
// run a for Loop that starts at the first number and counts up to the maximum sum the numbers in the loop

function linearSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
        // or sum += i
    }
    return sum;
}
console.log(linearSum(100));
