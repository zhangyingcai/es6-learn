const str_1 = '   a   ';
const str_2 = str_1.trim();
let str_3 = '  b  ';
const str_4 = str_3.trim();

const str = 'hello world!';

console.log(str.startsWith("hello"));       // true
console.log(str.endsWith("!"));             // true
console.log(str.includes("o"));             // true

console.log(str.startsWith("o"));           // false
console.log(str.endsWith("world!"));        // true
console.log(str.includes("x"));             // false

console.log(str.startsWith("o", 4));        // true
console.log(str.endsWith("o", 8));          // true
console.log(str.includes("o", 8));          // false 

console.log(str.indexOf('o'));              // 4
console.log(str.indexOf('0'));              // -1
console.log(str.indexOf('o',1));            // 4
console.log(str.indexOf('o',6));            // 7

console.log(str.lastIndexOf('o'));          // 7
console.log(str.lastIndexOf('0'));          // -1
console.log(str.lastIndexOf('o',1));        // -1
console.log(str.lastIndexOf('o',6));        // 4

console.log("x".repeat(3));         // "xxx"
console.log("hello".repeat(2));     // "hellohello"
console.log("abc".repeat(4));       // "abcabcabcabc"

console.log(str);                   // "hello world!"
console.log(typeof str);            // "string"
console.log(str.length);            // 12

const str_5 = '\`o\`';

console.log(str_5);                 // `o`

const message = `hello
word`;
const str_6 = `hello
         word`

console.log(str_6);             // "hello
                                //  word"
console.log(str_6.length);      // 10

const count = 10,
price = 0.2, // 还有这种操作？用,分割
counts = `$${(price * count).toFixed(2)}`

console.log(counts);
