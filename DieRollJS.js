//Die-roll Program
{
    let myMap = new Map() ;
    while(!Array.from(myMap.values()).includes(10)) {
        let dieRoll = Math.floor(Math.random() * 6) + 1 ;
        if(!myMap.has(dieRoll)){
            myMap.set(dieRoll,1);
        }
        else {
            myMap.set(dieRoll, myMap.get(dieRoll) + 1);
        }    
    }
    console.log(myMap);
    let mapAsc = new Map([...myMap.entries()].sort((a,b) => a[1]-b[1]));
    let mapDsc = new Map([...myMap.entries()].sort((a,b) => b[1]-a[1]));
    console.log("Max rolls element is : "+ mapDsc.keys().next(1).value + " Total rolls is : "+ mapDsc.values().next(1).value);
    console.log("Min rolls element is : "+ mapAsc.keys().next(1).value + " Total rolls is : "+ mapAsc.values().next(1).value);
}