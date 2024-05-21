export const objectArrayTuple = () => {
    // OBJECTS

    const person:{name:string, age:number, hobbies:string[], role:string[]} = {
        name: "Denis",
        age: 25,
        hobbies: ["Sports", "Cooking"],
        role: ["Admin", "User"],
    }

    let car: {brand:string, year:number, model:string} 

    car = {
        brand: "Toyota",
        year: 2020,
        model: "Corolla"
    }

    console.log("--TypeScript Objects--");
    console.log(`Person: ${person.name} is ${person.age} years old and his hobbies are ${person.hobbies[0]} and ${person.hobbies[1]}`);


    //ARRAYS
    // let hobbies: string[] = ["Sports", "Cooking"];
    // let roles: Array<string> = ["Admin", "User"];
    // let evenNumbers: number[] = [2, 4, 6, 8, 10];

    // console.log("--TypeScript Arrays--");
    // console.log(`Hobbies: ${hobbies[0]} and ${hobbies[1]}`);
    // evenNumbers.map((num) => {
    //     console.log(`Even Number: ${num}`);
    // });

    // hobbies.push("Reading");
    // console.log("hobbies after push: ", hobbies);

    // hobbies.shift();
    // console.log("hobbies after shift: ", hobbies);
    // hobbies.unshift("Coding");
    // console.log("hobbies after unshift: ", hobbies);

    //TUPLES

    // let myCar: [string, number] = ["Toyota", 2020];
    // // myCar = [2020, "Toyota"]; //error
    // console.log("--TypeScript Tuples--");
    // console.log(`My car is a ${myCar[1]} ${myCar[0]}`);

    // //readonly tuple
    // let myCar2: readonly [string, number] = ["Toyota", 2020];
    // myCar2.push("Corolla"); //error


}


