export interface Hero {
       id: number;
    name: string ;
    owner: Owner;
}

//type Owner = 'DC' | 'Marvel';  //Tipos de datos con valoes especificos

export enum Owner {
    DC = 'DC', //0
    Marvel = 'Marvel', //1 ← alt + 27 
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    //owner: 'DC',
    owner: Owner.DC,
    // owner: 1, // Es como si tuviera DC o MARVEL
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.Marvel,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.Marvel,
  },
    {
    id: 6,
    name: 'Green Lantern',
    owner: Owner.DC,
  },
];