const getTodos = (resource, callback) => {
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
  request.open("GET", resource);

  //guess what? it sends the request. so easy!
  request.send();
};

//PROMISES
const getSomething = () => {
  return new Promise((resolve, reject) => {
    //fetch something
    resolve("some data");
    //reject("some error");
  });
};

//not clean enough version
/*getSomething().then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);*/

//better version ⤵
getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
