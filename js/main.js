const topFivePlayersWrapper = document.getElementById('top_5_list');
const li = document.getElementsByClassName('li');
// console.log(topFivePlayersWrapper.children)
const playerLength = topFivePlayersWrapper?.children.length - 1;


// ==========> player added dynamically <==========
const buttons = document.getElementsByClassName('select_button');
for (const button of buttons) {
    // -----> children count <-----
    button.addEventListener('click', function (e) {
        const playerLength = topFivePlayersWrapper?.children.length - 1;
        if (playerLength < 4) {
            topFivePlayersWrapper.innerHTML += `
            <li>${e.target.parentNode.children[0].innerText}</li>
            `;
        } else {
            alert('You can select 5 players at a time')
        }

    })

}
