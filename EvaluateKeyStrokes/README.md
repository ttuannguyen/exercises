Let's take a look at an example to see how we might use a `Stack` in solving a problem.

We want to write an `evaluate_keystrokes` method that will take as input a string that represents a series of keystrokes. The string may contain some number of occurrences of the `<` character, which indicates a backspace. We want our method to return the "interpreted" version of the string.

For example:

`evaluate_keystrokes('abcde<fg<h')
# => 'abcdfh'

evaluate_keystrokes('abcd<<<fg<h')
# => 'afh'

evaluate_keystrokes('<fg<h')
# => 'fh'`