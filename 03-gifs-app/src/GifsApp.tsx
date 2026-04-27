import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"


export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['dragon ball z'])

    const handleTermClicked = (term: string) => {
        console.log({ term });
    }

    const handleSearch = (query: string) => {
        console.log({ query });

    }

    return (
        <>
            {/* Header */}
            <CustomHeader title="Searcher gifs" description=" Describe and share the perfect gif" />

            {/* Search */}
            <SearchBar

                placeHolder='Search for whatever you want'
                onQuery={handleSearch} />

            {/* Previous searches*/}
            <PreviousSearches

                searches={previousTerms}
                onLabelClicked={handleTermClicked} />

            {/* Gifs */}
            <GifList gifs={mockGifs} />
        </>
    )
}
