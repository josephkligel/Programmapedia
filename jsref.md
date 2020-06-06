# JavaScript Reference
Legend:
>("): means what came above or before.
><element>: document.querySelector('#someid')

## ----------------------Importing/Exporting-----------------
Importing modules
### Importing:
	-import App from './App';
	-const lodash = requires('lodash'): for nodejs only
	-import React, {useState} from 'react': destructuring

Exporting modules
### Exporting:
	-export default App: App function is exported
	-export {app: "app", function: "function", develop: "develop"}: exports other functions with a given name to use
	-module.exports = function(){}: for nodejs only 


## ----------------------Operators---------------------
Operators: i++, i--, ++i, --i, i+=1, i-=1

## ----------------------Strings-----------------------
Methods and Examples of string usages in JavaScript.
### Methods
	-'a word or array'.splice(<from index>, <to index>)
	-'a word or array'.split(<delimiter>, [limit number])

## --------------------Arrays-----------------------------
Methods for arrays. Many of them also work on strings. So, between arrays and strings, theto-be-mentioned methods are interchangeable.
### Methods
	-<array or string>.splice(<start index>, <number to cut>[, <insert word(s) at start index>]): cuts elements from arrays or characters from a string 
	-(").push(), pop
	-(").concat(<array 2>): Join arrays together. Make sure to reassing to update the main array variable, e.g. 'planets = planets.planets = planets.concat(rocks)'
	-(").every(), any(), some(<var name>, callback), forEach(<var name for item in array>, callback)
	-map(): Create a new array by doing something with each item in an array.
		-<array>.map((<array item>) => {return item*2})
	-filter(): Create an array that matches a condition
		-<array>.filter(item => return item < 10)
	-reduce(): Applies a calculation to all the items in an array by using an accumulator
		-<array>.reduce((accumulator, item) => {return accumulator + item})
	-find(): find the first item that matches from an array.
		-<array>.find(item => item < 10)
	-findIndex(): find the index of the first item that matches from an array
		-<array>.findIndex(index => item < 10)

## ----------------------Dates-------------------------
Methods for dates
### Methods:
	-var date = new Date()
	-date.getDate() or [getFullYear(), getMonth(), getDay(), getHours(), getMinutes()]
	-date.toLocaleDateString() or [toLocaleTimeString()]

## -----------------------DOM----------------------
DOM Methods
### Get element to manipulate:
	-document.querySelector(".someclass") or [querySelectorAll, getElementById, getElementByClassNames]

### Creation:
	-<element>.createElement('div')

### Element Manipulation:
	-<element>.appendChild('p'): add a child to an element
	-(").innerHTML = <element or string>: add something(e.g. child element or string) between the element tags 
	
### Style:
	-<element>.height [width]
	-<element>.style.color or [background, display, or any other css property]
		-Value is assigned becuase it is a property

### Attribute Manipulation:
	-<element>.classList.add('newclass') or [remove()]
	-<element>.setAttribute('class', 'newclass')

## -------------------Event Listeners-------------------
Event listeners for elements
### Event:
	-'click': <button>
	-'change': <select>

### Usage:
	-<element>.addEventListener(<event>, callback)

## ---------------------Spread and Destruct---------------
Operators for spread and destruct
### Spread:
	-'...citrus': adds the items from an array or object called citrus
		-can be added to anoter list
	-'[key] : value': the value of key becomes the key name
	
### Destructuring:
	-{ name, value } = event.target: allows you to call event.target.value and event.target.name with the variable names name and value
		-pulls keys from objects
		-{name: newName, value: newValue} = event.target: assign new variable names to object properties. The new names are newName and newValue
	-[ fullName, setFullName  ] = useState(""): Assign variable names to items in a list 
