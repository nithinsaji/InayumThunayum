import React from 'react'
import Button from '../UI/Button'
import './style/Search.css'

const Search = () => {
    return (
        <div className='search__container'>
            <div className="search__box">
                <div className='inputGroup'>
                    <label htmlFor="">I am</label>
                    <input type="text" id='' />
                </div>
                <div className='inputGroup'>
                    <label htmlFor="">Looking For</label>
                    <input type="text" id='' />
                </div>
                <div className='inputGroup'>
                    <label htmlFor="">Age</label>
                    <div>
                        <input type="text" id='' />
                        <label htmlFor="">To</label>
                        <input type="text" id='' />
                    </div>
                </div>
                <div className='inputGroup'>
                    <label htmlFor="">Mother Tounge</label>
                    <input type="text" id='' />
                </div>
                <div className='inputGroup'>
                    <Button style={'gradient'}>
                        FIND YOUR PARTNER
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default Search