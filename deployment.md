# Deployment
Legend:
>("): Same as above or before

## ----------------------Heroku Setup---------------------
Setup and deployment on Heroku

### Setup
* Install heroku: npm i -g heroku
* Check version of heroku: heroku -v
* Login to to heroku: heroku login
* Setup ssh key: See SSH Setup section in git reference markup file
* Add public key to heroku: heroku keys:add
* Create a new app: heroku create <app>
* Add to package.json: "scripts": {"start": "node src/index.js"}
* Test start command: npm start
* Push to git repo
* Push to heroku: git push heroku master

### config
* Check config: 'heroku config'
* set key/values: heroku config:set key=value
* Unset key/values: heroku config:unset key

### Troubleshoot
* Add heroku to remote repos: heroku git:remote -a jkligel-todo
* Set nodejs as buildpack: heroku buildpacks:set heroku/nodejs
