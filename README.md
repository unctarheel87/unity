# UNITY        
Unity is a Fintech Full stack application, that enables its customers as clients and advisors, working with real time stock market related information, serving their financial and investment needs.      
 
## Application capabilities:      
- Stock search with realtime charting to view the latest market trends.         
- Stock details including ticker symbol information, current price and related news.      
- Stock suggestions to follow and save searches by adding to personalized watchlist.     
- Personalized dashboard for individual clients and Advisors.      
   - Client side dashboard includes saved Watchlists, Messaging feature to interact with the advisors.      
   - Advisor dashboard includes Client list, tracking their watchlists and interactive messages with the client.     

## Deployed Heroku Link           
[UNITY](https://mighty-escarpment-81668.herokuapp.com/)       

### Technologies and Dependencies Used                
- `HTML5`      
- `CSS3`      
- `Javascript`      
- `React-Materialize`   
- `D3.js`   
- `React-Stockcharts`   
- `React-Router-Dom`      
- `Passport`    
- `Axios`     
- `Socket.io`     
- `Node.js`       
- `Express.js`       
- `MongoDB`       
- `Mongoose ORM`    
- `Robo Mongo 3T`          
  
### Structure            
The project directory structure is set up as follows:            
- `client`          
   - `node_modules`: Contains the project `dependencies`.     
   - `public`: Contains the `index.html` file which is a template to be rendered in the browser. Also contains `images` folder.     
   - `src`: The `src` folder is where the `React app components` reside.     
   - `components`: The `components` folder is where the app components that are reused across the app are located. Each folder represents a separate component.   
   - `pages`: This folder contains React components and its logic.            
   - `utils`: Contains `axios` request to grab the latest stock market data and other information related to the ticker symbol from the API Key. Also contains validation used for authentication of User and Advisor from the `MongoDB database`.     
   - `App.js`: The `App.js` file is where the React components are imported and rendered and where the routes are set up.     
   - `index.js`: The `index.js` file is the top level file of the React app. In `index.js`, the `App.js` file is imported, and the `ReactDOM.render` method is used to render `App.js` to the page.     
   - `App.css` and `index.css`: The external `css stylesheets` for the app.    
- `package.json`: Lists the project dependencies and their version numbers.     
- `yarn.lock`: Dependency tree for the project. Lists all the client dependencies and their versions.     
- `controllers`: The `controllers` are the routes that are used to pass information to and from the view and model objects.     
- `models`: A `model` defines the `database schema` or structure of the database.    
- `routes`: These files are the key to how the back end and front end can communicate with each other. They give the server a map of how to respond when users/advisors visit or request data from various URLs.    
- `package.json`: Lists the project dependencies and their version numbers. It also contains various scripts to start the server, create a production build, seed the database, etc.     
- `server.js`: This file does the following:      
   - Defines and requires the dependencies, including `express`, `passport-local`, `LocalStrategy`, `Routes`, `path`, and `mongoose`.    
   - Sets up the `Express server` to handle data parsing using `body-parser`.     
   - Points the server to the `API routes`, which gives the server a map of how to respond when users visit or request data from various URLs.   
   - `passport-local` uses `LocalStrategy` to configure authentication via username and password.    
   - Defines the port the `server` is listening on.      
   - Starts the `Express server` and `React development server`.      
   - Allows the app to serve static content.      
   - Uses `Mongoose (orm)` to connect to `MongoDB`, which allows us to have access to the `MongoDB` commands to perform various operations on the database.     
- `yarn.lock`: Dependency tree for the project. Lists the project dependencies and their versions.       

### Instructions:       
- Install `Mongodb`, start the shell with the related app database.           
- After cloning the repo, run `npm install` to download the `Node` dependencies and packages.     
- Run `yarn install` to download the `client` dependencies and packages. Start the `Express server`(`localhost:3001`) and `React development server`.       
- The app is served on port `localhost:3000` to run in the browser.                
- `Home page`: Upon the landing page, the client can sign up and choose his advisor. The client/advisor also has the option to choose a role(user/advisor) and proceed to login accordingly.     
![home-page-readme](/client/public/images/home-page-readme.png)         
![choose-advisor-readme](/client/public/images/choose-advisor-readme.png)         
![advisor-role-readme](/client/public/images/advisor-role-readme.png)          
- `User Dashboard`: While on the user dashboard, the client can search for a stock by typing in a ticker symbol and view the stock charts to follow realtime market trends, related news and other company description.     
- There is also related Stock suggestions to follow and save searches by adding to personalized watchlist.   
![search-page-readme](/client/public/images/search-page-readme.png)          
- Client side dashboard includes saved Watchlists, view related stockcharts by clicking on the watchlist, messaging feature to interact with the advisors.   
![user-dash-readme](/client/public/images/user-dash-readme.png)         
- `Advisor dashboard`:  Includes Client list, tracking their watchlists, interactive messages with the client and saving them by their preferences.          
![advisor-dash-readme](/client/public/images/advisor-dash-readme.png)                  
