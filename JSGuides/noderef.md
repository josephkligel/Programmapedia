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
	* chaining: 'User.findByIdAndUpdate(... return User.countDocuments({age: 30})}).then((result) => console.log(result)).catch(e => console.log(e))

### async and await
These go with promises and are typically associated with them
#### Usage:
	* 'async () => {}': Returns an empty promise
		* Creates a promise. Can apply then and catch functions on the promise
	* 'await add(1, 2)': Gets a promise back. See node/playground/9-async-await for examples
		* No need for then and catch, e.g. 'return await(1,2)'
		* No need for chaining, e.g. 'const sum = await add(1, 2); return await add(sum, 1)'

### Errors
Managing errors in Nodejs
#### Usage:
	* throw: 'throw new Error("This is an error!")'
	* try and catch: 'try{console.log("Something to try")} catch(err) {console.log(err)}'


## ---------------------Builtin Packages-----------------------------
Packages that come with Nodejs preinstalled.
### process
Used to get system information.
process does not have to be required.
#### Methods
	-env: Logs computer's environment
		-attributes: SHELL, port
	-exit(): exits session
	-argv: lists argument array
	-cwd(): 		

## JSON
Used to deal with JSON data and objects
Does not have to be required
### Methods:
	-stringify(<var>): turns var into a JSON object
		-cannot call properties of JSON object
	-parse(): turns JSON object into a regular JavaScript object
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

### bcrypt
Used to encrypt data. Install bcryptjs
#### Usage:
	* const bcrypt = require('bcryptjs')
	* bcrypt.hash(pass, 8)
		* First argument is the password
		* Second is the amount of rounds to hash the password. Never use more than 10
	* bcrypt.compare(password, hashedPw): Returns true or false after comparing passwords

### mongoose
Used to communicate with MongoDB databases
#### Examples:
	* const mongoose = require("mongoose");
	* mongoose.connect("mongodb://localhost:27017/wikiDB", {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
	* const userSchema = new mongoose.Schema({
		email: String,
		password: String
	});
		* userSchema.pre: done before an event 
		* userSchema.post: done after an event
	* const User = new mongoose.model("User", userSchema);
	* Methods: See mongoose-api.js in node/playground

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

### mongoose
Best api to manage mongo databases
#### Usage:
	* const mongoose = require('mongoose');
	* mongoose.connect('mongodb://127.0.0.1:27017/users', {
			useNewUrlParser: true,
			useCreateIndex: true})
	* const User = mongoose.model('User', {
  		name: {type: String, required: true, trim: true}, age: {type: Number}});
	* const me = new User({name: "Joseph", age: 29})
	* me.save().then(() => console.log(me)}).catch(error => console.log(error))

### validator
Validates data with more intuitive sytanx
#### Methods:
	* isEmail: 'validator.isEmail(value)'. Returns true if valid
	* contains: 'validator.contains(value, "password", {ignoreCase: true})'
	
