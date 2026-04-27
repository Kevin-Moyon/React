
interface Person{
    firstName: string;
    lastName: string;
    age: number;
    addres : Addres;
    
}

interface Addres{
    postalCode : string;
    city: string ;
}



const iroman: Person = {
    firstName: `Tony`,
    lastName:`Stark`,
    age:45,
    addres:{
        postalCode : 'ABC-123',
        city :'New York'
    }
} ;

// const spiderman : Person ={
//     firstName: "Petter",
//     lastName: "Parker",
//     age: 22
// }


console.log(iroman);


// const spiderman = structuredClone(iroman);

// spiderman.firstName = `Petter`;
// spiderman.lastName = `Parker`;
// spiderman.age = 22 ;
// spiderman.addres.city= 'San Jose';


// console.log(iroman,spiderman);


