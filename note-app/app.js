const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

const command = process.argv[2]

//List Command
yargs.command({
    command: 'list',
    describe: 'List all Notes',
    handler: function(){
        notes.listNotes()
    }
})

// Create Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },  
    handler: function(argv) {

        notes.addNotes(argv.title,argv.body)
        // console.log('Title:-', argv.title);
        // console.log('Body:-',argv.body);
        
    }
})

// Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNotes(argv.title)
        // console.log('Removing a new Note');
        
    }
})

// Read Command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Read a title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title)
        
    }
})
// if (command === 'add') {
//     console.log("Adding notes");    
// }else {
//     console.log('Removing notes');
    
// }

yargs.parse()


