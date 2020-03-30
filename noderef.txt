# Nodejs/Javascript References:

nvm(command): node version manager
	###examples
	'nvm ls-remote': show all available LTS versions of Node
	'nvm i 12.16.1': install Nodejs version 12.16.1
	'nvm install-latest-npm'
	

npm:	Node package manager
	###flags

node:	Nodejs
	###flags

## Packages: Installed packages for Nodejs
	
express:
	
ejs:

body-parser:

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

## Hyper: Preferred terminal
