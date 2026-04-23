function greet (name:string){
    return `Hola ${name}`;
}

// Funcion Flecha
const greet2 = (name:string) =>{
    return `Hola ${name}` ;
}

//Funcion Flecha simplificada
const greet3 = (name:string) => `Hola ${name}` 


const message = greet ('Goku');
const message2= greet2('Vegueta')
const message3= greet3('Piccolo')

console.log(message , message2, message3);



interface User{
    uid: string;
    username: string;
}

function getUser (): User{
    return{
        uid: 'ABC-123',
        username:'El_papi23'
    };
}

const user = getUser();
console.log(user);



//Funcion Flecha 
const getUser2 =() =>{
    return {
        uid: 'ABC-123',
        username:'El_papi23'
    };
}

const user2=getUser2();
console.log(user2);

//Funcion Flecha simplificada
const getUser3 =() => ({
        uid: 'ABC-123',
        username:'El_papi23'
    });


const user3=getUser3();
console.log(user3);




const myNumbers :number[] =[1,2,3,4,5,6,7] ;

myNumbers.forEach(function(value){
    console.log(value);  
});


//Simplificado con funcion flecha

const myNumbers2 :number[] =[1,2,3,4,5,6,7] ;


myNumbers2.forEach( (value)=>{
    console.log(value);
} )


//Aun mas simplificado
const myNumbers3 :number[] =[1,2,3,4,5,6,7] ;

myNumbers3.forEach(console.log);

