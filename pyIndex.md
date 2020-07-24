# Python Index
Legend:
>("): means the same as above or to the left, e.g. ditto something before

## --------------------- Python Setup -------------------
* Install python and pip
* Virtual environment for project: python -m venv ./new_project
	* Or: pip install --user virtualenv; virtualenv ./new_project
* Create dependency list for projects: pip freeze > requirements.txt
	* Or: pipreqs new_project_path/
* Install dependencies: pip install -r requirements.txt
* Get dependency info: pip show <packagename> 

## ----------------------Data Types----------------------
String(str), Integer(int), Boolean(bool), List/arrays
#### Usage/Explanation:
    bool:'True' or 'False' values (no 'true' or 'false')
    type(): prints the datatype of an argument
    Conversion: int(), str(), list(), tuple()
    Slice: x[start:stop:step]. Works for any data type

## ----------------------Strings----------------------
In depth look at functions performed on strings in Python. To see string module see builtin modules section 
#### Methods used on strings:
	-s.lower(), replace(s,ch), s.capitalize, s.upper, s[:], 
	-s.strip, s.lstrip, s.rstrip, s.islower, 
	-s.isupper, s.split("arg"), max(s)
	-import string; string.a

### Concatenation: 
You can concatenate strings/chars and even multiply them
#### Usage: 
	print function automatically adds spaces between arguments

### Placeholders and formatting: 
Use numbers in curly brackets or % w/ letter (%d,%s,%2f) or use f print
#### Examples: 
	print('They are {0} and {1}'.format(x,y))
	print('They are %d and %d' % (x, y))
	or print(f'They are {x} and {y}')

## ----------------------Collections----------------------
### (): 
tuples. Immutable, add comma at the end as convention
#### Methods: 
    -del(tp), tp[index], tp.count(arg) 

### '[]' or list(): 
List of values
#### Methods: 
	-len(ls), ls.insert(index, arg), ls.remove(arg), 
	-ls.pop(), del(arg), ls.clear(), ls.reverse(), 
	-ls.sort(), ls.append(), ls.count(arg)

### '{}' or set(): 
Set of values. No repetition of values
Dictionaries if they have key/value pairs. 
#### Usage: 
    -String keys have to be in quotes
#### Methods: 
    -d[k], d.get(k), d.pop(k), d.clear(), del(d), d.keys()
    -d.values(), d.items -> prints k,v
    -d.update(k:v), d.update({k: v})

## ----------------------Advanced Collections----------------------
-import collections
-namedtuple, defaultdict, Counter, OrderedDict deque
### namedtuple:
Really useful for naming coordinates
#### Usage:
	-Point = collections.namedtuple('Point', 'x,y')
	-p1 = Point(10,20)
	-'print(p1.x, p1.y)' results in '10 20'
	-p1._replace(x=100); 'print(p1)' results in '100 20'

### defaultdict

#### Usage:
	-fruitCounter = collections.defaultdict(int): give it integer keys

### Counter:
count items in dictionary
#### Usage:
	-class 1 = [x, y, z, x]; c1 = collections.Count(class1)
	-'print(c1[x]): results in '1'
	-print(sum(c1.values()), ' students in class'):  results in '3 students in class' because x:2, y:1, z:1
	-c1.update(class2): adds class 2 to c1
	-c1.most_common(2): results in '[('x': 2), ('y': 1)]'
	-print(c1 & c2): results in what is common to both lists and by how many

### OrderedDict
orders dictionary values

### deque
Hybrid of a stack and a queue. Double-ended queue
#### Usage:
	-Can use it like a list to print off all the elements within it, e.g. 'for i in <dequevar>: print i'
#### Methods:
	-d.pop(), d.popleft(), d.append(<value>), d.appendleft(<v>)
	-d.rotate(<num>): rotates last value to front. Can include number or left empty

### Comprehensions
Makes writing to sequences easier
#### Examples:
	-evens = [x for x in range(2, 21) if x%2 == 0]
	-tempDict = {t: (t*9/5)+32 for t in [0,12,34,100]}

## ----------------------Operators----------------------
Typical, single programming operators, while the rest have exceptions
### Reassignment: 
    +=, -=, /=, or *= (no ++ or --)

### Logic: 
    and, or, not/! (no && or ||)

### Overload Operators: 
	-Almost all operators and class methods can be overloaded. Operators only within classes 
	-Numeric operators: e.g. __add__, __sub__, for +, -
	-Comparison operators: __gt__, __lt__ for >, <

## ----------------------Functions----------------------
Functions start with the word 'def' and are loosely typed
### Globals
	'global x': Globals allow you to pass functions variables without defining them as parameters

### Lambda
	They can be defined by variables or alone 
	e.g. 'lambda x: x + 12' or x = (")

### Args
#### Keyword arg: 
	e.g. 'sum(arg2=3, arg1=10'
#### Default arg: 
	e.g. 'def sum(arg1=10, arg2)' 10 is default until specified
#### Multi-args: 
	put '*' in front of arg, e.g. 'prints(arg, *arg2)'
#### Multi-key args: 
	-put '**' in front of arg, e.g. 'prints(arg, **arg2)
	-Remember to print of key/value pairs for each multi-arg
		
## ----------------------OOP----------------------
Encapsulation, abstraction, polymorphism, inheritance, classes, and instances
### Encapsulation:
#### Private: 
	-double underscore preceding the name. 
	-Can only be called through a self method or method within the class
	-e.g. '__private'
#### Partially private: 
   single underscore preceding
	e.g. '_partially-private'

### Inheritance: 
	e.g. 'class Square(Polygon)' instead of using extend keyword
	Child class is derived from parent class. Parent class is the base class

### Classes: 
	-uses '__init__' method to initialize an instance and self is used in replacement of 'this'
	-Standards: Class names should be in Camel-case 'ThisIsExample'
#### Methods:
	-All class methods can invoke super methods and/or be overwritten
	-__inti__, __str__, __repr__, __bytes__, __format__, __getattr__,__getattribute__, __setattr__
	-__dir__: dir(<instance>) to call. Dir is used to list attributes of a class
#### Instances: 
	-are objects of a class, e.g. Honda is a car
	-Should be all lowercase 'honda'
	-Words in an instance var name should be separated with an underscore
	-Non-public inst var should begin with a single underscore
	-For private var, two underscores begin the name
#### Enum:
	-from enum import Enum: 'APPlE = 1'
	-enum.name, enum.value: 'APPLE', '1'
	-from enum import auto: 'ORANGE = auto()', which is '2' because APPLE is 1
	-from enum import unique: add '@unique' directly above class, making all enums in class require diff values
	-enums can be used a keys: e.g. "fruitDict[Fruits.APPLE] = 'Apple man' " 

## ----------------------Characters----------------------
Different ways characters are presented in Python
### Escape Chars
Put a back slash before the character to be escaped
#### Characters: 
	\\, \", \', \n, \t

## ----------------------Debugging----------------------
### Help: 
help(<module>), dir([__builtins__]|<module>), help(<fname>), dir(<fname>), print(<module>.__doc__)

### Comments: 
	-# for single comments, and 
	-""" """ for multiple-line quotes

### Error Handling: 
Try, catch, finally, etc.
#### try: 
	'try:'
#### catch: 
	'except Exception as e:'
#### finally:
	-will be performed regardless if error happens or not
	-e.g. 'finally: print('Done')' will always print done

### Logging:
import logging. The module is builtin.
#### Setup:
	-logging.basicConfig(level=logging.DEBUG, filename='output.log', filemode='w', format=fmtstr, 
		datefmt=datestr, extra=extraData) 
	-level: choose what level of debugging is logged 
	-filemode: 'w' for overwriting log, ommitted if appending 
	-format: fmtstr = '%(asctime)s: %(levelname)s: %(funcName)s Line:%(lineno)d%(message)s'
	-datefmt: datestr = '%m/%d/%Y %I:%M:%S %p'
	-extra: extraData = {'user': 'jk@example.com'}
#### Methods	
	-logging.debug(<string message>), logging.info("), logging.warning("), logging.error("), 
		logging.critical(")

## ----------------------Uncategorized----------------------
Miscallaneous Python syntax
#### Methods: These methods can be used without imports
	-zip(<l1>,<l2>): Iterates through two lists
	-map(<function, e.g. x**2>, <list>): applies a function to the items in a list

## ----------------------Builtin Modules----------------------
Module names should always be in lowercase

### threading: 
This module is very important as it will allow a programmer to run scripts faster.
#### Usage
	-import threading; new_thread = threading.Thread()
	-if using class to extend Thread, you can override run with your own implementation
	-use globals to give functions variables so that functions can be used as targets in Thread constructions
	-using time.sleep() is sometimes necessary to see what the program is doing at a reasonable rate.
#### Methods
	-threading.Lock(), (").acquire(), (").release(), threading.Thread.join()
	-threading.Event(): event.wait(), event.set()
	-threading.Thread(daemon=True): When daemon is on it runs in background until another thread completes all actions
	-import queue; q = queue.Queue(); queues are used to put and get out items using FIFO.
	-queue.LifoQueue(): LIFO queues
	-queue.PriorityQueue(): prioritizes the queues. Can be used with tuples to pass the order

### I/O:
no import is required 
#### Methods
	input()
	open(): open(<filename>, opt) 
	opt: 'w', 'a', 'r', 'x'	

### string:
import string to access the other methods
#### Methods:
	-ascii_lowercase(), ascii_uppercase(), ascii_letters()

### math:
import math
#### Methods:
	pow(), e, pi, log, log10, log2

### os: 
#### Methods
	-system("google-chrome google.com"), mkdir, rmdir, rename 
	-getcwd, 
	-path.expanduser('~'): returns home directory of user
	-unlink(<filename>): deletes a file
	-environ.get('HOME'): get path info

### shutil: 
#### Methods
	-copy(), move() 
	-copytree(<src folder>, <dest folder>): creates destination folder and copies source folder to it
	-rmtree(): removes folder even if it is not empty 

### datetime: 
#### Methods
	strftime(), today(), strptime()

### sys: 
#### Methods
	stdout.write()
	exit()
	
### argparse:
#### Methods
	<var> = argpase.ArgumentParser()
	<var>.add_argument('--foo', help='foo help')
	<var> = parser.parse_args()

### process:
#### Methods
	call(): calls a system command. Just like 'os.system()'

### itertools:
Tools for iterating
#### Methods
	cycle(): Continuously loop through a sequence
	count(<start>, <step>): Count iterator
	next(<var>): The next iterator in a sequence	

### glob: 
returns the list of files with their full path and is more powerful than os.listdir. Glob can use wild cards
#### Methods
	glob(<pathname>/**, recursive=True)

### pathlib:
Library for manipulating and dealing with paths
#### Methods:
	-pathlib.Path.home(): returns home directory

### zipfile:
Used to work with compressed archives
#### Usage
	-import zipfile
	-newzip = zipfile.Zipfile(<newzip file name>, 'r|w|a')
	-newzip.write(<file or folders to compress>, compress_type=zipfile.ZIP_DEFLATED)
		-Other compress types: zipfile.ZIP_BZIP2
	-newzip.close(): Don't forget to close file

### webbrowser:
Opens default webbrowser. Beats using the system call to invoke a webbrowser
#### Methods
	-wb.open('github.com')

### cProfile
Measures the execution time of a program and how many times a function is called. Also tells what programs were called.
#### Methods:
	-run(<function or statement>, ['restats']): gives stats on time of run and what functions were called
	-python -m cProfile [-o outputfile] [-s sort_order] (-m modules|myscript.py):
		prints the results of run-time of a script or module to output file/console

## ----------------------3rd Party Modules----------------------
### pyinstaller: 
Convert python program to exe program
#### Methods
	Easy with many files: 'pyinstaller <pyprogram>'
	One file: 'pyinstaller <pyprogram> --onefile --noconsole --icon=<iconname>'
#### Options
	--name: give a name to the executable
	--onefile: make a single container file for the executable
	--noconsole: no console output when executable is ran
	--w: (")
	--icon: Add an icon to the program

### Virtual Environment: 
Create a separate virtual environment in Python
#### Methods
	'python3 -m venv <environmentname>': creates virtual environment
	'source <envpath>/bin/activate': puts the shell in virtual environment mode which includes env's path
	'deactivate': returns the shell back to normal

### pyinput
Input and prompts with style
#### Methods
	-pyinput.inputStr(), (").inputNum()

### pprint
Easy print. Useful for lists and writing variables to files.
### Methods
	-pprint.pprint(<list>): Can print list items one by one.
	-pprint.pformat(<list> or <dict>): Can turn an object into a string and then write it to a file.

### send2trash
Safer than deleting folders or files with other methods. Deleted can be recovered from trash later
### Methods	
	-send2trash.send2trash(<filename string>)

### simple-chalk
Print in colors. Yay!
#### Usage
	-import simple_chalk
	-green, blue, red, etc.
	-bgGreen, bgBlue
	-Chaining: simple_chalk.bgGreen.blue('Hello')
