import React from 'react';

import useStyles from './styles'

const ColorPicker = ({ onSetColor }) => {
    const classes = useStyles();

    const colorChange = (event) => {
        onSetColor(event.target.value);
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