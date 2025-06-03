/**
 * Converts a string to kebab-case.
 *
 * Handles spaces, underscores, hyphens, camelCase, and PascalCase boundaries.
 * Throws an error if input is not a non-empty string.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The kebab-case version of the input string.
 * @throws {TypeError} If input is not a string or is an empty string after trimming.
 *
 * @example
 * toKebabCase('Hello World'); // 'hello-world'
 * @example
 * toKebabCase('foo_bar-baz'); // 'foo-bar-baz'
 * @example
 * toKebabCase('camelCaseString'); // 'camel-case-string'
 * @example
 * toKebabCase('PascalCaseString'); // 'pascal-case-string'
 */
function toKebabCase(str) {
    if (typeof str !== 'string' || str.trim() === '') {
        throw new TypeError('Input must be a non-empty string');
    }
    return str
        // Replace underscores and hyphens with spaces
        .replace(/[_\-]+/g, ' ')
        // Insert space before camelCase or PascalCase boundaries
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        // Split by spaces, filter out empty, join with hyphens
        .trim()
        .split(/\s+/)
        .map(word => word.toLowerCase())
        .join('-');
}

// Example usages:
console.log(toKebabCase('Hello World')); // 'hello-world'
console.log(toKebabCase('foo_bar-baz')); // 'foo-bar-baz'
console.log(toKebabCase('camelCaseString')); // 'camel-case-string'
console.log(toKebabCase('PascalCaseString')); // 'pascal-case-string'

// Unit tests
function runTests() {
    const tests = [
        { input: 'Hello World', expected: 'hello-world' },
        { input: 'foo_bar-baz', expected: 'foo-bar-baz' },
        { input: 'camelCaseString', expected: 'camel-case-string' },
        { input: 'PascalCaseString', expected: 'pascal-case-string' },
        { input: '  leading and trailing  ', expected: 'leading-and-trailing' },
        { input: 'multiple   spaces', expected: 'multiple-spaces' },
        { input: 'snake_case', expected: 'snake-case' },
        { input: 'kebab-case', expected: 'kebab-case' },
        { input: 'UPPERCASE', expected: 'uppercase' },
        { input: 'lowercase', expected: 'lowercase' },
        { input: 'MiXeD_Case-String', expected: 'mixed-case-string' },
        { input: 'fooBarBaz', expected: 'foo-bar-baz' },
        { input: 'FooBarBaz', expected: 'foo-bar-baz' },
    ];

    let passed = 0;
    tests.forEach(({ input, expected }, i) => {
        try {
            const result = toKebabCase(input);
            if (result === expected) {
                passed++;
            } else {
                console.error(`Test ${i + 1} failed: toKebabCase('${input}') => '${result}', expected '${expected}'`);
            }
        } catch (e) {
            console.error(`Test ${i + 1} threw error: ${e.message}`);
        }
    });

    // Test invalid input
    const invalidInputs = [null, undefined, 123, {}, [], '', '   '];
    invalidInputs.forEach((input, i) => {
        try {
            toKebabCase(input);
            console.error(`Invalid input test ${i + 1} failed: did not throw for input: ${input}`);
        } catch (e) {
            passed++;
        }
    });

    console.log(`${passed} tests passed.`);
}

runTests();
