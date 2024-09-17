function toUpperCase(str) {
    return str.toUpperCase();
}

function toLowerCase(str) {
    return str.toLowerCase();
}

function replaceSubstring(str, searchValue, replaceValue) {
    return str.replace(searchValue, replaceValue);
}

function splitString(str, delimiter) {
    return str.split(delimiter);
}

function trimString(str) {
    return str.trim();
}

console.log("To Upper Case:", toUpperCase("hello world"));              
console.log("To Lower Case:", toLowerCase("HELLO WORLD"));              
console.log("Replace Substring:", replaceSubstring("I love JavaScript", "JavaScript", "React")); 
console.log("Split String:", splitString("apple,banana,orange", ","));     
console.log("Trim String:", trimString("   hello world   "));   
