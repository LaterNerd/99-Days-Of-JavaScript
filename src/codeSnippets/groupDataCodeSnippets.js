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
