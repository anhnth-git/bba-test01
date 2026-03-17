//Bài 1
// let characters = [
//     {name: "tuan", level: 1, health: 30000}, 
//     {name: "anhnth", level: 9, health: 356}, 
//     {name: "ngoc", level: 6, health: 1001}
// ]
// let charactersPowerUp = characters.map(function(characters){
//     return {
//         name :characters.name.toUpperCase(),
//         level: characters.level*2,
//         health: characters.health*3
//     }
// });
// const possibleWinners = characters.filter(characters => characters.health >1000)
// function createCharacters(){
//     console.log(charactersPowerUp); 
//     console.log(possibleWinners)
// }
// createCharacters(characters);
// Bài 2
let player = [
    { name: "Mario", score: 1000 },
    { name: "Hai", score: 4562 },
    { name: "Cho", score: 9573 }
]
const sapXep = player.sort((a, b) => b.score - a.score);
// console.log(sapXep);

const ketQua = sapXep.map((item, index) => {
    if (index === 0) return { item, icon: "🥇" };
    if (index === 1) return { item, icon: "🥈" }
    if (index === 2) {
        return { item, icon: "🥈" };
    }
    return item;
})

console.log(ketQua)

