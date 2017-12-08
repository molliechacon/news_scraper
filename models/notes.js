var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// new NoteSchema object
var NoteSchema = new Schema({

  Author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }  
});

// This creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);

// Export the Article model
module.exports = Note;