// 함수선언식, 함수표현식

// 1. sum() 함수(두 수의 합을 반환)를 함수 선언식으로 만드시오.
// 2. div() 함수(두 수의 나눈값의 몫을 반환) 함수 표현식으로 만드세요 (function 사용)
// 3. remainer() 함수 (두 수의 나눈값의 나머지값을 반환)를 함수 표현식으로 만드세요.


//1
function sum(a,b){
    let result = a+b
    console.log(result);
    return result;
}

//2
const div = function(a,b) {
    let result = Math.floor(a/b);
    console.log(result)
    return result;
};

//3

const remainer = (a,b) => {
    let result = a%b;
    console.log(result)
    return result;
};

sum(3,5)
div(10,3)
remainer(10,3)