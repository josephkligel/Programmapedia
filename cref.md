# Reference of C Language

Legend:
> ("): Same as above or before

## ------------------------ Setup ----------------------

* Install: gcc or clang
* Compile: gcc helloWorld.c -o helloWorld

## ------------------------- Syntax ----------------------

### Predirectives
The statements in a C program that start with a '#' character
#### Usage:
	* Constant: #define PI 3.14
		* Disclaimer: Replaces every instance of the word PI with 3.14

### Data Types
The different types of data in the C programming language
#### Usage: 
	* Types: Character, short, integer, long, float, double, array, structure, union
	* Declaration: char, short, int, long, float, double, type[], struct
	* placeholders: %c, %d(int), %f, %s, %p(memory address), %1u(unsigned int)

### Operators
Operators in C
#### Usage:
	* Increment and decrement: x++, ++x, x--, --x
	* Pointer: *ptr
	* Memory address: &x
	* Size of operator: sizeof(x)
		* Size of array: sizeof(array)/sizeof(array[0])

### Pointer
A pointer is a variable that holds a memory location and an address
#### Info
	* Declared like other types but with '*' prefix.
	* A pointer is assigned to address of another variable.
	* Pointers can also be assigned to allocated chunks of memory, like an array.
#### Disclaimer
	* Must be initialized before used.
	* The pointer data type and its variable data type must match.
#### Usage:
	* Dereference: printf(*p)
	* Print address location: prinf(p)
		* Disclaimer: No '*' for mem adr value.
	* Pointer to a pointer: int **ptr 
		* Definition: represents a pointer to a pointer of a piece of data

## ----------------------------------- Libraries ---------------------------------------

### stdio.h
Standard input and output
#### Output:
	* Print: printf('%s\n')
	* Print line: puts(<string>)
	* Print character: putchar(<character>)
#### Input:
	* scanf('%s',&x)

### string.h
C string library
#### Usage: 
	* strcopy(buff,"str"), strcat(buff, "addstr")

### stdlib.h
C standard library
#### Usage:
	* Output system commands: system(<command>)
	* Memory Allocation: malloc(<byte size>)
