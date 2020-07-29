# C++ Reference Guide

Reference site: https://en.cppreference.com/w/cpp/header

Legend:
>("): Same as above or near
>etiam: Also in C programming
>'': Single quoted text signifies a litteral piece of text.
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
		* <iostream>: For standard libraries
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
		* read-only
	* unsigned: 'unsigned int x{1}'
		* Can't be negative

### Operators
The operators used in C++
#### Usage:	
	* Give priority to code: (*vector_ptr)[0]
	* sizeof(var): gets the byte-size of a variable type, variable, or literal
	* null pointer: nullptr
	* &<var>: Declare reference or get address of a variable
	* Reference another variable: string &theBoss = mrSamberg
		* Print reference value: cout << theBoss
	* Get address: string *theBoss; theBoss = &mrSamberg
		* Print reference from pointer: cout << theBoss
		* Print address of variable: cout << &<variable_name>
	* pointer to memory location: int *number{&x}
		* See pointer section for more
### Pointers		
Points to a memory location
### Usage:
	* Disclaimer: Always initialize pointers, e.g. int *number {nullptr}
	* Pointer to variable: int *number{&x}
		* Assign new value to variable using pointer: *number = 200
		* Dereference and follow pointer to value(s): cout << *number << endl
		* Print address: cout << number << endl, i.e. no operators before name
	* Pointer to array: int *numbers{digits}
		* Disclaimer: No ampersand before variable pointed to
		* Print address: cout << numbers, i.e. with no subscription
		* Print element: cout << (*numbers)[0]
		* Array Pointer next address: (numbers++), i.e. next element
		* Dereference with pointer arithmetic: *(numbers++) 
	* Pointer to vector: vector<string> *vector_ptr {&<array>}
		* Disclaimer: Ampersand is included when declaring
		* Print element: cout << (*vector_ptr)[0], i.e. always with parentheses
	* Comparing pointers: cout << (p1 == p2) 
		* returns true if point to same thing
	* Pointer Arithmetic: int_ptr++
		* Next element address in pointer array: array++
		* Previous element address: array--
		* Next element in pointer array: *(array++) or *array++
		* Previous element: *(array--)
	* Const pointers: const int *score_ptr {&high_score}
		* Data stays constant: const int *score_ptr {&high_score}
		* Pointer stays constant: int *const score_ptr {&high_score} 
	* Passing/Function pointers: void double(int *int_ptr){*int_ptr *= 2}
		* Calling pointer: *int_ptr argument will either be the address of a variable or the naked variable name (e.g. x and not *x)
		* Assigning pointer argument's value to var: int num = *int_ptr

### References
An alias for a variable
#### Usage:
	* Disclaimer: Must be initialized when declared
		* 1: Cannot be null
		* 2: Once initialized cannot be reference to another variable
		* 3: A reference is a constant pointer that is automatically dereferenced
	* Declare and initialize ref: int &ref = num
	* Change value of ref and var: ref = 300, i.e. now ref's and num's value is 300
	* Loops: for(auto &str: stooges) cout << str == 'Funny'
		* Disclaimer: To manipulate the values use reference and copies 

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
		* loops through a collection using the var name before the colon
		* only works on collections, like strings and arrays
	* while: 'while(x < y) do something'
	* do while: do{something}while(condition)

### Functions
Logic modularization in C++
#### Usage:
	* declaring a function: int add_number(int a, int b){return a + b}
	* prototyping functions: int add_number(int a, int b)
		* Functions have to be prototyped if they are called somewhere before their defined
		* A prototype only consists of the header information and not the body

### Memory Allocation
Dynamic memory allocation on the heap, a free-for-all
#### Usage:
	* Newly allocated memory: int *int_ptr {nullptr}; int_ptr = new int
		* Specific size: int_ptr = new int[<size>]
	* Free allocated storage: delete int_ptr
		* Delete array storage: delete [] <some_array>

### Header Files
Including and creating external header files
#### Usage:
	* Create header file: touch Account.h
	* Check if file has been defined: #ifndef _ACCOUNT_H_
	* If not defined: #define _ACCOUNT_H_
	* Close prepocessor declaration: #endif
	 

## -------------------- Classes -------------------------

### Classes
Abstract fashion of re-utilizing code
#### Usage:
	* Declare class: class Player {...}
		* Pointer: Player *frank_ptr = new Player()
		* Array: Player players[] {frank, hero}
		* Vector: vector<player> {player}
	* Disclaimer: Capitalize class name and always end class block with semicolon
	* Instance of class: Player frank
	* Access methods and attributes: frank.exp

### Access Modifiers
The level of access on classes and their properties
#### Usage:
	* private: class Player{private: ...}
		* Definition: Only accessable with in the class not outside of the class
	* public: class Player{public: ...}
		* Definition: Accessable to all

### Methods	
Class functions
#### Usage:
	* Disclaimer: Make class public if accessing properties directly
	* Access inline methods: frank.talk()
		* Pointer: (*frank_ptr).exp or frank_ptr->exp 
	* Access external methods: frank::talk()

### Constructor
Initialize instance of a class
#### Tips:
	* Info: Classes automatically create no-args constructors
	* Disclaimer: If constructor is provided, default constructor no longer works
#### Creating Constructor and Destructor:
	* Declaration of constructor in class: Player(string name)
		* External declaration: Player::Player(string name)
	* Overload contructor: Player(std::string name); Player(string style)
		* Info: Classes can have as many constructors as needed
	* Destructor: ~Player()
		* Definition: Destroys instance
		* Info: Invoked automatically when obj is destroyed
			* 1: No return type nor parameters
			* 2: Only 1 destructor per class
			* 3: Useful for releasing memory and other resources
	* Constructor initializing lists: Player(string n):name{n}{} 
		* Disclaimer: Use colon to initialize lists
			* 1: make sure list in order of the declaration of parameters
		* Definition: Follows the parameter list and initializes automatically
	* Delegating constructors: Player():Player("None", 0, 0){}
		* Definition: Delegates to a default constructor (e.g. 3 args constructor)
		* Disclaimer: When delegating use either "{" or "("
		* Info: Can use delegation instead of contructor lists
	* Default parameters: Player(string n="No name", int health=0)
#### Initializing Contructor:	
	* Initializing contructor var: Player frank or Player frank = Player()
	* Initializing constructor with args: Player frank {"Frank", 100, 13}
	* Initializing pointer: Player *enemy = new Player
	* Disclaimer: Default parameters during declaration only
#### Copying Constructor:	
	* Create instructor: Player::Player(const Player &source){...}
	* Disclaimer: Make copy instructor constant
#### Const Correctness:
	* Definition: Getting access to class methods when instance is declared as a constant
	* Usage: string get_name()const {return name;}
		* const qualifier: Tells the class const instances can access method
#### Static Class Members
	* Definition: Class wide information that doesn't belong to an object or instance
	* Declare static data member: static int num_players
	* Declare static method: static int get_num_players()

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
	* 'std::vector<int> nums': create nums vector
	* Access element: nums[1]
	* 'vector<vector<int>> grid': create mult-dimensional vector
	* nums.push_back(2): Adds 2 to end of nums vector
	* Clear vector: nums.clear()
	* Size of vector: nums.size()

### iomanip
Input/output stream manipulator
#### Usage:
	* '#include <iomanip>': link library
	* 'cout << fixed << setprecision(1);': Round decimals places to one

### climits
Get the limit info of variable types
#### Usage:
	* include: #include <climits>
	* min methods: CHAR_MIN, SHRT_MIN, LONG_MIN, LLONG_MIN
	* max methods: (")_MAX

### cctype
Functions for characters
#### Usage:
	* include: '#include <cctype>'
	* Methods: isalpha(<string>), isalnum(), isdigit(), islower(), isupper()
		* isprint(): if printable character
		* ispunct(), isspace()
		* tolower(), toupper()
### cstring
Library for c-style strings
#### Usage:
	* include: #include <string>
	* Methods: strcopy(<copy_to>, <copy_from>), strcat("), strcmp(s1, s2)

### string
Library for c++ strings
#### Usage:
	* include: #include <string>
	* string variable: std::string s1 {"Frank"}
		* initializing part of a variable: string s2{s1, 0, 3}
		* contructor-style initialization: string s3{3, 'x'}, i.e. "xxx"
	* substring: object.substr(start_index, end_index)
		* disclaimer: substr cut up till and excluding the end index
	* find index of character: s1.find("Fra")
	* erase character(s): s1.erase(0, 2)
	* clear string: s1.clear()
	* size: s1.length()
	* swap values of strings: s1.swap(s2) or std::swap(s1, s2)
	* concatanate: s1 += " James"
	* get entire line: getline(cin, s2, 'x')
		* cin: form of input
		* s2: the variable to put to
		* 'x': the delimiter

### iomanip
Manipulate input and output
#### Usage:
	* include: #include <iomanip>
	* set precision: cout << fixed << setprecision(2)
	* Methods: boolalpha

### cmath
Math library
#### Usage:
	* include: #include <cmath>
	* square root: sqrt(<number>)
	* Other Methods: cbrt, sin, cos, ceil, floor, round
	* power: pow(<number>, <power>)

### ctime
Time library 
#### Usage:
	* include: #include <ctime>
	* get time: time(0)
		* 0: gets the time from 1971 to now in seconds

### cstdlib
C library for standard, general functions
#### Usage:
	* include: #include <cstdlib>
	* Generate pseudo-random number: std::rand() % 6 + 1
		* example above: gets a random number between 1 and 6, inclusive
	* seed pseudo-random number generator: std::srand(time(nullptr))
		* Disclaimer: Usually called before rand() to prevent the same sequence
