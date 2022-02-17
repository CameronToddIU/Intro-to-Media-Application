
//types of things
//hamburgers, fries, hotdogs
//different cost for each

let mealCost = totalMealCost(3,7,6);
document.write("$"+mealCost);

//this function takes in: the kind of meal and how many were ordered
//it returns the total cost of that meal, including tax.
function totalMealCost(numBurgers, numFries, numSodas)
{

    //assume cost of trnsaction starts at zero
    let cost = 0;

    //set base price for meals at 0
    let basePrice = 0;

    //adds in burgers
    cost = cost + (6.25 *numBurgers);
    cost = cost + (1.75 *numFries);
    cost = cost + (1.99 *numSodas);


    // //changes base price based on order kind
    // if(type == "fries")
    // {
    //     basePrice = 3.50;
    // }

    // if(type == "burger")
    // {
    //     basePrice = 6.25;
    // }
}

//calculate total cost
cost = basePrice * count;

//tax
let tax = cost * 09;

//adds the cost of order plus tax
cost = cost + tax;

//returns cost
// return cost;