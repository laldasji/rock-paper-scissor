function reload()
{
    location.reload();
}

function displayWinner(winner)
{
    let result = document.getElementById("try-text");
    let endScreen = document.getElementById("try-again");
    result.innerHTML = winner + " Wins!";
    endScreen.style.display = 'flex';
}

function getComputer(player_choice)
{
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    computer_choice = Math.floor(Math.random() * 3) + 1;
    /*
    1: rock, 2: paper, 3: scissor
    return values:
    0 => player wins
    1 => computer wins
    2 => draw

    add computer's choice to display!
    */
    let res = 0;
    let img1 = document.createElement('img');
    let img2 = document.createElement('img');
    let path = "resources/images/rock-paper-scissor/";
    if (player_choice == "rock")
    {
        img1.src = path + "player-rock.png";
        if (computer_choice === 1) res = 2;
        else if (computer_choice === 2) res = 1;
        else res = 0;
    }
    else if (player_choice == "paper")
    {
        img1.src = path + "player-paper.png";
        if (computer_choice === 1) res = 0;
        else if (computer_choice === 2) res = 2;
        else res = 1;
    }
    else if (player_choice == "scissor")
    {
        img1.src = path + "player-scissor.png";
        if (computer_choice === 1) res = 1;
        else if (computer_choice === 2) res = 0;
        else res = 2;
    }
    let choice = "";
    let comp_img = document.createElement('img');
    if (computer_choice == 1)
        choice = "-rock.png";
    if (computer_choice == 2)
        choice = "-paper.png";
    if (computer_choice == 3)
        choice = "-scissor.png";
    img2.src = path + "computer" + choice;
    
    p1.innerHTML = "";
    p2.innerHTML = "";

    p1.appendChild(img1);
    p2.appendChild(img2);
    return res;
}

function Gameloop() {
    let user = 0, computer = 0;
    let playerScore = document.getElementById('player_score');
    let computerScore = document.getElementById('computer_score');
    let res = document.getElementById('result');

    playerScore.textContent = "Player: " + user;
    computerScore.textContent = "Computer: " + computer;

    let win = 0;

    let buttons = document.querySelectorAll("button");

    document.body.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
            let id = event.target.id;
            win = getComputer(id);
            if (win === 0)
            {
                user++;
                playerScore.textContent = "Player: " + user;
                res.textContent = "Point to Player!";
            }
            else if (win === 1)
            {
                computer++;
                computerScore.textContent = "Computer: " + computer;
                res.textContent = "Point to Computer!";
            }
            else
            {
                res.textContent = "Draw!";
            }
            if (user === 5 || computer === 5)
            {
            if (user == 5) {
                displayWinner('Player');
            }
            else {
                displayWinner('Computer');
            }
            return;
            }
        }
    });
}

Gameloop();