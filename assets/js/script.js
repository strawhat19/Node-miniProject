const inquirer = require(`inquirer`);
const fs = require(`fs`);

inquirer
  .prompt([
    {
      type: `input`,
      message: `What is your user name?`,
      name: `username`,
    },
    {
      type: `input`,
      message: `What is your location?`,
      name: `location`,
    },
    {
      type: `input`,
      message: `Your LinkedIn?`,
      name: `linkedin`,
    },
    {
      type: `input`,
      message: `Your Github?`,
      name: `github`
    }
  ])
  .then(response => {
    console.log(response);
    console.log(response.username);
    fs.writeFile(`generated.html`,`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4">Hi! My name is ${response.username} </h1>
        <p class="lead">I am from ${response.location}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${response.github}</li>
        <li class="list-group-item">LinkedIn: ${response.linkedin}</li>
        </ul>
    </div>
    </div>
    </body>
    </html>`, 
    function(error) {
            console.log(error);
        })
  })