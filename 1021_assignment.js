//for.. of 구문 5가지 예제들
const candies = ['blackberry','marshmellow','pumpkin','eyeball','ghost']  

for(const trickOrTrick of candies)
    console.log(trickOrTrick)



const houseworks = ['세탁기돌리기','방청소하기','옷정리하기','설거지하기','환기시키기'] 

for(const doList of houseworks)
    console.log(doList)


const country = ['Filipine','Denmark','America','Japen','Sweden']  

for(const myFriendsHere of country)
    console.log(myFriendsHere)


const today = ['미역국','김치','연어깍두기','우뭇가사리무침']  

for(const menu of today)
    console.log(menu)


const ilike = ['코','딩','은','쉽','다']  

for(const eazy of ilike)
    console.log(eazy)




//for 반복문 5가지 예제들




for(let i=0; i< 5; i++) {
    let print = `${candies[i]},${i + 1}개`;
    console.log(print);
}

for(let i=4; i> -1; i--) {
    let print = `${houseworks[i]},${i + 1}번`;
    console.log(print);
}

for(let i=0; i<5; i++) {
    let print = `${country[i]}에 살고 있는 친구,${i+1}명`;
    console.log(print);
}

for(let i=3; i> -1; i--) {
    let print = `메뉴 : ${today[i]},${i + 1}개 남음`;
    console.log(print);
}


for(let i=0; i< 5; i++) {
    let print = `${i + 1}, ${ilike[i]}`;
    console.log(print);
}


//논리연산자 활용 예제 10가지

function there(x,y) {
    const theyAre = x >= 70 && y === "임산부"
    const result = theyAre ? "노약자" : "어린이" 
    console.log(`나이 ${x}세 이상 ${result}, ${y}는 자리에 앉으세요.`);
}

there(75,"임산부")



function todayIsthe(x,y){
    const todayIs = x === "10.31" && y === "candies"
    const result = todayIs ? "핼러윈" : "평범한 날"
    console.log(`오늘${x}는 ${result}이다.`);
}

todayIsthe("10.21","candies")

