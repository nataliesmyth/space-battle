// Parent Ship Class

class Ship {
    constructor(hull, firepower, accuracy) {
    //   this.id = id;
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
    //   this.shipColor = shipColor;
    }
    //   Instance Method
      attack(target) {
        target.hull = target.hull - this.firepower;
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
    constructor(hull=10, firepower=10, accuracy=.6) {
        super(hull, firepower, accuracy)
    }
}

const enemy1 = new Enemy(1);
earthsDefense.attack(enemy1);
console.log(enemy1)


//     defineSelf() {
//         return `Ship ID = ${this.id}, Ship Health = ${this.health}`
//     }
    
//   //   Class Method
//     static getColors() {
//       return ['red', 'blue', 'black']
//     }
//   }
