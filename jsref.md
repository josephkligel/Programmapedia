# JavaScript Reference

## Legend:
>("): means what came above or before.
><element>: document.querySelector('#someid')

## Importing/Exporting:
### Importing (ES6):
	-import App from './App';
	-const lodash = requires('lodash'): for nodejs only
	-import React, {useState} from 'react': destructuring

### Exporting:
	-export default App: App function is exported
	-export {app: "app", function: "function", develop: "develop"}: exports other functions with a given name to use
	-module.exports = function(){}: for nodejs only 

## Operators
### Reassignment
Assign new values to variables
#### Usage:
	* Incrementing: i++, ++i, i+=1
	* Decrementing: i--, --i, i-=1

### Spread
Quick way to add an array to a list or object
#### Usage:
	* spread operator: const newList = [...citrus]
		* Definition: Adds the items from an array called citrus
		* Tip: Can be added to anoter list
	* Assinge names to items in a list: [ fullName, setFullName  ] = <array>
	
### Destructuring
Pull properties from an object
#### Usage:
	* Pulling: { name, value } = event.target
		* Definition: pulls keys from objects
		* Tip: Can use any variable name, but name and value were chosen in the example above
	* Assign new names to pulled properties: {name: newName, value: newValue} = event.target
		*  newName and newValue are the new names of name and value properties
 
## Strings
Methods and Examples of string usages in JavaScript.
	
### Methods
	-splice: 'a word or array'.splice(<from index>, <to index>)
	-split: 'a word or array'.split(<delimiter>, [limit number])

## Arrays
Methods for arrays. Many of them also work on strings. So, between arrays and strings, theto-be-mentioned methods are interchangeable.
### Methods
	* splice: <array or string>.splice(<start index>, <number to cut>[, <insert word(s) at start index>]): cuts elements from arrays or characters from a string 
	* push: <array>.push()
	* pop: <array>.pop()
	* concat: <array1>.concat(<array2>) 
		* Join arrays together. 
		* Reassign array variable to update: planets = planets.concat(rocks)
	* every: <array>.every(<item>, <return condition>)
	* some: (").some(")
	* forEach: (").forEach(")
	* map: (").map(")
		* Definition: Create a new array by doing something to each item in an array.
	* filter: (").filter("): 
		* Definition: Create an array that matches a condition
	* reduce: <array>.reduce((<accumulator>, <item>) => {<return accumulator + item>})
		* Definition: Applies a calculation to all the items in an array by using an accumulator
		* Accumulator: the sum variable
	* find: <array>.find(item => item < 10)
		* Definition: Find the first item that matches from an array.
	* findIndex: <array>.findIndex(index => item < 10)
		* Definition: Find the index of the first item that matches from an array

## Dates					  
### Methods:
	-var date = new Date()
	-date.getDate() or [getFullYear(), getMonth(), getDay(), getHours(), getMinutes()]
	-date.toLocaleDateString() or [toLocaleTimeString()]

## DOM
### Grabbing element objects:
Gets an element to manipulate
#### Usage:
	* querySelector: document.querySelector(".someclass")
	* querySelectorAll: (")
	* getElementById: (")
	* getElementByClassNames: (")
	* Add between element tags: (").innerHTML = <element or text>
	* Add text to element: (").textContent = <text>

### Creation
Create an element
#### Usage:
	* createElement: <element>.createElement("p")

### Children
Add or remove from a parent element
#### Usage:
	* add a child within element: <element>.appendChild('p')
	* get last element of ul: (").lastChildElement()

### Property
Get or assign property of an element
#### Usage:
	* get style of element: getComputedStyle(<element>)
	* get height/width: (").height or width
	* get visible height/width, excluding margin: (").offsetHeight or offsetWidth
	* get css property: (").style.color (background or other css property)
	* get scroll properties:
		* height of scrollbar: <element>.scrollHeight
		* scroll from top of scrollbar: (").scrollTop

### Attribute
Get attribute or set attributes
#### Usage:
	* get list of classes: <element>.classlist
	* add class: <element>.classList.add('newclass')
	* remove class: (").classList.remove(<class name>)
	* set attribute: (").setAttribute('class', 'newclass')

### Events
Events on Document and Window
#### Document:
	* click: <element>.onclick = <callback> | button.addEventListener(<event>, <callback>)
	* change: (")
	* mouse: mouseover, mouseout, mouseon
### Window:
	* resize: window(<event>, <callback(s)>)

## Navigator
### Methods:
	* Geolocation: navigator.geolocation.getCurrentPosition(postion => console.log(position))

## Location	
Get info about current page
### Methods:
	* Info about webpage: location
	* Url Queries: location.search
	* Full Url: location.href
		* redirect: location.href = '/'
	* Parent page: location.origin

## 3rd Party JS Libraries
### Mustache
JavaScript library to render html
#### Usage:
	* link mustashe to html: <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.0.1/mustache.min.js"></script>
	* create script in html: <script id="template"><div><p>{{var}}</p></div></script>
		* passing variables: {{var}}
		* passing lists: <ul>{{#users}} <li>{{user}}</li> {{/users}}</ul>
	* reference in js file: const template = document.querySelector('#template').innerHTML
	* create html var: const html = Mustache.render(template, var)
	* add template to html: <selectedElement>.insertAdjacentHTML(<position>, html)
		* position: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'

### moment
Time and date formatter for JavaScript
#### Usage:
	* link moment to html: <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"></script>
	*  format: moment(<date>).format('h:m a')
		* h: hour
		* m: minute
		* a/A: am/pm or AM/PM
		* more tokens: See moment docs webpage for more token examples

### Qs
Library to work with queries
#### Usage:
	* link Qs to html: <script src="https://cdnjs.cloudflare.com/ajax/libs/qs/6.6.0/qs.min.js"></script>
	* get vars: {username, room} = Qs.parse(location.search, {ignoreQueryPrefix: true})
	
