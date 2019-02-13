const http = new EazyHTTP;

//Get Users
http.get('https://jsonplaceholder.typicode.com/users')
.then(data=>console.log(data))
.catch(err=>console.log(err));


//User Data
const data = {
  name: 'Jhon Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'

}
//Get Users
http.post('https://jsonplaceholder.typicode.com/users',data)
.then(data=>console.log(data))
.catch(err=>console.log(err));


///UPDATE POST
http.put('https://jsonplaceholder.typicode.com/users',data)
.then(data=>console.log(data))
.catch(err=>console.log(err));


//MAke an HTTP  DELETE REQUEST
http.delete('https://jsonplaceholder.typicode.com/users')
.then(data=>console.log(data))
.catch(err=>console.log(err));



