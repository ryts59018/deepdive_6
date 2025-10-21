// animals라는 변수에 동물이름을 5가지 입력하여 배열변수를 만들고, 동물이름을 출력하시오
const animals = ['kangeroo','cat','puppy','panda',"sloth"]
console.log(animals[2])


for (const animal of animals) {
    console.log(animal);
}

/*
for(초기화 ; 조건식 ; 증감식) {
    실행문
} */

    //0 부터 5까지를 출력한다.

for(let i=0; i< 5; i++) {
    let print = `${i + 1}. ${animals[i]}`;
    console.log(print);
}


