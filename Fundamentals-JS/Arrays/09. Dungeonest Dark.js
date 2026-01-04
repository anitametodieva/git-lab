function dungeonestDark(string){
    let health = 100;
    let coins = 0;
    let rooms = string.split('|');
    let bestRoom = 1;

    for(let room of rooms){
        let partsOfRoom = room.split(' ');
        let command = partsOfRoom[0];
        let value = Number(partsOfRoom[1]);

        if(command === 'potion'){
            let healthToAdd = value;

            if(health + healthToAdd > 100){
                healthToAdd = 100 - health;
            }

            health += healthToAdd;
            console.log(`You healed for ${healthToAdd} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if(command === 'chest'){
            let coinsFound = value;
            coins += coinsFound;
            console.log(`You found ${coinsFound} coins.`);
        } else {
            let monster = command;
            let attack = value;
            health -= attack;

            if(health > 0){
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
        bestRoom++;
    }

    if(health > 0){
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")