const loadQutes= ()=>{
    fetch('https://api.kanye.rest')
    .then(res=>res.json())
    .then(data=>console.log(data))
}
loadQutes()