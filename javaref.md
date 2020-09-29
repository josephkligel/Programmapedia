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
	* public: public gives access to all
	* protected: Can only be accessed by class, package, and subclass
	* Default: Not written. Access only to class and package
	* private: Can only be accessed by class

### Non-Access Modifiers
Behavior modifiers for classes, methods, and variables
#### Usage:
	* static: Bound to a class
	* final: Constant, immutable

### Types of Data
Different data categories in Java
#### Usage:
	* Primitive types: char, int, double, float, long, short, byte, boolean
		* Boolean: boolean isTrue = true
	* Object types: String, Integer

### Variables
Using variables in Java
#### Usage:
	* Standards: Variable names are camel-cased
	* Declaration and Initialiazation: int x = 0
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

### Classes and Objects
Using classes and objects in Java
#### Usage:
	* Class Declaration: class Person { String name; ... }
	* Constructors: new Person("Dave")
		* Definition: Objects are instances of classes
		* Default Contructor: Uses no parameters
		* Overloaded Constructor: Create your own instead of using default
	* Unnamed code blocks: {...}
		* Info: They are called everytime an object is created
	* Static code block: static {static int count; ...}
		* Disclaimer: Can only contain other static variables
		* Info: Called one time when class is first used
	* Static Method: public static void doSomething {...}
		* Disclaimer: Can only be called by class, not an instance
	* Instance Methods: Called by objects
	* Use Parent Constructor: super()

### Exception
Handling exceptions in Java
#### Usage:
	* Try: try {<code to try>}
	* catch: catch(Exception e) {<code to do when caught>}
		* Print error: e.printStackTrace()
	* finally: finally {<do whether caught or not>}

### Concepts of Object-Oriented Programming
The foundations of OOP
#### The Four Pillars:
	* Abstraction: Hiding and controlling data without having to know how it works
	* Encapsulation: Grouping like code together and containing within its scope
	* Inheritance: Gain traits from parent class. No multiple inheritance
	* Polymorphism: Many forms of contructors or methods
#### Extras
	* Override Methods: Redefining an inherited Method, e.g. @Override makeNoise...
		* Disclaimer: Method signature have to be the same
	* Overload Methods: Different forms of the same method

## ----------------------------- Streams ---------------------------------

### Input Stream from Console
Stream coming from somewhere
### Console Input:
	* Import: import java.util.Scanner
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

### Output Stream from Console
Streams going somewhere
#### Usage:
	* Output with line: System.out.println(<arg>)
	* Output without line: (").print(<arg> + '\n')
	* Output with formatting: (").printf(<format and arg> + '\n')

## ----------------------------- Built-in Packages -----------------------
