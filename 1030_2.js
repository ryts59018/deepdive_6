//Quiz.1 - Math.abs()를 이용해 두 수의 차 구하기

function getDiff(a,b){
    let result = Math.abs(a - b);
    return result
}

console.log(getDiff(5,10))

//Quiz.2 - 만 나이 반환하는 함수 만들기

//new Date(). getFullYear() 연습
const age = new Date()
console.log(age.getFullYear())

//답
function getAge(birthyear) {
const currentyear = new Date().getFullYear()
let result = currentyear - birthyear;
return result
}
console.log(getAge(2001))

//Quiz.3 - 두 수를 입력받아 나눈 값의 몫만 반환하세요

function getQiotient(a,b){
 let result = Math.floor(a / b)
 return result

}

console.log(getQiotient(15,7))

// '%' => 나머지 나옴 '/' => 몫 나옴

//Quiz.4 - 주어진 배열안의 원소들의 평균값을 구하여 반환하는 함수를 만드세요

const numbers = [3,5,10,2,6,7,9]

function getAverage(numbers){
    const sum = numbers.reduce(
        (accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0)

    let result = sum / 7
    return result
}

console.log(getAverage(numbers))





