function QuoteController(){
  var quoteService = new QuoteService()
  quoteService.getQuote(function(quote){
    drawQuote(quote)
  })

    function drawQuote(quote){
      var template ="";
      var elem = document.getElementById('quote')
      template += `
        <h6 class="the-quote">${quote.quote}</h6>
        <p class="author" style="visibility: hidden;">${quote.author}</p>
      `
      elem.innerHTML = template


      $('.the-quote').mouseover(function(){
        $('.author').css('visibility', 'visible')
      })

      $('.the-quote').mouseleave(function(){
        $('.author').css('visibility', 'hidden')
      })



    }

}

