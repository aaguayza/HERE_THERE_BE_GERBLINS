class Adventurer {
    constructor(name,hitPoints=20,armorClass=16,attackDice=8){
      this.name=name;
      this.hitPoints=hitPoints;
      this.armorClass=armorClass;
      this.attackDice=attackDice;
    }
    attack(){};
    specAttack(){};
  };
  class Barbarian extends Adventurer {
    constructor(){
        super(){
            
        }
    }
  }