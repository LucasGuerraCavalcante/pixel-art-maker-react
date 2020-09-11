import React, { useState } from 'react';

import useStyles from './styles'

const Grid = () => {
    const [pixels] = useState(Array.from({ length: 2500 }))
    
    const classes = useStyles();

    return (
        <div className={classes.grid}>
            {
                pixels.map((_, i) => (
                    <div 
                        key={i}
                        className={classes.pixel}>
                    </div>
                ))
            }
        </div>
    )
};

export default Grid;