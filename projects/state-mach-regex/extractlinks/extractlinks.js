const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const file = fs.readFileSync(filename).toString();
// Set up regex
let regex = /(?:ht|f)tps?:\/\/[-a-zA-Z0-9.]+\.[a-zA-Z]{2,3}(\/[^"<']*)?/g;
// Find matches
const links = file.match(regex);
// Print all matches
console.log(links.length)
console.log(links);