//using fetch api to make http requests
//it is built into JS
//the fetch() method returns to us a promise so we can tack on the then method to it
fetch('./todos/luigi.json').then(response => {
    console.log('resolved: ', response);
    //response.json() returns a promise
    return response.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log('rejected: ', err);
});
//in the fetch api, a promise is only ever rejected when we have some kind of network error
//if the directory is mistyped/not spelled well, it is not rejected;instead it is still resolved and we get the response;the reponse gives a status of 404
//we could check for the status of the fetch, to make sure it is 200 before we do something with the data