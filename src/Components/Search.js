import { useState } from "react"

export default function Search() {
    const [term, setTerm] = useState('')

    return (
        <>
            <input type='text' name='search' placeholder='Search' onChange={e => setTerm(e.target.value)}></input>
            <button onClick={() => console.log(term)}>Search</button>
        </>
        )
}