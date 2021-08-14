const getTodos = (callback) => {
  //create the request object
  const request = new XMLHttpRequest();

  //whenever the data comes back, it fires this event listener
  request.addEventListener("readystatechange", () => {
    //dispalying all the readystates that we get
    /*console.log(request, request.readyState);*/

    //if the request is complete
    if (request.readyState === 4 && request.status === 200) {
      data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      /*console.log(
        `could not fetch the data, status %c${request.status}`,
        "color: red; background: yellow;"
      );*/
      callback(`could not fetch data, status ${request.status}`, undefined);
    }
  });

  //setting up the request
  request.open("GET", "todos.json");

  //guess what? it sends the request. so easy!
  request.send();
};

//convention: first the error, than the data
getTodos((err, data) => {
  console.log("Callback fired");
  if (err) console.log(err);
  else console.log(data);
});
