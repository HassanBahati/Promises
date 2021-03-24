console.log('Start');

function loginUser(email, password, callback){
    setTimeout(()=>{
        console.log('Now we have the data')
        return {userEmail: email}
    }, 5000);
}

const user = loginUser('devs@mail.com', 123456);

console.log(user);

console.log('Finish')