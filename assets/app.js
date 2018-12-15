// Intial array of cars
var cars = ["Mercedes", "NSX", "Bentley", "Impreza"];

// Functions
// This function is creating buttons for each item in array

function renderButtons() {
    // deletes topic buttons to prior to adding new buttons
    $("#carButtonView").empty();
    //looping through array
    for (var i = 0; i < cars.length; i++){
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        //adding class
        a.addClass("car");
        //adding data-attribute and go through cars index
        a.attr("data-name", cars[i]);
        // Providing text for a buttons value
        a.text(cars[i]);
        // adding button to HTML
        $("#carButtonView").append(a);
    }
    displayImages()
}

function displayImages() {
    //Event listener for all button elments
    $(".car").on("click", function() {
        var car = $(this).attr("data-name");

        // "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + car + "&api_key=BscRBlJCPl5muTdRsjGPuW62mLV458e4&limit=10";
        // Performing the ajax request
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(displayImages);
            //deleting GIFs prior to adding new GIFs
            // $("#carButtonView").empty();
            // storing array
            var results = response.data;
            // looping through every result
            for (var i = 0; i < results.length; i++) {
                if (results[i].rating !== "r") {
                    // creating a div and class item
                    var gifDiv = $("<div class='item'>");
                    // storing the result item's rating
                    var rating = results[i].rating;
                    // creates paragraph tags with result item's rating
                    var p = $("<p>").text("Rating: " + rating);
                    // creates an image tag
                    var carImage = $("<img>");
                    // Giving the image tag an src attribute of a property pulled
                    carImage.attr("src", results[i].images.fixed_height_still.url);
                    // making still/animate
                    carImage.attr("data-still", results[i].images.fixed_height_still.url);
                    carImage.attr("data-animate", results[i].images.fixed_height.url);
                    carImage.attr("data-state", "still");
                    carImage.addClass("gifs");
                    // appending the paragraph and carImage to the gifDIv
                    // gifDiv.append(carImage);
                    // gifDiv.append(p);
                    // Prepending the gifDiv to the container
                    $("#car-images").prepend(carImage);
                    $(".gifs").on("click", function() {
                        console.log("here")
                        // setting the data-state of gifs
                        var state = $(this).attr("data-state");
                        // when/if image is cclicked images state is still, then animates
                        if (state === "still") {
                            $(this).attr("src", $(this).attr("data-animate"));
                            // setting the imgs data state to animate
                            $(this).attr("data-state", "animate");
                            // else src is set to data still value
                        } else {
                            $(this).attr("src", $(this).attr("data-still"));
                            $(this).attr("data-state", "still");
                        };
                    });


                };
            };
        });
    });
};


// function to take user input and push into the array
function remakeButtons() {
    $("#add-car").on("click", function(event) {
        event.preventDefault();
        $("#carButtonView").empty();
    //looping through array
    for (var i = 0; i < cars.length; i++){
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        //adding class
        a.addClass("car");
        //adding data-attribute and go through cars index
        a.attr("data-name", cars[i]);
        // Providing text for a buttons value
        a.text(cars[i]);
        // adding button to HTML
        $("#carButtonView").append(a);
       
    };
        // grabbing text from input box
        var vehicle = $("#car-input").val().trim();
        // the user input from textbox is then added to the topics array
         cars.push(vehicle);
        console.log(cars);
        $("#car-input").val()
        // calling the function to create buttons that display GIFs
        renderButtons();
    displayImages();
    });
};




//  main process
// $(document).ready(function() {
    remakeButtons();
    renderButtons();
    displayImages();
// });


























// function displayCarGifs() {


//     var vehicle = $(this).attr("data-name");
    // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + vehicle + "&api_key=BscRBlJCPl5muTdRsjGPuW62mLV458e4&limit=10";


//         var vehicle = $(this).attr("data-name");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?limit=10&q=" + vehicle + "&api_key=BscRBlJCPl5muTdRsjGPuW62mLV458e4";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response) {
//         $("#cars-view").text(JSON.stringify(response));

        
//         for (var index = 0; index <10; index++){

//             // Have to make a div to hold cars
//             var vehicleDivName = "vehicle" + index;
//             var vehicleDiv = $("<div class="+vehicleDivName+">");

//             //Grabbing url for the image
//             var imgURL = response.data[index].images.orginal_still.url;
//             var imgURLAnimate = response.data[index].images.orignal.url;
//             var imgURLStill = response.data[index].images.original_still.url;

//             var image = $("<img>").attr({
//                 'class':"gif"+index,
//                 src: imgURL,
//                 'data-still': imgURLStill,
//                 'data-animate': imgURLAnimate,
//                 'data-state': "still"
//             });

//             // Holds the image
//             vehicleDiv.append(image);

//             $("#car-images").prepend(vehicleDiv);

//             // On click event that will pause/move/ the gif
//             $(".gif"+index).on("click", function() {
                

//                 let $this = $(this),
//                 currentState = $this.data('state');
//                 console.log(currentState)
//                 if ('still' === currentState) {
//                     $this.attr('src', $this.data('animate'));
//                     $this.data('state', 'moving');
//                 }else {
//                     $this.attr('src', $this.data('still'));
//                     $this.data('state', 'still');
//                 }})
//         }});


// }

// function renderButtons() {
    
//     $("#carButtonView").empty();
    

//     // looping through the array
//     for (var i = 0; i < vehicles.length; i++) {

//         // creates button for each car in array
//         // this code also makes button using jQuery

//         var a = $("<button>");
//         // adding a class vehicle to the button
//         a.addClass("vehicle");
//         // adding the data-attribute
//         a.attr("data-name", vehicles[i]);
//         // text for button
//         a.text(vehicles[i]);
//         // adding button to teh buttons-view 
//         $("#carButtonView").append(a);
//     }
// }

// // This function handles where a car button is clicked
// $("#add-car").on("click", function(event) {
//     event.preventDefault();
//     // grabbing input from textbox
//     var vehicle = $("#car-input").val().trim();

//     // adding car from textbox to our array
//     vehicles.push(vehicle);
//     console.log(vehicles);

//     // Calling renderButtons to handle the process of our car array
//     renderButtons();
// });

// // click event listener to all the elements with with class vehicle
// $(document).on("click", ".vehicle", displayCarGifs);

// // calling the renderButtons function to display the intial buttons

// renderButtons();




       




