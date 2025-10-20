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
    const result = x - (x * y);
    console.log(`원래가격 ${x}원에서 ${y}%할인되어, 최종가격은 ${result}원 입니다.`)

}

calcDiscount(15000,0.5)


function getRemainder(x,y) {
    const result = x / y
    console.log(`${x}를 ${y}로 나눈 나머지는 ${result}입니다.`)

}

getRemainder(4,2)


