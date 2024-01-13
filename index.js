const regexPatterns = {
  "randomPasswordRegex": /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[(!@#$%&*()?)]){1,})(?!(.*[(^_+~`|}{\:;><,.\[\]\/=\-)]))(?!.*\s).{8,8}$/,
  "checkWhiteSpaceRegex": /^(?!\S*$).+/,
  "mobileNumberRegex": /^[0-9]{10}$/,
  "numberRegex": /^[0-9]+$/,
  "usernameRegex": /^[a-zA-Z0-9_\-]{5,15}$/,
  "passwordRegex": /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{12,}$/,
  "sampleTextRegex": /^[a-zA-Z0-9- ,_.?!$()]*$/,
  "textSpaceRegex": /^[a-zA-Z\s]*$/,
  "camelCaseSeperatorRegex": /([a-z])([A-Z])/g,
  "camelCaseRegex": /\W+(.)/g,
  "alphaNumSpace": /^(?=.*[A-Za-z0-9])[A-Za-z0-9 ]*$/,
  "alphaNumSpaceDash": /^(?=.*[A-Za-z0-9])[A-Za-z0-9 \-]*$/,
  "alphaSpace": /^(?=.*[A-Za-z])[A-Za-z ]*$/,
  "alpha": /^(?=.*[A-Za-z])[A-Za-z]*$/,
  "alphaNum": /^(?=.*[A-Za-z0-9])[A-Za-z0-9]*$/,
  "alphaNumSpecialSpace": /^(?=.*[A-Za-z0-9])[A-Za-z0-9 \&\(\)\@\/\\,+".:_\-\'\?]*$/,
  "alphaNumSpecial1": /^(?=.*[A-Za-z0-9])[A-Za-z0-9/.]*$/,
  "alphaNumSpecial2": /^(?=.*[A-Za-z0-9])[A-Za-z0-9 \&\+\(\)\/\\,\.\_\-\']*$/, /* \/.\-_ */
  "alphaNumSpecial2CAP": /^(?=.*[A-Z0-9])[A-Z0-9 \&\+\(\)\/\\,\.\_\-\']*$/, /* \/.\-_ */
  "alphaNumSpecial3": /[A-Za-z0-9\/\.\_\-]/,
  "textFieldRegex": /^(?=.*[A-Za-z0-9])[A-Za-z0-9 \_\!\@\#\$\%\^\&\*\-\.\:\;\<\>\?\=\+\/\\\"\'\,\(\)\{\}]*$/,
  "numSpace": /^[0-9 ]*$/,
  "num": /^[0-9]*$/,
  "numFloat": /^[-+]?[0-9]*\.?[0-9]+$/,
  "numSpaceDash": /^[0-9]{10}$/,
  "startingEndingwhiteSpace": /^(?! )[A-Za-z0-9 \_\!\@\#\$\%\^\&\*\-\.\:\;\<\>\?\=\+\/\\\"\'\,\(\)\{\}]*(?<! )$/,
  "singleWhiteSpace": /\S/,
  "isfloat": /^[+-]?\d+(\.\d+)?$/,
  "alphaSpecialChar": /^[ A-Za-z0-9_@./#&+-]*$/,
  "emailRegex": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

module.exports = regexPatterns;