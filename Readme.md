# Regex Helper Collection

`regex-helper-collection` is a versatile npm package designed to simplify the usage of various regular expression patterns commonly needed in web development. It provides a comprehensive collection of regex patterns for tasks such as validating passwords, mobile numbers, usernames, and more.

## Installation

To integrate `regex-helper-collection` into your Node.js project, install it via npm:

```bash
npm install regex-helper-collection
```

## Usage

``` bash
const regexHelper = require('regex-helper-collection');

console.log(regexHelper.mobileNumberRegex.test('1234567890')); // true
console.log(regexHelper.emailRegex.test('test@example.com')); // true
... and so on for other regex patterns
```

## Available Regex Patterns
```bash 
randomPasswordRegex
checkWhiteSpaceRegex
mobileNumberRegex
numberRegex
usernameRegex
passwordRegex
sampleTextRegex
textSpaceRegex
camelCaseSeperatorRegex
camelCaseRegex
alphaNumSpace
alphaNumSpaceDash
alphaSpace
alpha
alphaNum
alphaNumSpecialSpace
alphaNumSpecial1
alphaNumSpecial2
alphaNumSpecial2CAP
alphaNumSpecial3
textFieldRegex
numSpace
num
numFloat
numSpaceDash
startingEndingwhiteSpace
singleWhiteSpace
isfloat
alphaSpecialChar
emailRegex
```


## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

## Author

[Pulkit Gupta](https://github.com/P29091999) ([pulkitgupta299@gmail.com](mailto:pulkitgupta299@gmail.com))

