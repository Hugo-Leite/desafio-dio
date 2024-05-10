let victories = prompt("Digite o número de vitórias");
let defeats = prompt("Digite o número de derrotas");
let winningBalance = playerLevel(victories, defeats);

function main() {
    playerLevel();
    calculateWinBalance();
    alert(
        `O Herói tem de saldo de ${winningBalance} vitórias está no nível de ${calculateWinBalance()}`,
    );
}

function playerLevel(victories, defeats) {
    return victories - defeats;
}

function calculateWinBalance() {
    let levelHero = "";

    if (winningBalance < 0) {
        levelHero = "ferro";
    } else if (winningBalance <= 10) {
        levelHero = "bronze";
    } else if (winningBalance <= 20) {
        levelHero = "prata";
    } else if (winningBalance <= 30) {
        levelHero = "ouro";
    } else if (winningBalance <= 40) {
        levelHero = "platina";
    } else if (winningBalance <= 50) {
        levelHero = "ascendente";
    } else if (winningBalance <= 60) {
        levelHero = "imortal";
    } else if (winningBalance <= 70) {
        levelHero = "radiante";
    }

    return levelHero;
}

main();
