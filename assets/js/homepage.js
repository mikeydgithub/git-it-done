//request any users repository
var getUserRepos = function(user){
    //format the github api url
    var apiUrl = "https://api.github.com/users/" + user +"/repos";

    //make a request to the url
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
    });
};



//fetch api gathers resources
/*var getUserRepos = function(){ //setup funcition for getUserRepos
    fetch("https://api.github.com/users/octocat/repos") //fetch the api with the user repo link
    .then(function(data){ //use .then to call a response of the function
        console.log(data)
        //console.log("inside", response);
        //1.console log the "inside" and reponse. and .then function
        //2.data replaced "inside" for console logging
    });
    //first the url property confirms where the response came from. Second, because
    //the status proper has a vlue of 200(which means sucess), we know the request
    //went through sucessfully. 
    console.log("outside");
    //console.log("function was called");
    //var response = fetch("https:api.github.com/users/octocat/repos");
    //console.log(response); //returned promoise. Promises are more advanced callback functions.
};

getUserRepos();

//Example of asynchronous behaviour. AJAX(Asynchronus JavaScripts and XML)
/*document.querySelector("#submit-btn").addEventListener("click", function(event){
    //only called when user clicks the button
    console.log("hello 1");
});

setTimeout(function(){
    // called after 5 seconds, regardless if button was clicked
    console.log("hello 2");
}, 5000);

//called immediately on page load
console.log("hello 3");*/

/* Legacy Lore 
    Libraries like jQuery have south to make using XMLHttpRequest easier
    by wrapping up its complexities in a single method: $.ajax(). JQuery
    even used a Promise-like syntax by chaining a done() method to the end.
    Consider the following code example:
    $.ajax("https://api.github.com/users/octocat/repos").done(function(data){
        console.log(data);
    });
*/
