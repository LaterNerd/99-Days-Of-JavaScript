import { Divider, Embed, Header, Message } from 'semantic-ui-react';

const PanelInfo = ({ vidSrc, explanation, example }) => (
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
		{example ? (
			<>
				<Header as={'h3'}>How do you use it?</Header>
				<Message>{example}</Message>
			</>
		) : null}
	</div>
);

const tiktokEmbed = 'https://www.tiktok.com/embed/v2/';

const panels = [
	{
		key: '',
		title: "What's JavaScript",
		content: {
			content: (
				<PanelInfo
					vidSrc={`${tiktokEmbed}7147784853138935086`}
					explanation={null}
					example={null}
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
					vidSrc={`${tiktokEmbed}7147911443403246891`}
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
					example={
						<div>
							<p>// 'let' keyword is in bold</p>
							<br></br>
							<p>
								<strong>let</strong> count;
							</p>
							<p>
								<strong>let</strong> login;
							</p>
							<p>
								<strong>let</strong> pet;
							</p>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7147920146705747243`}
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
					example={
						<div>
							<p>// 'const' keyword is in bold</p>
							<br></br>
							<p>
								<strong>const</strong> password;
							</p>
							<p>
								<strong>const</strong> firstName;
							</p>
							<p>
								<strong>const</strong> lastName;
							</p>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7147927267623177518`}
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
					example={
						<div>
							<p>// variable name is in bold</p>
							<br></br>
							<p>
								let <strong>likes</strong>;
							</p>
							<p>
								let <strong>age</strong>;
							</p>
							<p>
								let <strong>favoriteEmoji</strong>;
							</p>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7148160337571892526`}
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
					example={
						<div>
							<p>
								// <strong>string:</strong> any kind of text
							</p>
							<p>let favoritePhrase = 'ciao mama 😘';</p>
							<br></br>
							<p>
								// <strong>number:</strong> any number
							</p>
							<p>let luckyNumber = 22;</p>
							<br></br>
							<p>
								// <strong>boolean:</strong> true or false
							</p>
							<p>let tall = false;</p>
							<br></br>
							<p>
								// <strong>null:</strong> no value
							</p>
							<p>let address = null;</p>
							<br></br>
							<p>
								// <strong>undefined:</strong> no value set
							</p>
							<p>let password;</p>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7148251584324209966`}
					explanation={
						<div>
							<p>
								Sometimes you need to create a group of things with the same
								type.
							</p>
							<p>To do that, you use an array.</p>
						</div>
					}
					example={
						<div>
							<p>// individual menu items</p>
							<p>let menuItemOne = 'hamburger';</p>
							<p>let menuItemTwo = 'cheese burger';</p>
							<p>let menuItemThree = 'double double';</p>
							<p>let menuItemFour = 'fries';</p>
							<p>let menuItemFive = 'shake';</p>
							<br></br>
							<p>
								// <strong>Array: grouped menu items</strong>
							</p>
							<p>
								let menuItems = [ 'hamburger', 'cheese burger', 'double double',
								'fries', 'shake', ];
							</p>
							<br></br>
							<p>// individual lucky numbers</p>
							<p>let luckyNumberOne = 80;</p>
							<p>let luckyNumberTwo = 08;</p>
							<p>let luckyNumberThree = 73;</p>
							<p>let luckyNumberFour = 55;</p>
							<p>let luckyNumberFive = 0;</p>
							<br></br>
							<p>
								// <strong>Array: grouped lucky numbers</strong>
							</p>
							<p>let luckyNumbers = [80, 08, 73, 55, 0];</p>
							<br></br>
							<p>// individual test answers</p>
							<p>let testAnswerOne = true;</p>
							<p>let testAnswerTwo = false;</p>
							<p>let testAnswerThree = true;</p>
							<p>let testAnswerFour = false;</p>
							<p>let testAnswerFive = true;</p>
							<br></br>
							<p>
								// <strong>Array: grouped test answers</strong>
							</p>
							<p>let testAnswers = [true, false, true, false, true];</p>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7148271817965178154`}
					explanation={
						<div>
							<p>
								Sometimes you need to group a lot of values that belong to the
								same thing.
							</p>
							<p>To do that, you use an object.</p>
						</div>
					}
					example={
						<div>
							<p>// my user profile variables</p>
							<p>let username = 'mario.zamora';</p>
							<p>let bio = 'Software Engineer 🤓';</p>
							<p>let website = 'laternerd.com';</p>
							<p>let likes = 19.8;</p>
							<p>let videos = 388;</p>
							<p>let verified = false;</p>
							<br></br>
							<p>
								// <strong>my user profile as an object</strong>
							</p>
							<p>let myProfile = &#123;</p>
							<p> username: 'mario.zamora',</p>
							<p> bio: 'Software Engineer 🤓',</p>
							<p> website: 'laternerd.com',</p>
							<p>followers: 2571,</p>
							<p>likes: 19.8,</p>
							<p>videos: 388,</p>
							<p>followers: 2571,</p>
							<p>verified: false</p>
							<p>&#125;;</p>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7148586546302766382`}
					explanation={null}
					example={
						<div>
							<p>let temperature = 76;</p>
							<p>temperature = 74;</p>
							<p>temperature = 72;</p>
							<p>temperature = 67;</p>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7148623993590009134`}
					explanation={null}
					example={
						<div>
							<p>// my user profile object</p>
							<p>let myProfile = &#123;</p>
							<p> username: 'mario.zamora',</p>
							<p> bio: 'Software Engineer 🤓',</p>
							<p> website: 'laternerd.com',</p>
							<p>followers: 2571,</p>
							<p>likes: 19.8,</p>
							<p>videos: 388,</p>
							<p>followers: 2571,</p>
							<p>verified: false</p>
							<p>&#125;;</p>
							<br></br>
							<p>// updating an object value</p>
							<p>myProfile.verified = true;</p>
							<br></br>
							<p>// adding a new object value</p>
							<p>myProfile.active = true;</p>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7148925986434731306`}
					explanation={null}
					example={null}
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
					vidSrc={`${tiktokEmbed}7151195266224262446`}
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
					example={
						<div>
							<div>
								<p>
									// <strong>Addition: +</strong>
								</p>
								<p>let equalsSeven = 3 + 4;</p>
								<br></br>
								<p>
									// <strong>Subtraction: -</strong>
								</p>
								<p>let equalsTwo = 10 - 8;</p>
								<br></br>
								<p>
									// <strong>Multiplication: *</strong>
								</p>
								<p>let equalsSix = 3 * 2;</p>
								<br></br>
								<p>
									// <strong>Division: /</strong>
								</p>
								<p>let equalsFive = 25 / 5;</p>
								<br></br>
								<p>
									// <strong>Remainder/Modulo: %</strong>
								</p>
								<p>let equalsOne = 10 % 3;</p>
								<p>let equalsZero = 25 % 5;</p>
								<p>let equalsThree = 11 % 4;</p>
							</div>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7151209648559836458`}
					explanation={
						<div>
							<p>Tells your code what math to do first.</p>
							<p>
								To do this, put whatever math you need to do first in
								parenthesis.
							</p>
						</div>
					}
					example={
						<div>
							<p>// Without Order Precedence</p>
							<p>(5 * 5) / 5 - 2; // equals 3</p>
							<br></br>
							<p>
								// <strong>With Order Precedence</strong>
							</p>
							<p>(5 * 5) / (5 - 2); // equals 8.333</p>
							<p>25 / 3; // 8.333</p>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7151235536026406190`}
					explanation={
						<div>
							<p>A quick way to add or subtract a number by one.</p>
						</div>
					}
					example={
						<div>
							<p>
								// <strong>increment</strong>
							</p>
							<p>let addOne = 0;</p>
							<p>addOne++; // 1</p>
							<p>addOne++; // 2</p>
							<p>addOne++; // 3</p>
							<br></br>
							<p>
								// <strong>decrement</strong>
							</p>
							<p>let subtractOne = 3;</p>
							<p>subtractOne--; // 2</p>
							<p>subtractOne--; // 1</p>
							<p>subtractOne--; // 0</p>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7151265482761407786`}
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
					example={
						<div>
							<p>// Addition </p>
							<p>let add = 3;</p>
							<p>add = add + 4; // 7</p>
							<br></br>
							<p>
								// <strong>Addition alternative</strong>
							</p>
							<p>add += 4; // 7</p>
							<br></br>
							<p>// Subtraction </p>
							<p>let subtract = 3;</p>
							<p>subtract = subtract - 2; // 1</p>
							<br></br>
							<p>
								// <strong>Subtraction alternative</strong>
							</p>
							<p>subtract -= 2; // 1</p>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7151472626358291758`}
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
					example={
						<div>
							<p>
								// <strong>strict equality:</strong> are both values the same?
							</p>
							<p>'elephant' === 'elephant'; // true</p>
							<p>true === false; // false</p>
							<p>'elephant' === 5; // false</p>
							<p>3 === 3; // true</p>
							<br></br>
							<p>
								// <strong>strict non equality:</strong> both values are not the
								same
							</p>
							<p>'elephant' !== 'elephant'; // false</p>
							<p>true !== false; // true</p>
							<p>'elephant' !== 5; // true</p>
							<p>3 !== 3; // false</p>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7151490219278257454`}
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
					example={
						<div>
							<p>
								// <strong>less than:</strong> is the value on the left smaller
								than the right?
							</p>
							<p>5 &#60; 8; // true</p>
							<p>5 &#60; 3; // false</p>
							<p>5 &#60; 5; // false</p>
							<br></br>
							<p>
								// <strong>greater than:</strong> is the value on the left
								bigger than the right?{' '}
							</p>
							<p>5 &#62; 8; // false</p>
							<p>5 &#62; 3; // true</p>
							<p>5 &#62; 5; // false</p>
							<br></br>
							<p>
								// <strong>less than or equal to:</strong> is the value on the
								left smaller or equal to the value on the right?{' '}
							</p>
							<p>5 &#60;= 8; // true</p>
							<p>5 &#60;= 3; // false</p>
							<p>5 &#60;= 5; // true</p>
							<br></br>
							<p>
								<strong>greater than or equal to:</strong> is the value on the
								left bigger or equal to the value on the right?{' '}
							</p>
							<p>5 &#62;= 8; // false</p>
							<p>5 &#62;= 3; // false</p>
							<p>5 &#62;= 5; // true</p>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7153025707411541290`}
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
					example={
						<div>
							<p>let mealsEaten = 0;</p>
							<p>let ateBreakfast = false;</p>
							<br></br>
							<p>
								// <strong>if this is trues</strong>
							</p>
							<p>if (mealsEaten === 0) &#123;</p>
							<p>
								// <strong>make this happen</strong>
							</p>
							<p>// update breakfast</p>
							<p>ateBreakfast = true;</p>
							<p>// increment mealsEaten by one</p>
							<p>mealsEaten++;</p>
							<p>&#125;</p>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7153057077319994666`}
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
					example={
						<div>
							<p>let day = 'Monday';</p>
							<p>let emotion;</p>
							<br></br>
							<p>
								// <strong>if this is true</strong>
							</p>
							<p>if (day === 'Monday') &#123;</p>
							<p>
								// <strong>make this happen</strong>
							</p>
							<p>emotion = '🥳';</p>
							<p>&#125; else &#123;</p>
							<p>emotion = '🥲';</p>
							<p>&#125;</p>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7153113451362110763`}
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
					example={
						<div>
							<p>let day = 'Tuesday';</p>
							<p>let emotion;</p>
							<br></br>
							<p>
								// <strong>if this is true</strong>
							</p>
							<p>if (day === 'Monday') &#123;</p>
							<p>
								// <strong>do this</strong>
							</p>
							<p>emotion = '🥳';</p>
							<p>
								// <strong>or if this is true</strong>
							</p>
							<p>&#125; else if (day === 'Tuesday') &#123;</p>
							// <strong>do this</strong>
							<p>emotion = '😝';</p>
							// <strong>otherwise</strong>
							<p>&#125; else &#123;</p>
							// <strong>do this</strong>
							<p>emotion = '🥲';</p>
							<p>&#125;</p>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7153764533641776426`}
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
					example={
						<div>
							<p>let title = 'Mr.';</p>
							<p>let fullName = 'Potato Head';</p>
							<p>let greeting;</p>
							<br></br>
							<p>
								// <strong>will not run</strong>
							</p>
							<p>
								// <strong>if both conditions are true</strong>
							</p>
							<p>if (title === 'Mrs.' && fullName === 'Potato Head') &#123;</p>
							<p>
								// <strong>do this</strong>
							</p>
							<p>greeting = 'Hello, Mrs. Potato Head';</p>
							<p>&#125;</p>
							<br></br>
							<p>let title = 'Mrs.';</p>
							<p>let fullName = 'Potato Head';</p>
							<p>let greeting;</p>
							<br></br>
							<p>
								// <strong>will run</strong>
							</p>
							<p>
								// <strong>if both conditions are true</strong>
							</p>
							<p>if (title === 'Mrs.' && fullName === 'Potato Head') &#123;</p>
							<p>
								// <strong>do this</strong>
							</p>
							<p>greeting = 'Hello, Mrs. Potato Head';</p>
							<p>&#125;</p>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7153751879040781614`}
					explanation={
						<div>
							<p>Use it when two or more things can make something happen.</p>
							<hr />
							<p>
								<strong>Notes: </strong> Used in if / else parentheses
							</p>
						</div>
					}
					example={
						<div>
							<p>let day = 'Monday';</p>
							<p>let emotion;</p>
							<br></br>
							<p>
								// <strong>if either condition is true</strong>
							</p>
							<p>if (day === 'Monday' || day === 'Friday') &#123;</p>
							<p>
								// <strong>do this</strong>
							</p>
							<p>emotion = '🥳';</p>
							<p>&#125; else &#123;</p>
							<p>
								// <strong>do this</strong>
							</p>
							<p>emotion = '🫣';</p>
							<p>&#125;</p>
						</div>
					}
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
					vidSrc={`${tiktokEmbed}7154171722831367470`}
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
					example={
						<div>
							<p>
								//{' '}
								<strong>
									Functions: takes one job and breaks it down into little steps
								</strong>
							</p>
							<p>
								<strong>// and then gives you an answer</strong>
							</p>
							<br></br>
							<p>function name(params) &#123;</p>
							<p>// take in variables</p>
							<p>// do some steps</p>
							<p>// sends back an answer</p>
							<p>return;</p>
							<p>&#125;</p>
							<br></br>
							<p>
								// <strong>Add two numbers</strong>
							</p>
							<p>function add(numOne, numTwo) &#123;</p>
							<p>
								// <strong>take in values</strong>
							</p>
							<br></br>
							<p>
								// <strong>steps:</strong>
							</p>
							<p>// add two numbers together</p>
							<p>let add = numOne + numTwo;</p>
							<br></br>
							<p>
								// <strong>result:</strong> two numbers added together
							</p>
							<p>return add;</p>
							<p>&#125;</p>
						</div>
					}
				/>
			),
		},
	},
];

export default panels;
