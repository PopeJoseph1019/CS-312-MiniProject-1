CS-312 Mini Project 1 - Blog Application
A responsive blog web application built with Node.js, Express.js, and EJS. This project demonstrates full CRUD operations for blog posts.

Features 

Create new blog posts with author, title, and content 

View all posts on homepage 

Edit existing posts 

Delete posts with confirmation 

Responsive design for all devices 

Modern UI with glassmorphism effects 


Technologies Used

Node.js

Express.js

EJS templating

CSS3

In-memory storage


Project Structure

CS-312-MiniProject-1/

├── README.md 

└── blog-app/ 

    ├── package.json 
    
    ├── server.js 
    
    ├── public/ 
    
    │   └── styles.css 
    
    └── views/ 
    
        ├── index.ejs 
        
        ├── edit.ejs 
        
        └── partials/ 
        
            ├── header.ejs 
            
            └── footer.ejs 
            
            
Setup Instructions 

Clone the repository: 

   git clone https://github.com/your-username/CS-312-MiniProject-1.git 
   
   cd CS-312-MiniProject-1/blog-app 
   
Install dependencies:

   npm install
   
Start the server:

   npm start
   
Open your browser to http://localhost:3000

Usage 

Create Post: Fill out the form on homepage and click "Publish Post" 

Edit Post: Click "Edit" button on any post, modify content, and save 

Delete Post: Click "Delete" button and confirm removal 


Dependencies 

express: Web framework 

ejs: Templating engine 

body-parser: Parse form data 


Posts are stored in memory and do not persist between server restarts. 

