
//Async and await
//new to JS and were created to help us in chaining promises and helps it be in a calean and readable way

const getTodos = async () => {
    const response = await fetch('./todos/luigi.json');
    //check is the response doesn't have a status of 200 and output a custom error message
    if (response.status !== 200) {
        throw new Error('cannot fetch the data');//creating a new error object
        //outputs when there's a prob with the resource url
    }

    const data = await response.json();

    return data;
     
};
//we need to tack on the then method when we call the asynchronous func. The await is used inside the async function.
getTodos()
    .then(data => console.log('resolved: ', data))
    //.catch(err => console.log('rejected: ', err));
    .catch(err => console.log('rejected: ', err.message));


//this code is nonblocking 