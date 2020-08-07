# A-Very-Simple-NodeJs-REST-API 😎

## REST API stands for Representational State Transfer Application Programming Interface. This is a very simple REST API made with Nodejs

### How to use it :

####  1 .  After downloading the zip file extract it and open the project in your fabourite code editor like [VS Code](https://code.visualstudio.com/) or [Atom](https://atom.io/)
####  2 .   then open cmd or [Hyper](https://hyper.is/) or [Cmder](https://cmder.net/) terminal inside this project directory and type `npm install` and hit enter.
####  Because of running this command every packages needed for your project which are mentioned in `package.json` file will be installed automatically and a new directory will be created `node_modules` which contains those packages.

####  3 . `mongoose.connect("mongodb://localhost:27017/RESTDB", {useUnifiedTopology: true, useNewUrlParser: true});` Here Instead of using Local mongodb Database you can use
####  mongodb online database like [MLab](https://mlab.com/) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) to store your data upto 512 mb for free.So go any of the website
#### and create a new database & add the url of that database inplace of  `mongodb://localhost:27017/RESTDB` 

#### 4. If you wanna use your local mongodb then go to terminal and type `mongod` & hit enter.After that you can make CRUD(Create Read Update Delete) operations on mongodb databases.Otherwise you can't

#### 5. To view your database you need [Robo 3T](https://robomongo.org/) or [MongoDB Compass](https://www.mongodb.com/products/compass) installed your pc

#### 6. As REST API is all about making GET,POST,PUT,PATCH,UPDATE,DELETE requests so to perform these operations without having a front-end application you can use [Postman](https://www.postman.com/)
#### using Postman you can make these requests and view the responses in the GUI of Postman Tool

#### 7. finally Save all and  in terminal type `node server.js` & hit enter.Now Your app will run 
