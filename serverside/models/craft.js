const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
  const craftSchema = new mongoose.Schema({
    crafttype:  { type: String, required: true},
    craftname:  { type: String, required: true},
    material:  { type: String, required: true},
    requiredtime:  { type: String, required: true},
    notes:  { type: String, required: false},
    customerrating: { type: String, required: false}
  });

//use the blueprint to create the model 
// Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Craft', craftSchema,'Crafts');
//crafts is the collection name
