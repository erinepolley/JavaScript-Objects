console.log("Heya");

const food = {
    type: "Hamburger",
    size: "small"
    
};

const ford = {
    make: "Ford",
    model: "mustang",
    year: 2015,
    color: "red"
};

const animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];
console.log(animalNames);

const father = {
    name: "Brad",
    age: 36,
    sex: "male"
};

const mother = {
    name: "Erin",
    age: 33, 
    sex: "female"
}

const child = {
    name: "Georgia",
    age: 2,
    sex: "female"
}

const child2 = {
    name: "Isabel",
    age: .5,
    sex: "female"
}

const myFamily = [father, mother, child, child2];

console.log(myFamily);

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
};

console.log(`The wardrobe object contains the following values: ${wardrobe.height}, ${wardrobe.manufacturer}, ${wardrobe.contents}, ${wardrobe.depth}, and ${wardrobe.width}.`);

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(`The Empire State Building is a marvel to behold, 
with ${empireStateBuilding.stories} stories at ${empireStateBuilding.height} feet.
The building itself takes up ${empireStateBuilding.squareFeet} square feet,
and stretches ${empireStateBuilding.eastWestLength} feet east to west and 
${empireStateBuilding.northSouthLength} feet north to south. `)

// const address = empireStateBuilding["address"];
// const date = empireStateBuilding["constructionDate"];
// const cost = empireStateBuilding["cost"];
// const owner = empireStateBuilding["owner"];
// const architect = empireStateBuilding["architect"];
const address = "address";
const date = "constructionDate";
const cost = "cost";
const owner = "owner";
const architect = "architect";
console.log(empireStateBuilding[address]);
console.log(empireStateBuilding[date]);
console.log(empireStateBuilding[cost]);
console.log(empireStateBuilding[owner]);
console.log(empireStateBuilding[architect]);