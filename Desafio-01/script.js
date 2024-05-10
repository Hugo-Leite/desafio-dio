let nameHero = prompt("Escolha o nome do herói");
let xpHero = 0;
let levelHero = "";
//derrotar o boss = 2000xp, derrotar inimigos = 1000xp, coletar riquezas = 500xp
let actionHero = "";
let opcao = "";

do {
    opcao = prompt(
        `Digite para escolher a sua ação: 
    1- coletar riquezas
    2- derrotar inimigos
    3- derrotar o boss
    4- descansar`,
    );

    chooseHeroAction(opcao);

    calculateHeroLevel();

    alert(
        `O herói de nome ${nameHero} fez a ação de ${actionHero} e está no nível de ${levelHero}`,
    );
} while (opcao < "4");

function chooseHeroAction(opcao) {
    switch (opcao) {
        case "1":
            xpHero += 500;
            actionHero = "coletar riquezas";
            break;
        case "2":
            xpHero += 1000;
            actionHero = "derrotar inimigos";
            break;
        case "3":
            xpHero += 2000;
            actionHero = "derrotar o boss";
            break;
    }
}

function calculateHeroLevel() {
    if (xpHero <= 1000) {
        levelHero = "ferro";
    } else if (xpHero >= 1001 && xpHero <= 2000) {
        levelHero = "bronze";
    } else if (xpHero >= 2001 && xpHero <= 3000) {
        levelHero = "prata";
    } else if (xpHero >= 3001 && xpHero <= 4000) {
        levelHero = "ouro";
    } else if (xpHero >= 4001 && xpHero <= 7000) {
        levelHero = "platina";
    } else if (xpHero >= 7001 && xpHero <= 8000) {
        levelHero = "ascendente";
    } else if (xpHero >= 9001 && xpHero <= 10000) {
        levelHero = "imortal";
    } else if (xpHero >= 10001) {
        levelHero = "radiante";
    }
}
