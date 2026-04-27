

const characterNames = ['Goku', 'Vegeta', 'Trunks'] ;

// const [ p1, p2, p3] = characterNames;


// console.log({p1, p2, p3});

const [,p2,]= characterNames;  // las comas dicen que no quiero esos elementos en este caso yo solo quiero a Vegeta
console.log({p2});

const [,,trunks]=characterNames;
console.log({trunks});


const returnsArrayFn = () =>{
    return ['ABC',123] as const
};

const [letters, numbers] = returnsArrayFn();
 console.log(numbers + 100, letters + 'DEF');
 


// Desestructuracion de arreglos []
// Desestructuracion de objetos {}



//Tarea
const useState = (value : string) =>{
    return [value,
        (newValue : string) =>{
        console.log(newValue);
        },
    ] as const
};


const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"
