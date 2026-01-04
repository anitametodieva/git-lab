function registerForHeroes(arr){
    let heroes = [];

    for(let heroStr of arr){
        let [heroName, heroLevel, heroItems] = heroStr.split(' / ');
        heroLevel = Number(heroLevel);

        let heroObj = {
            hero: heroName,
            level: heroLevel,
            items: heroItems
        };

        heroes.push(heroObj);
    }

    heroes.sort((a, b) => a.level - b.level);

    for(let heroObj of heroes){
        console.log(`Hero: ${heroObj.hero}`);
        console.log(`Level => ${heroObj.level}`);
        console.log(`items => ${heroObj.items}`);
        
    }
}

registerForHeroes([

'Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara'

])