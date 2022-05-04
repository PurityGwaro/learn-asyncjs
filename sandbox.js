
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
