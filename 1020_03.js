// 삼황연산자

const a = 5;
const result = a % 2 === 0 ? '짝수' : "홀수";
console.log(result);

//b가 10보다 큰지, 작은지를 판별하는 식을 입력하세요.
//b는 10보다 크다, b는 10보다 작다.

const b = 0;
const result2 = b > 10 ? 'b는 10보다 크다': 'b는 10보다 작다.';
console.log(result2);

//내가 입력한 수가 10보다 큰지 매번 판별

function overTen(number) {
    const isOver = number > 10 ? '10보다 크다' : '10보다 작다'
    console.log(isOver)
}

overTen(13);
overTen(3);
overTen(5);
overTen(-1);

// 직사각형의 크기를 구하는 함수(가로, 세로) -> 직사각형의 크기는 ___ 입니다.

function getRectArea(a,b) {
    const result = a*b;
    console.log(`사각형의 크기는 ${result}입니다.`)

}

getRectArea(2,5)

function isAdult(username, age) {
    const result = age >- 18 ? "성인" : "미성년자"
    console.log(`${username}님은 ${result} 입니다.`)

}

isAdult("홍길동",20);


function getAerage(a,b,c) {
    const average = (a+b+c)/3
    console.log(`당신의 평균점수는 ${average}점 입니다.`)

}

getAerage(80,90,80)



const id = "ghost"
const pw = 1234;

function checkLogin(userID,userPw) {
    const result = userID === id && userPw === pw ? "로그인 성공" : "로그인 실패"
    console.log(result);

}

checkLogin('ryts59018',1234)






