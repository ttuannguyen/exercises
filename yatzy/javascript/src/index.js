module.exports = class Yatzy {
    constructor() {
        this.dice = []
    }

    roll() {
        return Math.floor(Math.random() * (6-1+1) + 1);
    }

    play(values = []) {
        if(values.length == 0) {
            this.dice = [this.roll(), this.roll(), this.roll(), this.roll(), this.roll()];
        } else {
            this.dice = values;
        }
    }

    ones() {
        let count = 0;
        this.dice.forEach(die => {
            if(die == 1) {
                count = count + 1;
            }
        });
        return count;
    }

    twos() {
        let count = 0;
        this.dice.forEach(die => {
            if(die == 2) {
                count = count + 1;
            }
        })
        return count;
    }

    threes() {
        let count = 0;
        this.dice.forEach(die => {
            if(die == 3) {
                count = count + 1;
            }
        })
        return count;
    }

    fours() {
        let count = 0;
        this.dice.forEach(die => {
            if(die == 4) {
                count = count + 1;
            }
        })
        return count;
    }

    fives() {
        let count = 0;
        this.dice.forEach(die => {
            if(die == 4) {
                count = count + 1;
            }
        })
        return count;
    }

    sixes() {
        let count = 0;
        this.dice.forEach(die => {
            if(die == 6) {
                count = count + 1;
            }
        })
        return count;
    }

    calculateScore() {
        // using a hash table to tally up score
        // for each iteration, if the die is a certain number, we invoke the callback function to tally up the count for that number


        // let scoreMapping;
        // fix: initialize scoreMapping outside of the for each loop
        let scoreMapping = {};
        this.dice.forEach(die => {
            // scoreMapping = {} // Issue: it resets to an empty object at each iteration
            if (die == 1) {
                scoreMapping[1] = this.ones()
            }
            if (die == 2) {
                scoreMapping[1] = this.twos()
            }
            if (die == 3) {
                scoreMapping[1] = this.threes()
            }
            if (die == 4) {
                scoreMapping[1] = this.fours()
            }
            if (die == 5) {
                scoreMapping[1] = this.fives()
            }
            if (die == 6) {
                scoreMapping[1] = this.sixes()
            }
        });

        let highestScore;
        Object.entries(scoreMapping).forEach(entry => {
            highestScore = 0;
            const [value, number] = entry;
            if((value * number) > highestScore && number > 1) {
                highestScore = value * number;
            }
        });

        return highestScore;
    }
}
