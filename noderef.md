# Nodejs/Javascript References:
Legend:
>("): The same phrase or word above or before

## --------------------------Install and Setup------------------------

### nvm(command): 
node version manager
#### Examples
	'nvm ls-remote': show all available LTS versions of Node
	'nvm i 12.16.1': install Nodejs version 12.16.1
	'nvm install-latest-npm'
	

### npm:	
Node package manager
#### Flags

### node:	
Nodejs
#### Flags

## ---------------------Builtin Packages-----------------------------
Packages that come with Nodejs preinstalled.
### process:
Used to get system information
#### Usage
	-process.env: Logs computer's environment


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

