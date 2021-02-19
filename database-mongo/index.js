var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var recipeSchema = mongoose.Schema({
  nutritionInfo: String, // time for cooking
  style: String, // breakfast, lunch or dinner
  ingredients: String, // per serving
  item: String,
  directions: String // steps
});

var Recipe = mongoose.model('Recipe', recipeSchema);

var selectAll = function(data, callback) {
  // console.log('data',typeof data)
  if (data === 'undefined') {
    Recipe.find({}, function(err, recipes) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, recipes);
      }
    });
  } else {
    // console.log('data',data)
    Recipe.find({style: { $in: data}}, function(err, recipes) {
      if(err) {
        callback(err, null);
      } else {
        // console.log('break', recipes)
        callback(null, recipes);
      }
    });
  }
};

var saveRecipe = function(data, callback) {
  // console.log(data)
  const recipe = new Recipe(data);
  recipe.save(function(err, results) {
    if(err) {
      // console.log('err')
      callback(err, null);
    } else {
      // console.log('db succuss', results)
      callback(null, results);
    }
  })
}

const deleteRecipe = function(data, callback) {
  // console.log('db', data)
  Recipe.deleteOne(data, function(err, recipes) {
    if(err) {
      console.log('err')
      callback(err, null);
    } else {
      // console.log('break')
      callback(null, recipes);
    }
  });
}
module.exports ={
  selectAll,
  saveRecipe,
  deleteRecipe
}