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
		* 1: Always delete pointers after done using them, e.g. delete number
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
	* protected: class Player{protected: ...}
		* Definition: Accessible from the base class and classes derived from the base class
		* Disclaimer: Not accessible by objects of base or derived

### Class Data Members
Properties and/or attributes of classes
#### Usage:
	* Declaration of member: std::name;

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
	* Initializing pointer: Player *enemy = new Player()
	* Disclaimer: Default parameters during declaration only
#### Copying Constructor:	
	* Create instructor: Player::Player(const Player &source){...}
	* Disclaimer: Make copy instructor constant
#### Const Correctness:
	* Definition: Getting access to class methods when instance is declared as a constant
	* Usage: string get_name()const {return name;}
		* const qualifier: Tells the class const instances can access method

### Static Class Members
Class wide information that doesn't belong to an object or instance
#### Usage:
	* Declare static data member: static int num_players
	* Declare static method: static int get_num_players()
	* Disclaimer: Static method must be used to retreive static member
### Friends
Granting other classes access to class members
#### Usage:
	* Access to all class members: friend Class Other_Class

### Overloading Operators
Creating altered operators
#### Assignment Operator:
	* Declaring '=' Constructor: Type &operator=(const Type &rhs)
		* Disclaimer: The keyword operator must precede operator symbol
	* Initialize Assignment Constructor: Type &Type::operator=(const Type &rhs){...}
		* Examples: See cpp_programs/playground/Overloading_Operators folder
#### Move Operator:
	* Declaring Move Constructor: Type &operator=(Type &&rhs)
		* Disclaimer: rhs should not be constant and should cotain two &'s
	* Initializing Move Constructor: Type &Type::operator=(Type &&rhs){...}
		* Examples: See cpp_programs/playground/Overloading_Operators folder
#### Unary Operator:
	* Declaring '+': Type operator+(const Type &rhs)
	* Initializing '+': Type Type::operator+(const Type &rhs){...}
	* Declaring '-': Type operator-()
	* Initializing '-': Type Type::operator-(){...}
#### Increment/Decrement Operator:
	* Declaring '++':
	* Initializing '++':
	* Declaring '--':
	* Initializing '--':
#### Conditional Operators:
	* Declaring '==' or '!=': Type operator==(const Type &rhs)const
		* Disclaimer: Make constructor and paramater constant
	* Initializing: Type Type::operator==(const Type &rhs)const{...}
#### Global Operators:
	* Declaring: friend Type operator+(const Type &lhs, const Type &rhs)
	* Initializing: Type operator+(")
		* Info: No namespace is required because it is global
#### Stream Operators:
	* Declaring insertion: friend std::ostream &operator<<(std::ostream &os, const Type &rhs)
	* Initializing insertion: std::ostream &operator<<("){...}
	* Declaring extraction: friend std::istream &operator>>(std::istream &in, Type &rhs)
		* Disclaimer: Input parameter should not be constant
	* Initializing extraction: std::istream &operator>>("){...}

### Inheritance
Classes in C++ can be extended, creating new classes which retain characteristics of the base class. Reusability mechanism
#### Terminology:
	* Base Class: Parent class, super class
	* Derived Class: Child class, sub class
	* Single Inheritance: A new class is created from another single class
	* Multiple Inheritance: A new class is created from two (or more) other classes
	* Public Inheritance: Is-a relationship
		* Is-a Relationship: Class B is A, given class A is the base class
	* Composition: Has-a relationship
		* Has-a Relationship: Person class has an Account, or class A has a B
	* Three Types of Inheritance: Public, private, protected
		* Public: Most common, establishes is-a relationship
		* Private and Protected: Has-a relationship, different from composition
#### Usage:
	* Public Inheritance: Class Derived: public Base {...};
	* Use base class constructors: using Base::Base

### Polymorphism
Use methods to perform different tasks
#### Usage:
	* Static Polymorphism: Base *ptr = new Derived; ptr->say_hello()
	* Dynamic Binding for methods: virtual void say_hello(...)
		* Define it for each class, including the base class
		* Disclaimer: If you don't provide an overridden version it is inherited from it's base class
		* Info: References can be used, e.g. Account &ref = trust_obj
	* Virtual Destructors: virtual ~Derived()
	* Overide method: virtual void say_hello() override
	* Prevent deriving: virtual void say_hello() final

### Abstract Classes
Classes that cannot be instantiated and are used as base classes in inheritance heirarchies
#### Usage:
	* Info: Can use pointers and references to dynamically refere to concrete classes derived from them
	* Concrete Classes: Classes that can be instantiated, e.g. Savings Account, etc.
	* Pure virtual function: virtual void draw() = 0;
		* Disclaimer: Cannot be instantiated
#### Interface
	* Example: class Shape{...};
	* Disclaimer: No keyword for declaring interface classes
		* 1: Subclasses have to instantiate all virtual of functions of an interface 
	* Tip: Use 'I' in front of the interface class names, e.g. class I_Shape

## ---------------------- Smart Pointers ------------------

### Smart Pointer
A pointer that automatically manages its memory allocation
#### Usage:
	* Include memory: #include <memory>
	* Declare Smart Pointer: std::smart_pointer<class> ptr = ...
	* Print Smart Pointer: cout << (*ptr) << endl

### Unique Pointer
A smart pointer that cannot be assigned or copied and points to an object on the heap
#### Usage:
	* Include: #include <memory>
	* Declare and Define: std::unique_ptr<int> p1 { new int {100} }
	* Make unique: std::unique_ptr<int> p1 = make_unique<int>(100)
		* Alternative: auto p1 = make_unique<int>(100)
		* Info: Automatically deleted
	* Print Pointer: std::cout << *p1 [or p1.get()] << std::endl
	* Reset pointer to nullptr: p1.reset()
	* Move unique pointer to new pointer: std::unique_ptr<int> p3; p3 = std::move(p1)
		* Disclaimer: P1 is now a null pointer
	* Disclaimer: Cannot add unique pointers to vectors because it copies

### Shared Pointers
Provides shared ownership of heap objects
#### Usage
	* Include: #include <memory>
	* Declare and Define: std::shared_ptr<int>p1 { new int {100} }
	* Print: cout << *p1 << endl
	* Reassignment: *p1 = 200
	* Number of Shared objects using ptr: p1.use_count()
	* Make shared pointer: std::shared_ptr<int> p1 = make_shared<int>(100)	
	* Disclaimer: Shared pointers can be added to vectors
		* 1: When a shared pointer is added to a vector its count increases by 1
		* 2: When shared pointers are deleted, they can cause memory leak because the objects they point to may have not been destoryed

### Weak Pointers
Creates a non-owning weak reference
#### Usage:
	* Include: #include <memory>
	* Defining and Declaring: std::weak_ptr<A> a_ptr = a

## ---------------------- Error Handling -------------------

### Basic Syntax
Javascript's syntax is similar to C++'s error handling syntax
#### Usage:
	* Try: try{<code to try>}
	* Catch Object: catch(int &ex) {...do this if exception}
		* Info: Exceptions can be any type, depending on the type of exception thrown
	* Catch all: catch(...){do this}
		* Disclaimer: Must use elipses and exception object cannot be accessed
	* Print to error output stream: std::cerr << ...
	* Throw error: Throw 0
		* Info: Can throw any type. Throwing classes is very useful
		* Disclaimer: Do not throw exceptions in destructors
	* Throwing classes: Throw DivideByZero()
		* Disclaimer: Make sure to instantiate class when you throw it
	* No exception: virtual const char* what() const noexcept {...}
		* Definition: Don't throw exeption from this method

### Heirarchy
Deriving from C++ built-in exceptions
#### Usage:
	* Derive from exception class: class Some_Except: public std::exception{...};

## ------------------------ Streams -------------------------------
Stream manipulation, input/output, and formatting
### Boolean
Boolean manipulation
#### Iomanip:
	* Include: #include<iomanip>
	* Display conditional statement: std::cout << (10 == 10) << std::endl  //returns 1
	* Display boolean: std::cout << std::boolalpha // true or false
	* Display no boolean: std::cout << std::noboolalpha // 0 or 1
#### Iostream
	* Include: #include<iostream>
	* Set formatting: std::cout.setf(std::ios::boolalpha)
	* No boolean: std::cout.setf(std::ios::noboolalpha)
	* Reset formatting to default: std::cout << std::resetioflags(std::ios::boolalpha)


### Integer
Integer Manipulation
#### Iomanip:
	* Include: #include<iomanip>
	* Decimal: std::cout << std::dec << num << std::endl
	* Hexadecimal: std::cout << std::hex << num << std::endl
	* Octadecimal: std::cout << std::oct << num << std::endl
	* Show base: std::cout << std::showbase; (") // 0377
		* Hex: 0x prefix printed
		* Oct: 0 prefix printed
	* No base: std::cout << std::noshowbase; (")
	* Uppercase show base: std::cout << std::noshowbase << std::uppercase; (")
	* Show positive sign: std::cout << std::showpos; (")
	* No show positive sign: std::cout << std::noshowpos; (")
#### Iostream:
	* Include: #include <iostream>
	* Reset io flags: std::cout << std::resetiosflags(std::ios::basefield)
		* Showing base: std::cout << std::resetiosflags(std::ios::showbase)
		* Showing pos sign: std::cout << std::resetiosflags(std::ios::showpos)
		* Showing uppercase: std::cout << std::resetiosflags(std::ios::uppercase)

### Floating Point
Floating point manipulation
#### Usage:
	* Include: #include<iomanip>
	* Disclaimer: Default number of digits is 6
	* Set the number of digits: std::cout << std::setprecision(3); std::cout << num
		* Result: if num is 255.7, num will set to 256
	* Set decimal digits: std::cout << setprecision(3) << std::fixed; (")
		* Result: 255.700 
	* Set scientific: std::cout << std::scientific; (")
	* Show trailing zeroes: std::cout << std::showpoint; (")
		
### Formating Field Widths
Field width, fill, and align
#### Usage:
	* Include: #include <iomanip>
	* Set character width: cout << std::setw(10) << num << std::endl // -------num
		* 10(argument): Tells the setw method to make data 10 characters long
		* '-': The dashes represent the empty characters
	* Left justify data: cout << std::left << num << hello

### File Streams
Input and Output with files. Fstream for input and output, ifstream for input only, and ofstream for output only
#### Fstream:
	* Include: #include <fstream>
	* Input file creation: std::fstream in_file {"../myfile.txt", std::ios::in}
		* Disclaimer: Default is to read from text, i.e. no mode setting needed
		* Binary: ("){"../myfile.txt", std::ios::in | std::ios::binary}
	* Output file creation: std::fstream out_file {"../myfile.txt", std::ios::out}
		* Binary: ("){"../myfile.txt", std::ios:out | std::ios::binary} 
#### Ifstream
	* Include: #include <fstream>	
	* Declare file stream: std::fstream in_file or std::ifstream in_file
	* Open text: in_file.open("../myfile.txt")
	* Open file: in_file.open("...", std::ios::binary)
	* Close file: in_file.close()
	* Is file open: in_file.is_open() // returns boolean
	* Assign line from text to variable: std::getline(in_file, line_var)
	* Get by character: in_file.get(c)
	* Direct input from file to variable: in_file >> line
		* Disclaimer: Stops at first space or newline character
		* Assign to multiple variables: in_file >> line_var >> num >> total
	* Get line from file to variable: std::getline(in_file, line)
		* Disclaimer: This may be the best option if printing from file to cout
	* Is file at the end: infile.eof() //returns boolean
#### Ofstream
	* Include: #include <fstream>
	* Output file: std::ofstream out_file {"../myfile.txt", std::ios::trunc}
		* std::ios::trunc: discard contents when opening
		* std::ios::app: to append on each write to file
		* std::ios::ate: seek to end of stream when opening
		* std::ios::binary: for binary files
	* Alternative opening: declare stream; out_file.open("../myfile.txt", <mode>)
		* No mode: Automatically open in truncated mode
		* Modes: Same modes as above
	* Disclaimer: Always close file to flush out buffer
	* Close file: out_file.close()

### String Streams
String buffers
#### Usage:
	* Include: #include <sstream>
#### Input String Stream
	* Create input string buffer: std::istringstream iss {"Moe 100 1234.56"}
	* From buffer to variables: iss >> name >> num >> total
#### Output String Stream
	* Create output string buffer: std::ostringstream oss {}
	* From Variable to buffer: oss << name
	* Flush out buffer to console: std::cout << oss.str()

## ---------------------- Standard Template Library -------------------
Easily accessable containers and algorithms
### Container Libraries
Lists that hold elements
#### Types
	* Sequence Containers: array, vector, list, forward_list, deque
	* Associative Containers: set, multi set, map, multi map
	* Container Adapters: stack, queue, priority_queue

### Algorithm Library
Step-by-step instructions used to solve problems
#### Usage:
	* Include: #include <algorithm>
	* Sort: std::sort(v.begin(), v.end())
	* Reverse: std::reverse(v.begin(), v.end())
	* Accumulate: std::accumulate(v.begin(), v.end(), 0)
		* 0: running sum starts at 0. Can be 0.0 for double 

### Function Templates
Make standard functions that work with any types
#### Usage:
	* Decine template variable: template <typename T>
		* Tip: Can use typename or class keyword
	* Define template function: T max(T a, T b) {return (a > b) ? a : b;}
	* Initialize template function: max<int>(a, b)
	* Disclaimer: when comparing classes an overloaded operator must be used
		* Example: bool operator<(const Person &rhs){return this->age < rhs.age;}

### Class Templates
Make standard classes that work with any type of inputs
#### Usage:
	* Declare template variable: template <typename T>
	* Define template Class: class

## ----------------------------- Sequence Containers ------------------------------

### Arrays
Lists of items
#### Usage:
	* Initialize Array: 'int numbers[5] {1, 2, 3, 4, 5}' or 'int numbers[5] = {1...}'

### Vectors
Multi-dimensional arrays that are dynamic, have all same types of elements, stored contiguously in memory, elements initialized to zero.
#### Usage:
	* Include: #include <vector>
	* Declare vector with size and initialize: std::vector <int> test_scores (5) {1, 2, 3, 4, 5}
		* When using for loops with vectors, use unsigned counters, e.g. size_t
	* Access element by index: test_scores[1] or 'test_scores.at(1)
	* Append element: test_scores.push_back('a')
	* Size of vector: test_scores.size()
	* Declare multi-dimensional vector vector<vector<int>> grid
	* Clear vector: test_scores.clear()

## ----------------------------- Associative Containers ------------------------------

## ----------------------------- Container Adapters ------------------------------

## ---------------------- Builtin Packages ---------------

### iostream
Input and output library for C++
#### Usage:
	* '#include <iostream>': first thing to do to use iostream library
	* std::cout << "Hello, World" << std::endl: prints text to console
	* std::cin >> x: assigns input to a variable

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
	* No position of string: std::string::npos
		* Example: if(s1.find(s2) != std::string::npos){" substring found"}
		* Example 2: if(s1.find(s2) == string::npos){"Correct substr not found"}

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
