function getRectArea(a,b) {
    const result = a*b;
    console.log(`사각형의 크기는 ${result}입니다.`)

}

getRectArea(10,5)


function getAerage(a,b,c) {
    const average = (a+b+c)/3
    console.log(`당신의 평균점수는 ${average}점 입니다.`)

}

getAerage(85,95,89)



function getCircleArea(x) {
    const result = x * x * 3.14;
    console.log(`반지름이 ${x}인 원의 넓이는 ${result}입니다.`)

}

getCircleArea(5)



function calcDiscount(x,y) {
    const result = x * (y / 100);
    console.log(`원래가격 ${x}원에서 ${y}%할인되어, 최종가격은 ${result}원 입니다.`)

}

calcDiscount(15000,50)


function getRemainder(x,y) {
    const result = x / y
    console.log(`${x}를 ${y}로 나눈 나머지는 ${result}입니다.`)

}

getRemainder(4,2)


function getRectPerimeter(x,y) {
    const result = (x + y) * 2
    console.log(`가로${x}cm, 세로${y}cm인 사각형의 둘레는 ${result}입니다.`)

}

getRectPerimeter(5,8)



function checkPass(x) {
    const result = x > 60 ? "합격" : "불합격"
    console.log(result);

}

checkPass(76)



const city = "서울특별시"

function canJoinEvent(x,y) {
    const result = x >= 20 && y == city ? "이벤트 참여가 가능합니다" : "이벤트 참여가 불가능합니다" 
    console.log(result);

}

canJoinEvent(25,"서울특별시")




const family = "부모동반"

function canWatchMovie(x,y) {
    const result = x >= 15 && y == family ? "관람가능" : "관람불가" 
    console.log(result);

}

canWatchMovie(8,"혼자")




function isWeekend(x) {
    const result = x == "토" || x == "일" ? `입력하신 ${x}요일은 주말입니다.` : `입력하신 ${x}요일은 평일입니다.` 
    console.log(result)

}

isWeekend("월")







