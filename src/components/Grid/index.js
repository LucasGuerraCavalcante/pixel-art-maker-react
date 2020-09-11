import React, { useState } from 'react';

import useStyles from './styles'

const initialPixels = Array.from({ length: 2500 }, () => ({
    color: '#FFFFFF',
}));

const Grid = ({ currentColor }) => {
    const [pixels, setPixels] = useState(initialPixels);
    const classes = useStyles();

    const paintCell = (index) => () => {
        setPixels(pixels.map((pixel, pixelIndex) => {
            if (pixelIndex === index) {
                return {
                    color: currentColor
                }
            }
            return pixel
        }))
    };

    return (
        <div className={classes.grid}>
            {
                pixels.map((pixel, index) => (
                    <div 
                        key={index}
                        className={classes.pixel}
                        onClick={paintCell(index)}
                        style={{ background: pixel.color }}
                    >
                    </div>
                ))
            }
        </div>
    )
};

export default Grid;