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
