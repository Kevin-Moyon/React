
import type { GiphyResponse } from "../interfaces/giphy.response"
import type { Gif } from "../interfaces/gif.interfaces";
import { giphyApi } from "../api/giphy.api";


export const getGifsByQuery = async (query: string): Promise<Gif[]> => {

    const response = await giphyApi<GiphyResponse>(`/search`,
        {
            params: {
                q: query,
                limit: 10,
                lang: `en`,
                api_key: import.meta.env.VITE_GIPHY_API_KEY,
                // api_key: 'tGJoT6fxiTtXRjl4vukd8Uedx82a9k0H'                
            }
        })

    console.log(response.data);

    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }))

}