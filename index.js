const fs = require('fs');
const path =  require('path');
const program = require('commander');

const options = program.version('0.0.1')
   .option('-i, --input <input_file>', 'input file')
   .option('-o, --output <output_location>', 'output folder')
   .parse(process.argv)
   .opts();

let baseName = path.basename(options['input']);

fs.copyFileSync(options['input'], path.join(options['output'], baseName));

fs.watchFile(options['input'], (curr, prev) => {
   let inFile = path.join(options['input'], fileChanged);
   let outFile = path.join(options['output'], baseName, fileChanged);
   fs.copyFileSync(inFile, outFile);
   console.log('Copied', intFile, 'to', outFile);
});
