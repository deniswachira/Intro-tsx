export const typeAliases = () => {
    console.log('-------Type Aliases-------');

    //Type Aliases : It is a way to give a type a name by using the type keyword.

    // type age = number;
    // let myAge: age = 25;
    // console.log(myAge)

    // type StringOrNum = string | number;
    // // let  myName: StringOrNum = 12345; // valid
    // // let  myName: StringOrNum = 'dennis'; // valid


    // //array of strings
    // type stringArray = Array<string>;
    // let names: stringArray = ['dennis', 'john', 'peter'];

    // type evenNumbers = number[];
    // let evenNumbersArray: evenNumbers = [2, 4, 6, 8, 10];
    // console.log("EvenNumber:", evenNumbersArray)

    // type oddNumbers = Array<number>;
    // let oddNumbersArray: oddNumbers = [1, 3, 5, 7, 9];

    // //OBJECTS

    // type car = {
    //     brand: string,
    //     model: string,
    //     year: number
    // }

    // let DenisCar: car = {
    //     brand: 'Toyota',
    //     model: 'Camry',
    //     year: 2020
    // }
    // console.log(`May Car is: ${DenisCar.brand} of Model: ${DenisCar.model} and year: ${DenisCar.year}`)


    // //complex object
    // type complex = {
    //     data: number[],
    //     output: (all: boolean) => number[]
    // }
    // let complexObject: complex = {
    //     data: [100, 200, 300, 400],
    //     output: function (all: boolean): number[] {
    //         return this.data;
    //     }
    // }

    // console.log(complexObject.output(true));


    // //Extending Types
    // type person = {
    //     name: string,
    //     age: number,
    //     married: boolean,
    //     gender: string,
    //     //optional property
    //     address ?: {
    //         street: string,
    //         city: string,
    //         state: string,
    //         zip: number
    //     }
    // }
    // type employee = person & {
    //     jobTitle: string,
    //     salary: number,
    //     department: string,
    // }
    // let employee1: employee = {
    //     name: 'Dennis',
    //     age: 25,
    //     married: false,
    //     gender: "male",
      
    //     jobTitle: 'Software Developer',
    //     salary: 50000,
    //     department: 'IT'
    // }

    // console.log(employee1)
    // // console.log(`employee1's city: ${employee1.address.city}`);


    //Interfaces
    // interface person {
    //     name: string,
    //     age: number,
    //     married: boolean,
    // }
    // interface employee extends person {
    //     jobTitle: string,
    //     salary: number,
    //     department: string,
    // }
    // let employee1: employee = {
    //     name: 'Dennis',
    //     age: 25,
    //     married: false,
    //     jobTitle: 'Software Developer',
    //     salary: 50000,
    //     department: 'IT'
    // }

    // console.log(employee1)

    //Example 2
    // Rectangle interface
    interface Rectangle {
        height: number;
        width: number;
        //optional property
        color?: string;
    }

    const calculateArea = (rect: Rectangle) => {
        return rect.height * rect.width;
    }

    calculateArea({ height: 10, width: 20 });
    console.log(`Area of Rectangle: ${calculateArea({ height: 10, width: 20 })}`)

    // //extending rectangle interface
    interface Volume extends Rectangle {
        depth: number;
    }

    const calculateVolume = (rect: Volume) => {
        return rect.height * rect.width * rect.depth;
    }
    console.log(`Volume of Rectangle: ${calculateVolume({ height: 10, width: 20, depth: 30 })}`)

}