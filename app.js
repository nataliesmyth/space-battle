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

class Player extends Ship {
    constructor(hull=20, firepower=5, accuracy=.7) {
        super(hull, firepower, accuracy)
    }
}

const player = new Player();
console.log(player)

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
console.log(getRandomNumber(2, 5))

class Enemy extends Ship {
    constructor(hull=10, firepower=10, accuracy=.6) {
        super(hull, firepower, accuracy)
        
    }
}

for (let i = 0; i < 6; i++) {
    const enemy = new Enemy();
    console.log(enemy)
}
// const enemy2 = new Enemy(2);
// const enemy3 = new Enemy(3);
// const enemy4 = new Enemy(4);
// const enemy5 = new Enemy(5);
// const enemy6 = new Enemy(6);
// player.attack(enemy1);


//     defineSelf() {
//         return `Ship ID = ${this.id}, Ship Health = ${this.health}`
//     }
    
//   //   Class Method
//     static getColors() {
//       return ['red', 'blue', 'black']
//     }
//   }
