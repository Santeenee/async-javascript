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

/* 
 ________  ________  ___       ___       ________  ________  ________  ___  __            ___  ___  _______   ___       ___
|\   ____\|\   __  \|\  \     |\  \     |\   __  \|\   __  \|\   ____\|\  \|\  \         |\  \|\  \|\  ___ \ |\  \     |\  \
\ \  \___|\ \  \|\  \ \  \    \ \  \    \ \  \|\ /\ \  \|\  \ \  \___|\ \  \/  /|_       \ \  \\\  \ \   __/|\ \  \    \ \  \
 \ \  \    \ \   __  \ \  \    \ \  \    \ \   __  \ \   __  \ \  \    \ \   ___  \       \ \   __  \ \  \_|/_\ \  \    \ \  \
  \ \  \____\ \  \ \  \ \  \____\ \  \____\ \  \|\  \ \  \ \  \ \  \____\ \  \\ \  \       \ \  \ \  \ \  \_|\ \ \  \____\ \  \____
   \ \_______\ \__\ \__\ \_______\ \_______\ \_______\ \__\ \__\ \_______\ \__\\ \__\       \ \__\ \__\ \_______\ \_______\ \_______\
    \|_______|\|__|\|__|\|_______|\|_______|\|_______|\|__|\|__|\|_______|\|__| \|__|        \|__|\|__|\|_______|\|_______|\|_______|
*/
getTodos("todos/luigi.json", (err, data) => {
  console.log(data);
  getTodos("todos/mario.json", (err, data) => {
    console.log(data);
    getTodos("todos/shaun.json", (err, data) => {
      console.log(data);
    });
  });
});
