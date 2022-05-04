
const getTodos = (callback)=>{
    //create a request object
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () =>{

        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);//tales JSON string and converts it into JS objects to use easily in the code
            callback(undefined, data);
        }else if(request.readyState === 4){
            callback('could not fetch data', undefined);
        }
    });

   // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');//setting up the req
   request.open('GET', './todos.json');//fetching data from locally created json file

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

