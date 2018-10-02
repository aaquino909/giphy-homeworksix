$(document).ready(function () {
  var housewives = ["NeNe leaks", "Kenya Moore", "Kandi Burruss", "Cynthia Bailey", "Porsha Williams", "Phaedra Parks", "Sheree Whitfield", "Ashley Darby", "Karen Huger", "Gizelle Bryant", "Lisa Vanderpump", "Kyle Richards", "Lisa Rinna", "Erika Jayne"];

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

  //eventlistener for buttons
  $(document).on('click', 'button', function(){

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

          gifDiv.append(p);
          gifDiv.append(personImage);
          $("#gifCol").prepend(gifDiv);
        }  //if
      } //for
    }); //ajax
  }); //onclick

  //function that works anytime the document changes
  $(document).on('click', '#gif', function(){
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
  $(document).on('click', '#add-housewife', function(event){
    event.preventDefault();
    var newHousewife = $("#housewife-input").val().trim();
    housewives.push(newHousewife);
    renderButtons();
    $("#housewife-input").closest('form').find("input[type=text], textarea").val(""); //empties input field when button is pressed



  });


});//documentreadyFunction



