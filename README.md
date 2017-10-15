# practice
accepted codewars.com solutions


```javascript
//initial fetching solution
//generate-slug-filenames.js

"use-strict";

require('es6-promise').polyfill();
require('isomorphic-fetch');

var fs = require('fs');
var path = process.cwd();


var getData = function(keyfilename) {

    let username = "claimred", 
        apistr = "https://www.codewars.com/api/v1/users/",
        endpoint = "/code-challenges/completed";

    let apikey = fs.readFileSync(path + "\\" + keyfilename).toString();

    let url = apistr + username + endpoint + "?access_key=" + apikey;

    let extensions = { javascript: "js", c: "c", cpp: "cpp" };

    let createFiles = function(items) {

        let filenames = items.data.map(el => ({name: el.slug + "." + extensions[el.completedLanguages[0]], id: el.id}));

        let createFile = function(el, d) {
            var fd = fs.openSync(path + "\\" + el.name, "w");
            fs.writeSync(fd, "//Task codewars id: " + el.id + "");
            fs.writeSync(fd, "\n/* Task codewars description: " + d.description + "*/")
            fs.closeSync(fd);            
        };

        filenames.forEach(function(element) {
          
            fetch("https://www.codewars.com/api/v1/code-challenges/" + element.id)
                .then(
                    response => response.json()
                )
                .then(
                    data => createFile(element, data)
                );


            
        }, this);

    };

    fetch(url)
        .then(
            response => response.json()
        )
        .then(
            data => createFiles(data)
        );
};

getData(process.argv.slice(2)[0])




```


