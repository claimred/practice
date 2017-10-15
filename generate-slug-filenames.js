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

    let processData = function(items) {

        let filenames = items.data.map(el => (el.slug + "." + extensions[el.completedLanguages[0]]));

        filenames.forEach(function(element) {
            fs.closeSync(fs.openSync(path + "\\" + element, "w"));
        }, this);

    };

    fetch(url)
        .then(
            response => response.json()
        )
        .then(
            data => processData(data)
        );
};

getData(process.argv.slice(2)[0])



