// Parent Ship Class

class Player {
    constructor(hull=20, firepower=5, accuracy=.7) {
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


function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

// we need a random decimal, not a number
function getRandomDecimal (min, max) {
    if ((min || max) >= 1 || (min || max) < 0) {
        return 'Please use numbers that are between 0 and 1'
    } else {
        return Math.random() * (max - min) + min
    }
}
console.log(getRandomDecimal(.2, .5))

class Enemy {
    constructor(hull, firepower, accuracy) {
        this.hull = getRandomNumber(3, 6);
        this.firepower = getRandomNumber(2, 4);
        this.accuracy = getRandomDecimal(.6, .8);
    }
}

const enemyArmy = [];

for (let i = 0; i < 6; i++) {
    enemyArmy.push(new Enemy)
}
console.log(enemyArmy)
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
