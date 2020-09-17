import React from 'react';

import useStyles from './styles'

const CurrentColor = ({ currentColor }) => {
    const classes = useStyles();

    console.log(currentColor);

    return (
        <div className={classes.currentColorContainer}>
            <span>
                Selected color: 
            </span>
            <div 
                className={classes.currentColorBox}
                style={{ 
                    background: currentColor
                }}
            >
            </div>
            <span className={classes.currentColorHexText}>
                {currentColor}
            </span>
        </div>
    )
};

export default CurrentColor;