import * as React from 'react';
import * as cx from 'classnames';
import './Column.css';
const Column = ({ className = null, shrink = false, horizontalAlignment = 'left', verticalAlignment = 'middle', flexDirection = 'row', children = null, }) => {
    const cn = 'column';
    const classes = cx(cn, {
        [className]: Boolean(className),
        [`${cn}_shrink`]: shrink,
        [`${cn}_${horizontalAlignment}`]: horizontalAlignment,
        [`${cn}_${verticalAlignment}`]: verticalAlignment,
        [`${cn}_dir_${flexDirection}`]: flexDirection,
    });
    return <div className={classes}>{children}</div>;
};
export default Column;
