// Code your solutions in this file
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {                             //difference between writing gifts in line 10 and 15 
    for (let i = 0; i < gifts.length; i++){
    console.log(`Wrapped ${gifts[i]} and added a bow!`)
    debugger
}
return gifts; }                                               //y do we need the return
wrapGifts(gifts)


const names = ["Bob", "Jeff", "Sam"]

function writeCards(names, event){
    const thankYou = []
    for (let a = 0; a < names.length; a++){
     thankYou.push(`Thank you, ${names[a]}, for the wonderful ${event} gift!`)
    }
    return thankYou
}
//console.log(writeCards(names,"Birthday"))

/*function countDown(number) {
    for (let number = 11; number > 0; number--){
        console.log(`${number}`)
    }
    return number       //y work with return and withoiut
}
countDown(4)*/

function countDown(number) {
    while (number >= 0){
        console.log(number)
        number --
    }
}