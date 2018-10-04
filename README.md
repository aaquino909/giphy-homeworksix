# giphy-homeworksix

completed two bonuses: 
-option to display 10 more gifs
-options to save favorite gifs
  -store it in localStorage and display when page is refreshed

need to debug: 
the 10 extra images are the same 10 images first displayed, giphy didn't have a randomater, so i blame their API
when localStorage is empty, my empty favorites button doesn't function as expected. I get an error of null but as long as something is in localStorage the app works as expected. 


Workflow for assignment
1. create boostrap layout CHECK!
2. create array (real housewives) CHECK!
3. use array to create buttons with data-values CHECK!
4. display buttons on page CHECK!
5. create onclick function for buttons CHECK!
        - use data-values to q? giphy API
        - display on the page with 10 limits
        
6. create still and active function when clicking a gif CHECK!
7. use input.val to push item in array CHECK!
7. calls the function to make it a button and pull gifs CHECK!

Note to self, do only two buttons for now CHECK!

uclagiphy
Api Key:
XXa3vkfF45jjJDFAgDVYJWRRoUMI9uSm


https://api.giphy.com/v1/gifs/search?api_key=XXa3vkfF45jjJDFAgDVYJWRRoUMI9uSm&q=
HOUSEWIFE
&limit=10&offset=0&rating=R&lang=en


ajax function:
    $.ajax({  //built into Jquery 
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      console.log(response.Runtime);
    });
