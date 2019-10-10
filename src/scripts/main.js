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

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

var instructors = nashvilleSoftwareSchool.instructors.fullTime.toString();
console.log(instructors);
console.log(`Hello, and welcome to NSS! Our full time instructors are the following fabulous people: ${instructors}.
Part time instructors are ${nashvilleSoftwareSchool.instructors.partTime[0]} and ${nashvilleSoftwareSchool.instructors.partTime[1]}. `)
console.log(nashvilleSoftwareSchool.instructors.partTime[0], nashvilleSoftwareSchool.instructors.partTime[1]);

// For in loop to iterate over the instructors object
for (let i in nashvilleSoftwareSchool.instructors) {
    console.log(nashvilleSoftwareSchool.instructors[i]);
}

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[1].name} was in the Beatles from 
${beatles.history.formed} to ${beatles.history.disbanded}. He was
born in ${beatles.members[1].birth}. He contributed to the 
${beatles.albums[3]}.`)