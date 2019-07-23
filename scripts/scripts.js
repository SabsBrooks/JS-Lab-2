const randomDamage = () => {
    return Math.floor(Math.random() * 10) + 1;
};

const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return randNum === 0 ? opt1 : opt2;
};

const attackPlayer = function (health) {
    return health - randomDamage();
};

const logHealth = (player, health) => {
    console.log(`${player} health : ${health}`);
};

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => {
    return health <=0;
};

function fight() {
    const player1 = "Sabrina";
    const player2 = "Kristina";
    let player1Health = 100;
    let player2Health = 100;
    while (true) {
        let attacker = chooseOption(player1, player2);
    } if attacker === player1 
};
    
