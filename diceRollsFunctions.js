//Simulate rolling a dice
//add bonuses (whats your bonus)
//show results
//roll attack damage initial roll 
const input = require('readline-sync');

const rollDice = (whatSidedDie, howMany = 1) =>{
    const dieRolled = Math.ceil(Math.random()*whatSidedDie);
    return dieRolled;
};


const attackRoll=(attackBonus = 2)=>{
    const dieRolled = rollDice(12);
    return dieRolled + attackBonus;
} 


const skillCheckRoll = (profeciencyBonus = 2,skillBonus = 1){
    const dieRolled = rollDice(20);
    return dieRolled + profeciencyBonus + skillBonus
}

const rollToWack = (hitBonus = 2) =>{
    let dice = rollDice(20);
    let damage = 0;
    if(dice === 20){
        console.log(`You rolled a ${dice}\nCRITICAL HIT!`);
        return`You do ${attackRoll() + attackRoll(0)} to the enemy!`;
        
    }else if(dice === 1){
        console.log(`You rolled a ${dice}\nEPIC FAILURE!`);//pull from random shit top happen
        return `Bad shit happens to you`
    }else{
    console.log(`You rolled a ${dice + hitBonus} to hit`)
    return`You do ${attackRoll()} damage to the enemy!`
};
};


