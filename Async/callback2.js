let stocks = {
    fruits:["oranges", "strawberry","mango"],
    toppings:["chocolate", "peanuts"],
    liquids:["water","coke","fanta","sprite"]
}
let order= (fruit_name,produce)=>{
    setTimeout(() => {
        console.log("Please choose an item from the menu") 
        setTimeout(()=>{
            console.log(`${stocks.fruits[fruit_name]} has been chosen from the items`)
            produce();  //this calls the the production function after an item has been chosen
        },2000)
    }, 1500);
    // produce(); this calls the production even before the order has been placed
}

let production = () => {
    setTimeout(() => {
        console.log("Production has started")
        setTimeout(() => {
            console.log("The fruit has been cut")
            setTimeout(() => {
                console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added in addition`)
                setTimeout(()=>{
                    console.log("The machine was started")
                    setTimeout(()=>{
                        console.log("The food was added to the container")
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as toppings`) 
                        }, 3000);
                        setTimeout(()=>{
                            console.log("The food has been served")
                        },2000)
                    })
                },1000)
            }, 1000);
        }, 2000);
    }, 1500);
}
order(0,production)