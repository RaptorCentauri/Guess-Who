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

    //guessOppenentCategory()
    guessOppenentCategory(opponent, category, guess){
        let oppenentResponse = opponent[`say${category}`]()

        if (guess === oppenentResponse) {
            console.log('correct guess');
            this.removeCandidate(category, guess)
        } else {
            console.log('wrong guess');
            this.removeCandidateOpposite(category, guess)
        }
    }

    removeCandidate(category, guess){
        let newHiddenCandidates = this.currentCandidates.filter(candidate => candidate[`say${category}`]() === guess)
        this.hiddenCandidates = [...newHiddenCandidates]

        let newCurrentCandidates = this.currentCandidates.filter(candidate => candidate[`say${category}`]() != guess)
        this.currentCandidates = [...newCurrentCandidates]
    }

    removeCandidateOpposite(category, guess){
        let newHiddenCandidates = this.currentCandidates.filter(candidate => candidate[`say${category}`]() != guess)
        this.hiddenCandidates = [...newHiddenCandidates]

        let newCurrentCandidates = this.currentCandidates.filter(candidate => candidate[`say${category}`]() === guess)
        this.currentCandidates = [...newCurrentCandidates]

    }

}


export default Player
