'use strict';

function makeRequest(url, timeout, callback) {

    timeout = timeout || 2000;
    callback = callback || function () {};

    // 其它部分
}
function makeRequest(url) {

    // 其余代码

    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
}

function fun_a() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'a';
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    var callback = arguments[2];

    console.log('我执行了');
    // callback();
}
fun_a();

function fun_b(url) {
    console.log(url);
}
fun_b();

var value = 5;

function getValue() {
    return value++;
}

function add(first) {
    var second = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getValue;

    return first + second;
}
// function add(first, second = getValue()) {
//     return first + second;
// }

console.log(add(1, 1)); // 2
console.log(add(1)); // 6
console.log(add(1)); // 7

function add_1(first) {
    var second = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : first;

    return first + second;
}

console.log(add_1(1, 1)); // 2
console.log(add_1(1)); // 2

function add_2() {
    var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : second;
    var second = arguments[1];

    return first + second;
}

console.log(add_2(1, 1)); // 2
console.log(add_2(undefined, 1)); // 抛出错误
