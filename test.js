const regexHelper = require('regex-helper-collection');

// Sample checks using regex patterns
console.log('Sample Checks using regex-helper-collection');

// Check a random password
const passwordCheck = regexHelper.randomPasswordRegex.test('Abcd@123');
console.log('Random Password Check:', passwordCheck);

// Check a mobile number
const mobileNumberCheck = regexHelper.mobileNumberRegex.test('1234rr567890');
console.log('Mobile Number Check:', mobileNumberCheck);

// Check an email address
const emailCheck = regexHelper.emailRegex.test('test@@@example.com');
console.log('Email Address Check:', emailCheck);

// Add more sample checks as needed

