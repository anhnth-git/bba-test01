let characters = [
    {name: "tuan", level: 1, health: 30000}, 
    {name: "anhnth", level: 9, health: 356}, 
    {name: "ngoc", level: 6, health: 1001}
]
let charactersPowerUp = characters.map(function(characters){
    return {
        name :characters.name.toUpperCase(),
        level: characters.level*2,
        health: characters.health*3
    }
});
const possibleWinners = characters.filter(characters => characters.health >1000)
function createCharacters(){
    console.log(charactersPowerUp); 
    console.log(possibleWinners)
}
createCharacters(characters);



