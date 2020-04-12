# Reference of C Language
Types: Character, short, integer, long, float, double, array, structure
	Declaration: char, short, int, long, float, double, type[], struct
	placeholders: %c, %d(int), %f, %s, %p(mem add), %1u(sizeof)

Operators: x++, x--, &x
	'&': address of variable
	'*': what is pointed to by

Constant: '#define const MEAL' or 'const int MEAL;'

Pointer: A pointer is a variable that holds a memory location and an address
	Declared like other types but with '*' prefix.
	Must be initialized before used.
	A pointer is assigned to address of another variable.
	The pointer data type and its variable data type must match.
	Pointers can also be assigned to allocated chunks of memory.
	Dual Nature: '*p' for val of var. No '*' for mem adr value.

Pointer to a pointer: 'int **ptr' represents a pointer to a pointer of type integer

Libraries:
	stdio.h: printf('%s\n'), scanf('%s',&x), puts(), putchar(), sizeof()
	string.h: strcopy(buff,"str"), strcat(buff, "addstr")
	stdlib.h: system(), malloc()

Memory Allocation: malloc()