export const expressionCodeSnippet = `
// let variableName = expression;

let luckyNumber = 7;
let firstName = 'Mario'
let tall = false;
`;

export const assignmentOperatorCodeSnippet = `
// let variable = value;
let password = 'abc123';
let login = false;
let zipCode = 90210;


// variable = newValue;
password = 'def456';
login = true;
zipCode = 60606;
`;

export const comparisonOperatorsCodeSnippet = `
STRICT_EQUAL: // Are these two equal?
'3' === 3 // => false

STRICT_NOT_EQUAL: // Are these two not equal?
'3' !== 3 // => true

GREATER_THAN: // Is this number greater than this number?
1 > 3 // => false

GREATER_THAN_OR_EQUAL: // Is this number greater than or equal to this number?
1 >= 3 // => false

LESS_THAN: // Is this number less than this number?
1 < 3 // => true

LESS_THAN_OR_EQUAL: // Is this number less than or equal to this number?
1 <= 3 // => true
`;

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
