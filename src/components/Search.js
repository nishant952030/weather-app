import React, { useEffect, useState } from 'react'
import './search.css'
function Search({cityToCoordinates}) {
    const [city, setCity] = useState('Mumbai,MH,IN')
    useEffect(() => {
        setCity("Mumbai,MH,IN")
        cityToCoordinates(city)
    },[])
    const sendLocation = () => {
        cityToCoordinates(city);
    }
    return (
        <div className='search'>
            <div className='search__current-location'>
                <h1>{city}</h1>
            </div>
            <div className='search__input-search'>
            <input type='text' placeholder='Agra,UP,IN' value={city} onChange={(e) => {
                setCity(e.target.value)
            }}/>
            <button type='button' onClick={sendLocation}>Search</button>
        </div>
        </div>
    )

}

export default Search