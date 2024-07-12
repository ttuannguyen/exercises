An infamous gang of cybercriminals named “The Gray Cyber Mob”, which is behind many hacking attacks and drug trafficking scandals, has recently been targeted by the FBI. After intercepting a few messages which looked to be nonsense at first, the agency realized that the group indeed encrypts their messages, and studied their method of encryption.

The essages consist of lowercase Latin letters only, and every word is encrypted separately as follows:

Convert every letter to its ASCII value.
Add 1 to the first letter, and then for every letter from the second one to the last one, add the value of the previous letter.
Subtract 26 from every letter until it is in the range of lowercase letters a-z in ASCII. Convert the values back to letters.
For instance, to encrypt the word "crime"

Step 1:	99
Step 2:	100
Step 3:	100
Result:	d
The FBI needs an efficient method to decrypt messages. Write a function named decrypt(word) that receives a string that consists of small Latin letters only, and returns the decrypted word.

Since the function should be used on messages with many words, make sure the function is as efficient as possible in both time and space. Explain the correctness of your function, and analyze its asymptotic runtime and space complexity.

Note: Most programming languages have built-in methods of converting letters to ASCII values and vica versa. You may search the internet for the appropriate method.

Examples:

input:  word = "dnotq"
output: "crime"

input:  word = "flgxswdliefy"
output: "encyclopedia"

Hint 1
Problems like these lend themselves to reverse engineering. To effectively reverse engineer something, you'll need numberous examples. Can you generate a few encryptions based on the above? Can you find a way to do this that is not manual?


Hint 2
Stuck? Try encrypting one letter at a time, each letter making use of the previously-decrypted letters that have come before.


Challenge 1
Did you arrive at the equation enc[n] = dec[n] + secondStep[n-1] + 26m?


Challenge 2
Could you hit O(N) complexity in both time and space?


Challenge 3
How does your encryption function on long words? How about many short words? Which is more efficient?