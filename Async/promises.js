const { rejects } = require("assert");
const { error } = require("console");
const { resolve } = require("path")

let shop_open = true;

let stocks = {
    fruits:["oranges", "strawberry","mango"],
    toppings:["chocolate", "peanuts"],
    liquids:["water","coke","fanta","sprite"]
}

// defining the relationship between the work and time

let order = (work, time) =>{
    return new Promise ((resolve,reject)=> {
        if(shop_open){
            setTimeout(() => {
                resolve( work())
            }, time);  
        }
        else {
            reject(console.log("The shop is closed"))
        }
    })
}
order( ()=>console.log("Shop is open do you want to buy anything?") , 1700)

// Promise chaining

.then(`${stocks.fruits[1]} was selected as an order`)

.then(()=>{
    return order(()=>console.log("Production has started"),2000 )
})

.then(()=>{
    return order(()=>console.log(`${stocks.fruits[0]} has been cut`),1500)
})

.then(()=>{
    return order(()=>console.log('Fruit has been blended'),4000)
})

.then(()=>{
    return order(()=>console.log("Juice has been added to the container"),2000)
})

.then(()=>{
    return order(()=>console.log(`${stocks.toppings[0]} was added as toppings`),1500)
})

.then(()=>{
    return order(()=>console.log("Juice has been served"),2000)
})

.catch((err)=>{console.log(err)})

.finally(()=>{
    setTimeout(() => {
        console.log("Finished serving our customers for the day")
    }, 10000);
   
})