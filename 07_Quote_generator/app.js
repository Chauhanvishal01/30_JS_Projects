const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote = document.getElementById("newQuote");
const twitter = document.getElementById("twitter");
const instagram = document.getElementById("instagram");

const api_url = "https://api.quotable.io/random";

async function getquote(url) {
  const response = await fetch(url);
  var data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
  //   console.log(data);
}
getquote(api_url);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "----- by " +
      author.innerHTML,
    "Tweet Window",
    // "width=600, height=300"
    "_blank"
  );
}

newQuote.addEventListener("click", () => {
  getquote(api_url);
});
twitter.addEventListener("click", () => {
  tweet();
});

function shareOnInstagram() {
    const quoteText = encodeURIComponent(quote.innerHTML);
    const instagramUrl = `https://www.instagram.com/create/story/?title=${quoteText}`;
    window.open(instagramUrl, "_blank");
  }
  
  instagram.addEventListener("click", () => {
    shareOnInstagram();
  });
  