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
ADD: (+) // Add two numbers
1 + 3 // => 4

SUBTRACT: (-) // Subtract two numbers
10 - 3 // => 7

MULTIPLY: (*) // Multiply two numbers
3 * 3 // => 9

DIVIDE: (/) // Divide two numbers
9 / 3 // => 3

MODULO: (%) // How many times does the number on the right go into the number on the left? Return the remainder
10 % 3 // => 1
`;

export const logicalAndCodeSnippet = `
LOGICAL_AND: (&&)
// if this is true and this is true
// return true

true && true // => true

true && false // => false

false && false // => false

false && true // => false
`;

export const logicalOrCodeSnippet = `
LOGICAL_OR: (||)
// if this is true or this is true
// return true

true || true // => true

true || false // => true

false || false // => false

false || true // => true
`;

export const logicalNotCodeSnippet = `
LOGICAL_NOT: (!)
// flip the boolean value.

!true // => false

!false // => true
`;

export const stringOperatorCodeSnippet = `
// string + string => single string

'Hi' + ' 👋' // => 'Hi 👋'

'I Love' + ' You ❤️' // => 'I Love You ❤️'

'Good' + ' Morning!' // => 'Good Morning!'
`;

export const conditionalTernaryOperatorCodeSnippet = `
// expression ? 'do this if true' : 'do this if false'

(1 < 3) ? true : false // => true

(1 > 3) ? true : false // => false
`;
