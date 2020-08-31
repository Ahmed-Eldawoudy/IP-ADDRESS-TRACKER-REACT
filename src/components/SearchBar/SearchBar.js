import React from 'react';
import './SearchBar.css'

function SearchBar() {
    return (
        <div className='searchbar'>
            <input type='search'
                placeholder='Search for any IP address or domain'
                className='search' />
            <div className='arrow'>
                <img src={require('./icon-arrow.svg')} alt='' />
            </div>
        </div>
    )
}

export default SearchBar
