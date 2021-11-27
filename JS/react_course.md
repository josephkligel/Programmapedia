# React Course on Udemy
Legend:
>("): same as above or before

## --------------- Setup and Install --------------

* Install live server: npm i -g live-server || yarn global add live-server
* Setup live server: live-server public
* Link react to project: Add script tags for the react and react-dom cdns         
	* <script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
	* <script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
* Install babel cli: npm i -g babel-cli
* Initialize npm: npm init -y
* Install babel presets: npm i babel-preset-react babel-preset-env
* Setup babel presets: babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
* 


## ---------------- Syntax --------------

### JSX
JavaScript XML
#### Usage: 
	* Creating element: const template = <p>This is jsx</p>
	* Create multiple elements: const template = <div><h1>this</h1><p>something</p></div>
		* Make sure to wrap multiple elements in a parent element

### Babel
Compile javascript to ES5 code
#### Usage:
	* install bable: npm i -g babel-cli

## ------------------- ReactDOM -----------

### Definition 
React framework for browser apps

### Render
Shows templates on an html page
#### Usage
	* render: ReactDOM.render(template, document.querySelector('#app')) 
