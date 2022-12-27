import { useState, createRef } from "react"
import './SearchStyles.css'

export default function Search() {
    const [term, setTerm] = useState('')
    const searchAnchor = createRef()
    const getSearchUrl = () => {
        // TODO: Pull this from settings
        return `https://www.bing.com/search?q=${term}`
    }
    const getSearchSiteName = () => {
        // TODO: Pull this from settings
        return 'Bing'
    }

    return (
        <div id='searchdiv'>
            <input
                id='searchbox' type='text'
                name='search' placeholder={getSearchSiteName()}
                onChange={e => setTerm(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && searchAnchor?.current?.click()}
            ></input>
            <span id='searchbutton'>
                <a
                    id='searchanchor'
                    target='_blank'
                    rel='noreferrer'
                    href={getSearchUrl()}
                    ref={searchAnchor}>
                    Search
                </a>
            </span>
        </div>
    )
}