import React from 'react';

import useStyles from './styles'

const ColorPicker = ({ colorHistoryPalatte, onSetColor }) => {
    const classes = useStyles();

    function colorChange() {
        // onSetColor();
    }

    return (
        <div className={classes.colorPaletteContainer}>
        {
            colorHistoryPalatte.map((color) => (
                <div 
                    key={color}
                    className={classes.colorPalettePicker}
                    onClick={colorChange}
                    style={{ background: color }}
                >

                </div>
            ))
        }
        </div>
    )
};

export default ColorPicker;