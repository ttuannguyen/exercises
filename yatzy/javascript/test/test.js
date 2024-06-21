const assert = require('assert');
const Yatzy = require('../src/index');

describe("Yatzy", () => {
    describe("Scoring", () => {
        let game;
        beforeEach(() => {
            game = new Yatzy();
        });

        it("Works", () => {
            game.play([2,2,2,2,3,3]);
            assert.equal(game.calculateScore(), 8);
        })

        describe("Ones", () => {
            it("Returns the correct amount", () => {
                game.play([1,1,2,3,4,]);
                assert.equal(game.ones(), 2);
            })

            it("Returns 0 when no dice match", () => {
                game.play([2,2,1,4,5]);
                assert.equal(game.ones(), 1);
            })
        });

        describe("Twos", () => {
            it("Returns the correct amount", () => {
                game.play([1,2,2,3,2,4]);
                assert.equal(game.twos(), 3);
            })

            it("Returns 0 when no dice match", () => {
                game.play([1,1,3,4,5]);
                assert.equal(game.twos(), 0);
            })
        });

        describe("Threes", () => {
            it("Returns the correct amount", () => {
                game.play([1,1,3,3,4]);
                assert.equal(game.threes(), 2);
            })

            it("Returns 0 when no dice match", () => {
                game.play([2,2,1,4,5]);
                assert.equal(game.threes(), 0);
            })
        });
        
        describe("Fours", () => {
            it("Returns the correct amount", () => {
                game.play([1,1,4,4,4]);
                assert.equal(game.fours(), 3);
            })

            it("Returns 0 when no dice match", () => {
                game.play([2,2,3,5,5]);
                assert.equal(game.fours(), 0);
            })
        });

        describe("Fives", () => {
            it("Returns the correct amount", () => {
                game.play([1,1,2,5,5]);
                assert.equal(game.fives(), 2);
            })

            it("Returns 0 when no dice match", () => {
                game.play([2,2,3,4,4]);
                assert.equal(game.fives(), 0);
            })
        });
    });
});
