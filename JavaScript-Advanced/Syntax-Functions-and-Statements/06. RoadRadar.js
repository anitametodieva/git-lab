function roadRadar(speed, area){
    const speedLimit = {
        "motorway" : 130,
        "interstate" : 90,
        "city" : 50,
        "residential" : 20
    }

    if(speed > speedLimit[area]){
        let diff = speed - speedLimit[area];
        let status = findStatus(diff);
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit[area]} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit[area]} zone`);
    }

    function findStatus(diff){
        if(diff <= 20){
            return "speeding";
        } else if(diff <= 40){
            return "excessive speeding";
        } 
        return "reckless driving";
    }
    
}

roadRadar(40, 'city')
