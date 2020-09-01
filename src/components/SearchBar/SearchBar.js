import React from 'react';
import './SearchBar.css'

function SearchBar(props) {
    return (
        <div className='searchbar'>
            <input type='search'
                placeholder='Search for any IP address or domain'
                className='search'
                onChange={props.onSearch} />
            <button className='arrow' onClick={props.onClick}>
                <img src={require('./icon-arrow.svg')} alt='' />
            </button>
        </div>
    )
}

export default SearchBar
