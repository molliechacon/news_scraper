var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// new ArticleSchema object
var ArticleSchema = new Schema({

  headline: {
    type: String,
    required: true,
    unique: true
  },
  summary: {
    type: String,
    required: true,
    unique: true
  },
  url: {
      type: String,
      required: true,
      unique: true
  },
  saved: {
      type: Boolean,
      required: true,
      default: false
  },
  // notes array
  notes: [{
    type: Schema.Types.ObjectId,
    // refer to the Note model
    ref: "Note"
  }]
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;

