function buyFruit(fruit, grams, kgPrice){
    let weightKg = grams / 1000;
    let money = weightKg * kgPrice;

    console.log(`I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}

buyFruit('orange', 2500, 1.80)
