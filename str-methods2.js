function findSubstring(str, substring) {
    return str.indexOf(substring);
}

function extractSubstring(str, start, end) {
    return str.slice(start, end);
}

function checkSubstring(str, substring) {
    return str.includes(substring);
}

function formatString(str, searchValue, replaceValue) {
    return str.replace(searchValue, replaceValue);
}

console.log("Find Substring:", findSubstring("Hello, world!", "world"));  // Вывод: 7
console.log("Extract Substring:", extractSubstring("Hello, world!", 7, 12));  // Вывод: "world"
console.log("Check Substring:", checkSubstring("Hello, world!", "Hello"));  // Вывод: true
console.log("Format String:", formatString("Hello, world!", "world", "JavaScript"));  // Вывод: "Hello, JavaScript!"
