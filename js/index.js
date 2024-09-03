
var quotes = [
    {
        quote:"You miss 100% of the shots you don't take.",
        author:"--Wayne Gretzy",
    },
    {
        quote:"The best revenge is massive success.",
        author:"--Frank Sinatra",
    },
    {
        quote:"Resentment is like drinking poison and waiting for your enemies to die.",
        author:"--Nelson Mandela",
    },
    {
        quote:"The best revenge is massive success.",
        author:"--Frank Sinatra",
    },
    {
        quote:"It's not what happens to you, but how you react to it that matters.",
        author:"--Epictetus",
    },
    {
        quote:"Do not take life too seriously. You will not get out alive.",
        author:"--Elbert Hubbard",
    },
]

function getQuote(){
 var randomNumber = Math.floor(Math.random()*quotes.length) 
 document.getElementById("quotes").innerHTML = quotes[randomNumber].quote;
 document.getElementById("author").innerHTML = quotes[randomNumber].author;
}