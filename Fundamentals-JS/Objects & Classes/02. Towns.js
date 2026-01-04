function printTownObjs(arr){
    for(let townStr of arr){
        let [townName, latitude, longitude] = townStr.split(' | ');
        latitude = Number(latitude);
        longitude = Number(longitude);

        let townObj = {
            town: townName,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2)
        };

        console.log(townObj);
    }
}

printTownObjs(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])