//counter code
var button = document.getElementById("counter");
button.onclick = function()
{
 //create a request object    
  var request = new XMLHttpRequest();
  //capture response and store it in a variable
  request.onreadystatechange = function()
   {
    //take some action
    if(request.readyState === XMLHttpRequest.DOM)  
  
    {
        
     if(request.status===200)
     
     {
           
      var counter = request.responseText;
    
      var span = document.getElementById("count");
        
      span.innerHTML = counter.toString();
     
   }
    }
  };

request.open('GET','http://nimishakg.imad.hasura-app.io/counter',true);

request.send(null);

};