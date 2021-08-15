// Parent Ship Class

class Ship {
    constructor(id=1, health=100, damage=10) {
    this.id = id;
      this.health = health;
      this.damage = damage;
      this.shipColor = shipColor;
    }
  //   Instance Method
    attack(target) {
      target.health = target.health - this.damage;
    }

    defineSelf() {
        return `Ship ID = ${this.id}, Ship Health = ${this.health}`
    }
    
  //   Class Method
    static getColors() {
      return ['red', 'blue', 'black']
    }
  }