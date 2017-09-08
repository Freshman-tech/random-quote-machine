const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

function getQuote() {
  fetch(endpoint)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayQuote(data.message);
    });
}

function displayQuote(quote) {
  const quoteText = document.querySelector(".quote-text");
  quoteText.textContent = quote;
  
  const twitterButton = document.querySelector(".twitter");
  twitterButton.setAttribute("href", `https://twitter.com/share?text=${quote} - Donald Trump`);
}

const newQuoteButton = document.querySelector(".new-quote");
newQuoteButton.addEventListener("click", getQuote);

getQuote();
