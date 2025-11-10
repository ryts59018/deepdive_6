// 공배수 구하기

function getNumber(num, x){
let result = num % x === 0 ? "공배수" : "공배수아님"
console.log(result);
return result

}

getNumber(60, 2) // 뒤에 있는 x가 앞에있는 num의 공배수이면 1 출력, 아니면 0을 출력
getNumber(60, 7)