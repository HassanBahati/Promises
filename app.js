console.log('Start');

function loginUser(email, password, callback){
    setTimeout(()=>{
        console.log('Now we have the data')
        callback({userEmail: email})
    }, 5000);
}

function getUserVideo(email,callback){
    setTimeout(() => {
        callback(['video1', 'video2', 'video3 ']);
    },2000)
}

function videoDetails(video, callback){
    setTimeout(() => {
        callback('title of the video');
    },2000)
}


const user = loginUser('devs@mail.com', 123456, user => {
    console.log(user);
    getUserVideo(user.userEmail, videos => {
        console.log(videos);
        videoDetails(video[0], title => {
            console.log(title)
        })
    })
});


// console.log(user);

console.log('Finish')