const diceRollsFunctions = require("./diceRollsFunctions");
const input = require("readline-sync");
const { rollToWack, enemyAttacks } = require("./diceRollsFunctions");

//Think about how to tackle the initiative statement
const commands = ['attack']
let enemyhitPoints = 12;
let heroHitPoints = 18;
let practiceAc = 14;
let heroTestAC = 18;

const runEncounter = (enemyHP, heroHP, enemyAC, heroAC) =>{
    console.log("\nA gerblin has appeared!");
    let hpShown = enemyHP
    while(hpShown > 0 && heroHitPoints > 0){
        let damage = 0;
        let enemyDamage = 0;
        console.log(`\nThe enemy has ${hpShown} hit points left!\n`)
        console.log(`\nYou have ${heroHP} hit points left\n`)
        console.log('Controls:\n>>Attack: you wack shit\n');
        let action = input.question('What do you do?!!??: ').toLowerCase();
        if(action = commands[0]){
            damage = rollToWack(2,2,12,1,enemyAC)
            hpShown -= damage
        }
        // enemyDamage = enemyAttacks();
        // console.log(`GERBLIN did ${enemyDamage} damage to you`)
        // heroHitPoints -= enemyDamage
    }
    console.log('It dead!')
}
runEncounter(enemyhitPoints, heroHitPoints, practiceAc, heroTestAC);