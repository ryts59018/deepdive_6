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


function capital(x,y,z){
    const isThatTrue = x === "Finland" && y === "Anthony" && z === "Helsinki"
    const result = isThatTrue ? "맞다" : "틀리다"
    console.log(`${y}가 사는${x}의 수도는${z}가${result}`);
}

capital("Finland","Anthony","Helsinki")



function adventure(x,withFamily){
    const canRide = x > 130 || withFamily === true
    const result = canRide ? "있다" : "없다"
    console.log(`키${x}cm에 보호자동반${withFamily}인 한솔이는 해당 어드벤처 기구에 탑승할 수 ${result}`);
}

adventure(125,false)



function dungeon(x,withParty){
    const canJoin = x <= 120 || withParty === false
    const result = canJoin ? "있다" : "없다"
    console.log(`레벨${x}에 파티가${withParty}인 정인이는 해당 게임의 던전에 들어갈 수 ${result}`);
}

dungeon(120,false)


function glp(x,y,z){
    const canDo = x >= 80 || y === false && z >= 80 
    const result = canDo ? "있다" : "없다"
    console.log(`몸무게가 ${x} kg ,식욕을 제어할 수 ${y} 는 연수는 위고비를 맞을 수 ${result}`);
}

glp(50,true,50)



function seat(x,y,z){
    const canSeat = x === "어린이" || y === "노약자" || z === "장애인" 
    const result = canSeat ? "있다" : "없다"
    console.log(`${x},${y},${z}모두 가능한 좌석에 치현이는 ${x}라 앉을 수 ${result}`);
}

seat("어린이","노약자","장애인")



function dentist(x){
    const goDentist = !(x === "사랑니")
    const result = goDentist ? "있다" : "없다"
    console.log(`치현이는 ${x}가 ${result}`);
}

dentist("사랑니")


function exam(x,y){
    const codeExam = !(x === true) && y >= 80
    const result = codeExam ? "합격" : "불합격"
    console.log(`${y}점을 받은 혜성이는 이 코딩시험에 ${result}했다.`);
}

exam(false,98)


function yunha(x,y,z){
    const yunhaSong = !(x === "윤하") && y ===5 || !(z === "텔미텔미")
    const result = yunhaSong ? "맞다" : "틀리다"
    console.log(`${x}와 함께 만든 윤하의 노래는 ${y}월에 오픈한 새 앨범이 ${result}`);
}

yunha("토이",5,"오늘 서울은 하루종일 맑음")
