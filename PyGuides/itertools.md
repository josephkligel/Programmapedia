# Itertools
Legend:
>("): same as above or before

## ----------------------Built-in----------------------------
No import
### Usage:
	-reverse a string: str[::-1]
	-reverse an array: a.reverse()
	-converters: list(), tuple(), dict(), int(), str(), float()
	-slice an amount of items from a list: a[-3:None:None]
		-alternative: a[:-4:-1]
	-return a numbered array: enumerate(<array>)
	-deconstruct/multiple assign: a, *b, c = [1, 2, 3, 4]

## ---------------------Collections-----------------------
Import collections
### Methods:
	-next(): iterate without index
	-iter(): create an iterator
	-Counter(): counts the items in a list and assigns each count as a value
	-defaultdict(<function>): Create a dictionary with a default value
		-e.g. defaultdict(list) will always return a list, even if a key doesn't exist
	-deque(<iterable sequence>): stack with more features
		-append, appendleft: appends one item
		-extend, extendleft: appends list
		-rotate: move a number of items to front(e.g. +3) or back(e.g. -3) 
		-pop, popleft

## --------------------Itertools------------------------
Import itertools
### Methods:
	-chain.from_iterable(<iterable sequence>): create a joined iterable
		-can be turned into a list

unknown: group_adjacent = lambda a, k: zip(*([iter(a)] * k))
