import React from 'react';

import useStyles from './styles'

const GridSwitch = ({ showGrid, setShowGrid }) => {

    const classes = useStyles();

    const handleShowGrid = () => {
        setShowGrid(!showGrid)
    };

    return (
        <>
            <button 
                className={classes.button} 
                onClick={handleShowGrid}
            >
                Show grid
            </button>
        </>
    )
};

export default GridSwitch;