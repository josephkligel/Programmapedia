# C++ Reference Guide
Legend:
>("): Same as above or near
>etiam: Also in C programming
>': Single quoted text signifies a litteral piece of text.
	* This is a text that can be used in a program

## ---------------------------- Setup -------------------

* Install a C++ compiler: Depends on platform being used
	* Linux: g++
	* Web: Can run C++ programs on cpp.sh website
* compile: g++ -Wall -std=c++14 main.cpp -o main
	* -Wall: Shows warnings
	* -std: Specifies the version of C++ to be used
	* main.cpp: The name of the program to compile
	* -o: The output name for the main.cpp executable

## ---------------------------- Syntax ----------------

### Preprocessor Directives
'#' before a identifier. These are items that are initialized before the compilation of the program.
#### Examples:
	* include: Programs reference and used in a program
		* <iostream>: For libraries
		* "myfile.h": For programmer-built programs
	* define: '#define pi 3.14271'
		* replaces all instances of pi with the literal 3.14271

### using
'using' is the namespace directive. It allows methods to be called without including the namespace everytime a method is called.
#### Examples:
	* 'using namespace std': This statement will declare entire std namespace
		* std::cout then becomes cout

### Double Colons
'::' are the characters used before a method name. It is used with namespaces to identify the correct method to be used.
#### Examples:
	* 'std::cout': cout method from std

### Two Less-Than Signs
'<<' are the characters used to tell c++ to send data to a particular system
#### Examples:
	* std::cout << "Hello, World\n": Send text through std console

### Two Greater-Than Signs
'>>' are the characters used to tell c++ to receive data from a certain system and assign it
#### Examples:
	* std::cin >> variable 

### Variable
Uses of variables
#### Usage:
	* primative types: int, double, float, long, short, char, char*
	* declaration: 'int age';
	* initialization: 'int age = 8;' or 'int age{8};'
	* strings: 'char name[7] = 'Joseph''
		* Always add one byte for '\0'
		* 'char name[]': empty brackets means any size
	* constant: 'const int age{29}'
	* unsigned: 'unsigned int x{1}'
		* Can't be negative

### Operators
The operators used in C++
#### Usage:	
	* sizeof(var): gets the byte-size of a variable type, variable, or literal

### Arrays
Lists of items
#### Usage:
	* 'int numbers[5] {1, 2, 3, 4, 5}' or 'int numbers[5] = {1...}'

### Vectors
Multi-dimensional arrays that are dynamic, have all same types of elements, stored contiguously in memory, elements initialized to zero.
#### Usage:
	* '#include <vector>': Must include library to use vector
	* 'vector <int> test_scores (5)': Create a vector that can hold 5 integer element
		* When using loops with vectors, use unsigned counters
	* 'test_scores[1]' or 'test_scores.at(1)': Access element in vector by index
	* 'test_scores.push_back('a')': push_back adds element to end of vector
	* 'test_scores.size()': Gives the number of elements in the vector 

### Conditional Statements
Do something based on a condition
#### Usage:
	* if: 'if(x < y) do something'
	* else 'if(x > y) do something'
	* else: 'else(x < y) do something'

### Loops
Loops used in C++
#### Usage:
	* for: 'for(int i{}; i < x.size(); i++) do something'
	* for(ranges): 'for(auto score: scores) cout << score << endl;'
		* auto uses the type of the collection
		* loops through a collection
		* only works on collections, like strings and arrays
	* while: 'while(x < y) do something'
	* do while:
	*

## ---------------------- Builtin Packages ---------------

### iostream
Input and output library for C++
#### Usage:
	* '#include <iostream>': first thing to do to use iostream library
	* std::cout << "Hello, World" << std::endl: prints text to console
	* std::cin >> x: assigns input to a variable

### vector
Use vectors
#### Usage:
	* '#include <vector>': link to library
	* 'vector<int> nums': create nums vector
	* 'vector<vector<int>> grid': create mult-dimensional vector

### iomanip
Input/output stream manipulator
#### Usage:
	* '#include <iomanip>': link library
	* 'cout << fixed << setprecision(1);': Round decimals places to one
