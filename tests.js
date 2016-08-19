'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');

describe("Note creation works properly", function() {
    var note = new Note("toheeb", "hello world");
    it("assigns author based on the parameter supplied in the constructor", function() {
        
        assert(note.author);
    })

    it("assigns note content on the parameter supplied in the constructor", function() {
        
        assert(note.notecontent);
    })    
    it("assigns author name to note.author", function() {
        
        assert(note.author === "toheeb");
    })

    it("assigns content to note.content", function() {
        
        assert(note.notecontent === "hello world");
    })    
})

describe("Notes application increments number of notes as notes are added", function() {

    it("create a note and return true when the note is created", function() {
        var note = new Note("toheeb", "hello world");
        var noteapp = new NotesApplication("toheeb");
        assert (noteapp.create(note) === true);
        
    })

    it("increments the note list as notes are added", function() {
        var note = new Note("toheeb", "hello world");
        var noteapp = new NotesApplication("toheeb");
        assert(noteapp.notelist.length === 0);
        
    })


    it("get note from the notelist and returns true once the list is gotten", function() {
        var note = new Note("toheeb", "hello world");
        var noteapp = new NotesApplication("toheeb");
        assert(noteapp.getNote(0) === true);
        
    })
    it("search text in all notelist and return the full content of where the search text exist", function() {
        var note = new Note("toheeb", "hello world");
        var noteapp = new NotesApplication("toheeb");
        noteapp.create(note)        
        assert (noteapp.searchNote() === "result found");
        
    })
    it(" delete or pop out a note base on note_id ", function() {
        var note = new Note("toheeb", "hello world");
        var noteapp = new NotesApplication("toheeb");
        noteapp.create(note);  
        noteapp.deleteNote(0);
        assert(noteapp.notelist.length === 0);
    })


    it(" edit a note base on the note_id", function() {
        var note = new Note("toheeb", "hello world");
        var noteapp = new NotesApplication("toheeb");
        noteapp.create(note);
        assert(noteapp.noteslist[0] === note);
        noteapp.editNote(0, "hello javascript");
        assert(noteapp.noteslist[0].notecontent === "hello javascript");
    })



})

