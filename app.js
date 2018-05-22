var fs = require('fs');
var xml2js = require('xml2js');
var jp = require('jsonpath');
const express = require('express');
const app = express();

var db;
 
var parser = new xml2js.Parser();
fs.readFile('evernote20180522.enex', function(err, data) {
  parser.parseString(data, function (err, result) {
    db = result['en-export']['note'];
    result['en-export']['note'].forEach((note) => {
      console.log(note.tag);
    });
    console.log('Done');

    filterByTag('blog');
  });
});

function filterByTag(tag) {
  var result = jp.query(db, '$[?(@.tag.indexOf("' + tag + '") != -1)]');
  console.log("==============");
  console.dir(result);
  console.log("Count: " + result.length);
  return result;
}


app.get('/start/:tag', function(req, res) {
  var out = '';
  console.log("tag: " + req.params.tag)
  var filter = filterByTag(req.params.tag);
  filter.forEach((note) => out += note.title + "<br />" + JSON.stringify(note['note-attributes']) + "<br />");
  res.send(out);
});


app.listen(3200, () => console.log('Example app listening on port 3200!'))