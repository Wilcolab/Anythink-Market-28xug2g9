/**
 * Converts a given string to camelCase.
 *
 * Handles input strings with spaces, underscores, hyphens, and camelCase/PascalCase boundaries.
 * Throws an error if the input is not a string or is an empty string.
 *
 * Examples:
 *   toCamelCase('first name');      // returns 'firstName'
 *   toCamelCase('user_id');         // returns 'userId'
 *   toCamelCase('SCREEN_NAME');     // returns 'screenName'
 *   toCamelCase('First-Name');      // returns 'firstName'
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase version of the input string.
 * @throws {Error} If the input is not a string or is an empty string.
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    if (input.trim() === '') {
        throw new Error('Input string cannot be empty');
    }
    
    // Split by spaces, underscores, or hyphens
    const words = input
    .replace(/([a-z])([A-Z])/g, '$1 $2') // handle camelCase or PascalCase
    .split(/[\s_\-]+/);
    
    return words
    .map((word, idx) => {
        word = word.toLowerCase();
        if (idx === 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}

// Example usage:
// console.log(toCamelCase('first name')); // firstName
// console.log(toCamelCase('user_id')); // userId
// console.log(toCamelCase('SCREEN_NAME')); // screenName
// toCamelCase(1); // throws error
// toCamelCase({}); // throws error

/**
 * Converts a given string to dot.case.
 *
 * Handles input strings with spaces, underscores, hyphens, and camelCase/PascalCase boundaries.
 * Throws an error if the input is not a string or is an empty string.
 *
 * Examples:
 *   toDotCase('first name');      // returns 'first.name'
 *   toDotCase('user_id');         // returns 'user.id'
 *   toDotCase('SCREEN_NAME');     // returns 'screen.name'
 *   toDotCase('First-Name');      // returns 'first.name'
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case version of the input string.
 * @throws {Error} If the input is not a string or is an empty string.
 */
function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    if (input.trim() === '') {
        throw new Error('Input string cannot be empty');
    }

    // Split by spaces, underscores, hyphens, or camelCase/PascalCase boundaries
    const words = input
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .split(/[\s_\-]+/);

    return words
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
// console.log(toDotCase('first name')); // first.name
// console.log(toDotCase('user_id')); // user.id
// console.log(toDotCase('SCREEN_NAME')); // screen.name
// toDotCase(1); // throws error
// toDotCase({}); // throws error