{
    let personCounter = 0 ;
    let birthdayMap = new Map() ;

    //Initialising 50 persons' birthdays
    while(personCounter < 50 ) {
        personCounter ++ ;
        let month = Math.floor(Math.random() * 12) + 1 ;
        birthdayMap.set(personCounter, month);
    }
    console.log(birthdayMap);
    
    //Create BirthdayMap with Months as Keys
    //Add PersonID to Month in BirthdayMap

    let myMap2 = new Map() ;
    for(let[key,value] of birthdayMap) {
        if(myMap2.has(value)) {
            myMap2.get(value).push(key) ;
        }
        else {
            let tempArray = new Array();
            tempArray.push(key);
            myMap2.set(value, tempArray); 
        }
    }
    console.log(myMap2);
}