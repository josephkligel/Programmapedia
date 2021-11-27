#C Code in Python
Writing c code in Python
## Steps
1. Create c file. No special requirements.
2. 'cc -fPIC -shared helloworld.c -o helloworld.so'
3. Inside of Python program:
	from ctypes import *
	
	def helloworld():
		so_file = '/home/jkligel/c_programs/helloworld.so'
		helloworld = CDLL(so_file)
		
		c_return = helloworld.sayHello() //or whatever the name of the function is
		return c_return

	helloworld()

