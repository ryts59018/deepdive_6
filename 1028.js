const animals = ['lion','tiger','puppy','parret','cat']

for(let animal of animals){
    console.log(animal);
}

for(let i =0; i <animals.length; i++) {
    console.log(animals[i])
}

console.clear();

animals.forEach((animal,idx)=> {
    if (idx === 3) {
console.log(`${idx}. ${animal}`);
    }
});



const numbers = [10,20,30,40,50]


    
    numbers.forEach((number,idx)=> {
        if (number >= 40 ) {
            console.log(`${number}`)
        }
    })

        numbers.forEach((number,idx)=> {
        if (number >= 40 ) {
            console.log(`${idx}`)
        }
    })




    
 const words = ['hamburger','milk','coffee', 'juice','chocolate cookie']


        words.forEach((word)=> {
        if (word.length >= 6 ) {
            console.log(word);
        }
    });

