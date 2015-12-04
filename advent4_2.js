var md5 = require('./md5.min.js').md5;

var secret = 'bgvyzdsv';

var number = 0;

var hash = md5(secret + number);

while (hash.substring(0, 6) !== '000000') {
  hash = md5(secret + number++);
}

console.log(number-1);

