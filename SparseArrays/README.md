There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

Example:
strings = ['ab', 'ab', 'abc']
queries = ['ab', 'abc',' bc']

For each query, add an element to the return array. Results = [2,1,0]

Function Description
Complete the function matchingStrings. The function must return an array of integers representing the frequency of occurence of each query in strings.

matchingStrings has the following parameters:
- string strings[n] - an array of strings to search
- string queries[q] - an array of query strings

Return
- int[q]: an array of results for each query 

