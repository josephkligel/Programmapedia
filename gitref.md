# Git Commands Reference
Legend:
>("): Same as above or before
>repository: A place where git files are stored

Table of Contents:
> Setup and Install
> Commands
> Git Config
> SSH Setup

## ------------------------ Setup and Install -----------------------

* Install git from website: git-scm.com
* set email: git config --global user.email "jkligel@gmail.com"
* set username: git config --global user.name "Joseph Kligel"
* Initialize a new git folder: git init
* Create .gitignore: echo "node_modules/" >> .gitignore
* First commit: 
	* git add .
	* git commit -m 'First Commit'
	* git remote add origin 'https://github.com/zigjag/bin.git'
	* git push -u origin master 

## ------------------------ Commands -----------------------
Arguments, flags, and commands

### status
Check untracked files
#### Examples:
	* 'git status'

### reset
Undo changes and commits
#### Examples:
	* Remove staged and working directory changes: git reset --hard
	* Go back a certain number of changes: git reset --hard HEAD~2

### add
Add to be tracked	
#### Examples:
	* 'git add .' or 'git add <filename>': add all or specific file
		* -A or '.': All files
	
### commit
Stage changes
#### Usage:
	* commit: git commit -m "first commit"
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

### branch
See branches
#### Usage:
	* Branch list: git branch
	* Create new branch: git branch <new-branch>

### checkout:	
Using other branches
#### Examples:
	* Checkout branch: git checkout master
	* Create and switch to new branch : git checkout -b "firstbranch"

### rm	
to remove from git collection
#### Examples:
	* Remove from git repo and locally: git rm -r <folder>
	* Remove from git repo only: git rm -r --cached <folder>

## ---------------------- Git Config -------------------

### git config
Config git
#### Usage:
	* Set email: git config --global user.email "jkligel@gmail.com"
	* Set username: git config --global user.name "Joseph Kligel"
	* Set timeout git logins: git config --global credential.helper "--cached timeout 7200"

### .gitignore
File to with a list of directories and files that should be ignored
#### Example:
	* echo 'node_modules/' >> .gitignore

## -------------------------Heroku Git------------------------
Using heroku git

* Set heroku repo: heroku git:remote -a <project>
* Force push to heroku: git push -f heroku master

## -----------------------SSH Setup--------------------------

* ssh-keygen -t rsa -b 4096 -C 'jkligel@gmail.com': create key
	* -t: type of key
	* -b: bits
	* -C: create new comment

* eval "$(ssh-agent -s)": Startup ssh-agent
* ssh-add ~/.ssh/id_rsa
* Go to settings page of Github repository and add id_rsa.pub key  

