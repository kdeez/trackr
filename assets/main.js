
function test(){
    //var url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/103b07ef04d782146176e5e9f5408e46/"+ latitude + "," +longitude;
    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SQ&interval=5min&apikey=GADBOCMLVZQZV9IS"
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function(){
      if(request.status >= 200 && request.status < 400){
      var data = JSON.parse(this.responseText);
      console.log("Success");
      console.log(data['Meta Data']['2. Symbol']);
      console.log(data['Time Series (Daily)']['1. open']);
     }
    else{
      console.log("Error");
    };
  };
    request.onerror = function(){
      console.log("Error");
    };
    request.send();
}

