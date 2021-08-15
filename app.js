// Parent Ship Class

class Ship {
    constructor(hull, firepower, accuracy) {
    //   this.id = id;
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
    //   this.shipColor = shipColor;
    }
}

class EarthsDefense extends Ship {
    constructor(hull=20, firepower=5, accuracy=.7) {
        super(hull, firepower, accuracy)
    }
}

const earthsDefense = new EarthsDefense();
console.log(earthsDefense)

class Enemy extends Ship {
    constructor(hull=100, firepower=10, accuracy=.6) {
        super(hull, firepower, accuracy)
    }
}



//   //   Instance Method
//     attack(target) {
//       target.health = target.health - this.damage;
//     }

//     defineSelf() {
//         return `Ship ID = ${this.id}, Ship Health = ${this.health}`
//     }
    
//   //   Class Method
//     static getColors() {
//       return ['red', 'blue', 'black']
//     }
//   }

  const enemy1 = new Enemy(1);