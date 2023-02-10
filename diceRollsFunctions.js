//Simulate rolling a dice
//add bonuses (whats your bonus)
//show results
const input = require('readline-sync')
const rollDice = () =>{
    const bonus = Number(input.question('Enter roll bonus: '))
    const dice = Math.ceil(Math.random()*20)
    return dice + bonus
};

const attackRoll = () =>{
    let dice = rollDice();
    if(dice === 20){

        `CRITICAL HIT! Damage: ${dice += rollDice()}`;
    }else if(dice === 1){
        return `EPIC FAILURE!  Damage: ${dice}`;
    }
    return `Damage: ${dice}`;
};
console.log(attackRoll())