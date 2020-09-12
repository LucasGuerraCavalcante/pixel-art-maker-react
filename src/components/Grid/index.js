import React, { useState } from 'react';

import useStyles from './styles'

const notPaintedPixel = {
    painted: false,
    color: '#FFFFFF',
};

const initialPixels = Array.from({ length: 2500 }, () => notPaintedPixel);


const Grid = ({ currentColor, showGrid }) => {
    const [pixels, setPixels] = useState(initialPixels);
    const classes = useStyles();

    const paintCell = (index) => () => {
        setPixels(pixels.map((pixel, pixelIndex) => {
            if (pixelIndex === index) {
                return {
                    painted: true,
                    color: currentColor
                }
            }
            return pixel
        }))
    };

    const eraseCell = (index) => (event) => {
        event.preventDefault();
        setPixels(pixels.map((pixel, pixelIndex) => {
            if (pixelIndex === index) {
                return notPaintedPixel
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
                        onContextMenu={eraseCell(index)}
                        style={
                            { 
                            border: showGrid ? showGrid : 'none',
                            background: pixel.painted ? pixel.color : '#FFFFFF'
                         }
                        }
                    >
                    </div>
                ))
            }
        </div>
    )
};

export default Grid;