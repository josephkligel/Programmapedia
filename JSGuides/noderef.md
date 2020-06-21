# Nodejs/Javascript References:
Legend:
>("): The same phrase or word above or before
>Methods: empty parentheses '()' means function and no parentheses means object attribute

## --------------------------Install and Setup------------------------

### nvm(command)
node version manager
#### Examples:
	-nvm ls-remote: show all available LTS versions of Node
	-nvm i 12.16.': install Nodejs version 12.16.1
	-nvm install-latest-npm: install latest npm
	

### npm	
Node package manager
#### Usage:
	-npm search <package>, npm list
	-npm install <package>@<version>: install locally
		* if no packages are specifed, packages listed in package/package-lock.json are installed.
		* -g: installs globally
		* --save-dev: installs as dev dependency
	-npm start or npm run start: run a local app

### node	
Nodejs
#### Usage:
	-node <app name>.js
	-node inspect <app.js>: make sure to add 'debugger' keyword to script

### package.json
Setup of package.json
#### Usage:
	* "scripts": {"start": "node src/index.js"}
		* npm start or npm run
	* "scripts": {"dev": "nodemon src/index.js"}
		* npm run dev
## --------------------------Basics-------------------------------

### arrow function:
() => {}
#### Usage:
	-does not bind this keyword

### promises
Used to avoid the callback abyss
#### Usage:
	* promise: const updatePromise = new Promise((resolve, reject) => <callback>)
	* resolve('Success!'): The promise has been fullfilled
		* called within another another callback, anonymous or otherwise
	* reject('Failed!'): The promise has been rejected
		* called within another callback
	* then(result => console.log(result)): Called when promise is resolved
	* catch(error => console.log(error)): Called when promise is rejected

## ---------------------Builtin Packages-----------------------------
Packages that come with Nodejs preinstalled.
### process
Used to get system information.
process does not have to be required.
#### Methods
	-env: Logs computer's environment
		-attributes: SHELL
	-exit(): exits session
	-argv: lists argument array
	-cwd(): 		

## JSON
Used to deal with JSON data and objects
Does not have to be required
### Methods:
	-stringify(<var>): turns var into a JSON object
		-cannot call properties of JSON object
	-parse(): turns JSON object into a regular object
		- can call properties

## fs
Used with file systems
### Methods:
	-fs.readdirSync, writeFileSync 
	-lstatSync: views stats of a file or folder
	-readFileSync(<path>): reads byte code. Have to call toString on it
		-const dataBuffer = readFileSync('somefile').toString() 

## path
Manipulate paths with this module
### Methods:
	-join(<pathname>[, pathname]): One value is the pathname, two values is the joined pathname of the arguments

## Miscallaneous
Builtin Methods
### Methods:
	-global: shows builtin functions

## -----------------------Third-party Packages---------------------------
Packages that have to be installed via npm	
### express
Used to create server
#### Examples:
	-const express = require('express')
	-const app = express()
	-app.use(express.static(path.join('<path>[, path]'))): serves up the folder for static files
	-app.set('view engine', 'ejs'): set view engine
	-app.set('views', <var or name of views directory>): Used to set folder for templates. Make sure to use path.join
	-app.listen(3000, ()=> console.log("Server started on port 3000"))
	-app.get('/', (req, res) => {<callbacks>}), post, put, delete, fetch
		-chaining: (").post().delete().put()
	-req: url request
		-req.query: contains query strings from a url
	-res: url response
	-callbacks:
		-res.render('index', {title: 'This App'})
		-res.send
		-res.write
	-__dirname: gives the directory path of the current file
	-__filename: give the filename with path of the current file

### ejs
Template engine to create html partials and html pages
#### Usage:
	-const ejs = require('ejs');
	-app.set('view engine', ejs): ejs is not in quotes. Remember that
	-file extension for templates: 'ejs'
	-<%- include('partials/header.ejs') -%>: syntax for including ejs files
	-<%= varible %>: syntax for displaying variables in ejs files
	-<% logic %>: syntax for JavaScript logic. No conditional statements allowed, only expressions.
	-'*': res.render('*') will render any url not yet used

### hbs
Template engine
#### Usage:
	-const hbs = require('hbs')
	-app.set('view engine', 'hbs')
	-file extensions: 'hbs'
	-hbs.registerPartials(<partials var or string>): setup for partials directory
	-{{>header}}: syntax for rendering partials
	-{{ variable  }}: systax for displaying variables in hbs file

### body-parser
Parses json, html and other formats
#### Examples:
	-const bodyParser = require("body-parser");
	-app.use({urlapp.use(bodyParser.urlencoded({
		extended: true
	}));

### md5

### bcrypt

### mongoose
Used to communicate with MongoDB databases
#### Examples:
	-const mongoose = require("mongoose");
	-mongoose.connect("mongodb://localhost:27017/wikiDB", {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
	-const userSchema = new mongoose.Schema({
		email: String,
		password: String
	});
	-const User = new mongoose.model("User", userSchema);

### mysql	

### dotenv
Confinguration package
#### Usage:
	-create .env file for values
	-require("dotenv").config(): allows the parsing of .env values
	-process.env.KEY: get the KEY value in .env file

### chalk:
add colors to console
#### Methods:
	-chalk.blue('Hello World!'), green, etc.
	-chalk.bgBlue, green, etc.
	-methods can be chained, e.g. 'chalk.blue.bgPink("Hello")'
	-inverse: changes the color to background
	-bold, underline

### nodemon
Used for debugging. 
#### Usage:
	-rs to restart
### yargs
Parse arguments
#### Builtin Args:
	--help, --version
#### Methods:
	-yargs.help('New help description'), yargs.version('1.1.0')
	-yargs.command({command: <command name>, describe: <description>, builder: <option>, handler: <function>})
		-builder {title: {describe: 'Note title', demandOption: true, type: 'string'}}
	-yargs.parse(): prints the args

### request
Easier way of performing http requests. npm install request(singular).
#### Usage:
	-request({url: '<url>', json: true}, <callback>)
	
