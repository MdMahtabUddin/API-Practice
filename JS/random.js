// console.log('connected random')

function randomUser(){
    fetch('https://randomuser.me/api/')
    .then(Response =>Response.json())
    .then(data=>console.log(data))

}