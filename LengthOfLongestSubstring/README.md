Problem Statement:
Use a growing window that expands as long as the condition (no repeating characters) is met. If a repeat is encountered, shrink the window from the left until the condition is satisfied again.
Example input: s = "abbcab" => output = 3;



Processing Each Character
Step	right	s[right]	charSet Before	Action	charSet After	left	maxLen
1	0	'a'	{}	Add 'a'	{'a'}	0	1
2	1	'b'	{'a'}	Add 'b'	{'a', 'b'}	0	2
3	2	'b'	{'a', 'b'}	Remove 'a', Remove 'b' (move left)	{'b'}	2	2
4	3	'c'	{'b'}	Add 'c'	{'b', 'c'}	2	2
5	4	'a'	{'b', 'c'}	Add 'a'	{'a', 'b', 'c'}	2	3
6	5	'b'	{'a', 'b', 'c'}	Remove 'b', Move left	{'a', 'c'}	3	3
Final Output: 3 (The longest substring without repeating characters is "bca" or "cab")