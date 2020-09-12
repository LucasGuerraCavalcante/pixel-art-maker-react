import React from 'react';

import useStyles from './styles'

const ColorPicker = ({ colorHistoryPalatte, setCurrentColor }) => {
    const classes = useStyles();

    function handlePaletteColorSelect(hex) {
        setCurrentColor(hex)
    }

    return (
        <div className={classes.colorPaletteContainer}>
        {
            colorHistoryPalatte.slice(-5).map((color) => (
                <div 
                    key={color}
                    className={classes.colorPalettePicker}
                    onClick={e => handlePaletteColorSelect(color)}
                    style={{ 
                        background: color
                     }}
                >
                </div>
            ))
        }
        </div>
    )
};

export default ColorPicker;