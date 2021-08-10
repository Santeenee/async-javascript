//create the request object
const request = new XMLHttpRequest();

//whenever the data comes back, it fires this event listener
request.addEventListener("readystatechange", () => {
  //dispalying all the readystates that we get
  /*console.log(request, request.readyState);*/

  //if the request is complete
  if (request.readyState === 4) {
    //getting the actual response
    console.log(request.responseText);
  }
});

//setting up the request
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");

//guess what? it sends the request. so easy!
request.send();
