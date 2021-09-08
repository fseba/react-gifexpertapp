import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = ( { target: {value} } ) => setInputValue(value);

    const handleSubmit = ( e ) => {
        e.preventDefault();        
        const curated = inputValue.trim();

        if( curated.length > 2 ) {
            setCategories( categories => [curated, ...categories]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange= { handleInputValue }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
