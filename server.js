const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// run
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// store
let posts = [];
let nextId = 1;

// formmatting
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}



// homepage, display posts
app.get('/', (req, res) => {
  res.render('index', { 
    posts: posts.map(post => ({
      ...post,
      formattedDate: formatDate(post.createdAt)
    }))
  });
});

// create posts
app.post('/posts', (req, res) => {
  const { title, content, author } = req.body;
  
  if (title && content && author) {
    const newPost = {
      id: nextId++,
      title: title.trim(),
      content: content.trim(),
      author: author.trim(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    posts.unshift(newPost); // add to array
  }
  
  res.redirect('/');
});

// edit post
app.get('/edit/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  
  if (!post) {
    return res.redirect('/');
  }
  
  res.render('edit', { post });
});

// update post
app.post('/edit/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content, author } = req.body;
  const postIndex = posts.findIndex(p => p.id === postId);
  
  if (postIndex !== -1 && title && content && author) {
    posts[postIndex] = {
      ...posts[postIndex],
      title: title.trim(),
      content: content.trim(),
      author: author.trim(),
      updatedAt: new Date()
    };
  }
  
  res.redirect('/');
});

// delete post
app.post('/delete/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  posts = posts.filter(p => p.id !== postId);
  res.redirect('/');
});

// start server
app.listen(PORT, () => {
  console.log(`Blog server is running on http://localhost:${PORT}`);
});
