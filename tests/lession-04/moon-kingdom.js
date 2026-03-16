let characters = [{name: "tuan", level: 1, health: 1001}]
let possibleWinners =[];
let charactersPowerUp = characters.map(function(characters){
    return {
        name :characters.name,
        level: characters.level*2,
        health: characters.health*3
    }
});
function createCharacters(mangN){
for(let i=0; i<mangN.length; i++){
    if(mangN[i].health>1000){
        possibleWinners.push(mangN[i]);
    }
}
}
// console.log(charactersPowerUp.name)
createCharacters(characters);
console.log(possibleWinners)
// createCharacters(charactersPowerUp);



