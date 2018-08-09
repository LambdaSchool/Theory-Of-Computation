const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// Read file
const file = fs.readFileSync(filename).toString();


// my implementation, returns 173 links, should be 172
// let regex = /(https:)\S+/g;

/* 
https? = Match on http or https
:\/\/ = match on "://" using \ to escape the backslashes
[^\\'"<>\s]+? = match 1 or more on any characters NOT in this set, lazily
\. = match on the period
[^\\'"<>\s]+ = match 1 or more on any characters NOT in this set, greedily
*/
let regex = /https?:\/\/[^\\'"<>\s]+?\.[^\\'"<>\s]+/g; // correct implementation, returns 172 links

// Find matches
const links = file.match(regex);

// Print all matches
console.log(links);
console.log("number of links: ", links.length);
