const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('got the user')
        // resolve({user: 'bahati'})
        reject(new Error('user not logged in '))
    },2000)
});

//consuming the promise
promise.then(user => {
    console.log(user)
}).catch(err =>{
    console.log(err.message)
});