var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
'article-one': {
    title: 'Aricle One | Tejaswi Puthi',
    heading: 'Article One',
    date: 'Sept 5 2016',
    content: `<p>
            This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
        </p>
        <p>
            This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
        </p>`,
},
'article-two': {
    title: 'Aricle Two | Tejaswi Puthi',
    heading: 'Article Two',
    date: 'Sept 5 2016',
    content: `<p>
            This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
        </p>
        <p>
            This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
        </p>`,
    
},
'article-three' : {
    title: 'Aricle Three | Tejaswi Puthi',
    heading: 'Article Three',
    date: 'Sept 5 2016',
    content: `<p>
            This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
        </p>
        <p>
            This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
        </p>`,
}};

function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var date = data.date;
var htmlTemplate = `
    <html>
    <head>
        <title>
            $(title)
        </title>
        <link href="/ui/style.css" rel="stylesheet" /> 
    </head>
<body>
    <div class="container">
    <div>
        <a href="/">Home></a>
    </div>
    <hr/>
    <h3>
        $(heading)
    </h3>
    <div>
        $(date)
    </div>
    <div>
        $(content)
    </div>
    </div>
</body>
</html>`;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName', function (req, res) {
    articleName = rec.params.articleName;
    
  res.send(createTemplate(articles[articleName]));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
