const users = [149,180,192,170]
const ghost = 167;
let count = 0

for(let i=0;i<users.length; i++) {
    if(ghost < users[i]){
        count = count + 1
}
}

    console.log(`Ghost보다 키가 큰 사람은 총 ${count}명 입니다.`);