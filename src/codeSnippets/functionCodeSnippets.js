export const functionDeclarationCodeSnippet = `
// Functions: takes one job and breaks it down into little steps and then gives you an answer


// take in variables
function name(params) {
					
	// do some steps
					
	// sends back an answer
	return;
}
					
					
// Add two numbers
// take in two values
function add(numOne, numTwo) {
					
	// steps:
	// add two numbers together
	let add = numOne + numTwo;
					
	// result: two numbers added together
	return add;
}
`;

export const writingFunctionsCodeSnippet = `
// Function Declaration
function declaration(params) {
	return;
}

// Function Expression
const expressFunc = function (params) {
	return;
};

// Arrow Function
const arrowFunc = (params) => {
	return;
};
`;

export const callingFunctionsCodeSnippet = `
// Function: add two number together
const add = (numOne, numTwo) => {
	let total = numOne + numTwo;
	return total;
};

// call function
add(1, 2); // 3
`;
