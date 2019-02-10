/* ES5 version of library */
function eazyHTTP (){
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request

eazyHTTP.prototype.get = function(url,callback){
    this.http.open('GET',url,true);
    let that = this;
    this.http.onload = function(){

      if(that.http.status === 200){

        callback(null,that.http.responseText);
      }else{
        callback('Error: ' + that.http.status);
      }
    }

    this.http.send();
}


// Make an HTTP POST Request
eazyHTTP.prototype.post = function(url,data,callback){

  this.http.open('POST',url,true);
  this.http.setRequestHeader('Content-type','application/json');
  let that = this;
  this.http.onload= function(){
      callback(null,that.http.responseText);
  }





  this.http.send(JSON.stringify(data));


}



// Make an HTTP PUT Request

eazyHTTP.prototype.put = function(url,data,callback){
  this.http.open('PUT',url,true);
  this.http.setRequestHeader('Content-type','application/json');
  let that = this;
  this.http.onload= function(){
      callback(null,that.http.responseText);
  }





  this.http.send(JSON.stringify(data));


}

//Make an HTTTP DELETE Request
eazyHTTP.prototype.delete = function(url,callback){
  this.http.open('DELETE',url,true);
  let that = this;
  this.http.onload = function(){

    if(that.http.status === 200){

      callback(null,'POST DELETED');
    }else{
      callback('Error: ' + that.http.status);
    }
  }

  this.http.send();
}

