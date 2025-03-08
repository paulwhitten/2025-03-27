const fs = require('fs');
const path =  require('path');
const { program } = require('commander');

program.option('-i, --input <input_file>', 'input file')
   .option('-o, --output <output_location>', 'output folder');

program.parse(process.argv);
const options = program.opts();

let baseName = path.basename(options['input']);

fs.cp(options['input'], path.join(options['output'], options['input']), {recursive: true}, (err) => {
   if (err) {
      console.log("Error copying", options['input'], "to", options["output"]);
   } else {
      console.log("copied")
   }
});

fs.watchFile(options['input'], (eventType, fileName) => {
   fs.cp(options['input'], path.join(options['output'], options['input']), {recursive: true}, (err) => {
      if (err) {
         console.log("Error copying", options['input'], "to", options["output"]);
      } else {
         console.log("copied")
      }
      console.log("event:", eventType, "fileName:", fileName);
   });
});
