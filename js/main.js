const topFivePlayersWrapper = document.getElementById('top_5_list');
const player_expenses_value = document.getElementById('player_expenses_value');

// ==========> common function <==========
// ----->get input id & return value
function getInputId(idName) {
    const inputId = document.getElementById(idName);
    const finalOutput = stringToNumber(inputId.value);
    return finalOutput;
}
// -----> string converter
function stringToNumber(string) {
    const number = parseFloat(string);
    return number;
}

// ==========> player added dynamically <==========
const buttons = document.getElementsByClassName('select_button');
// -----> buttons select
for (const button of buttons) {
    // -----> children count <-----
    button.addEventListener('click', function (e) {
        const playerLength = topFivePlayersWrapper?.children.length;
        if (playerLength < 5) {
            topFivePlayersWrapper.innerHTML += `
            <li>${e.target.parentNode.children[0].innerText}</li>`;
            // ---> >disabled button
            const CardButtonSelect = e.target.parentNode.children[2];
            CardButtonSelect.setAttribute('disabled', 'true');
            CardButtonSelect.style.backgroundColor = '#F20519';
            CardButtonSelect.innerText = 'selected';


            //-----> calculate total expenses
            document.getElementById('calculate_btn').addEventListener('click', function (e) {
                e.stopImmediatePropagation();
                // --->total players selected length
                let players = topFivePlayersWrapper.children.length;
                const perPlayer = getInputId('per_player_input');
                const playerExpensesTotal = players * perPlayer;
                if (isNaN(playerExpensesTotal) || perPlayer < 0) {
                    alert('Your value must have any positive number')
                } else {
                    player_expenses_value.innerText = playerExpensesTotal;
                }
            })

        } else {
            alert('You can select 5 players at a time')
        }
    })
}



// -----> calculate total
document.getElementById('calculate_total_btn').addEventListener("click", function (e) {
    const managerInputValue = getInputId('manager_input_field');
    const coachInputValue = getInputId('coach_input_field');

    const totalExpensesValue = stringToNumber(player_expenses_value.innerText);
    const grandTotal = totalExpensesValue + managerInputValue + coachInputValue;
    if (isNaN(grandTotal) || managerInputValue < 0 || coachInputValue < 0) {
        alert('Your value must have any positive number')
    } else {
        document.getElementById('grand_total').innerText = grandTotal;
    }
})













