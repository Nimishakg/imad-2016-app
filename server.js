var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = 
{
 'article-one' : {    title : 'Article One - Nimisha',
    heading : 'Article One',
    date : 'Sep 5, 2016',
    content : `<p>
                This is my second Article.  </p> `},
 'article-two' : {
    title : 'Article Two - Nimisha',
    heading : 'Article Two',
    date : 'Sep 5, 2016',
    content : `<p>
                This is my fsdsd Article. This is my first Article. This is my first Article. This is my first Article. This is my first Article.  
            </p>
             <p>
                This is my first Article. This is my first Article. This is my first Article. This is my first Article. This is my first Article.  
            </p>
             <p>
                This is my first Article. This is my first Article. This is my first Article. This is my first Article. This is my first Article.  
            </p>`
},
  'article-three' : {
    
      title : 'Article Three - Nimisha',
    heading : 'Article Three',
    date : 'Sep 11, 2016',
    content : `<p>
                This is my third Article.  </p> `
}
};
function createTemplate(data)
{
var title = data.title;    
var heading = data.heading;
var date = data.date;
var content = data.content;
var htmlTemplate = `
<html>
    <head>
        <title>
          nimmi
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
      <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>${heading}</h3>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
      </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter = 0;
app.get('/counter', function (req, res) {
  counter = counter + 1;
  res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
