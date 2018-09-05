



/*Variable directing to the ID of the form group*/
var input = document.getElementById('form');

/*Variable directing the ID of the ul containing the tickers*/
var itemList = document.getElementById('table');

/*Event listener that is listening for a click whenever the Track button is clicked on
  and calls buttonClick function*/
var button = document.getElementById('track-btn').addEventListener('click', buttonClick);



 
function buttonClick(e){
  var cards = document.getElementById("card-div");
  
  /*if(cards){
    if(cards.className == 'card mt-5 hidden'){
      cards.className = 'card mt-5 unhide';
    }
  }*/

  e.preventDefault();
  var newItem = document.getElementById('ticker').value;
  test(newItem);

  /*var newTicker = document.createElement('li');
  newTicker.className = 'list-group-item';
  newTicker.appendChild(document.createTextNode(newItem));
  itemList.appendChild(newTicker);*/
}

/*
function call(){
  var input = document.getElementById("ticker").value;
  test(input);

}*/

function test(ticker){
    //var url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/103b07ef04d782146176e5e9f5408e46/"+ latitude + "," +longitude;
    var url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+ticker+"&interval=5min&apikey=GADBOCMLVZQZV9IS";
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function(){
      if(request.status >= 200 && request.status < 400){
      var data = JSON.parse(this.responseText);
      console.log("Success");
      console.log(data);
      if(data["Global Quote"] != " "){
        console.log("Entered the function");
        renderData(data);
      }
      //console.log(data["Global Quote"]["01. symbol"]);
      //globalData = data;
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


/*Good practice to separate data and have a separate function
  render the data */
function renderData(data){
  //console.log(data);
 /* 
  var newTicker = document.createElement('tr');
  newTicker.className = 'list-group-item';

  //var newPrice = document.createElement('span');
  var tickerPrice = data["Global Quote"]["05. price"];


  newTicker.appendChild(document.createTextNode(tickerSymbol));
  //newPrice.appendChild(document.createTextNode(tickerPrice));



  itemList.appendChild(newTicker);*/

  var tickerSymbol = data["Global Quote"]["01. symbol"];
  var tickerPrice = data["Global Quote"]["05. price"];
  var tickerOpen = data["Global Quote"]["02. open"];
  var tickerHigh = data["Global Quote"] 
  var tickerLow  = data["Global Quote"]
  var tickerPercent = data["Global Quote"]
  console.log(tickerSymbol);

  var newTicker = document.createElement('td');
  var newPrice = document.createElement('td');
  
  newTicker.appendChild(document.createTextNode(tickerSymbol));
  newPrice.appendChild(document.createTextNode(tickerPrice));
  
  
  
  itemList.appendChild(newTicker);
  itemList.appendChild(newPrice);


  //itemList.appendChild(newPrice);
}


