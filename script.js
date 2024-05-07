function getStockPrice() {
    var stockSymbol = document.getElementById("stockSymbolInput").value;
    var apiKey = "YOUR_API_KEY"; // يجب أن تحصل على مفتاح API من موقع Alpha Vantage

    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + stockSymbol + "&apikey=" + apiKey;

    $.getJSON(url, function(data) {
        var timeSeriesData = data["Time Series (Daily)"];
        var latestDate = Object.keys(timeSeriesData)[0];
        var stockData = timeSeriesData[latestDate];

        var table = "<table border='1'><tr><th>Date</th><th>Close Price</th><th>High</th><th>Low</th><th>Open</th></tr>";
        table += "<tr><td>" + latestDate + "</td><td>" + stockData["4. close"] + "</td><td>" + stockData["2. high"] + "</td><td>" + stockData["3. low"] + "</td><td>" + stockData["1. open"] + "</td></tr>";
        table += "</table>";

        var stockPriceElement = document.getElementById("stockPrice");
        stockPriceElement.innerHTML = table;
    }).fail(function() {
        var stockPriceElement = document.getElementById("stockPrice");
        stockPriceElement.innerHTML = "Error fetching stock data. Please try again.";
    });
}
