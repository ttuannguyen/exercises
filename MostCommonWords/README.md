We want to find the most frequently used words in a long string of text. Write a function most_common_words(text) that returns an array containing words with their frequencies, sorted from most common to least common, with ties broken by alphabetic order.

For greater accuracy, your solution should ignore punctuation and capitalization.

Python
def most_common_words(text):
  # Your code here
Examples
For example, given the string

Python
text = 'It was the best of times, it was the worst of times.'
then most_common_words(text) should return


Python
Python
[
  ('it', 2),
  ('of', 2),
  ('the', 2),
  ('times', 2),
  ('was', 2),
  ('best', 1),
  ('worst', 1)
]

Hint 1
You can use a built-in function like split to convert a string into an array of words.


Hint 2
Which data structure will make it easiest to map words to their frequencies?


Hint 3
You can put the word frequencies in a hash table, and then return the entries sorted by their count.


Challenge 1
Does your solution correctly account for punctuation and capitalization? ('It' vs. 'it.')