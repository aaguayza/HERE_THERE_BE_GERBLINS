//Simulate rolling a dice
//add bonuses (whats your bonus)
//show results
const input = require('readline-sync');
const rollDice = () =>{
    const dice = Math.ceil(Math.random()*20);
    return dice;
};

const attackRoll = () =>{
    let attackBonus = Number(input.question('Attack Bonus: '))
    let dice = rollDice();
    let total;
    if(dice === 20){
        return `You rolled ${dice}\nCRITICAL HIT! Roll two dice\nDamage: ${dice += rollDice() + attackBonus}`;
    }else if(dice === 1){
        return `You rolled ${dice}\nEPIC FAILURE!\nYou rolled a 1\nDamage: ${dice}`;
    }
    total = dice + attackBonus;
    return `You rolled: ${dice}\nDamage: ${total}`;
};


console.log(attackRoll())