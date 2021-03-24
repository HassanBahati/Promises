console.log('Start');

function loginUser(email, password){
    return new Promise((reject, resolve) => {
    setTimeout(()=>{
        console.log('Now we have the data')
        resolve({userEmail: email})
    }, 5000);
})}

function getUserVideo(email){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3 ']);
        },2000)
    })
   
}

function videoDetails(video){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('title of the video');
        },2000)
    })
   
}


// const user = loginUser('devs@mail.com', 123456, user => {
//     console.log(user);
//     getUserVideo(user.userEmail, videos => {
//         console.log(videos);
//         videoDetails(videos[0], title => {
//             console.log(title)
//         })
//     })
// });

// loginUser('percy', 'gary')
// .then(user=> getUserVideo(user.email))
// .then(videos=> videoDetails(videos[0]))
// .then(detail=> console.log(detail))


// const user = loginUser('percy', 'gary')
// const videos = videoDetails(user.email)

// console.log(user);

//sync

// console.log('Finish')
