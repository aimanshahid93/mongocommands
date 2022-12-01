db.movies.find({}).count();
//projections
db.movies.find({},{name:1,rating:1});

db.movies.find({},{summary:0,trailer:0});

db.movies.find({},{name:1,rating:0});

db.movies.find({rating:8},{_id:0,name:1,rating:1});

//asc
db.movies.find({rating:8},{_id:0,name:1,rating:1}).sort({rating:1});
//desc
db.movies.find({rating:8},{_id:0,name:1,rating:1}).sort({rating:-1});

db.movies.find({rating:+9});

db.movies.findOne({id:"105"})

db.movies.updateOne({id:"105"},{$set:{rating:9}})

db.movies.updateMany({},{$set:{language:"english"}}) 

db.movies.updateMany(
{id:{$in:["99","103"]}},
{$set:{language:"tamil"}}
);

db.movies.updateMany(
{id:{$in:["100","106"]}},
{$set:{language:"telegu"}}
);