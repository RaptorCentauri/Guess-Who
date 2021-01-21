class Player{
    allCandidates;
    hiddenCandidates;
    currentCandidates

    myCharacterID
    myCharacter;

    constructor(roster, myCharacterID){
        this.myCharacterID = myCharacterID
        this.allCandidates = roster;
        this.currentCandidates = roster;
        this.hiddenCandidates = [];
        this.myCharacter;
        this.setMyCharacter();
    }

    setMyCharacter(){
        this.myCharacter = this.allCandidates[this.myCharacterID]
    }

    sayCandidates(){
        return this.allCandidates
    }


    sayCurrentCandidates() {
        return this.currentCandidates
    }


    sayHiddenCandidates() {
        return this.hiddenCandidates
    }

    sayMyCharacter(){
        return this.myCharacter
    }

    //guess gender
    guessOpponentGender(guess, oppenentGender){
        if (guess === oppenentGender) {
            console.log(`Yes, it is a ${guess}`);
            this.removeCandidateGender(guess)
        } else {
            console.log(`No, it is NOT a ${guess}`);
            this.removeCandidateGenderOpposite(guess)
            //hide all of guess Gender
        }
    }

    removeCandidateGender(guess){
        let newHiddenCandidates = this.currentCandidates.filter( candidate => candidate.sayGender() === guess)
        this.hiddenCandidates = [...newHiddenCandidates]

        let newCurrentCandidates = this.currentCandidates.filter(candidate => candidate.sayGender() != guess)
        this.currentCandidates = [...newCurrentCandidates]
    }

    removeCandidateGenderOpposite(guess) {
        let newHiddenCandidates = this.currentCandidates.filter(candidate => candidate.sayGender() != guess)
        this.hiddenCandidates = [...newHiddenCandidates]

        let newCurrentCandidates = this.currentCandidates.filter(candidate => candidate.sayGender() === guess)
        this.currentCandidates = [...newCurrentCandidates]
    }

}


export default Player
