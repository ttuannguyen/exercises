import math
import random

class Yatzy:

    def __init__(self):
        self.dice = []

    def roll(self):
        return int(math.ceiling(random.uniform(0, 1) * (6-1+1) + 1))

    def play(self, values=[]):
        if len(values) == 0:
            self.dice = [this.roll(), this.roll(), this.roll(), this.roll(), this.roll()]
        else:
            self.dice = values


    def ones(self):
        count = 0
        for die in self.dice:
            if die == 1:
                count = count + 1
        return count

    def twos(self):
        count = 0
        for die in self.dice:
            if die == 2:
                count = count + 1
        return count

    def threes(self):
        count = 0
        for die in self.dice:
            if die == 3:
                count = count + 1
        return count

    def fours(self):
        count = 0
        for die in self.dice:
            if die == 4:
                count = count + 1
        return count

    def fives(self):
        count = 0
        for die in self.dice:
            if die == 4:
                count = count + 1
        return count

    def sixes(self):
        count = 0
        for die in self.dice:
            if die == 6:
                count = count + 1
        return count


    def calculate_scores(self):
        for x in range(0, len(self.dice)):
            score_mapping = {}
            if x == 1:
                score_mapping[1] = self.ones()
            if x == 2:
                score_mapping[1] = self.twos()
            if x == 3:
                score_mapping[1] = self.threes()
            if x == 4:
                score_mapping[1] = self.fours()
            if x == 5:
                score_mapping[1] = self.fives()
            if x == 6:
                score_mapping[1] = self.sixes()

        for value in score_mapping:
            highest_score = 0
            number = score_mapping[value]
            if (value * number) > highest_score and number > 1:
                highest_score = value * number

        return highest_score
