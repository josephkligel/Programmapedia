# Nodejs/Javascript References:

## Install and Setup
nvm(command): node version manager
	### Examples
	'nvm ls-remote': show all available LTS versions of Node
	'nvm i 12.16.1': install Nodejs version 12.16.1
	'nvm install-latest-npm'
	

npm:	Node package manager
	### Flags

node:	Nodejs
	### Flags

## Packages: Installed packages for Nodejs
	
express:
	-const express = require('express');
	-const app = express();
	-app.use(express.static("public/"));

ejs:
	-const ejs = require('ejs');
	-app.use('view engine', ejs): ejs is not in quotes. Remember that
body-parser:
	-const bodyParser = require("body-parser");
	-app.use({urlapp.use(bodyParser.urlencoded({
		extended: true
	}));
md5:
	
bcrypt:

mongoose:
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

mysql:	

dotenv:
	-require("dotenv").config();

process:
	-process.env: Logs computer's environment

