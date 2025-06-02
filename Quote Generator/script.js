const api_url = "http://api.quotable.io/random";
const qoute = document.getElementById("qoute");
const author = document.getElementById("author");

async function getQoute(url) {
    const response = await fetch(url);
    let data = await response.json();
    
    qoute.innerHTML = data.content;
    author.innerHTML = data.author;
    
}
getQoute(api_url);