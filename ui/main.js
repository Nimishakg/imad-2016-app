var button = document.getElementById("counter");

button.onclick = function()
{
  var request = XMLhttpRequest();
  
  request.onreadystateChange = function()
  {
    if(request.readyState=== XMLHttpRequest.DOM)  
    {
        if(request..status===200)
        {
            var counter = request.responseText;
            var span = document.getElementById("count");
            span.innerHTML = counter.toString();
        }
    }
  };
request.open('GET','http://nimishakg.imad.hasura-app.io/',true);
request.send(null);
};