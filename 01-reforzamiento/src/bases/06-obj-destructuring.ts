

const person = {
    name : 'Tony',
    age : 45,
    key : 'iroman',
};

const {key, name: ironmanName, age} = person ;

//const name = person.name;


console.log(ironmanName,age,key);


interface Hero{
    name : string ;
    age:number;
    key : string ;
    rank? :string ;
}

const useContext = ({key, age, rank, name}:Hero) => {
    
    return{
        keyName : key,
        user :{
            name,
            age,
        },
        rank :rank
    };
};

// const context = useContext(person);
// console.log(context);

//Desestructuracion

const {rank,keyName, user} = useContext(person);
const {name} = user;
console.log(rank, keyName, name);


