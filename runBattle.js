const diceRollsFunctions = require("./diceRollsFunctions");
const input = require("readline-sync");
const { rollToWack, enemyAttacks } = require("./diceRollsFunctions");

//Think about how to tackle the initiative statement
const commands = ['attack']
let enemyhitPoints = 12;
let heroHitPoints = 18;

const runEncounter = () =>{
    console.log("\nA gerblin has appeared!");
    while(enemyhitPoints > 0 && heroHitPoints > 0){
        let damage = 0;
        let enemyDamage = 0;
        console.log(`\nThe enemy has ${enemyhitPoints} hit points left!\n`)
        console.log(`\nYou have ${heroHitPoints} hit points left\n`)
        console.log('Controls:\n>>Attack: you wack shit\n');
        let action = input.question('What do you do?!!??: ').toLowerCase();
        if(action = commands[0]){
            damage = rollToWack()
            enemyhitPoints -=damage
            console.log(`You do ${damage} damage to the enemy!`)
        }
        enemyDamage = enemyAttacks();
        console.log(`GERBLIN did ${enemyDamage} damage to you`)
        heroHitPoints -= enemyDamage
    }
    console.log('It dead!')
}
runEncounter()