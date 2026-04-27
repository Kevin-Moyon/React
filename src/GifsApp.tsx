import { mockGifs } from "./mock-data/gifs.mock"


export const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <div className='content-center'>
                <h1>Search of Gifs</h1>
                <p> Descovery and share the perfect gif</p>
            </div>

            {/* Search */}
            <div className="search-container">
                <input type='text' placeholder=" Search Gifs"></input>
                <button>Search</button>
            </div>

            {/* Previous searches*/}
            <div className='previous-searches'>
                <h2>Previous Searches</h2>
                <ul className='previous-searches-list '>
                    <li>Goku</li>
                    <li>Saitama</li>
                    <li>Elden Ring</li>
                </ul>
            </div>

            {/* Gifs */}
            <div className='gifs-container'>
                {
                    mockGifs.map((gif) => (
                        <div key={gif.id} className='gif-card'>
                            <img src={gif.url} alt={gif.title}></img>
                            <h3>{gif.title}</h3>
                            <p>
                                {gif.width}x{gif.height} (1.5mb)
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
