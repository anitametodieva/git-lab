function makeConsoleApplication(data){
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let playerOne = true;

    for(let coordinates of data){
        let [x, y] = coordinates.split(" ");
        let marker = playerOne ? "X" : "O";

        if(dashboard[x][y]){
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        dashboard[x][y] = marker;

        if(checkWinner(dashboard, marker)){
            console.log(`Player ${marker} wins!`);
            return printTable(dashboard);
        }
        if(!checkFreeSpace(dashboard)){
            console.log(`The game ended! Nobody wins :(`);
            return printTable(dashboard);
        }

        playerOne = !playerOne;
    }

    function printTable(dashboard){
        dashboard.forEach(row => console.log(row.join("\t")));
    }

    function checkFreeSpace(dashboard){
        return !!dashboard.flat().filter(x => !x).length;
    }

    function checkWinner(dashboard, marker){
        for(let i = 0; i < dashboard.length; i++){
            if(dashboard[i][0] === marker && 
                dashboard[i][1] === marker &&
                dashboard[i][2] === marker) {
                    return true;
                } else if (dashboard[0][i] === marker &&
                    dashboard[1][i] === marker &&
                    dashboard[2][i] === marker){
                        return true;
                    } else if(dashboard[0][0] === marker &&
                        dashboard[1][1] === marker &&
                        dashboard[2][2] === marker){
                            return true;
                        } else if(dashboard[0][2] === marker &&
                            dashboard[1][1] === marker &&
                            dashboard[2][0] === marker
                        ){
                            return true;
                        }
                        return false;
        }
    }
}

makeConsoleApplication(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"])
