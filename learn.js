//asynchronous code is something that can start now and finish later

 
/*http requests
make http req to get data from another server
we make these reqs to API endpoints
an endpoint are urls that a particular API or server exposes to us so that we can access data from it
-we shall use the JSONPlaceholder API to practice; https://jsonplaceholder.typicode.com/

*/

//const getTodos = ()=>{
    //here is where we are going to do all of the request stuff. Paste all the code below in here
//};

//create a request object
//const request = new XMLHttpRequest();
//xml represents an old data format used before JSON came
//it can now be used with any data. It is builtin to JS


//track the progress of the req using an event listener
//this will fire any time there will be a state change
//request.addEventListener('readystatechange', ()=>{
    //there are 4 states that a req goes through:
    /*
        var xhr = new XMLHttpRequest();
        console.log('UNSENT', xhr.readyState); // readyState will be 0

        xhr.open('GET', '/api', true);
        console.log('OPENED', xhr.readyState); // readyState will be 1

        xhr.onprogress = function () {
            console.log('LOADING', xhr.readyState); // readyState will be 3
        };

        xhr.onload = function () {
            console.log('DONE', xhr.readyState); // readyState will be 4
        };

        xhr.send(null);
     */
    //console.log(request, request.readyState);//gets us the req and the state at which it is in
    //if the state is === 4, then do something with the response
//    if(request.readyState === 4 && request.status === 200){
//        console.log(request.responseText);//gives a JSON response with data
//    }else if(request.readyState === 4){
//        console.log('could not fetch the data');
//    }
//});

//request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');//setting up the req
//takes type of req and the endpoint to get the data from

//send the request
//request.send();

//req status codes ...check MDN docs for list of statuses
//200 range- successful
//300 range - redirection
//404 range- can't find the endpoint; errors
//500 range - server errors




//const getTodos = (resource, callback)=>{
//    //create a request object
//    const request = new XMLHttpRequest();
//
//    request.addEventListener('readystatechange', () =>{
//
//        if(request.readyState === 4 && request.status === 200){
//            callback(undefined, request.responseText);
//
//        }else if(request.readyState === 4){
//            callback('could not fetch data', undefined);
//        }
//    });

    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');//setting up the req
   //request.open('GET', './todos.json');//fetching data from locally created json file

   //getting data from multiple APIs
//   request.open('GET', resource);
//
//    //send the request
//    request.send();
//};

//console.log(1);
//console.log(2);
//specify a callback fun to state how to handle the data fetched
//the callback function below is asynchronous. It will not block the code
//getTodos((err, data)=>{
//    console.log('callback fired');
//    //console.log(err, data);
//    if(err){
//        console.log(err);
//    }else{
//        console.log(data);
//    }
//});
//console.log(3);
//console.log(4);
//getTodos('./todos/luigi.json',(err, data)=>{
//    console.log(data);
//    getTodos('./todos/mario.json',(err, data)=>{
//        console.log(data);
//        getTodos('./todos/shaun.json',(err, data)=>{
//            console.log(data);
//        })
//    })//will run one callback first, when done, it will run the next one
    //this is called callback hell - nesting callback within callback within callback
    //we can make this less bulky and prettier by using promises


    
    //console.log(err, data);
    //if(err){
    //    console.log(err);
    //}else{
    //    console.log(data);
    //}
//});
//promise example
//a promise is something that is going to take some time to do
//it has two outcomes; success or rejection
//const getSomething = () =>{
//    return new Promise((resolve, reject) =>{
//        //resolve & reject are functions built into the promise API in JS
//        //fetch something
//        resolve('some data');//called during a success//pass in the data as a parameter
//        reject('some error');//called during an error
//    });
//};

//getSomething()//when we get a promise we can tack on a .then() method
//    .then((data)=>{//will be fired when the promise has been resolved
//        //takes the data passed into the resolve func
//        console.log(data);
//    }, (err)=>{
//        console.log(err);
//    });//1st func in the then method fires if we resolve and the 2nd if we reject

//simpler way of writing the then method
//getSomething()
//.then(data=>{
//    console.log(data);
//})
//.catch(err =>{
//    console.log(err);
//})


//cleaner and simplified code

const getTodos = (resource)=>{
    
    //return a promise here
    return new Promise((resolve, reject) =>{
        //going to return a func that will do the network request
        //create a request object
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () =>{

        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);//tales JSON string and converts it into JS objects to use easily in the code
            resolve(data);
        }else if(request.readyState === 4){
            reject('error getting resource');
        }
    });

   //getting data from multiple APIs
    request.open('GET', resource);

    //send the request
    request.send();

    })

    
};
//getTodos('./todos/luigi.json').then(data => {
//    console.log('promise resolved: ', data);
//}).catch(err => {
//    console.log('promise rejected: ', err);
//});

//chaining promises

getTodos('./todos/luigi.json').then(data => {
    console.log('promise 1 resolved: ', data);
    return getTodos('./todos/mario.json')
    }).then(data => {
        console.log('promise 2 resolved: ', data);
        return getTodos('./todos/shaun.json').then(data => {
            console.log('promise 3 resolved: ', data);
        })
    }).catch(err => {//catches any error, so it doesn't have to be rewritten
        console.log('promise rejected: ', err);
    })


    //newer way of making http requests

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

//Async and await
//new to JS and were created to help us in chaining promises and helps it be in a calean and readable way

//func to store all of the asynchronous code 
const getTodo = async() => {//async keyword makes it an asynchronous function. It will return a promise every time it is called
    //fetch data using the fetch api
    //fetch('./todos/luigi.json').then((response) => {}) - this is how we wld write the fetch api,.. but when using await, here is how it is written:
    const response = await fetch('./todos/luigi.json');
    //await stops Js from assigning a value to the variable until the promise has resolved
    //console.log(response);
    //use the json mathod to get the data. It is asynchronous,so we use the await here todo
    const data = await response.json();
    //console.log(data);
    return data;
     
};
//const test = getTodos();//test is = to the call of the async function which is a promise
//console.log(test);//test is now a promise

getTodo();