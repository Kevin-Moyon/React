import type { GiphyRandomResponse } from "../data/giphy.response";


const API_KEY = `t85rpR0u09t6wv7lFTFXOp5ltvJfrt2W` ;


const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
};

const getRamdonGifUrl = async () =>{
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );

    const {data }: GiphyRandomResponse = await response.json();

    return data.images.original.url ;
};

getRamdonGifUrl().then(createImageInsideDOM);

console.log("Iniciando petición...");

getRamdonGifUrl()
    .then((url) => {
        console.log("URL recibida:", url);
        createImageInsideDOM(url);
    })
    .catch((error) => {
        console.error("¡Aquí está el error!", error);
    });