



/*Variable directing to the ID of the form group*/
var input = document.getElementById('form');

/*Variable directing the ID of the ul containing the tickers*/
var itemList = document.getElementById('table');

/*Event listener that is listening for a click whenever the Track button is clicked on
  and calls buttonClick function*/
var button = document.getElementById('track-btn').addEventListener('click', buttonClick);



 
function buttonClick(e){
  e.preventDefault();
  var newItem = document.getElementById('ticker').value;
  test(newItem);
  document.getElementById('ticker').value = "";
}


function test(ticker){

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



/*Renders the data from the JSON request*/

function renderData(data){

  var tickerSymbol = data["Global Quote"]["01. symbol"];

  var tickerPrice = "$" + data["Global Quote"]["05. price"];
  /*Slices the last two digits*/
  tickerPrice = tickerPrice.slice(0,-2);

  var tickerOpen ="$" + data["Global Quote"]["02. open"];
  tickerOpen = tickerOpen.slice(0,-2);

  var tickerHigh = "$" + data["Global Quote"]["03. high"]; 
  tickerHigh = tickerHigh.slice(0,-2);

  var tickerLow  = "$" + data["Global Quote"]["04. low"];
  tickerLow = tickerLow.slice(0,-2);

  var tickerPercent = data["Global Quote"]["10. change percent"];
  tickerPercent = tickerPercent.slice(0,5) + "%";


  var newRow = document.createElement('tr')
  var newTicker = document.createElement('td');
  
  console.log("Entered the function");
 if(tickerPercent[0] == "-"){
  console.log("Entered the function");
  newRow.style.color = "#FF5252";
  }
 else{
  newRow.style.color = "#69F0AE";
}



  var newPrice = document.createElement('td');
  var newOpen = document.createElement('td');
  var newLow = document.createElement('td');
  var newHigh = document.createElement('td');
  var newPercent = document.createElement('td');

  
  newTicker.appendChild(document.createTextNode(tickerSymbol));
  newPrice.appendChild(document.createTextNode(tickerPrice));
  newOpen.appendChild(document.createTextNode(tickerOpen));
  newLow.appendChild(document.createTextNode(tickerLow));
  newHigh.appendChild(document.createTextNode(tickerHigh));
  newPercent.appendChild(document.createTextNode(tickerPercent)); 
  
  
  newRow.appendChild(newTicker);
  newRow.appendChild(newPrice);
  newRow.appendChild(newOpen);
  newRow.appendChild(newLow);
  newRow.appendChild(newHigh);
  newRow.appendChild(newPercent);

  itemList.appendChild(newRow);


  //itemList.appendChild(newPrice);
}


