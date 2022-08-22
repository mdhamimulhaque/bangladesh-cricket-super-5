const topFivePlayersWrapper = document.getElementById('top_5_list');
const player_expenses_value = document.getElementById('player_expenses_value');
// const perPlayerInput = document.getElementById('per_player_input');

// ==========> common function <==========
// ----->get input id & return value
function getInputId(idName) {
    const inputId = document.getElementById(idName);
    const finalOutput = stringToNumber(inputId.value);
    return finalOutput;
}
function stringToNumber(string) {
    const number = parseFloat(string);
    return number;
}
//-----> calculate
function calculate(pLength) {
    // ---> player length
    let playerLength = pLength;
    return playerLength;
}

// ==========> player added dynamically <==========

const buttons = document.getElementsByClassName('select_button');
for (const button of buttons) {
    // -----> children count <-----
    button.addEventListener('click', function (e) {
        const playerLength = topFivePlayersWrapper?.children.length;
        if (playerLength < 5) {
            topFivePlayersWrapper.innerHTML += `
            <li>${e.target.parentNode.children[0].innerText}</li>
            `;
            let players = calculate(topFivePlayersWrapper.children.length);
            totalExpensesCalculator(players);

        } else {
            alert('You can select 5 players at a time')
        }
    })

}

function totalExpensesCalculator(players) {
    //-----> calculate total
    document.getElementById('calculate_btn').addEventListener('click', function (e) {
        const perPlayer = getInputId('per_player_input');
        const playerExpensesTotal = players * perPlayer;
        player_expenses_value.innerText = playerExpensesTotal;
    })
}












