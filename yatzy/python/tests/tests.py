import sys

sys.path.append('.')
sys.path.append('..')

import unittest
from games import Yatzy

class TestYatzy(unittest.TestCase):

    def setUp(self):
        self.game = Yatzy()

    def test_works(self):
        self.game.play((2,2,2,2,3,3))
        self.assertEqual(8, self.game.calculate_scores())

    def test_ones(self):
        self.game.play((1,1,2,3,4))
        self.assertEqual(2, self.game.ones())

    def test_ones_no_match(self):
        self.game.play((2,2,3,4,5))
        self.assertEqual(0, self.game.ones())

    def test_two(self):
        self.game.play((1,2,2,3,2,4))
        self.assertEqual(3, self.game.twos())

    def test_twos_no_match(self):
        self.game.play((1,1,3,4,5))
        self.assertEqual(0, self.game.twos())

    def test_threes(self):
        self.game.play((1,1,3,3,4))
        self.assertEqual(2, self.game.threes())

    def test_threes_no_match(self):
        self.game.play((2,2,1,4,5))
        self.assertEqual(0, self.game.threes())

    def test_fours(self):
        self.game.play((1,1,4,4,4))
        self.assertEqual(3, self.game.fours())

    def test_fours_no_match(self):
        self.game.play((2,2,3,5,5))
        self.assertEqual(0, self.game.fours())

    def test_fives(self):
        self.game.play((1,1,2,5,5))
        self.assertEqual(2, self.game.fives())

    def test_fives_no_match(self):
        self.game.play((2,2,3,4,4))
        self.assertEqual(0, self.game.fives())


if __name__ == '__main__':
    unittest.main()
