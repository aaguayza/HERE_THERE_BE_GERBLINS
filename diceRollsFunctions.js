//Simulate rolling a dice
//add bonuses (whats your bonus)
//show results
//roll attack damage initial roll 
const input = require('readline-sync');

const rollDice = (whatSidedDie, howMany = 1) =>{
    const dieRolled = Math.ceil(Math.random()*whatSidedDie);
    return dieRolled;
};


const attackRoll=(attackBonus,damageDie)=>{
    const dieRolled = rollDice(damageDie);
    return dieRolled + attackBonus;
} 


const skillCheckRoll = (profeciencyBonus = 2,skillBonus = 1)=>{
    const dieRolled = rollDice(20);
    return dieRolled + profeciencyBonus + skillBonus
}

const rollToWack = (hitBonus = 2) =>{
    let dice = rollDice(20);
    if(dice === 20){
        console.log(`You rolled a ${dice}\nCRITICAL HIT!`);
        return attackRoll(2,12) + attackRoll(0,12);
        
    }else if(dice === 1){
        console.log(`You rolled a ${dice}\nEPIC FAILURE!`);//pull from random shit top happen
        return `Bad shit happens to you`
    }else{
    console.log(`You rolled a ${dice + hitBonus} to hit`)
    return attackRoll(2,12)
};
};

//1d6 for damage +1 bonus
const enemyAttacks = (hitBonus = 1) =>{
    let dice = rollDice(20);
    if(dice === 20){
        console.log(`GERBLIN rolled a ${dice}\nCRITICAL HIT!`);
        return attackRoll(1,6) + attackRoll(0,6);
        
    }else if(dice === 1){
        console.log(`GERBLIN rolled a ${dice}\nEPIC FAILURE!`);//pull from random shit top happen
        return `Bad shit happens to the GERBLIN`
    }else{
    console.log(`GERBLIN rolled a ${dice + hitBonus} to hit`)
    return attackRoll(1,6)
}
};


module.exports={
    rollToWack: rollToWack,
    rollDice: rollDice,
    attackRoll: attackRoll,
    skillCheckRoll: skillCheckRoll,
    enemyAttacks: enemyAttacks,
}
