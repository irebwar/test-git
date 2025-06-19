// This is a simple JavaScript function
function greet(name) {
    if (typeof name !== 'string') {
        return "Invalid input";
    }
    return "Hello, " + name + "!";

}

// Example usage
console.log(greet(11));