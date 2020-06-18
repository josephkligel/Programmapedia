# Deployment
* Legend:
>("): Same as above or before

## ----------------------Heroku Setup---------------------
Setup and deployment on Heroku

### Setup
* npm i -g heroku: installs heroku globally
* heroku -v: check version
* heroku login: Login through browser
* heroku keys:add : Adds public key to Heroku
	* See git reference under ssh setup to create ssh key
* heroku create <name of app>: Creates a new app with given name and reports the new url for the app
* Add "scripts": {"start": "node src/index.js"} to package.json
* run command 'npm start' to test
* git add and commit
* git push heroku master

### Troubleshoot
* git:remote -a jkligel-todo: adds heroku to git remotes
* heroku buildpacks:set heroku/nodejs : sets nodejs as buildpack
