class HoneyMakerBee extends Bee {
  constructor(age, job, honeyPot) {
    super(age, job)
    this.age = 10
    this.honeyPot = 0
    this.job = 'make honey'
  }
  makeHoney() { this.honeyPot++}
  giveHoney() { this.honeyPot--}
}
