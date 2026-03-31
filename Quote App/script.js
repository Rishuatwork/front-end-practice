const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiUrl = "https://quoteslate.vercel.app/api/quotes/random";

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  quote.innerHTML = data.quote;
  author.innerHTML = data.author;
}

getQuote(apiUrl);