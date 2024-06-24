module.exports = class Yatzy {
    constructor() {
        this.dice = []
    }

    // Optimizing/scalability exercise: 
    // What if we'd like to change the number of sides of the dice and number of rolls?
    
    // Optimization 4:
    // We can make the maxinum # of sides a variable so we can scale it up to anything # of sides we want 
    roll(maximum) {
        return Math.floor(Math.random() * (maximum) + 1);
    }

    play(values = []) {
        if(values.length == 0) {
            this.dice = [this.roll(), this.roll(), this.roll(), this.roll(), this.roll()];
        } else {
            this.dice = values;
        }
    }

    /* Original code:
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

    */

    // Optimization 1:
    // Since each count function implements a for loop to tally up the count of a die, what can we do do make it more DRY?
    // Solution: implement a count function for code reusability
    // With the optimization 2 in place, the above individual tally functions can be discarded

    count(number) {
        let count = 0;
        this.dice.forEach(die => {
            if(die === number) {
                count++;
            }
        })
        return count;
    }

    ones() {
        return this.count(1);
    }

    twos() {
        return this.count(2);
    }

    threes() {
        return this.count(3);
    }

    fours() {
        return this.count(4);
    }

    fives() {
        return this.count(5);
    }

    sixes() {
        return this.count(6);
    }

    // ones() {
    //     let count = 0;
    //     this.dice.forEach(die => {
    //         if(die == 1) {
    //             count = count + 1;
    //         }
    //     });
    //     return count;
    // }

    // twos() {
    //     let count = 0;
    //     this.dice.forEach(die => {
    //         if(die == 2) {
    //             count = count + 1;
    //         }
    //     })
    //     return count;
    // }

    // threes() {
    //     let count = 0;
    //     this.dice.forEach(die => {
    //         if(die == 3) {
    //             count = count + 1;
    //         }
    //     })
    //     return count;
    // }

    // fours() {
    //     let count = 0;
    //     this.dice.forEach(die => {
    //         if(die == 4) {
    //             count = count + 1;
    //         }
    //     })
    //     return count;
    // }

    // fives() {
    //     let count = 0;
    //     this.dice.forEach(die => {
    //         if(die == 5) {
    //             count = count + 1;
    //         }
    //     })
    //     return count;
    // }

    // sixes() {
    //     let count = 0;
    //     this.dice.forEach(die => {
    //         if(die == 6) {
    //             count = count + 1;
    //         }
    //     })
    //     return count;
    // }

    
    calculateScore() {
        let scoreMapping = {};
        // Optimization 2:
        // Since we can pass in the count function the side of the die, we can build our object directly by invoking the count function at each iteration, instead of using the indiviual tally functions 
        this.dice.forEach(die => {
            scoreMapping[die] = this.count(die);
        });
        // console.log(scoreMapping);
        
    
    // calculateScore() {
    //     // using an to tally up score
    //     // for each iteration, if the die is a certain number, we invoke the callback function to tally up the count for that number

    //     // let scoreMapping;
    //     // fixed bug #1: initialize scoreMapping outside of the for each loop
    //     let scoreMapping = {};
    //     this.dice.forEach(die => {
    //         // scoreMapping = {} // Issue: it resets to an empty object at each iteration
    //         if (die == 1) {
    //             scoreMapping[1] = this.ones()
    //         }
    //         if (die == 2) {
    //             // fixed bug #2: originally, the scoreMapping object only points to key 1
    //             // thus, corrected the key of each die accordingly
    //             scoreMapping[2] = this.twos()
    //         }
    //         if (die == 3) {
    //             scoreMapping[3] = this.threes()
    //         }
    //         if (die == 4) {
    //             scoreMapping[4] = this.fours()
    //         }
    //         if (die == 5) {
    //             scoreMapping[5] = this.fives()
    //         }
    //         if (die == 6) {
    //             scoreMapping[6] = this.sixes()
    //         }
    //     });
    //     console.log(scoreMapping);

        // let highestScore;
        let highestScore = 0;
        
        Object.entries(scoreMapping).forEach(entry => {
            // highestScore = 0; // Issue: resetting the score to 0 at each iteration
            const [value, number] = entry;
            if((value * number) > highestScore && number > 1) {
                highestScore = value * number;
            }
        });

        return highestScore;
    }
}

// Testing in the same file:
// Note: we'd need to remove "module.exports =" in the above first
// const testCalculateScore = () => {
//     const game = new Yatzy();

//     // Set dummy data
//     game.play([1, 2, 3, 4, 5]);
//     console.log("Dice values:", game.dice);

//     // Calculate and print the score
//     const score = game.calculateScore();
//     console.log("Calculated Score:", score);
// };

// testCalculateScore();