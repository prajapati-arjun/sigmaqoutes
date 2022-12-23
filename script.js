const qoutes = document.getElementById('qoutes');
const author = document.getElementById('author');
const new_quote = document.getElementById('new_quote');
const tweetme = document.getElementById('tweetme');
const copyBtn = document.querySelector(".copy");

const textData = "";
const autherData = "";
const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?=${textData}`;
    window.open(tweetPost);
}
const randomNo = () => {
    const x = Math.floor(Math.random() * 1643);
    return x;
}

async function getQuote() {
    // let url = "";
    const data = await fetch("https://type.fit/api/quotes");
    const objectData = await data.json();
    const num = randomNo();
    const textData = objectData[num].text;
    const authorData = objectData[num].author;


    qoutes.innerText = textData;

    if (autherData === null) {
        author.innerText = "By " + "Unknown";
    }
    else {
        author.innerText = "By " + authorData;

    }

    // console.log(objectData);
    // console.log(objectData[num].text);
    // console.log(objectData[15].author);

}
copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(qoutes.innerText);
});

tweetme.addEventListener('click', tweetNow);
new_quote.addEventListener('click', getQuote);
getQuote();




























// const quoteText = document.querySelector(".quote"),
// quoteBtn = document.querySelector("button"),
// authorName = document.querySelector(".name"),
// speechBtn = document.querySelector(".speech"),
// copyBtn = document.querySelector(".copy"),
// twitterBtn = document.querySelector(".twitter"),
// synth = speechSynthesis;

// function randomQuote(){
//     quoteBtn.classList.add("loading");
//     quoteBtn.innerText = "Loading Quote...";
//     fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
//         quoteText.innerText = result.content;
//         authorName.innerText = result.author;
//         quoteBtn.classList.remove("loading");
//         quoteBtn.innerText = "New Quote";
//     });
// }

// speechBtn.addEventListener("click", ()=>{
//     if(!quoteBtn.classList.contains("loading")){
//         let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
//         synth.speak(utterance);
//         setInterval(()=>{
//             !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
//         }, 10);
//     }
// });

// copyBtn.addEventListener("click", ()=>{
//     navigator.clipboard.writeText(quoteText.innerText);
// });

// twitterBtn.addEventListener("click", ()=>{
//     let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
//     window.open(tweetUrl, "_blank");
// });

// quoteBtn.addEventListener("click", randomQuote);












