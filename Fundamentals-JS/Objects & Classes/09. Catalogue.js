function storeProductsCatalog(arr){
    let products = arr.map(line => {
        let [name, price] = line.split(' : ');
        return {name, price: Number(price)};
    })

    .sort((a, b) => a.name.localeCompare(b.name));

    let currentInitial = '';
    for(let p of products){
        let initial = p.name[0];
        if(initial !== currentInitial){
            currentInitial = initial;
            console.log(currentInitial);
        }
        console.log(` ${p.name}: ${p.price}`);
        
    }
}
storeProductsCatalog([

'Appricot : 20.4',

'Fridge : 1500',

'TV : 1499',

'Deodorant : 10',

'Boiler : 300',

'Apple : 1.25',

'Anti-Bug Spray : 15',

'T-Shirt : 10'

])

