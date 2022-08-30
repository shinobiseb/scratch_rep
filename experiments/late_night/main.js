

let weaponLevel = 0

let moneyLevel = 0

let levelLevel = 0

const enemyWeapons = [
    {
        name : "Goblin Sword",
        damage : "10",
    },
    {
        name : "AntiHero Sword",
        damage : "20",
    },    
    {
        name : "Slayer's Sword",
        damage : "30",
    },
]


const weapons = [
    {
        name : "Iron Sword",
        damage : "10",
        cost : "10"
    },
    {
        name : "Master Sword",
        damage : "20",
        cost : "20"
    },    
    {
        name : "GigaChad Sword",
        damage : "30",
        cost : "30"
    },
]

const enemies = [
    {
    name: "Minion",
    HP: 15,
    Weapon: enemyWeapons[0],
    }, 
    {
    name: "Strong Minion",
    HP: 30,
    Weapon: enemyWeapons[1],
    }, 
    {
    name: "Lethal Minion",
    HP: 50,
    Weapon: enemyWeapons[2],
    }, 
]

const levels = [
    {
        name: "outerworld",
        enemy: enemies[0],
        prize: 10
    }
]

const player = {
    name: "Player",
    HP: 100,
    Weapon: weapons[weaponLevel],
    gold: moneyLevel,
    level: levels[levelLevel],
    playState: true
}



const gameloop = () => {
    while(player.playState) {
        switch (key) {
            case value:
                
                break;
        
            default:
                break;
        }
    }
}