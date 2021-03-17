const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
  const craftSchema = new mongoose.Schema({
    
    Fiesta:  { type: String, required: true},
    Publisher:  { type: String, required: true},
    CostDetails:  { type: String, required: true},
    EquipmentRequired:  { type: String, required: true},
    ImageURL:  { type: String, required: true},
    YoutubeLink:  { type: String, required: true}
  });

//use the blueprint to create the model 
// Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('decor', craftSchema,'decor');
//note capital S in the collection name
