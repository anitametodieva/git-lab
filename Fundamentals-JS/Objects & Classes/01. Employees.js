function createListEmployees(arr){
    for(let person of arr){
        let employee = {
            name: person,
            personalNumber: person.length
        };
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
        
    }
}

createListEmployees([

'Silas Butler',

'Adnaan Buckley',

'Juan Peterson',

'Brendan Villarreal'

])