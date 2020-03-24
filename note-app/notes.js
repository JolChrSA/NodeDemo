const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return "Your Notes !!!"
}

const addNotes = (title,body) => {
    const notes = loadNotes()

    const duplicateNote = notes.filter((note) => note.title === title)
    // const duplicateNote = notes.filter(function (note){
    //     return note.title === title
    // })
    if (duplicateNote.length === 0) {

        notes.push({
            title: title,
            body: body
        })
        console.log(notes);
    
        saveNotes(notes)

        console.log("New note has been added!!");
    }else {
        console.log("Note has already taken !!");
    }    
}

const loadNotes = function (notes) {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}

const saveNotes = function(notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}

const removeNotes = (title) =>{
    const notes = loadNotes()
    console.log(notes.length);
    
    const notesToKeep = notes.filter((note)=> note.title !== title) // Using Arrow Function 
    // const notesToKeep = notes.filter(function(note){ // Without Arrow Function 
    //     return note.title !== title
    // })
    console.log(notesToKeep.length);
    
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Notes Removed !!'));
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No Note found !!'));
    }
}

const listNotes = () => {

    const notes = loadNotes()

    notes.forEach(note => {
        console.log(note.title);
    });
}

const readNote = (title) => {

    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.green.inverse(note.title));
        console.log(note.body);
        
    }else {
        console.log(chalk.red.inverse('Note not found'));
        
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
} 