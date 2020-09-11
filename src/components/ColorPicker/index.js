import React, { useState } from 'react';

import useStyles from './styles'

const ColorPicker = () => {
    const [currentColor, setCurrentColor] = useState('#56BC58')
    
    const classes = useStyles({ currentColor });

    const colorChange = (event) => {
        setCurrentColor(event.target.value);
        // console.log(event.target.value);
    }

    return (
        <>
            <input 
                type="color" 
                className={classes.colorInput} 
                value={currentColor}
                onChange={colorChange} 
            />
        </>
    )
};

export default ColorPicker;