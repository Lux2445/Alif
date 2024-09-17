function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

let numbers = [5, 12, 7, 3, 25, 8];
console.log(findMax(numbers));
console.log(findMin(numbers));

function roundNumber(num) {
    return Math.round(num);
}

function ceilNumber(num) {
    return Math.ceil(num);
}

function floorNumber(num) {
    return Math.floor(num);
}

console.log(roundNumber(4.6));
console.log(ceilNumber(4.2));
console.log(floorNumber(4.8));

function sqrtNumber(num) {
    return Math.sqrt(num);
}

console.log(sqrtNumber(16));
console.log(sqrtNumber(25));

function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandomInRange(1, 10));
