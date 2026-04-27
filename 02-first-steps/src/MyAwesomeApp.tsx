// export function MyAwesomeApp(){
//     return(
//         <>
//             <h1>Kevin</h1>
//             <h3>Moyon</h3>
//         </>
//     );
// }

import type { CSSProperties } from "react";

const firstName = 'Kevin';
const lastName = 'Moyon';

const favoriteGames = ['PES', 'FIFA', 'COD', 'DBZ', 'Kevins', 'Joels'];

const isActive = false;

const address = {
    zipCode: 'ABC-123',
    country: 'Canada'

};


const myStyles: CSSProperties = {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
};


export const MyAwesomeApp = () => {
    return (
        <div data-testid="div-app">
            <h1 data-testid="first-name-tittle">{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>
            <p>{2 + 2}</p>

            <h1>{isActive ? 'Active' : 'No Active'}</h1>

            <p style={myStyles}>{JSON.stringify(address)}</p>
        </div>
    );
};