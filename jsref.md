# JavaScript Reference
Legend:
>("): means what came above or before.
><element>: document.querySelector('#someid')

## ----------------------Operators---------------------
Operators: i++, i--, ++i, --i, i+=1, i-=1

## ----------------------Strings-----------------------
Methods and Examples of string usages in JavaScript.
### Methods
	-'a word or array'.splice(<from index>, <to index>)
	-'a word or array'.split(<delimiter>, [limit number])

## -----------------------Elements----------------------
Methods on Elements
### Get element to manipulate:
	-document.querySelector(".someclass") or [querySelectorAll, getElementById, getElementByClassNames]

### Creation:
	-<element>.createElement('div')

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
