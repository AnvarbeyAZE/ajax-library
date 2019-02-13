/**
 * EazyHTTP Library
 * Library for making HTTP request
 *
 * @version 2.0.0
 * @author Anvarbey Muminov
 * @license MIT
 */
class EazyHTTP{
  //Make an HTTP request
  get(url){

      return new Promise((resolve,reject)=>{
      fetch(url)//return the promise
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  });



}
//MAKE an HTTP POST request
post(url,data){
  return new Promise((resolve,reject)=>{
  fetch(url,{
    method: 'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify(data)
  })//return the promise
  .then(res => res.json())
  .then(data => resolve(data))
  .catch(err => reject(err));
});

}

put(url,data){
  return new Promise((resolve,reject)=>{
  fetch(url,{
    method: 'PUT',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify(data)
  })//return the promise
  .then(res => res.json())
  .then(data => resolve(data))
  .catch(err => reject(err));
});

}

delete(url){
  return new Promise((resolve,reject)=>{
  fetch(url,{
    method: 'DELETE',
    headers: {
      'Content-type':'application/json'
    }
  })//return the promise
  .then(res => res.json())
  .then(data => resolve('Resource deleted'))
  .catch(err => reject(err));
});


}
}
