import { Divider, Embed, Header, Image, Message } from 'semantic-ui-react';

const PanelInfo = ({ imageSrc, explanation, example }) => (
	<div>
		<Image centered src={imageSrc} size='medium' rounded />

		<Divider hidden />
		<Header as={'h3'}>What is it?</Header>
		{explanation}
		<Divider hidden />
		<Header as={'h3'}>Let's use it:</Header>
		<Message>{example}</Message>
	</div>
);

const panels = [
	{
		key: '',
		title: "'let' keyword",
		content: {
			content: (
				<PanelInfo
					imageSrc=''
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
					imageSrc=''
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
					imageSrc=''
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
					imageSrc=''
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
					imageSrc=''
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
					imageSrc=''
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
		title: 'Arithmetic Operators',
		content: {
			content: (
				<PanelInfo
					imageSrc=''
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
					imageSrc=''
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
					imageSrc=''
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
					imageSrc=''
					explanation={
						<div>
							<p>
								A quick way to give a variable a new value. Addition: +=
								Subtraction: -= 1. Write variable name 2. Add += or -= 3. Write
								the new value you want to add or subtract from the variable.
							</p>
							<p>
								<strong>2 Common Types: </strong>
								<ul>
									<li>Addition: +=</li>
									<li>Subtraction: -=</li>
								</ul>
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
					imageSrc=''
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
					imageSrc=''
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
];

/*

{
  key: '',
  title: '',
  content: {
    content: (
      <div>
      			<Embed
              icon='right circle arrow'
              placeholder=''
              url='https://www.tiktok.com/@mario.zamora/video/7147784853138935086'
            />
      </div>
    )
  }
},


					<Embed
						brandedUI={true}
						icon='right circle arrow'
						placeholder='https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/8397a6902b1b492abd547cc691ff9d5f_1664223370~tplv-dmt-logom:tos-useast5-i-0068-tx/e4de627d27784e9e96996fc288cb5ec1.image?x-expires=1665201600&x-signature=QkJy0EZUDTothDdiJgK%2Bt7DJdYg%3D'
						url='https://v16m-webapp.tiktokcdn-us.com/94b7963e34b40bd607341011faf17340/6340f901/video/tos/useast5/tos-useast5-ve-0068c001-tx/efe98a1674cf4918a476680c50403a3f/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2110&bt=1055&cs=0&ds=3&ft=ebtHKH-qMyq8Z0BuWhe2N-Etfl7Gb&mime_type=video_mp4&qs=0&rc=NDQzNDM2NmQ2NmVoZjQ3ZUBpajY0eGQ6ZmkzZjMzZzczNEAtNC4yYTUtNmAxMS0tMWEuYSNkZC1gcjQwZG1gLS1kMS9zcw%3D%3D&l=20221007221312E01F03F10FA09E5F495A'
					/>



                    const panels = [
	{
		key: '',
		title: "What's JavaScript",
		content: {
			content: (
				<PanelInfo
					imageSrc='https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/8397a6902b1b492abd547cc691ff9d5f_1664223370~tplv-dmt-logom:tos-useast5-i-0068-tx/e4de627d27784e9e96996fc288cb5ec1.image?x-expires=1665201600&x-signature=QkJy0EZUDTothDdiJgK%2Bt7DJdYg%3D'
					explanation={<div></div>}
					example={<div></div>}
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
					imageSrc='https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/596f27f769904f0ab6305a900a5633fc_1664252834~tplv-dmt-logom:tos-useast5-i-0068-tx/c4d8cadfba46417793bcfa2ef88c4d7b.image?x-expires=1665208800&x-signature=e4cPjbMWAuJCVLf0PwSol4y8EXM%3D'
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
					imageSrc='https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/610dd8aa227f4a018b911c551fe6ee5e_1664254863~tplv-dmt-logom:tos-useast5-i-0068-tx/3cc0eadcd4084cdab40670bdf0404ed2.image?x-expires=1665208800&x-signature=8EyrWxO0GO24KK5EmJcG6V92XR0%3D'
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
					imageSrc='https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/db18f25030d74aea97eb12a54f750f79_1664256528~tplv-dmt-logom:tos-useast5-i-0068-tx/243d836218784b459314d2fc3023fc73.image?x-expires=1665208800&x-signature=JRJA%2Fbm306jATJuZmZeFI%2BySz3E%3D'
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
					imageSrc='https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/6a21eedb1fba4dafaf992201c050e7b4_1664310780~tplv-dmt-logom:tos-useast5-i-0068-tx/0666da16737e4782b2b6b89bbfe00c7c.image?x-expires=1665208800&x-signature=sBRJCcTuTi%2FQ9NFnB0U4%2BBCNVUw%3D'
					explanation={
						<div>
							<p>When you create a new variable, you give it a value.</p>
							<p>
								And depending on the value you give it, you turn that variable
								into a specific type.
							</p>
							<p>
								<strong>5 Common Types: </strong>string, number, boolean, null,
								or undefined.
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
					imageSrc='https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/ba11ebb2d6ae4dec9b2c318bc7e0bc91_1664332026~tplv-dmt-logom:tos-useast5-i-0068-tx/068777ee57f74e9885e067959a74036b.image?x-expires=1665208800&x-signature=lL5vkKcp4yr1gzf%2FaDDDwe0YNio%3D'
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
							<p>// grouped menu items</p>
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
							<p>// grouped lucky numbers</p>
							<p>let luckyNumbers = [80, 08, 73, 55, 0];</p>
							<br></br>
							<p>// individual test answers</p>
							<p>let testAnswerOne = true;</p>
							<p>let testAnswerTwo = false;</p>
							<p>let testAnswerThree = true;</p>
							<p>let testAnswerFour = false;</p>
							<p>let testAnswerFive = true;</p>
							<br></br>
							<p>// grouped test answers</p>
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
					imageSrc='https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/162daf710c3b409fb4214f2e4ce91305_1664336746~tplv-dmt-logom:tos-useast5-i-0068-tx/fd33b74959d34f1da75e30d018d24204.image?x-expires=1665208800&x-signature=5eqa83uy7tLVJVB7%2B6WoQwyCmGc%3D'
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
							<p>// my user profile as an object</p>
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
					imageSrc='https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/80ddf3ac505b48238c97003e3b4dea38_1664410016~tplv-dmt-logom:tos-useast5-i-0068-tx/a04e8c36d0e2461d90cf63eacfb4546d.image?x-expires=1665208800&x-signature=d61wHm5nPHqJRe9xAxQgbJI%2BZGo%3D'
					explanation={<div></div>}
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
					imageSrc='https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/eb4d4c86c1e84149800716d9982f9982_1664418736~tplv-dmt-logom:tos-useast5-i-0068-tx/e499664d0b5640ab8d564d0dac381f70.image?x-expires=1665208800&x-signature=6jXQNql9Qz4gUb4UtkRu6FCtXdI%3D'
					explanation={<div></div>}
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
					imageSrc='https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/03cddd9e8b9d4f8b8c5028f77672fc45_1664489053~tplv-dmt-logom:tos-useast5-i-0068-tx/9b3393a004c2411cab33a1c7577ab6b6.image?x-expires=1665208800&x-signature=ldeyWFOTr9ZQDwYK4IUzL3TnMEM%3D'
					explanation={<div></div>}
					example={<div></div>}
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
					imageSrc='https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/ac6b4db60b654c84877081a85b285b1f_1665017420~tplv-dmt-logom:tos-useast5-i-0068-tx/8152d63040ec4acf8f185cff0905517a.image?x-expires=1665208800&x-signature=SPrPoJn1R3WBkepE53IpJC7dXpA%3D'
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
								<p>// Addition: +</p>
								<p>let equalsSeven = 3 + 4;</p>
								<br></br>
								<p>// Subtraction: -</p>
								<p>let equalsTwo = 10 - 8;</p>
								<br></br>
								<p>// Multiplication: *</p>
								<p>let equalsSix = 3 * 2;</p>
								<br></br>
								<p>// Division: /</p>
								<p>let equalsFive = 25 / 5;</p>
								<br></br>
								<p>// Remainder/Modulo: %</p>
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
					imageSrc='https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/afd32efb216e482b90f08fe5d422823c_1665020763~tplv-dmt-logom:tos-useast5-i-0068-tx/1730f6bf37524862b47a013245797f57.image?x-expires=1665208800&x-signature=LS6a86ytrDAOP9zLZBeFftEhgLQ%3D'
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
							<p>// With Order Precedence</p>
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
					imageSrc='https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/74cab6809a894b0aa1aa15cb8734e755_1665026788~tplv-dmt-logom:tos-useast5-i-0068-tx/eb28852bb06a41349f51a35025c29262.image?x-expires=1665208800&x-signature=TtVQJ7aZ0BQ5qLBHiEmheNZxRBY%3D'
					explanation={
						<div>
							<p>A quick way to add or subtract a number by one.</p>
						</div>
					}
					example={
						<div>
							<p>// increment</p>
							<p>let addOne = 0;</p>
							<p>addOne++; // 1</p>
							<p>addOne++; // 2</p>
							<p>addOne++; // 3</p>
							<br></br>
							<p>// decrement</p>
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
					imageSrc='https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/259a74412f454b1c8d98e514c9cafc83_1665033783~tplv-dmt-logom:tos-useast5-i-0068-tx/77e2712e01a74c7e8959de394485830d.image?x-expires=1665208800&x-signature=eWpnLuDdB7bZbnpLJy0K6%2BxRh4s%3D'
					explanation={
						<div>
							<p>
								A quick way to give a variable a new value. Addition: +=
								Subtraction: -= 1. Write variable name 2. Add += or -= 3. Write
								the new value you want to add or subtract from the variable.
							</p>
							<p>
								<strong>2 Common Types: </strong>
								Addition (+=), Subtraction: (-=)
							</p>
						</div>
					}
					example={
						<div>
							<p>// Addition </p>
							<p>let add = 3;</p>
							<p>add = add + 4; // 7</p>
							<br></br>
							<p>// Addition alternative</p>
							<p>add += 4; // 7</p>
							<br></br>
							<p>// Subtraction </p>
							<p>let subtract = 3;</p>
							<p>subtract = subtract - 2; // 1</p>
							<br></br>
							<p>// Subtraction alternative</p>
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
					imageSrc='https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/e769967f37384096a564102167e5393a_1665082014~tplv-dmt-logom:tos-useast5-i-0068-tx/e2f32a4a60264e3ba9a990e15db044c1.image?x-expires=1665208800&x-signature=hL7lFac4Glo1slYYo1tds9B05zg%3D'
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
							<p>// strict equality: are both values the same?</p>
							<p>'elephant' === 'elephant'; // true</p>
							<p>true === false; // false</p>
							<p>'elephant' === 5; // false</p>
							<p>3 === 3; // true</p>
							<br></br>
							<p>// strict non equality: both values are not the same</p>
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
					imageSrc='https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/1af14d9384754bbfaf75da79f13e6091_1665086094~tplv-dmt-logom:tos-useast5-i-0068-tx/87b9c95a5f874a50ad05e20014bdfa56.image?x-expires=1665208800&x-signature=CieS%2F0l7XFR4pBhGpgA9W9LHCZE%3D'
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
								// less than: is the value on the left smaller than the right?
							</p>
							<p>5 &#60; 8; // true</p>
							<p>5 &#60; 3; // false</p>
							<p>5 &#60; 5; // false</p>
							<br></br>
							<p>
								// greater than: is the value on the left bigger than the right?{' '}
							</p>
							<p>5 &#62; 8; // false</p>
							<p>5 &#62; 3; // true</p>
							<p>5 &#62; 5; // false</p>
							<br></br>
							<p>
								// less than or equal to: is the value on the left smaller or
								equal to the value on the right?{' '}
							</p>
							<p>5 &#60;= 8; // true</p>
							<p>5 &#60;= 3; // false</p>
							<p>5 &#60;= 5; // true</p>
							<br></br>
							<p>
								greater than or equal to: is the value on the left bigger or
								equal to the value on the right?{' '}
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
];
*/

export default panels;
