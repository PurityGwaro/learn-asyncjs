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



const getTodos = (callback)=>{
    //create a request object
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () =>{

        if(request.readyState === 4 && request.status === 200){
            callback(undefined, request.responseText);

        }else if(request.readyState === 4){
            callback('could not fetch data', undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');//setting up the req

    //send the request
    request.send();
};

console.log(1);
console.log(2);
//specify a callback fun to state how to handle the data fetched
//the callback function below is asynchronous. It will not block the code
getTodos((err, data)=>{
    console.log('callback fired');
    //console.log(err, data);
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
console.log(3);
console.log(4);


