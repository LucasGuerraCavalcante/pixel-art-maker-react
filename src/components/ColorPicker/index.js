import React from 'react';

import useStyles from './styles'

const ColorPicker = ({ currentColor, setCurrentColor }) => {
    const classes = useStyles();

    const colorChange = (event) => {
        setCurrentColor(event.target.value);
    }

    return (
        <input 
            type="color" 
            className={classes.colorInput} 
            // value={currentColor}
            onBlur={colorChange} 
        />
    )
};

export default ColorPicker;