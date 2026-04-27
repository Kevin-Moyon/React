import { heroes, type Hero, Owner } from "../data/heroes.data"




const getHeroById =( id:number): Hero | undefined =>{
    const hero = heroes.find ((hero)=>{
        return  hero.id === id;
    });


    // if (!hero){
    //     throw new Error (`Do not exist a hero with the id ${id}`)
    // }
 
    return  hero ;
};

console.log(getHeroById(1));



//Tarea 

export const getHeroByOwner = (owner:Owner)=>{
  const getHeroByOwner = heroes.filter(
    hero => hero.owner ===owner
  )
  return getHeroByOwner ;
}



//Funcion Simplificada no tan facil de leer
// export const getHeroByOwner = (owner:Owner)=> 
//     heroes.filter(hero => hero.owner ===owner)