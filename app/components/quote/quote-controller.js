function QuoteController(){
  var quoteService = new QuoteService()
  quoteService.getQuote(function(quote){
    drawQuote(quote)
  })

    function drawQuote(quote){
      var template ="";
      var elem = document.getElementById('quote')
      template += `
        <h6>${quote.quote}</h6>
        <p>${quote.author}</p>
      `
      elem.innerHTML = template
    }
}

