class Character {
    id: number;
    name: string;
    gender: string;
    glasses: boolean;
    hat: boolean;
    race: string;
    hair: string

    constructor(id: number, name:string, gender:string, glasses:boolean, hat:boolean, race:string, hair:string){
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.glasses = glasses;
        this.hat = hat;
        this.race = race;
        this.hair = hair;
    }

    sayID(){
        return this.id
    }

    sayName(){
        return this.name
    }

    sayGender(){
        return this.gender
    }

    sayGlasses() {
        return this.glasses
    }

    sayHat() {
        return this.hat
    }

    sayRace() {
        return this.race
    }

    sayHair() {
        return this.hair
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
