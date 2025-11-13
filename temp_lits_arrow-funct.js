const Utils = (() => {
  //Input validation using concise arrow function
  const validateInput = (input, type = "string") => {
    if (input == null) throw new Error("Input cannot be null or undefined.");
    if (type === "string" && typeof input !== "string") throw new TypeError("Expected a string.");
    if (type === "number" && typeof input !== "number") throw new TypeError("Expected a number.");
    if (type === "array" && !Array.isArray(input)) throw new TypeError("Expected an array.");
    return true;
  };

  //Demonstrate multiple error types
  const demonstrateErrors = value => {
    try { console.log(undefinedVar); } catch (e) { console.error("ReferenceError:", e.message); }
    try { null.f(); } catch (e) { console.error("TypeError:", e.message); }
    try { validateInput(value, "number"); } catch (e) { console.error("ValidationError:", e.message); }
  };

  //String helpers
  const StringHelpers = {
    capitalize: str => str[0].toUpperCase() + str.slice(1),
    reverse: str => [...str].reverse().join(""),
    isPalindrome: str => {
      const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
      return clean === [...clean].reverse().join("");
    },
    truncate: (str, len) => str.length > len ? `${str.slice(0, len)}...` : str
  };

  //Array helpers
  const ArrayHelpers = {
    sum: arr => arr.reduce((a, b) => a + b, 0),
    average: arr => arr.length ? ArrayHelpers.sum(arr) / arr.length : 0,
    unique: arr => [...new Set(arr)],
    flatten: arr => arr.flat(Infinity)
  };

  //Template literal: multiline message
  const multilineMessage = `
    Dear Lukho,

    Your journey from Langa to Lansdowne is a powerful story of resilience.
    Keep building platforms that inspire others.

    — Copilot
  `;

  //Generate HTML using template literals
  const generateCardHTML = (title, desc) => `
    <div class="card">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  `;

  return {
    validateInput,
    demonstrateErrors,
    StringHelpers,
    ArrayHelpers,
    multilineMessage,
    generateCardHTML
  };
})();