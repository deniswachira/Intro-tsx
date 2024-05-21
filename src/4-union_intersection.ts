export const unionIntersection = () => {
    console.log('-------Union and Intersection-------');
    //Union: It allows a variable to have multiple types
    // let unionType;
    // unionType = 10;
    // console.log("UnionType: ", unionType);
    // unionType = 'Dennis';
    // console.log("UnionType: ", unionType);
    // //Intersection: It allows a variable to have multiple types
    // let intersectionType;
    // intersectionType = { name: 'Dennis', age: 25 };
    // console.log("IntersectionType: ", intersectionType);
    // intersectionType = { name: 'Dennis', age: 25, married: false };
    // console.log("IntersectionType: ", intersectionType);


    //Union : It allows a variable to have multiple types
    let unionType: number | string;
    unionType = 10; //unionType can be a number or a string
    console.log("UnionType: ", unionType);
    unionType = 'Dennis'; //unionType can be a number or a string
    console.log("UnionType: ", unionType);



    //Intersection: It allows a variable to have multiple types
    let intersectionType: { name: string, age: number } & { married: boolean };
    intersectionType = { name: 'Dennis', age: 25, married: false }; //intersectionType must have name, age, and married
    console.log("IntersectionType: ", intersectionType);
}