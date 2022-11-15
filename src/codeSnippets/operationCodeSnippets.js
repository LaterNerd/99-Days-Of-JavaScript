export const arithmeticOperatorsCodeSnippet = `
// Addition: +
let equalsSeven = 3 + 4;
					
					
// Subtraction: -
let equalsTwo = 10 - 8;
					
					
// Multiplication: *
let equalsSix = 3 * 2;
					
					
// Division: /
let equalsFive = 25 / 5;
					
					
// Remainder/Modulo: %
let equalsOne = 10 % 3;
let equalsZero = 25 % 5;
let equalsThree = 11 % 4;
`;

export const assignmentOperatorsCodeSnippet = `
// Addition
let add = 3;
add = add + 4; // 7
					
// Addition alternative
add += 4; // 7
					
					
// Subtraction
let subtract = 3;
subtract = subtract - 2; // 1
					
// Subtraction alternative
subtract -= 2; // 1
`;

export const incrementDecrementCodeSnippet = `
// increment
let addOne = 0;
addOne++; // 1
addOne++; // 2
addOne++; // 3
					
					
// decrement
let subtractOne = 3;
subtractOne--; // 2
subtractOne--; // 1
subtractOne--; // 0
`;

export const operatorPrecedenceCodeSnippet = `
// Without Order Precedence
(5 * 5) / 5 - 2; // equals 3
					
					
// With Order Precedence
(5 * 5) / (5 - 2); // equals 8.333
25 / 3; // 8.333
`;

export const comparisonOperatorsPartOneCodeSnippet = `
// strict equality: are both values the same?
'elephant' === 'elephant'; // true
true === false; // false
'elephant' === 5; // false
3 === 3; // true
					
					
// strict non equality: both values are not the same
'elephant' !== 'elephant'; // false
true !== false; // true
'elephant' !== 5; // true
3 !== 3; // false
`;

export const comparisonOperatorsPartTwoCodeSnippet = `
// less than: is the value on the left smaller than the right?
5 < 8; // true
5 < 3; // false
5 < 5; // false
					
					
// greater than: is the value on the left bigger than the right?
5 > 8; // false
5 > 3; // true
5 > 5; // false
					
					
// less than or equal to: is the value on the left smaller or equal to the value on the right?
5 <= 8; // true
5 <= 3; // false
5 <= 5; // true
					
					
// greater than or equal to: is the value on the left bigger or equal to the value on the right?
5 >= 8; // false
5 >= 3; // false
5 >= 5; // true
`;
