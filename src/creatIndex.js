function creatIndex(data) {
    return `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    
    <h1> <span># </span>${data.title}</h1>


    <h3> Licensing:</h3>
    
    <img src="https://shields.io/badge/license-${data.licensing}-blue"" alt="">
  
    <h3>## Table of Contents</h3> 
    <ul>
        <li><a href="#description">Description</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#contribution">Contribution</a></li>
        <li><a href="#testing">Testing</a></li>
        <li><a href="#additional-info">Additional Info</a></li>

    </ul>
  
    <h3 id="description">## Description:</h3>
    <p>${data.description}</p>
  
    <h3 id="installation">## Installation:</h3>
    <p>${data.installation}</p>
  
    <h3 id="usage">## Usage:</h3>
    <p>${data.usage}</p>
  
    <h3>## License:</h3>
    <p>${data.licensing}</p>
  
    <h3 id="contribution">## Contribution:</h3>
    <p>${data.contribution}</p>
  
    <h3 id="testing">## Testing:</h3>
    <p>${data.testing}</p>
  
    <h3 id="additional-info">## Additional Info:</h3>
    <h4>- Github: <a href="https://github.com/${data.github}">${data.github}</a></h4>
    <h4>- Email: ${data.email} </h4>
    </body>
    </html>

    `;
}
module.exports = creatIndex;