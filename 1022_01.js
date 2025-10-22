const numbers = [3,17,21,30,9]
let result = 0;


for(let i=0; i< 5; i++) {
    let print = `${numbers[i]}`;
    console.log(print);
}

for(let i=0;i<numbers.length; i++) {
    result = result + numbers[i];}
    console.log(`${numbers}의 총 합은 ${result}입니다.`);


const str = 'Hello World';
console.log(str.length);