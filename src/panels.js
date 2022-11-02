import { Divider, Embed, Header } from 'semantic-ui-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PanelInfo = ({ vidSrc, explanation, codeSnippet }) => (
	<div>
		<Embed style={{ height: '750px' }} active url={vidSrc} />
		<Divider hidden />
		{explanation ? (
			<>
				<Header as={'h3'}>What is it?</Header>
				{explanation}
				<Divider hidden />
			</>
		) : null}
		{codeSnippet ? (
			<>
				<Header as={'h3'}>How do you use it?</Header>
				<SyntaxHighlighter
					// wrapLongLines
					children={codeSnippet}
					showLineNumbers
					language='javascript'
					style={coldarkDark}
				/>
			</>
		) : null}
	</div>
);

const tiktokEmbedLink = 'https://www.tiktok.com/embed/v2/';

const panels = [
	{
		key: '',
		title: "What's JavaScript",
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7147784853138935086`}
					explanation={null}
					codeSnippet={null}
				/>
			),
		},
	},
	{
		key: '',
		title: "'let' keyword",
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7147911443403246891`}
					explanation={
						<div>
							<p>
								'let' is the word you use when you wanna create a new value.
							</p>
							<p>In code we call that value a variable.</p>
							<p>To use 'let' put it in front of a new variable name.</p>
							<hr />
							<p>
								<strong>Notes: </strong> Anytime you use the word "let," you can
								update the variable's value if it changes in the future.
							</p>
						</div>
					}
					codeSnippet={`// 'let' keyword is in bold
let count;
let login;
let pet;`}
				/>
			),
		},
	},
	{
		key: '',
		title: "'const' keyword",
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7147920146705747243`}
					explanation={
						<div>
							<p>
								"const" is the word you use when you want to create a new value
								that will never change.
							</p>
							<p>In code, we call this value a variable.</p>
							<p>To use "const," put it in front of a new variable name.</p>
						</div>
					}
					codeSnippet={`// 'const' keyword is in bold
const password;
const firstName;
const lastName;`}
				/>
			),
		},
	},
	{
		key: '',
		title: 'Variables',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7147927267623177518`}
					explanation={
						<div>
							<p>
								When we code, we need to be able to store the value of things.
							</p>
							<p>
								And the way we store value is with something called a variable.
							</p>
							<p>
								For example, if you wanted to build an app with "likes," you'd
								have to create a way to save all those "likes."
							</p>
							<p>To do this, we write "let" or "const." </p>
							<p>
								Then write the name of the variable we want to create and give
								it a starting value.
							</p>
							<p>In the case of "likes," the starting value always equals 0.</p>
							<hr />
							<p>
								<strong>Notes: </strong>
								The variable name can be anything you want. But it should
								describe what kind of value it holds.
							</p>
						</div>
					}
					codeSnippet={`// variable name is in white
let likes;
let age;
let favoriteEmoji;`}
				/>
			),
		},
	},
	{
		key: '',
		title: 'Primitive Types',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7148160337571892526`}
					explanation={
						<div>
							<p>When you create a new variable, you give it a value.</p>
							<p>
								And depending on the value you give it, you turn that variable
								into a specific type.
							</p>
							<p>
								<strong>5 Common Types: </strong>
								<ul>
									<li>String</li>
									<li>Number</li>
									<li>Boolean</li>
									<li>Null</li>
									<li>Undefined</li>
								</ul>
							</p>
						</div>
					}
					codeSnippet={`// string: any kind of text
let favoritePhrase = 'ciao mama 😘';
					
// number: any number
let luckyNumber = 22;
					
// boolean: true or false
let tall = false;
					
// null: no value
let address = null;
					
// undefined: no value set
let password;`}
				/>
			),
		},
	},
	{
		key: '',
		title: 'Arrays',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7148251584324209966`}
					explanation={
						<div>
							<p>
								Sometimes you need to create a group of things with the same
								type.
							</p>
							<p>To do that, you use an array.</p>
						</div>
					}
					codeSnippet={`// individual menu items
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
let testAnswers = [true, false, true, false, true];`}
				/>
			),
		},
	},
	{
		key: '',
		title: 'Objects',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7148271817965178154`}
					explanation={
						<div>
							<p>
								Sometimes you need to group a lot of values that belong to the
								same thing.
							</p>
							<p>To do that, you use an object.</p>
						</div>
					}
					codeSnippet={`// my user profile as variables
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
};`}
				/>
			),
		},
	},
	{
		key: '',
		title: 'Updating Variables',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7148586546302766382`}
					explanation={null}
					codeSnippet={`let temperature = 76;

temperature = 74;
temperature = 72;
temperature = 67;`}
				/>
			),
		},
	},
	{
		key: '',
		title: 'Updating Objects',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7148623993590009134`}
					explanation={null}
					codeSnippet={`// my user profile object
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
myProfile.active = true;`}
				/>
			),
		},
	},
	{
		key: '',
		title: 'Comments',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7148925986434731306`}
					explanation={null}
					codeSnippet={null}
				/>
			),
		},
	},
	{
		key: '',
		title: 'Arithmetic Operators',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7151195266224262446`}
					explanation={
						<div>
							<p>Use this to get the value of two or more numbers.</p>
							<p>
								<strong>5 common types: </strong>
								Addition, Subtraction, Multiplication, Division,
								Remainder/Modulo
							</p>
						</div>
					}
					codeSnippet={`// Addition: +
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
let equalsThree = 11 % 4;`}
				/>
			),
		},
	},
	{
		key: '',
		title: 'Operator Precedence',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7151209648559836458`}
					explanation={
						<div>
							<p>Tells your code what math to do first.</p>
							<p>
								To do this, put whatever math you need to do first in
								parenthesis.
							</p>
						</div>
					}
					codeSnippet={`// Without Order Precedence
(5 * 5) / 5 - 2; // equals 3
					
					
// With Order Precedence
(5 * 5) / (5 - 2); // equals 8.333
25 / 3; // 8.333`}
				/>
			),
		},
	},
	{
		key: '',
		title: 'Increment + Decrement',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7151235536026406190`}
					explanation={
						<div>
							<p>A quick way to add or subtract a number by one.</p>
						</div>
					}
					codeSnippet={`// increment
let addOne = 0;
addOne++; // 1
addOne++; // 2
addOne++; // 3
					
					
// decrement
let subtractOne = 3;
subtractOne--; // 2
subtractOne--; // 1
subtractOne--; // 0`}
				/>
			),
		},
	},
	{
		key: '',
		title: 'Assignment Operators',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7151265482761407786`}
					explanation={
						<div>
							<p>A quick way to give a variable a new value.</p>
							<br></br>
							<p>
								<strong>2 Common Types: </strong>
								<ul>
									<li>Addition: +=</li>
									<li>Subtraction: -=</li>
								</ul>
							</p>
							<br></br>
							<p>
								<strong>Steps:</strong>
								<ol>
									<li>1. Write variable name </li>
									<li>2. Add += or -=</li>
									<li>
										3. Write the new value you want to add or subtract from the
										variable.
									</li>
								</ol>
							</p>
						</div>
					}
					codeSnippet={`// Addition
let add = 3;
add = add + 4; // 7
					
// Addition alternative
add += 4; // 7
					
					
// Subtraction
let subtract = 3;
subtract = subtract - 2; // 1
					
// Subtraction alternative
subtract -= 2; // 1`}
				/>
			),
		},
	},
	{
		key: '',
		title: 'Comparison Operators Pt.1',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7151472626358291758`}
					explanation={
						<div>
							<p>Use this when you wanna test if something is true or false.</p>
							<p>
								<strong>6 Types: </strong>
								<ul>
									<li>Strict Equality: ===</li>
									<li>Strict Non Equality: !==</li>
									<li>Less than: &#60;</li>
									<li>Greater than: &#62;</li>
									<li>Less than or equal to: &#60;=</li>
									<li>Greater than or equal to: &#62;=</li>
								</ul>
							</p>
							<p></p>
						</div>
					}
					codeSnippet={`// strict equality: are both values the same?
'elephant' === 'elephant'; // true
true === false; // false
'elephant' === 5; // false
3 === 3; // true
					
					
// strict non equality: both values are not the same
'elephant' !== 'elephant'; // false
true !== false; // true
'elephant' !== 5; // true
3 !== 3; // false`}
				/>
			),
		},
	},
	{
		key: '',
		title: 'Comparison Operators Pt.2',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7151490219278257454`}
					explanation={
						<div>
							<p>Use this when you wanna test if something is true or false.</p>
							<p>
								<strong>6 Types: </strong>
								<ul>
									<li>Strict Equality: ===</li>
									<li>Strict Non Equality: !==</li>
									<li>Less than: &#60;</li>
									<li>Greater than: &#62;</li>
									<li>Less than or equal to: &#60;=</li>
									<li>Greater than or equal to: &#62;=</li>
								</ul>
							</p>
							<p></p>
						</div>
					}
					codeSnippet={`// less than: is the value on the left smaller than the right?
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
5 >= 5; // true`}
				/>
			),
		},
	},
	{
		key: '',
		title: 'IF Statements',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7153025707411541290`}
					explanation={
						<div>
							<p>Lets you do things only if something's true.</p>
							<br></br>
							<p>
								<strong>To use it, ask:</strong>
							</p>
							<ul>
								<li>What do you want to happen?</li>
								<li>When do you want it to happen?</li>
							</ul>
						</div>
					}
					codeSnippet={`let mealsEaten = 0;
let ateBreakfast = false;
					
					
// if this is trues do this
if (mealsEaten === 0) {
						
	// update breakfast
	ateBreakfast = true;
					
	// increment mealsEaten by one
	mealsEaten++;
}`}
				/>
			),
		},
	},
	{
		key: '',
		title: 'IF / ELSE Statements',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7153057077319994666`}
					explanation={
						<div>
							<p>Lets you do things only if something's true.</p>
							<p>And do something else if it's false.</p>
							<br></br>
							<p>
								<strong>To use it, ask:</strong>
							</p>
							<ul>
								<li>What do you want to happen?</li>
								<li>When do you want it to happen?</li>
								<li>What happens if it's false?</li>
							</ul>
						</div>
					}
					codeSnippet={`let day = 'Monday';
let emotion;
					
					
// if this is true do this
if (day === 'Monday') {
	emotion = '🥳';
} else {
	emotion = '🥲';
}`}
				/>
			),
		},
	},
	{
		key: '',
		title: 'ELSE IF Statements',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7153113451362110763`}
					explanation={
						<div>
							<p>
								Use it when an if statement is false but something else is true.
							</p>
							<br></br>
							<p>
								<strong>To use it, ask:</strong>
							</p>
							<ul>
								<li>What do you want to happen?</li>
								<li>When do you want it to happen?</li>
								<li>What happens if something else's true?</li>
							</ul>

							<br></br>
							<hr />
							<p>
								<strong>Notes: </strong> An "else if" statement goes between and
								if and else.
							</p>
						</div>
					}
					codeSnippet={`let day = 'Tuesday';
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
}`}
				/>
			),
		},
	},
	{
		key: '',
		title: 'Logical AND',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7153764533641776426`}
					explanation={
						<div>
							<p>
								Use it when two or more things need to be true for something to
								happen.
							</p>
							<hr />
							<p>
								<strong>Notes: </strong> Used in if / else parentheses
							</p>
						</div>
					}
					codeSnippet={`let title = 'Mr.';
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
}`}
				/>
			),
		},
	},
	{
		key: '',
		title: 'Logical OR',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7153751879040781614`}
					explanation={
						<div>
							<p>Use it when two or more things can make something happen.</p>
							<hr />
							<p>
								<strong>Notes: </strong> Used in if / else parentheses
							</p>
						</div>
					}
					codeSnippet={`let day = 'Monday';
let emotion;
					
					
// if either condition is true do this
if (day === 'Monday' || day === 'Friday') {
	emotion = '🥳';
					
	// otherwise do this
} else {
	emotion = '🫣';
}`}
				/>
			),
		},
	},
	{
		key: '',
		title: 'Function Declaration',
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbedLink}7154171722831367470`}
					explanation={
						<div>
							<p>What's something you do all the time?</p>
							<p>
								A function takes that one job and breaks it down into little
								steps.
							</p>
							<p>So that it can repeat those steps and finish the job.</p>
							<p>It's kind of like having your own robot.</p>
							<p>You tell it what you want, and then it does the job.</p>
						</div>
					}
					codeSnippet={`// Functions: takes one job and breaks it down into little steps and then gives you an answer


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
}`}
				/>
			),
		},
	},
];

export default panels;
