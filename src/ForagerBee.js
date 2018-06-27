class ForagerBee extends Bee{
  constructor(age, job, canFly, treasureChest) {
    super(age, job)
    this.age = 10
    this.job = 'find pollen'
    this.canFly= true
    this.treasureChest = []
  }
  forage(treasure) {
    this.treasureChest.push(treasure)
  }  
};
