console.log('hello World')
//ctrl+sht+`
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(res=>res.json())
.then(data =>console.log(data))
.catch(error=>console.log(error))