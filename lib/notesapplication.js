// NotesApplication class

module.exports = function() {
	this.notelist = [];

	/**
	 * create a note to the NotesApplication
	 * @param {Note} note A note object
	 */	
	this.create = function (note) {
		this.notelist.push(note);

		return true;

	}

	/**
	 * Note Application function that
	 * Lists all the notes in notes application
	 */
	this.listNotes =function () {
		for (var i=0; i<this.notelist.length; i++) {
			return ("node_id " + i + " " + "content " + this.notelist[i].notecontent + " " + "author " + this.notelist[i].author);
		}
	}

	/**
	 * Note Application function that
	 * Retrieve the note at
	 * @param {Number} note_id The index of the note within the list of notes
	 */	
	this.getNote =function(note_id) {
		var note = this.notelist[note_id];
		if (note);
				return true;
		
		return("NO NOTE WITH SUCH ID");

	}
	
	/**
	 * Note Application function that
	 * Searches all notes that match the string
	 * @param {string} search_text The text to search for.
	 */	
	this.searchNote =function(search_text) {
		for (var i = 0; i < this.notelist.length; i++) {
			if (this.notelist[i].notecontent.indexOf(search_text)> -1) {
				return ("you are searching for: " + search_text + " " + "Note ID " + i + " " + "Content: " + this.notelist[i].notecontent + " " + "author: " + this.notelist[i].author  );
			}
		
		}
	
			
		}

	/**
	 * Note Application function that
	 * Deletes the note at
	 * @param {Number} note_id The index of the note within the list of notes
	 */

	this.deleteNote=function(note_id) {
		if (this.notelist[note_id]);
			this.notelist.pop(this.notelist[note_id]);

		
	}
	
	/**
	 * Note Application function that
	 * Edits the note at
	 * @param {Number} note_id The index of the note within the list of notes
	 * @param {string} new_content The new content to add
	 */	

	this.editNote =function(note_id, new_content) {
		if(this.notelist[note_id]){
			this.notelist[note_id].notecontent = new_content;
			return note_id;
		}
		
	}
	
}
