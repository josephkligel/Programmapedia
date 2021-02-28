# Numpy Guide
> Legend:
* ("): Same as above or before

## Setup

* Install: pip install numpy
* Environment: pip install jupyter
	* Open jupyter notebook: jupyter notebook new.ipynb
* Import: import numpy as np

## --------------- Sytax and Semantics ---------------

### Arrays
Numpy arrays
#### Usage:
	* Creating an array: np.array(<0, 1, or elements seperated as rows>)
		* 1-D array: np.array([1,2,3])
		* 2-D Array: np.array([[1,2,3], [4,5,6], [7,8,9]])
	* Create array of zeroes: np.zeros(<num of elements or dimensions>)
		* 2-D: np.zeros((5, 5))
	* Create array of ones: np.ones(<num of elements or dimensions>)
		* 2-D: np.ones((5, 5))
	* Create range: np.arange(<start>, <stop>[,step])
	* Create evenly-spaced array: np.linspace(<start>, <stop>, <num>)
	* Create diagonally numbered array: np.eye(<num>)
		* num: Creates a 2-D array with the num for the row and column count
	* Accessing elements in an array: arr[1]
	* Accessing Multi-dimensional array: arr[<row number>][<column number>]
		* Alternative: arr[row,col]
		* Access range: arr[2:,:1]
	* Accessing a range: arr[1:5]
	* Broadcasting or changing a range of elements to a new item: arr[0:5] = 100
		* Disclaimer: Broadcasting is permanent
	* Copying array: arr.copy()
		* Assigning a copy to a new array: arr_copy = arr.copy()
		* Disclaimer: copy must be called to prevent the change of original
	 
### Random
Random function for numpy
#### Usage:
	* Random uniformed distribution between 0 and 1: np.random.rand(<num or dimensions>)
		* 2-D: np.random.rand(5,5)
	* Normal Distribution: np.random.randn(<num>)
		* Definition: Create a random range from -1 to 1, with average as 0
		* 2-D: np.random.randn(5,5)
	* Random interger: np.random.randint(<start>, <stop>, <num>)

### Reshape
Reshape numpy arrays
#### Usage:
	* Reshape: nparr.reshape(<row>, <col>)

### Attributes
Attributes of numpy arrays
#### Usage:
	* Give dimensions: nparr.shape
	* Data type of array: nparr.dtype
	* Max element: nparr.max()
		* Max's index: nparr.argmax()
	* Min element: nparr.min()
		* Min's index: nparr.argmin()

### Conditional
Find elements in the array that match a specified condition
#### Usage:
	* Conditional statement: arr > 4
		* Answer: returns an array with false and true for elements
		* Return the elements: arr[arr > 4]

### Arithmetic Operations
Mathmatical operations performed on np arrays
#### Usage:
	* Get sin: np.sin(arr)
	* Get log: np.log(arr)
		
