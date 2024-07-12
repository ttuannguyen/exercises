Remove Adjacent Duplicates in String. You are given a string s and an integer k. Write a function to recursively remove k adjacent duplicates from s where the "adjacent" characters are equal.

For instance, if k is 3 and the string is "daaabbbaa", since we have "aaa" and "bbb" as adjacent triples, the function should transform the string to "daa", removing the "bbb" first and then the remaining "aaa".

Examples:

s = 'abcd'
k = 2
output: 'abcd'

s = 'deeedbbcccbdaa'
k = 3
output: 'aa'

s = 'pbbcggttciiippooaais'
k = 2
output: 'ps'

s = 'aaabbbacd'
k = 3
output: 'acd'
In each example, output refers to the resulting string after all possible k adjacent duplicates have been removed.