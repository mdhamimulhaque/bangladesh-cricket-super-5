const topFivePlayersWrapper = document.getElementById('top_5_list');

// ==========> player added dynamically <==========
const buttons = document.getElementsByClassName('select_button');
for (const button of buttons) {
    button.addEventListener('click', (e) => {
        // console.log(e.target.parentNode.children[0].innerText)
        topFivePlayersWrapper.innerHTML += `
        <li>${e.target.parentNode.children[0].innerText}</li>
        `;
    })

}
