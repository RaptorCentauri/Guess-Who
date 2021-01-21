import Player from './logic/player'
import roster from './logic/roster';


const selectCharacterIDs = () => {
    let randOne = Math.floor(Math.random() * roster.length-1);
    let randTwo = Math.floor(Math.random() * roster.length - 1);

    if(randOne === randTwo){
        selectCharacterIDs();
    }
    else{
        let randomNums = [];
        randomNums.push(randOne)
        randomNums.push(randTwo);
        return randomNums;
    }
}

let characterIDs = selectCharacterIDs()

const playerOne = new Player(roster, characterIDs[0] );
const playerTwo = new Player(roster, characterIDs[1]);


let pOneChar = playerOne.sayMyCharacter();
let pTwoChar = playerTwo.sayMyCharacter();


console.log(pOneChar);
console.log(pTwoChar.sayName());

// console.log('p1 current before', playerOne.sayCurrentCandidates());




// playerOne.guessOpponentGender('man', pTwoChar.sayGender())

playerOne.guessOppenentCategory(pTwoChar, 'Gender', 'man')
// playerOne.guessOppenentCategory('man', 'Glasses', pTwoChar)




// playerOne.guessOpponentGender('woman', pTwoChar.sayGender())

// console.log('p1 current after', playerOne.sayCurrentCandidates());






