# Git Commands Reference
* Legend:
>("): Same as above or before
>repository: A place where git files are stored

## ------------------------Setup-----------------------
* git-scm.com: Install git
* git config --global user.email "jkligel@gmail.com"
* git config --global user.name "Joseph Kligel"
* git init: initializes git and creates .git folder
* git add .; git commit -m 'First Commit'; git remote add origin 'https://github.com/zigjag/bin.git'; git push -u origin master; 

## ------------------------Usage-----------------------
Arguments, flags, and commands

### status
Check untracked files
#### Examples:
	* 'git status'

### .gitignore
Add directories and files to .gitignore file if they are to be ignored
#### Example:
	* 'echo 'node_modules/' >> .gitignore'

### add, commit
Add to be tracked	
#### Examples
	* 'git add .' or 'git add <filename>': add all or specific file
		* -A or '.': All files
	* 'git commit -m "first commit"': Commit changes with messages
		* -m: Message flag

### push
Push changes to remote repository
#### Examples:
	* 'git push -u origin master'
		* -u: #Todo
		* -f: force push

### pull
Pull from remote repo
#### Examples:
	* allow-unrelated-histories: Fix issues dealing with git histories conflicting

### remote
Using remote urls
#### Examples:
	* 'git remote -v': to see all remotes added
		* -v: version flag
	* 'git remote add origin <url>': add a new git repo by variable name origin
	* 'git remote set-origin <url>': #Todo

### checkout:	
Using other branchs
#### Examples:
	* 'git checkout -b "firstbranch"'

### rm	
to remove from git collection
#### Examples:
	* 'git rm -r node_modules/'

## -------------------------Heroku Git------------------------
Using heroku git

* 'heroku git:remote -a project'
* 'git push -f heroku master'

## -----------------------SSH Setup--------------------------

* ssh-keygen -t rsa -b 4096 -C 'jkligel@gmail.com': create key
	* -t: type of key
	* -b: bits
	* -C: create new comment

* eval "$(ssh-agent -s)": Startup ssh-agent
* ssh-add ~/.ssh/id_rsa
* Go to settings page of Github repository and add id_rsa.pub key  

