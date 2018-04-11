function makeRequest(url, timeout, callback) {

    timeout = timeout || 2000;
    callback = callback || function() {};

    // 其它部分

}
function makeRequest(url, timeout = 2000, callback = function() {}) {

    // 其余代码

}

function fun_a(url = 'a', timeout = 2000, callback){ 
    console.log('我执行了');
    // callback();
}
fun_a();

function fun_b(url){
    console.log(url);
}
fun_b();

let value = 5;

function getValue() {
    return value++;
}


function add(first, second = getValue) {
    return first + second;
}
// function add(first, second = getValue()) {
//     return first + second;
// }

console.log(add(1, 1));     // 2
console.log(add(1));        // 6
console.log(add(1));        // 7

function add_1(first, second = first) {
    return first + second;
}

console.log(add_1(1, 1));     // 2
console.log(add_1(1));        // 2

function add_2(first = second, second) {
    return first + second;
}

console.log(add_2(1, 1));         // 2
console.log(add_2(undefined, 1)); // 抛出错误