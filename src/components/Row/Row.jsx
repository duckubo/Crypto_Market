import React from 'react';
import * as cx from 'classnames';
import './Row.css';
const Row = ({ className = null, horizontalAlignment = false, verticalAlignment = false, children = null }) => {
    const cn = 'row';
    const classes = cx(cn, {
        [className]: Boolean(className),
        [`${cn}_left`]: horizontalAlignment === 'left',
        [`${cn}_right`]: horizontalAlignment === 'right',
        [`${cn}_center`]: horizontalAlignment === 'center',
        [`${cn}_justify`]: horizontalAlignment === 'justify',
        [`${cn}_spaced`]: horizontalAlignment === 'spaced',
        [`${cn}_top`]: verticalAlignment === 'top',
        [`${cn}_middle`]: verticalAlignment === 'middle',
        [`${cn}_bottom`]: verticalAlignment === 'bottom',
        [`${cn}_stretch`]: verticalAlignment === 'stretch',
    });
    return (<div className={classes} role="toolbar">
      {children}
    </div>);
};
export default Row;
