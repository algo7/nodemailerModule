# viralApp_supplementaryModules
Supplementary modules for the viral app

## nodeMailer
Send email using gmail utilizing node-mailer package

```javascript
//Import the module
const mailFunc = reuqire('./path/to/app.js').mailFunc;

//Call the function 
//(cbMail -> callback that return a msg indicating whether the mail is sent or not)
mailFunc('subject', 'recipient', 'message', cbMail => {
    console.log(cbMail)
})

```

## dbConnect
POC for implementing Node's Mongo Driver in Meteor.js

Check out:

* ./dbConnection.js	
* ./dbModel.js	
* ./mongoKey.js
* ./server/main.js


