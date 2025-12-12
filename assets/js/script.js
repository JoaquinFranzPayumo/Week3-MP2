let txtSentence = document.querySelector('#txtSentence');
let txtWord = document.querySelector('#txtWord');
let btnSearch = document.querySelector('#btnSearch');
let txtResult = document.querySelector('#txtResult');

btnSearch.addEventListener("click", function() {
    let sentence = txtSentence.value.trim();
    let word = txtWord.value.trim();

    // Case-insensitive check (recommended)
    let found = sentence.toLowerCase().includes(word.toLowerCase());

    txtResult.innerText = found ? "Found" : "Not Found";
});
