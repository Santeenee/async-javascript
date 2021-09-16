const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    //create the request object
    const request = new XMLHttpRequest();

    //whenever the data comes back, it fires this event listener
    request.addEventListener("readystatechange", () => {
      //if the request is complete
      if (request.readyState === 4 && request.status === 200) {
        data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        /*console.log(
        `could not fetch the data, status %c${request.status}`,
        "color: red; background: yellow;"
        );*/
        reject("error getting resource");
      }
    });

    //setting up the request
    request.open("GET", resource);

    //guess what? it sends the request. so easy!
    request.send();
  });
};

getTodos("todos/luigi.json")
  .then((data) => {
    console.log("promise 1 resolved:", data);
    return getTodos("todos/mario.json");
  })
  .then((data) => {
    console.log("promise 2 resolved:", data);
    return getTodos("todos/shaun.json");
  })
  .then((data) => {
    console.log("promise 3 resolved:", data);
  })
  .catch((err) => {
    console.log("promise rejected:", err);
  });
