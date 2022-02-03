var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");


var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
    // get value from input element

    var username = nameInputEl.value.trim();
    /*trim method removes whitespace from both ends of a string and returns a new string,
    without modifying the original string.*/

    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub username");
    }
  };


//request any users repository
var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = 'https://api.github.com/users/' + user + '/repos';

    //make a request to the url
    fetch(apiUrl)
        .then(function(response) {
            //request was successful
            if (response.ok) {
                response.json().then(function(data) {
                    displayRepos(data, user);
                });
            } else {
                alert("Error: GitHub User Not Found");
            }
        })
        .catch(function(error) {
            //notice this `.catch()` getting chained onto the end of the `.then()`
            alert("Unable to connect to GitHub");
        })
};

var displayRepos = function(repos, searchTerm) {
    // check if api returned any repos
    if (repos.length === 0) {
      repoContainerEl.textContent = 'No repositories found.';
      return;
    }
  
    repoSearchTerm.textContent = searchTerm;
  
    // loop over repos
    for (var i = 0; i < repos.length; i++) {
      // format repo name
      var repoName = repos[i].owner.login + '/' + repos[i].name;
  
      // create a container for each repo
      var repoEl = document.createElement('div');
      repoEl.classList = 'list-item flex-row justify-space-between align-center';
  
      // create a span element to hold repository name
      var titleEl = document.createElement('span');
      titleEl.textContent = repoName;
  
      // append to container
      repoEl.appendChild(titleEl);
  
      // create a status element
      var statusEl = document.createElement('span');
      statusEl.classList = 'flex-row align-center';
  
      // check if current repo has issues or not
      if (repos[i].open_issues_count > 0) {
        statusEl.innerHTML =
          "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
      } else {
        statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
      }
  
      // append to container
      repoEl.appendChild(statusEl);
  
      // append container to the dom
      repoContainerEl.appendChild(repoEl);
    }
};


// add event listeners to forms
userFormEl.addEventListener('submit', formSubmitHandler);











//getUserRepos();


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


//curl commands allow you make request from the command line
//alerts will block script from executing and therefore alerts are not asynchronous.

/* Legacy Lore 
    Libraries like jQuery have south to make using XMLHttpRequest easier
    by wrapping up its complexities in a single method: $.ajax(). JQuery
    even used a Promise-like syntax by chaining a done() method to the end.
    Consider the following code example:
    $.ajax("https://api.github.com/users/octocat/repos").done(function(data){
        console.log(data);
    });
*/
