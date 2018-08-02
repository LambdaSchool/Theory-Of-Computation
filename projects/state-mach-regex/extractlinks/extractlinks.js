const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// console.log(args)

// !!!! IMPLEMENT ME

// Read file
file = fs.readFileSync(filename, 'utf8')
// console.log(file)
// Set up regex
const regex = /["']https?:\/\/[^'"]*?\.[^'"]*?["']/g;
// Find matches
const output = file.match(regex)
// Print all matches
console.log(output)
fs.writeFile('./links.txt', output, (ferr) => {
    if (ferr) {
      // console.log('Error writing secret key to confing file: ', ferr.message)
      return;
    }
  });