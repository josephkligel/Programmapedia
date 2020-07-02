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

### Strings
Methods on strings
#### Methods:
	* <str>.replace(this, that): replace this with that
	* <str>.endsWith('.pdf'): return true or false if ends with .pdf

### regex
Regular expressions
#### Usage:
	* 'const phrase = /.*(doc|pdf).?/':  Use forward slashes to denote a regex expression
	* 'file.originalname.match(phrase)': Return true if file.originalname has the regex phrase in it 

### Lists
Methods and uses of lists
#### Usage:
	* concat: adds an item to a list

### Operators
Using operators in JS and Node.js
#### Usage:
	* 'delete thisArray': deletes an item
	* '<obj>.toJSON = function(){return {}}': Overload JSON.stringify
	* '<obj>.toObject = (")': Overload Object methods
	* 'new Object()': Creates a new instance of an object
#### Shortcut operators:
	* '{Model, Schema} = require("mongoose")': Destructure an object, pulling properities out of the object
	* '...anArray': Spread operator for arrays. Allows you to easily add all elements of an array

## ---------------------Builtin Packages-----------------------------
Packages that come with Nodejs preinstalled.
### process
Used to get system information.
process does not have to be required.
#### Methods
	-env: Logs computer's environment
		-attributes: SHELL, port, etc.
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
	* readdirSync(<dir>): read directory
	* writeFileSync(<file name>, <text to write>): write without callback
		* writeFile(<fn>, <text>, <callback>)
	* readFileSync(<path>): reads byte code. Have to call toString on it
		* const dataBuffer = readFileSync('somefile').toString() 
	* lstatSync: views stats of a file or folder

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
	-const router = express.Router(): Creates a router class.
		* Operates in a similar way as the app variable below
		* Can call on the same http methods as app: route, get, post, etc.
	-const app = express()
	-app.use(express.static(path.join('<path>[, path]'))): serves up the folder for static files
	-app.set('view engine', 'ejs'): set view engine
	-app.set('views', <var or name of views directory>): Used to set folder for templates. Make sure to use path.join
	-app.listen(3000, ()=> console.log("Server started on port 3000"))
	-app.route('/'): The route http requests are trying to go to
		* app.get('/', (req, res) => {<callbacks>}): retrieve a resource
		* (")post: send a resource
		* put: replace an existent resource
		* patch: replace elements of an existent resource 
		* delete: Remove a resource completely
		* chaining route methods: app.route('/').post().delete().put()
	-req: url request
		* req.query: contains query strings from a url. Typically used with post methods
		* req.params: contains param strings from a url. Typically used with get methods
		* req.method: the method the request is calling
		* req.path: the path the request is trying to go to
	-res: url response
	-callbacks:
		* res.render('index', {title: 'This App'}): shows a resource, such as a web page
		* res.send: sends data and terminates the response
		* res.write: sends data. Terminates when res.send is called
		* res.set('content-type', 'image/jpg'): sets the response's content type to jpg
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
	* import: 'const mongoose = require("mongoose");'
	* connection to database: 'mongoose.connect("mongodb://localhost:27017/wikiDB", {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});'
	* schema: 'const userSchema = new mongoose.Schema({
		email: String,
		password: String
	});'
		* userSchema.pre: done before an event 
		* userSchema.post: done after an event
	* model: 'const User = new mongoose.model("User", userSchema);'
		* model instance: 'const me = new User({name: "Joseph", age: 29})'
		* save instance: 'me.save().then(() => console.log(me)}).catch(error => console.log(error));'
	* Methods: See mongoose-api.js in node/playground

### dotenv
Confinguration package
#### Usage:
	-create .env file for values
	-require("dotenv").config(): allows the parsing of .env values
	-process.env.KEY: get the KEY value in .env file

### env-cmd
Another configuration packages
#### Usage:
	* npm i env-cmd --save-dev
	* package.json: Add 'env-cmd ./config/dev.env' to scripts
	* Add key/value pairs to dev.env

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

### validator
Validates data with more intuitive sytanx
#### Methods:
	* isEmail: 'validator.isEmail(value)'. Returns true if valid
	* contains: 'validator.contains(value, "password", {ignoreCase: true})'

### jsonwebtoken
Use json web tokens for authentication of users
#### Methods:
	* const jwt = require('jsonwebtoken')
	* jwt.sign({_id: 'abc123'}, 'thisismynewcourse'): Turns a piece of data into a token using the second argument key
	* jwt.verify(token, 'thisismynewcourse'): Returns a decrypted token using a key

### multer
Upload files
#### Usage:
	* const multer = require('multer')
	* const upload = multer({dest: 'images',... <func>}): create an instance of multer and a destination named images
		*{limits: {fileSize: 1000000}}: Option to limit the size of an uploaded file. 1000000 is 1MB
		*<func>: 'fileFilter(req, file, cb){cb()...}'
	* router.post('/users/me/images', upload.single('avatar'), (req, res)...): post image
		* upload a single image with the key name of avatar
		* Use post method to send avatar image to images folder 	 	

### sharp
Package for editing images
#### Usage:
	* const sharp = require('sharp')
	* await sharp(<img>).resize({width: 250, height: 250}): Converts to 250 by 250
	* await sharp(<img>).png(): converts to png format
	* (").toBuffer(): Converts picture to buffer string. Not part of sharp library

### sendgrid
Sending emails
#### Usage:
	* const sgMail = require('sendgrid/mail')]
	* sgMail.setApiKey(<api_key>)
	* sgMail.send({
		to: 'jkligel@gmail.com',
		from: 'jkligel@gmail.com',
		subject: 'This is my first creation',
		text: 'I hope this gets to you.'
	})

### jest
Testing framework. Zero config framework
#### Usage:
	* npm i jest --save-dev
	* add "test": "jest --watch" to package.json
		* --watch allows test to restart
	* create .test.js file
	* test('tester', <callback>): tester is the name of the test and the callback is the operation
	* expect(total).toBe(13): Tests total value and if it is not 13 reports an error
	* 
