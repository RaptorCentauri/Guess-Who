import Character from '../src/logic/character'

const James = new Character(0,'James','man', false, true,'white','brown');
const Jenny = new Character(1,'Jenny','woman', true, false, 'hispanic', 'black');


describe('James', ()=>{
    test('is a man',()=>{
        expect(James.guessGender('man')).toBeTruthy();
    })
    test('does not have glasses', () => {
        expect(James.guessGlasses(false)).toBeTruthy();
    })
    test('does have hat', () => {
        expect(James.guessHat(true)).toBeTruthy();
    })
    test('is white', () => {
        expect(James.guessRace('white')).toBeTruthy();
    })
    test('has brown hair', () => {
        expect(James.guessHair('brown')).toBeTruthy();
    })
})

describe('Jenny',()=>{
    test('is not a man', ()=>{
        expect(Jenny.guessGender('man')).toBeFalsy();
    })
    test('is a woman', ()=>{
        expect(Jenny.guessGender('woman')).toBeTruthy();
    })

})