# Async Javascript notes

One of the most important part of JavaScript

I will be using async JS at some point while crafting web projects

Used to perform tasks that take some time to complete
(getting data from DB)

first understand synchronous code..

    every statement execute after the other (in a single threaded environment --> JS)

    if at some point, you fetch some data from a DB, you stop the program (until you get the data ofc) --> "blocking code"

this is solved letting the browser handle the request of data while your code is doing stuff, then, when the data is fetched, a callback function is called and it finishes what the original function wanted to do. kinda.

"Start something now & finish it later"

---

## HTTP request

- get data from another server
- so... requests to API endpoints

in this chapter we are using the JSONPlaceholder API

--

using the 'network' tab in the dev tools of chrome (or firefox?)
we can see the GET request made and all the details in the 'headers' inner-tab

however, we can log the data on the console.
guess what, with `console.log(request)` in a proper event listener, we can see the data in the console.

![ready states of a xml-http request](ready-states-of-a-XMLHttpRequest.png)

#### if (ready state == 4)

    it means that the request is complete

    theen it's time to do something with that data.

---

## Status codes

I already know them. let's revise them

- 100 means infos
- 200 means success
- 300 means redirect
- 400 means client error
- 500 means server error

> Actually, when the ready-state is 4
> the request is completed even if the url is incorrect.
>
> In that case, we get an empty object as a response.
>
> That's an issue!
> To solve that issue we handle the data only if
> the status code is 200 ( --> success)
