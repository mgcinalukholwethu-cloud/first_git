// Create a function that validates user input
function validateInput(input, type) {
    if (input === undefined || input === null) {
        throw new Error("Input cannot be null or undefined");
    }

    switch (type) {
        case "string":
            if (typeof input !== "string" || input.trim() === "") {
                throw new TypeError("Expected a non-empty string");
            }
            break;

        case "number":
            if (typeof input !== "number" || isNaN(input)) {
                throw new TypeError("Expected a valid number");
            }
            break;

        case "array":
            if (!Array.isArray(input)) {
                throw new TypeError("Expected an array");
            }
            break;

        default:
            throw new Error("Unsupported validation type");
    }

    return true;
}
//Create a function that demonstrates multiple error types
function riskyOperation(data){
    function riskyOperation(data) {
        try {
            validateInput(data, "string");
            if (data.length > 10) {
                throw new RangeError("String is too long");
            }
            const result = JSON.parse(data);
            console.log("parsed result", result);
        } catch (error) {
            if (error instanceof SyntaxError) {
                console.error("JSON parsing failed:", error.message);
            } else if (error instanceof TypeError || error instanceof RangeError) {
                console.error("validation error:", error.message);
            } else {
                console.error("Unexpected error:", error.message);
            }
        }
}
}

const StringUtils = {
  // Capitalize the first letter
  capitalize: str => str.charAt(0).toUpperCase() + str.slice(1),

  // Convert kebab-case or snake_case to camelCase
  toCamelCase: str => str.replace(/[-_](.)/g, (_, c) => c.toUpperCase()),

  // Truncate long strings with "..."
  truncate: (str, length) =>
str.length > length ? str.slice(0, length) + "..." : str,

  // Reverse a string
  reverse: str => str.split("").reverse().join(""),

  // Convert to title case
  toTitleCase: str =>
str
  .toLowerCase()
  .split(" ")
  .map(word => StringUtils.capitalize(word))
  .join(" "),

  // Remove extra spaces
  cleanWhitespace: str => str.trim().replace(/\s+/g, " ")
};