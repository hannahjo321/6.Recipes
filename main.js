
$("#recipeBtn").click(function(){
  var url = "https://api.edamam.com/search?app_id=b97cd4e3&app_key=705cbbb0078729243678aacfa2e5789a&q=" + $('#recipeInput').val();
  $.getJSON(url,function(data){
    $('#recipeContent').append('<div class="recipeItem"></div><img src="' + data.hits[0].recipe.image + '" alt="" class="recipeImage"><div class="recipeTitle">' + data.hits[0].recipe.label + '<div class="ingredients"> ' + data.hits[0].recipe.ingredientLines + ' </div></div>');
    console.log(data.hits[0].recipe.label);
  });
});
