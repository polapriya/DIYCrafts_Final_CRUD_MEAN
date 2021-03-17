const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
  const covidSchema = new mongoose.Schema({
    fabricdetails:  { type: String, required: true},
    sanitizertype:  { type: String, required: true},
    alcoholcontent:  { type: String, required: true},
    handsoaptype:  { type: String, required: true},
    });

//use the blueprint to create the model 
// Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Covid', covidSchema,'Covids');
//crafts is the collection name
