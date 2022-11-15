export const variablesCodeSnippet = `
Examples:

// create a variable called firstName that tracks the string 'Mario.'

// create a variable called age that tracks the number 35

// create a variable called verified that tracks the boolean false
`;

export const variableNameCodeSnippet = `
Name Examples:

- age
- login
- verified

- first name => firstName
- last name => lastName
- phone number => phoneNumber
`;

export const primitivesCodeSnippet = `
Examples:

- string: 'Mario', 'Hi 👋', 'laternerd.com'
- number: 0, 13, 10,000
- boolean: true, false
- null: null
- undefined: undefined
`;

export const letCodeSnippet = `
// let variableName = value;

let age = 21;
let weight = 100;
let single = true;
`;

export const constCodeSnippet = `
// const variableName = value;

const firstName = 'Mario';
const cool = true;
const funny = true;
`;

export const variableDeclarationCodeSnippet = `
// create a variable called firstName that tracks the string 'Mario.'
let firstName = 'Mario';

// create a variable called age that tracks the number 35
let age = 35;

// create a variable called verified that tracks the boolean false
let verified = false;
`;

export const arraysCodeSnippet = `
// individual menu items
let menuItemOne = 'hamburger';
let menuItemTwo = 'cheese burger';
let menuItemThree = 'double double';
let menuItemFour = 'fries';
let menuItemFive = 'shake';
					
// Array: grouped menu items
let menuItems = [ 'hamburger', 'cheese burger', 'double double', 'fries', 'shake'];
					
					
// individual lucky numbers
let luckyNumberOne = 80;
let luckyNumberTwo = 08;
let luckyNumberThree = 73;
let luckyNumberFour = 55;
let luckyNumberFive = 0;
					
// Array: grouped lucky numbers
let luckyNumbers = [80, 08, 73, 55, 0];
					
					
// individual test answers
let testAnswerOne = true;
let testAnswerTwo = false;
let testAnswerThree = true;
let testAnswerFour = false;
let testAnswerFive = true;
					
// Array: grouped test answers
let testAnswers = [true, false, true, false, true];
`;

export const objectsCodeSnippet = `
// my user profile as variables
let username = 'mario.zamora';
let bio = 'Software Engineer 🤓';
let website = 'laternerd.com';
let likes = 19.8;
let videos = 388;
let verified = false;
					
					
// my user profile as an object
let myProfile = {
	username: 'mario.zamora',
	bio: 'Software Engineer 🤓',
	website: 'laternerd.com',
	followers: 2571,
	likes: 19.8,
	videos: 388,
	followers: 2571,
	verified: false
};
`;

export const updatingVariablesCodeSnippet = `
let temperature = 76;

temperature = 74;
temperature = 72;
temperature = 67;
`;

export const updatingObjectsCodeSnippet = `
// my user profile object
let myProfile = {
	username: 'mario.zamora',
	bio: 'Software Engineer 🤓',
	website: 'laternerd.com',
	followers: 2571,
	likes: 19.8,
	videos: 388,
	followers: 2571,
	verified: false
};
					
					
// updating an object value
myProfile.verified = true;
					
// adding a new object value
myProfile.active = true;
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

export const operatorPrecedenceCodeSnippet = `
// Without Order Precedence
(5 * 5) / 5 - 2; // equals 3
					
					
// With Order Precedence
(5 * 5) / (5 - 2); // equals 8.333
25 / 3; // 8.333
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

export const ifStatementsCodeSnippet = `
let mealsEaten = 0;
let ateBreakfast = false;
					
					
// if this is trues do this
if (mealsEaten === 0) {
						
	// update breakfast
	ateBreakfast = true;
					
	// increment mealsEaten by one
	mealsEaten++;
}
`;

export const ifElseStatementsCodeSnippet = `
let day = 'Monday';
let emotion;
					
					
// if this is true do this
if (day === 'Monday') {
	emotion = '🥳';
} else {
	emotion = '🥲';
}
`;

export const elseIfStatementsCodeSnippet = `
let day = 'Tuesday';
let emotion;
					
					
// if this is true do this
if (day === 'Monday') {
	emotion = '🥳';
					
	// or if this is true do this
} else if (day === 'Tuesday') {
	emotion = '😝';
						
	// otherwise do this
} else {
	emotion = '🥲';
}
`;

export const logicalAndCodeSnippet = `
let title = 'Mr.';
let fullName = 'Potato Head';
let greeting;
					
					
// will not run if both conditions are true
if (title === 'Mrs.' && fullName === 'Potato Head') {
	greeting = 'Hello, Mrs. Potato Head';
}
					
					
let title = 'Mrs.';
let fullName = 'Potato Head';
let greeting;
					
					
// will run if both conditions are true
if (title === 'Mrs.' && fullName === 'Potato Head') {
	greeting = 'Hello, Mrs. Potato Head';
}
`;

export const logicalOrCodeSnippet = `
let day = 'Monday';
let emotion;
					
					
// if either condition is true do this
if (day === 'Monday' || day === 'Friday') {
	emotion = '🥳';
					
	// otherwise do this
} else {
	emotion = '🫣';
}
`;

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

export const methodsCodeSnippet = `
let myProfile = {
	username: 'mario.zamora',
	bio: 'Software Engineer 🤓',
	website: 'laternerd.com',
	followers: 4229,
	likes: 37.6,
	videos: 448,
	verified: false,
	objFunc: function () {
		return "this function's in my object!";
	},
};

myProfile.username; // 'mario.zamora'
myProfile.likes; // 37.6
myProfile.objFunc(); // "this function's in my object!"
`;

export const writingMethodsCodeSnippet = `
let myProfile = {
	username: 'mario.zamora',
	bio: 'Software Engineer 🤓',
	website: 'laternerd.com',
	followers: 4229,
	likes: 37.6,
	videos: 448,
	verified: false,
	mirror: function {
		return 'this is one way to write a method.';
	},
	newMirror() {
		return 'this is another way to write a method.';
	},
};
`;

export const thisCodeSnippet = `
let myProfile = {
	username: 'mario.zamora',
	bio: 'Software Engineer 🤓',
	website: 'laternerd.com',
	followers: 4229,
	likes: 37.6,
	videos: 448,
	verified: false,
    mirror: function () {
		return this.username;
	},
};

myProfile.username; // 'mario.zamora'
myProfile.verified; // false
myProfile.mirror(); // 'mario.zamora'
`;

export const classesPartOneCodeSnippet = `
class Profile {
	constructor(username, bio, website, followers, likes, videos, verified) {
		this.username = username;
		this.bio = bio;
		this.website = website;
		this.followers = followers;
		this.likes = likes;
		this.videos = videos;
		this.verified = verified;
	}
}


// new object
let newObject = new Profile(
	'mario.zamora',
	'learn to code javascript',
	'laternerd.com',
	0,
	0,
	0,
	false
);
`;

export const classesPartTwoCodeSnippet = `
class Profile {
	constructor(username, bio, website, followers, likes, videos, verified) {
		this.username = username;
		this.bio = bio;
		this.website = website;
		this.followers = followers;
		this.likes = likes;
		this.videos = videos;
		this.verified = verified;
	}

	hello() {
		return 'hello ' + this.username;
	}
}


// new object
let newObject = new Profile(
	'mario.zamora',
	'learn to code javascript',
	'laternerd.com',
	0,
	0,
	0,
	false
);

newObject.hello(); // hi mario.zamora
`;
