//Call-backs  test  !! for creating custom-oriented ajax library!!

const posts = [
  {
    name : "Anvarbey Muminov",
  },
  {
    name : "NiHao",
  },
  {
    name : "Huy Plin",
  },
  {
    name : "Xuyao Date",
  },
  {
    name : "Xuy Sin lin",
  }
];
function createPost(post,callback){
  setTimeout(function(){
   // console.log(post);
   posts.push(post);
   callback();
  },2000);

}
function getPost(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(obj){
        output += `<li>${obj.name}</li>`;
    });
    document.body.innerHTML = output;
  },1000)
}


createPost({name:'Bey'},getPost);

//UFF
