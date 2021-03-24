const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('ggghd')
        resolve({user: 'bahati'})
    },2000)
});

promise.then(user => {
    console.log(user)
})