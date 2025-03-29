const { stdin, stdout } = require("process");
const readline = require("readline");   

let stocks = {
    fruits:["oranges", "strawberry","mango"],
    toppings:["chocolate", "peanuts"],
    liquids:["water","coke","fanta","sprite"]
}

// Create a readline interface
const rl = readline.createInterface({
    input:stdin,
    output:stdout
})

let order = (fruit_name, produce)=>{
    setTimeout(() => {
        console.log("Choose an item from the menu")
        setTimeout(()=>{
            console.log(`${stocks.fruits[fruit_name]} has been selected`)
            produce();
        },1000)
    }, 1000);
}
let production = () =>{
    setTimeout (()=>{
        console.log("Production has started")
    })
}
rl.question(`Pick a fruit 0:oranges, 1:strawberry, 2:Mango`, (answer)=>{
    let fruitIndex = parseInt(answer); 
    if(fruitIndex >=0 && fruitIndex <= stocks.fruits.length){
        order(fruitIndex,production)
    }
    else{
        console.log(`Please select an item from the menu`)
    }
    rl.close();
});