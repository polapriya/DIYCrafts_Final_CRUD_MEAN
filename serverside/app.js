const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const mongoose = require('mongoose');
//specify where to find the schema
const Craft = require('./models/craft');
const Decor = require('./models/decor');
const Giftsdata = require('./models/giftsdata');
const Covid = require('./models/covid');

// Recycling Craft //
mongoose.connect('mongodb+srv://user1:abc123qqq@cluster0.mrqdk.mongodb.net/IT6203?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => { console.log("connected to Mongos atlas"); })
  .catch(() => { console.log("error connecting"); });
// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
   console.log('This line is always called');
   res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
   res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
   // parse application/x-www-form-urlencoded
   next();
});
app.get('/crafts', (req, res, next) => {
  //call mongoose method find (MongoDB db.Crafts.find())
  Craft.find() 
    //if data is returned, send data as a response 
    .then(data => res.status(200).json(data))
    //if error, send internal server error
    .catch(err => {
    console.log('Error: ${err}');
    res.status(500).json(err);
  });
  });

  app.use(bodyParser.urlencoded({ extended: false })) 
// parse application/json
app.use(bodyParser.json())
  // serve incoming post requests to /crafts
app.post('/crafts', (req, res, next) => {
  const craft = new Craft({
  crafttype: req.body.crafttype,
  craftname: req.body.craftname,
  material: req.body.material,
  requiredtime: req.body.requiredtime,
  notes: req.body.notes,
  customerrating: req.body.customerrating
  });
  //send the document to the database 
  craft.save()
    //in case of success
    .then(() => { console.log('Success');})
    //if error
    .catch(err => {console.log('Error:' + err);
  });
});
  
//:id is a dynamic parameter that will be extracted from the URL
app.delete("/crafts/:id", (req, res, next) => {
  Craft.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});

// serve incoming put requests to /crafts
app.put('/crafts/:id', (req, res, next) => {
  console.log("id: " + req.params.id)
  // check that the parameter id is valid 
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    //find a document and set new Craft details
    Craft.findOneAndUpdate({_id: req.params.id},
      {$set:    {
      crafttype : req.body.crafttype,
      craftname : req.body.craftname,
      material : req.body.material,
      requiredtime : req.body.requiredtime,
      notes : req.body.notes,
      customerrating : req.body.customerrating
    }},{new:true}) 
     .then((craft) => {
        if (craft) { //what was updated
          console.log(craft);
        } else {
          console.log("no data exist for this id");
        }
     })
    .catch((err) => {
      console.log(err);
     });
 } else {
   console.log("please provide correct id");
 }
  
}); 

// GiftsData component//

app.use((req, res, next) => {
  console.log('This line is always called');
  res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/giftsdata', (req, res, next) => {
    Giftsdata.find()
      .then(data => res.status(200).json(data))
      .catch(err => {
        console.log(`An Error occured. ${err}`);
        res.status(500).json(err);
      });

      });  
app.post('/giftsdata', (req, res, next) => {
    const giftsdata = new Giftsdata({
      Creators_name: req.body.creators_name ,
      Event_category_name: req.body.event_category_name ,
      Recipient: req.body.recipient ,
      Age: req.body.age ,
      Gift_category: req.body.gift_Category ,
      Gift_idea: req.body.gift_idea,
      Date:req.body.myDatepickerr
    
    });
  
    //send the document to the database 
    giftsdata.save()
      //in case of success
      .then(() => { console.log('Success'); })
      //if error
      .catch(err => { console.log('Error:' + err); });
  });

  //:id is a dynamic parameter that will be extracted from the URL
app.delete("/giftsdata/:id", (req, res, next) => {
  Giftsdata.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });

});

// serve incoming put requests to /students
app.put('/giftsdata/:id', (req, res, next) => {
  console.log("id: " + req.params.id)
  // check that the parameter id is valid 
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    //find a document and set new first and last names
    Giftsdata.findOneAndUpdate({_id: req.params.id},
      {$set:{Creators_name: req.body.creators_name ,
        Event_category_name: req.body.event_category_name ,
        Recipient: req.body.recipient ,
        Age: req.body.age ,
        Gift_category: req.body.gift_Category ,
        Gift_idea: req.body.gift_idea,
        Date:req.body.myDatepickerr}}) 
     .then((giftsdata) => {
        if (giftsdata) { //what was updated
          console.log(giftsdata);
        } else {
          console.log("no data exist for this id");
        }
     })
    .catch((err) => {
      console.log(err);
     });
 } else {
   console.log("please provide correct id");
 }  
});  

//Decor component//

// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
   console.log('This line is always called');
   res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
   res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
   next();
});
app.get('/decor', (req, res, next) => {
    //call mongoose method find (MongoDB db.Students.find())
    Decor.find() 
    //if data is returned, send data as a response 
    .then(data => res.status(200).json(data))
    
    //if error, send internal server error
    .catch(err => {
    console.log('Error: ${err}');
    res.status(500).json(err);
  });

//send the array as the response  res.json(decors)
app.use(bodyParser.urlencoded({ extended: false }))
 
// // parse application/json
 app.use(bodyParser.json())
app.post('/decor', (req, res, next) => {

   const decor = new Decor({
   
      Fiesta: req.body.Fiesta,
      Publisher: req.body.Publisher,
      CostDetails: req.body.CostDetails,
      EquipmentRequired: req.body.EquipmentRequired,
      ImageURL: req.body.ImageURL,
      YoutubeLink: req.body.YoutubeLink
    });
    //send the document to the database 
    decor.save()
      //in case of success
      .then(() => { console.log('Success');})
      //if error
      .catch(err => {console.log('Error:' + err);}); 
   //  //sent an acknowledgment back to caller 
    res.status(201).json('Post successful');
  });
//:id is a dynamic parameter that will be extracted from the URL
app.delete("/decor/:id", (req, res, next) => {
  Decor.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});
// serve incoming put requests to /students
app.put('/decor/:id', (req, res, next) => {
  console.log("id: " + req.params.id)
  // check that the parameter id is valid 
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    //find a document and set new first and last names
    Decor.findOneAndUpdate({_id: req.params.id},
      {$set:{Fiesta: req.body.Fiesta,
        Publisher: req.body.Publisher,
        CostDetails: req.body.CostDetails,
        EquipmentRequired: req.body.EquipmentRequired,
        ImageURL: req.body.ImageURL,
        YoutubeLink: req.body.YoutubeLink}},{new:true}) 
     .then((decor) => {
        if (decor) { //what was updated
          console.log(decor);
        } else {
          console.log("no data exist for this id");
        }
     })
    .catch((err) => {
      console.log(err);
     });
 } else {
   console.log("please provide correct id");
 }
  
});  
//Covid Component//
// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
  console.log('This line is always called');
  res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  // parse application/x-www-form-urlencoded
  next();
});
app.get('/covids', (req, res, next) => {
 //call mongoose method find (MongoDB db.Covids.find())
 Covid.find() 
   //if data is returned, send data as a response 
   .then(data => res.status(200).json(data))
   //if error, send internal server error
   .catch(err => {
   console.log('Error: ${err}');
   res.status(500).json(err);
 });
 });

 app.use(bodyParser.urlencoded({ extended: false })) 
// parse application/json
app.use(bodyParser.json())
 // serve incoming post requests to /crafts
app.post('/covids', (req, res, next) => {
 const covid = new Covid({
 fabricdetails: req.body.fabricdetails,
 sanitizertype: req.body.sanitizertype,
 alcoholcontent: req.body.alcoholcontent,
 handsoaptype: req.body.handsoaptype,
  });
 //send the document to the database 
 covid.save()
   //in case of success
   .then(() => { console.log('Success');})
   //if error
   .catch(err => {console.log('Error:' + err);
 });
});
 
//:id is a dynamic parameter that will be extracted from the URL
app.delete("/covids/:id", (req, res, next) => {
 Covid.deleteOne({ _id: req.params.id }).then(result => {
   console.log(result);
   res.status(200).json("Deleted!");
 });
});

// serve incoming put requests to /crafts
app.put('/covids/:id', (req, res, next) => {
 console.log("id: " + req.params.id)
 // check that the parameter id is valid 
 if (mongoose.Types.ObjectId.isValid(req.params.id)) {
   //find a document and set new Craft details
   Covid.findOneAndUpdate({_id: req.params.id},
     {$set:    {
     fabricdetails : req.body.fabricdetails,
     sanitizertype : req.body.sanitizertype,
     alcoholcontent : req.body.alcoholcontent,
     handsoaptype : req.body.handsoaptype,
       }},{new:true}) 
    .then((covid) => {
       if (covid) { //what was updated
         console.log(covid);
       } else {
         console.log("no data exist for this id");
       }
    })
   .catch((err) => {
     console.log(err);
    });
} else {
  console.log("please provide correct id");
}
 
}); 


});

//to use this middleware in other parts of the application
module.exports=app
