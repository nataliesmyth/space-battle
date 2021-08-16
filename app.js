// Player Object

const player = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    //   this.shipColor = shipColor;
    attack(target) {
      target.hull = target.hull - this.firepower;
    }
}

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

// for the accuracy property, we need a random decimal, not a number
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
// Player.attack(Enemy);
console.log(Enemy)
console.log(enemyArmy)



//     defineSelf() {
//         return `Ship ID = ${this.id}, Ship Health = ${this.health}`
//     }
    
//   //   Class Method
//     static getColors() {
//       return ['red', 'blue', 'black']
//     }
//   }















// --- Game Rounds --- // 

// Player moves 

function playerMove (enemy) {
    if (Math.random() < player.accuracy) {
        player.attack(enemy); 
        return `Direct hit! Enemy ship hull: ${enemy.hull}`
    } else if (Math.random() > player.accuracy) {
        return `You missed! Enemy ship hull: ${enemy.hull}`
    }; 
};

console.log(playerMove(enemyArmy[0]))

function enemyMove (player) {
    if (Math.random() < Enemy.accuracy) {

    }
}