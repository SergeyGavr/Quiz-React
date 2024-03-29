import React from 'react'

import './menuToggle.css'

const MenuToggle = props => {
    const cls = [
        'menuToggle',
        'fa',

    ];
    if (props.isOpen) {
        cls.push('fa-times');
        cls.push('open')
    } else {
        cls.push('fa-bars')
    }

    return(
        <i
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    )
};

export default MenuToggle;