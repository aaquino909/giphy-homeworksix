$(document).ready(function () {
  var housewives = ["NeNe leaks", "Kenya Moore", "Kandi Burruss", "Cynthia Bailey", "Porsha Williams", "Phaedra Parks", "Sheree Whitfield", "Ashley Darby", "Karen Huger", "Gizelle Bryant", "Lisa Vanderpump", "Kyle Richards", "Lisa Rinna", "Erika Jayne"];
  var array = [];

  //function to render buttons from array
  function renderButtons() {
    $("#buttonCol").empty();
    for (var i = 0; i < housewives.length; i++) {
      var button = $('<button>');
      button.addClass("wife");
      button.attr("data-name", housewives[i]);
      button.text(housewives[i]);
      $("#buttonCol").append(button);
    }
  }
  renderButtons();

  //10 more 
  //input button for 10 more
  //create onclick event using everything but empty();


  //FAVROTIES section
  //add a button to each picture
  //$<button> add a class 
  //pull the img src and add it to the button (event listener)
  //var Vsrc=$picture.attrSRC
  //<button>.attr src, vrc
  //push src to array "favorites"
  //outside the foorlop declare array
  //src to favorite array - for later in case local storage
  //favorite = push (Vsrc)

  //display array in thumbnail column
  //event lister is add the src to the div that i created inside the thumbnail columnt
  //append the div

  //store in local storage
  //window on load (google)
  //function to display items in array from local storage


  //eventlistener for buttons
  $(document).on('click', '.wife', function () {

    // $("button").on("click", function () {
    $("#gifCol").empty();
    var person = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=XXa3vkfF45jjJDFAgDVYJWRRoUMI9uSm&q=" + person + "&limit=10"
    $.ajax({  //built into Jquery 
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        if (results[i].rating !== "r") {
          var gifDiv = $("<div>");
          gifDiv.addClass("wifeImage")
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height_still.url);
          personImage.attr("data-still", results[i].images.fixed_height_still.url);
          personImage.attr("data-animate", results[i].images.fixed_height.url);
          personImage.attr("data-state", "still");
          personImage.attr('id', 'gif');
          //create button with src animate attribute
          var save = $("<button>");
          save.addClass("saveBtn");
          save.text("save");
          save.attr("src", results[i].images.fixed_height_small.url);
          gifDiv.append(personImage);
          gifDiv.append(save);
          gifDiv.append(p);
          $("#gifCol").prepend(gifDiv);
        }  //if
      } //for
    }); //ajax
  }); //onclick




  //function that works anytime the document changes
  $(document).on('click', '#gif', function () {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
  $(document).on('click', '#add-housewife', function (event) {
    event.preventDefault();
    var newHousewife = $("#housewife-input").val().trim();
    housewives.push(newHousewife);
    renderButtons();
    $("#housewife-input").closest('form').find("input[type=text], textarea").val(""); //empties input field when button is pressed



  });

  $(document).on('click', '.saveBtn', function () {
    var srcLink = $(this).attr("src"); // pull src from saveBtn and assign to an img to
    array.push(srcLink);
    console.log(array);
    var faveImg = $("<img>"); //create a new img element and assign it to faveImg
    faveImg.addClass("favorite"); //add class favorite
    faveImg.attr("src", srcLink); //push the srcLink to src attribute 
    $("#favoritesCol").prepend(faveImg);
    localStorage.setItem("savedHousewives", JSON.stringify(array)); //stores array into localStorage


  });

  console.log(array);
  // localStorage.setItem("savedHousewives", JSON.stringify(array));

  //function to display array from local storage
    var retrievedData = JSON.parse(localStorage.getItem("savedHousewives"));
    console.log(retrievedData);
    for (var i = 0; i < retrievedData.length; i++ ){
      var newImage = $("<img>");
      newImage.addClass("favorite");
      newImage.attr("src", retrievedData[i]);
      $("#favoritesCol").prepend(newImage);

    }
  
    $(document).on('click','#clearStorage', function(){
      $("#favoritesCol").empty();
      localStorage.clear();

    })


});//documentreadyFunction



