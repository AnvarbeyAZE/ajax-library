/*Custom AJAX library
using : jsonplaceholder.typicode.com for testing
ES5 version
*/

const http = new eazyHTTP;

const data ={
  titel : 'Custom Post',
   body: 'This is a custom Post'
}


/*
//GET A POST
http.get('https://jsonplaceholder.typicode.com/posts',function(err,response){
//Avoidng sync "undifined" problem , using the callbacks , we fetch the data then get it in this function
  if(err)
  console.log(err);
  else
  console.log(response);
});
*/

/*
// CREATE A POST
http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,response){
//Avoidng sync "undifined" problem , using the callbacks , we fetch the data then get it in this function
  if(err)
  console.log(err);
  else
  console.log(response);
});
*/


//UPDATE A POST
http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,response){
//Avoidng sync "undifined" problem , using the callbacks , we fetch the data then get it in this function
  if(err)
  console.log(err);
  else
  console.log(response);
});


//DELETE A POST
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
//Avoidng sync "undifined" problem , using the callbacks , we fetch the data then get it in this function
  if(err)
  console.log(err);
  else
  console.log(response);
});

