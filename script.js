const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result=document.getElementById("result");



document.getElementById("search-btn").addEventListener("click",()=>{
let input_word=document.getElementById("inp-word").value;
fetch(`${url}${input_word}`).then((response)=>response.json()).then((data)=>{
    console.log(data);
    result.innerHTML=`<div class="word">
        <h3>${input_word}</h3>
       
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetic}</p>
    </div>
    <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
<p class="word-example">${data[0].meanings[0].definitions[0].example||""}</p>`;
// sound.setAttribute("src",`${data[0].phonetics[0].audio}`); 
}).catch(()=>{
    result.innerHTML=`<h3 class="error">Ooohh!! Couldn't find that.... Try again!!</h3>`;
});

});
