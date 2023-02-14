//Simulate rolling a dice
//add bonuses (whats your bonus)
//show results
//roll attack damage initial roll 
const input = require('readline-sync');


//Three arguments to the dice roll are added so that they can be taken from character object
const rollDice = (whatSidedDie = 20) =>{
    const dieRolled = Math.ceil(Math.random()*whatSidedDie);
    return dieRolled;
};
// console.log(rollDice(20))

//same as dice roll, will use arguments in the attack roll to use for dice roll



const damageRoll=(damageBonus,damageDie, numberOfDice = 1)=>{
    let damageTotal = 0
    for(let i=0; i < numberOfDice; i++){
    damageTotal += rollDice(damageDie);
    }
    return damageTotal + damageBonus
} 
// console.log(`Damage is ${attackRoll(1,12,2)}`)

//Profeciency bonus will be calculated and given as an argument from character object
const skillCheckRoll = (profeciencyBonus)=>{
    let dieRolled = rollDice();
    return dieRolled + profeciencyBonus;
}
// console.log(skillCheckRoll(2));

//saving throws require the ability modifier
const savingThrow = (abilityModifier, saveDcToBeat) =>{
    let dc = saveDcToBeat;
    let dieRolled = rollDice();
    dieRolled += abilityModifier;
    if(dieRolled > dc){
        return 'Passed!'
    }else{
        return 'Failed!'
    }
};
// console.log(savingThrow(2,10))
console.log('Something')



const rollToWack = (hitBonus = 2, damageBonus, damageDie, numberOfDamageDice,acToHit) =>{
    let totalToHit = rollDice();
    let damage = 0
    if(totalToHit === 20){
        console.log(`You rolled a ${totalToHit}\nCRITICAL HIT!`);
        damage =  damageRoll(damageBonus,damageDie,numberOfDamageDice) + damageRoll(0,damageDie);
        console.log(`You do ${damage} damage to the enemy!`)
        return damage
        
    }else if(totalToHit === 1){
        console.log(`You rolled a ${totalToHit}\nEPIC FAILURE!`);//pull from random shit top happen
        console.log( `Bad shit happens to you`)
        return 0
    }else{
    console.log(`You rolled a ${totalToHit += hitBonus} to hit`)
        if(totalToHit > acToHit){
            damage = damageRoll(damageBonus,damageDie, numberOfDamageDice)
            console.log(`You do ${damage} damage to the enemy!`)
            return damage
        }else{
            console.log( `Your attack missed!`)
            return 0
}
};
}

//Though he numbers are hard coded, they can be filled in from properties from the character objects.

// The function above needs to be simplified a little more.  Just have it calculate to hit.
//1d6 for damage +1 bonus
//const rollToWack = (hitBonus = 2, damageBonus, damageDie, numberOfDamageDice,acToHit) =>{
   //////WORK ON REDOING THE ATTACK FUNCTION
    let enemyAttacks = (hitBonus = 2, damageBonus, damageDie, numberOfDamageDice, acToHit) =>{
        if(totalToHit === 20){
            console.log(`Enemy rolled a ${totalToHit}\nCRITICAL HIT!`);
            return damageRoll(damageBonus,damageDie,numberOfDamageDice) + damageRoll(0,damageDie);
            
        }else if(totalToHit === 1){
            console.log(`Enemy rolled a ${totalToHit}\nEPIC FAILURE!`);//pull from random shit top happen
            return `Bad shit happens to them.`
        }else{
        console.log(`Enemy rolled a ${totalToHit += hitBonus} to hit`)
            if(totalToHit > acToHit){
                return `They do ${damageRoll(damageBonus,damageDie, numberOfDamageDice)} damage`
            }else{
                return `Their attack missed!`
    }
    }
};



module.exports={
    rollToWack: rollToWack,
    rollDice: rollDice,
    skillCheckRoll: skillCheckRoll,
    damageRoll: damageRoll,
    enemyAttacks: enemyAttacks,
}
