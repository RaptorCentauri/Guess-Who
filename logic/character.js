class Character{
    constructor(gender, glasses, hat, race, hair){
        this.gender = gender;
        this.glasses = glasses;
        this.hat = hat;
        this.race = race;
        this.hair = hair;
    }

    guessGender(genderGuess){
        genderGuess === this.gender ? true : false
    }

    guessGlasses(glassesGuess){
        glassesGuess === this.glasses ? true : false
    }

    guessHat(hatGuess){
        hatGuess === this.hat ? true : false
    }

    guessRace(raceGuess){
        raceGuess === this.race ? true : false
    }

    guessHair(hairGuess){
        hairGuess === this.hair ? true : false
    }

}