import rawCharacterList from './rawCharacterList';
import Character from './character';

let roster = []

for (const character of rawCharacterList) {
    const newCharacter = new Character(character.id, character.name, character.gender, character.glasses, character.hat, character.race, character.hair);
    roster.push(newCharacter);
}

export default roster;

