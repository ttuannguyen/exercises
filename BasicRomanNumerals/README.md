Have the function BasicRomanNumerals(**str**) read **str** which will be a string of Roman numerals. The numerals being used are: **I** for 1, **V** for 5, **X** for 10, **L** for 50, **C** for 100, **D** for 500 and **M** for 1000. In Roman numerals, to create a number like 11 you simply add a 1 after the 10, so you get **XI**. But to create a number like 19, you use the [subtraction notation](https://en.wikipedia.org/wiki/Roman_numerals#Roman_numeric_system) which is to add an I before an X or V (or add an X before an L or C). So 19 in Roman numerals is **XIX**. The goal of your program is to return the decimal equivalent of the Roman numeral given. For example: if **str** is "XXIV" your program should return **24**

### Examples
Input: "IV"Output: 4
Input: "XLVI"Output: 46