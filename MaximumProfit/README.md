You and your friend have decided to start an international trading business. You want to earn a profit through some ol' fashioned arbitrage: You'll buy widgets in one country and sell them in another at a higher price. Your friend has already found the current market prices for widgets in cities around the world, and you'd like to use this data to pick which cities to buy and sell widgets in.

Write a function max_profit(prices) that efficiently finds the two cities that maximize your profit (i.e. largest difference in prices).

Input: A dictionary with cities as keys and prices as values Output: An array containing the names of the cities (min, max)

If the prices dictionary is empty, return None/null (depending on the programming language used). If there is 0 profit to be earned, return None/null as well. If you are using C++, return {"", ""} in such cases.

Example
Python
prices = {'London': 72, 'New York': 70, 'Tokyo': 67, 'Miami': 62}

max_profit(prices) # => ['Miami', 'London']

Hint 1
You can think of this as two sub-problems: Finding the lowest price, and finding the highest price.


Hint 2
While you could compare every pair of cities, it's more efficient to find the min and max values.


Hint 3
You can keep track of the lowest and highest values and update them as you iterate through the list.


Challenge 1
Does your solution work in O(N) time and O(1) space? If not, you can be more efficient!


Challenge 2
What happens if the price is the same in every city? Does your function still return different cities?