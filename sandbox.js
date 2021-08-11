const getTodos = (callback) => {
  //create the request object
  const request = new XMLHttpRequest();

  //whenever the data comes back, it fires this event listener
  request.addEventListener("readystatechange", () => {
    //dispalying all the readystates that we get
    /*console.log(request, request.readyState);*/

    //if the request is complete
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      /*console.log(
        `could not fetch the data, status %c${request.status}`,
        "color: red; background: yellow;"
      );*/
      callback(`could not fetch data, status ${request.status}`, undefined);
    }
  });

  //setting up the request
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");

  //guess what? it sends the request. so easy!
  request.send();
};

console.log(1);
console.log(2);

//convention: first the error, than the data
getTodos((err, data) => {
  console.log("Callback fired");
  if (err) console.log(err);
  else console.log(data);
});

console.log(3);
console.log(4);
