let joke = document.getElementById('joke');
let btn = document.getElementById('btn');
chuckNorris();
function chuckNorris(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(norris => norris.json())
    .then(norris => {
     joke.textContent = norris.value
    });
}
btn.addEventListener('click', chuckNorris)