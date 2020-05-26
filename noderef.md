# Nodejs/Javascript References:
Legend:
>("): The same phrase or word above or before

## --------------------------Install and Setup------------------------

### nvm(command): 
node version manager
#### Examples
	-nvm ls-remote: show all available LTS versions of Node
	-nvm i 12.16.': install Nodejs version 12.16.1
	-nvm install-latest-npm: install latest npm
	

### npm:	
Node package manager
#### Usage
	-npm search <package>, npm list
	-npm install <package>@<version>: install locally, but if no package is specifed, packages listed in package/package-lock.json are installed.
	-npm install -g <package>: installs globally 

### node:	
Nodejs
#### Usage
	-node <app name>.js

## ---------------------Builtin Packages-----------------------------
Packages that come with Nodejs preinstalled.
### process:
Used to get system information.
process does not have to be required.
#### Methods
	-env: Logs computer's environment
	-exit: exits session
	-argv: lists argument array
		
## JSON
Used to deal with JSON data and objects
Does not have to be required
### Methods:
	-stringify(<var>): turns var into a JSON object
		-cannot call properties of JSON object
	-parse(): turns JSON object into a regular object
		- can call properties

## fs:
Used with file systems
### Methods
	-fs.readdirSync, writeFileSync 
	-lstatSync: views stats of a file or folder
	-readFileSync(<path>): reads byte code. Have to call toString on it
		-const dataBuffer = readFileSync('somefile').toString() 

## Miscallaneous:
Builtin Methods
### Methods
	-global: shows builtin functions

## -----------------------Third-party Packages---------------------------
Packages that have to be installed via npm	
### express:
Used to create server
#### Examples
	-const express = require('express');
	-const app = express();
	-app.use(express.static("public/"));
	-app.listen(3000, ()=> console.log("Server started on port 3000"));

### ejs:
Template engine to create html partials and html pages
#### Examples
	-const ejs = require('ejs');
	-app.use('view engine', ejs): ejs is not in quotes. Remember that

### body-parser:
Parses json, html and other formats
#### Examples
	-const bodyParser = require("body-parser");
	-app.use({urlapp.use(bodyParser.urlencoded({
		extended: true
	}));

### md5:

### bcrypt:

### mongoose:
Used to communicate with MongoDB databases
#### Examples
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

### mysql:	

### dotenv:
Confinguration package
#### Examples
	-require("dotenv").config();

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
### Builtin Args:
	--help, --version
### Methods:
	-yargs.help('New help description'), yargs.version('1.1.0')
	-yargs.command({command: <command name>, describe: <description>, builder: <option>, handler: <function>})
		-builder {title: {describe: 'Note title', demandOption: true, type: 'string'}}
	-yargs.parse(): prints the args
	
