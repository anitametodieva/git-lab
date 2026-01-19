function timeToWalk(steps, footprint, speedKmH){
    let distance = steps * footprint;
    let rests = Math.floor(distance / 500);
    let speedMS = speedKmH * 1000 / 3600;
    let timeInSeconds = distance / speedMS + rests * 60;
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor(timeInSeconds % 3600 / 60);
    let seconds = Math.round(timeInSeconds % 60);

    if(hours < 10){
        hours = '0' + hours;
    }

    if(minutes < 10){
        minutes = '0' + minutes;
    }

    if(seconds < 10){
        seconds = '0' + seconds;
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.60, 5)
