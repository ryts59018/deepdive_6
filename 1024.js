const numbers = [32,20,5,12,0,45]
const str = 'Hello, World'
let result = 0
let count = 0

//for문을 이용해서 numbers의 모든 숫자를 console에 찍기

for(let i=0; i< numbers.length; i++) {
    //홀수만 출력하겠다.
    //만약에 '숫자'가 짤수라면 찍지 않고, 홀수라면 찍을게. (오늘미션)

   console.log(numbers[i]);
}


 //1번 문제
for(let i=0; i< numbers.length; i++) {
    if (numbers[i]%2 === 1)
    console.log(`${numbers[i]} 는 홀수`)
}   

//2번 문제
console.log(str.length)


//3번 문제

for(let i=0; i< numbers.length; i++) {
    result = result + numbers[i];}
    console.log(`${numbers}의 총 합은 ${result}입니다.`);


//4번 문제

for(let i=0; i< numbers.length; i++) {
    if (numbers[i]>=20){
    count++;
}}

    
console.log(count);



