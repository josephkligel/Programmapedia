# Java Reference

Legend:
>("): Same as above or before

## Setup, Creation, and Annotation

* IDE: Install IDE
* Java Install: Install jdk
* Creation: All source code has "java" extension
	* Create Class: Source must contain a class with the same name as the source file
		* Public Access: Class must also public or have no access modifier
	* Optional: Declare package name (see Package Name below) and/or import packages
* Compile: Compiled programs have "class" extenion
	* CLI command: javac example.java
* Run compiled program: java /home/java-dir/example.class
* Comments: use '/* */' and '//'
	* '/* */': multiple lines
	* '//': one line
	* Keyboard shortcut: Usually ^/

## ----------------------------- Basics and Syntax -----------------------

### Package name
Unique package name
#### Usage:
	* Definition of package: Java's version of a header file
	* Info: package names start with "com" and are camel-cased if longer than one word
	* Define Package: package com.cognixia.jump.bridgeCourse

### Import Statement
Use library in program
#### Usage:
	* Importing: import java.util.*
		* '*': Import all classes and methods from module

### Access Modifiers
Modifiers telling what kind of access a class, method, and/or variable has
#### Usage:
	* public: No modifier means public. public gives access to all
	* private: 
	* protected: 

### Non-Access Modifiers
Behavior modifiers for classes, methods, and variables
#### Usage:
	* static: Bound to a class
	* final: Constant, immutable

### Types of Data
Different data categories in Java
#### Usage:
	* Primitive types: char, Integer, double, float, long, short, byte, boolean
		* Boolean: boolean isTrue = true
	* Object type: String

### Variables
Using variables in Java
#### Usage:
	* Standards: Variable names are camel-cased
	* Declaration and Initialiazation: Int x = 0
	* Casting: (String) x
	* Local Variables: Variables contained within blocks, i.e. '{}'
	* Global Variables: Variables declared outside of any blocks or local scopes

### Operators
The operators Java uses
#### Usage:
	* Arithmetic: +, -, *, / 
	* Comparing: >, <, >=, <=, !, !=
	* Increment and Decrement: ++, --, +=, -=
	* And/or: &&, ||, ^
		* '^': Exclusive or. Only one condition can be true, not both.

### Flow Control
Loops and flows in Java
#### Usage:
	* Conditional: if, else, else if
	* Switch Conditional: switch(<condition>){case 1: ...; break; ... default: ...}
		* Case: The output if condition meets the cases parameter
		* Default: If no cases are triggered, do this
	* Loops: while, for, do while
		* do while: do {<code to do>} while(<condition>) 

### Classes
Using classes in Java
#### Usage:
	* Declaration and Initialization: class Person { public String name;}
	* Construction/Creating an Object: new Person("Dave")

### Exception
Handling exceptions in Java
#### Usage:
	* Try: try {<code to try>}
	* catch: catch(Exception e) {<code to do when caught>}
		* Print error: e.printStackTrace()
	* finally: finally {<do whether caught or not>}

## ----------------------------- Streams ---------------------------------

### Input Stream
Stream coming from somewhere
### Console Input:
	* Import: import java.util.scanner
	* Declaration and Initialization: Scanner input = new Scanner(System.in);
		* System.in: Input from console
	* Get Input: Storing input 
		* Get line: String storage = input.nextLine()
		* Get boolean: input.nextBoolean()
		* Get int: input.nextInt()
		* Get double: input.nextDouble()
	* Has Next: Does it have input?
		* Has next: input.hasNext()
		* Has boolean: boolean bool = input.hasBoolean()
	* Closing Input: input.close()

### Output Stream
Streams going somewhere
#### Usage:
	* Output with line: System.out.println(<arg>)
	* Output without line: (").print(<arg> + '\n')
	* Output with formatting: (").printf(<format and arg> + '\n')

## ----------------------------- Built-in Packages -----------------------
