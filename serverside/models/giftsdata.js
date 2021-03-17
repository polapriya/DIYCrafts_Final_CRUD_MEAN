const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
  const giftsdataSchema = new mongoose.Schema({
    Creators_name:  { type: String, required: true},
    Event_category_name:  { type: String, required: true},
    Recipient:  { type: String, required: true},
    Age:  { type: Number, required: true},
    Gift_category:  { type: String, required: true},
    Gift_idea:  { type: String, required: true},
    Date: { type: Date, required: true},
});

//use the blueprint to create the model 
// Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Giftsdata', giftsdataSchema,'Giftsdata');
