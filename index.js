let getQuote = function() {
    fetch('https://api.kanye.rest')
    .then(function(responseData) {
        return responseData.json();
    })
    .then(function(kanyeData) {
        let parental = document.getElementById('bodyPart');
            console.log(kanyeData)
            let p = document.createElement('p')
            p.textContent = `Kanye says: ${kanyeData.quote}`;
            parental.appendChild(p)
    })
}

setInterval(getQuote, 9000)
setInterval(function() {
    document.getElementById('bodyPart').textContent = '';
}, 8999)
