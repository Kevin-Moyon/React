

const myPromise = new Promise<number>( (resolve, reject )=>{
    setTimeout (()=>{
        //! yo quiero mi dinero
        // resolve(100);
        reject ('Mi friend got lost');
    },2000) // 2 segundos
});


myPromise.then(
    myMoney =>{
        console.log(`I have my money ${myMoney}`);
    }
).catch((reason)=>{
console.warn(reason)
})
.finally (()=>{
    console.log('On with my life');
})