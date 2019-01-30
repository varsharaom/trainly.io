<br />
An annotated walkthrough of a system build/installation: https://youtu.be/BxubRuZ0hFE <br/>
A demo video, showing input/output examples of all the task and report queries: https://youtu.be/vWCNvcl2iAI <br/>
<br />
Instructions for running trainly.io : <br />
Step0: Download the repository. <br />
Step1: Install XAMPP and start mySQL database and Apache Web Server. <br />
Step2: Go to phpMyAdmin and import the TRAINLYIO.sql data dump. <br />
Step3: Install Node.js <br />
Step4: Open Terminal and go to Downloads/trainly.io-master/TrainlyIO/ <br />
Step5: Type in the command: "npm install" (adds all the dependencies such as express, cookie etc.) <br />
Step6: Start the server by typing in the command: "node server.js" <br />
Step7: Open a web browser (preferably google chrome) and type "localhost:5554" in the address bar. <br />
Step8: Press enter and trainly.io is opened. <br /><br/>

Admin credentials : <br/>
email : chang.chen2@husky.neu.edu <br/>
password : 1234 <br/>

Student credentials : <br/>
email : jack.daniel@gmail.com <br/>
password : 1234 <br/>


<br />
PROGRAM NAMES AND THEIR FUNCTION: <br />
server.js: This file imports all the libraries required to run the website on the browser. It also specifies the port number if we are running it on our local machine. <br />
<br />
public/server/services/user.service.server.js: This file consists of all the queries that it sends to the database management system which is MySQL in our case. Based on the type of request (GET, POST, PUT, DELETE), it will fetch the data from DBMS and send the data back as the response.<br />
<br />
public/services/user.service.client.js: This file is used to manage the communication between the UI and the backend server. Based on the type of function being called from the UI, it sends a request (GET, POST, PUT, DELETE) consisting of the type of response expected back from DBMS. For example, if it sends a GET request, it expects the server to return data. Or if it expects UPDATE, it expects back either “OK” response or “ERROR” response from the server.<br />
<br />
views/common/templates: These are all common AngularJS templates used in our website.<br />
<br />
course/controllers, home/controllers, user/controllers: These are the controllers for our AngularJS templates. They are used to manage the control of flow of data between the Model(server) and View(AngularJS) template. Every controller will bind itself with the template so that dynamic changes in the UI could be shown on the template.<br />
<br />
home/ templates, user/templates: These are all the HTML pages of our website.<br />
<br />
public/config.js: This is the route provider for our AngularJS templates. Based on the url, it will return the appropriate AngularJS template as well as the controller.<br />
<br />
public/index.html: This is the starting page of our website which gets loaded when we start the website.<br />
<br />
express.js: This is used to import expressJS library for making REST API calls to the database from the server.<br />
<br />
package.json: it contains all the libraries which are required to run the database on the browser. We don’t have to download them from the website as it will get automatically imported when we run it on our browser. <br />

