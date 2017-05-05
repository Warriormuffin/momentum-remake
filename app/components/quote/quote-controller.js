function QuoteController(){
  var quoteService = new QuoteService()
  quoteService.getQuote(function(quote){
    drawQuote(quote)
  })

    function drawQuote(quote){
      var template ="";
      var elem = document.getElementById('quote')
      template += `
        <h4>${quote.quote}</h4>
        <p>${quote.author}</p>
      `
      elem.innerHTML = template
    }
}

