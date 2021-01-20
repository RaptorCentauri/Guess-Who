class Character {
    gender: string;
    glasses: boolean;
    hat: boolean;
    race: string;
    hair: string

    constructor(gender:string, glasses:boolean, hat:boolean, race:string, hair:string){
        this.gender = gender;
        this.glasses = glasses;
        this.hat = hat;
        this.race = race;
        this.hair = hair;
    }

    guessGender(genderGuess:string){
        return genderGuess === this.gender ? true : false
    }

    guessGlasses(glassesGuess:boolean){
        return glassesGuess === this.glasses ? true : false
    }

    guessHat(hatGuess:boolean){
        return hatGuess === this.hat ? true : false
    }

    guessRace(raceGuess:string){
        return raceGuess === this.race ? true : false
    }

    guessHair(hairGuess:string){
        return hairGuess === this.hair ? true : false
    }

}

export default Character;
