//Simulate rolling a dice
//add bonuses (whats your bonus)
//show results
const input = require('readline-sync')
const rollDice = () =>{
    const bonus = Number(input.question('Bonus to your roll? '))
    const dice = Math.ceil(Math.random()*20);
    return dice + bonus
};
console.log(rollDice())