import React, { useState } from 'react';
import Horloge from './Horloge';

const Menu = ({setViews}) => {
    const initialStyle = {
        Horloge: 'menuItem menuActive',
        Timer: 'menuItem'
    }
    const [menuStyle, setMenuStyle] = useState(initialStyle);
    const setClass = (item) => {
        if (item == 'H') {
            setMenuStyle({Horloge: 'menuItem menuActive', Timer: 'menuItem'})
            setViews({Horloge: '', Timer: 'collapse'})
        } else {
            setMenuStyle({Horloge: 'menuItem', Timer: 'menuItem menuActive'})
            setViews({Horloge: 'collapse', Timer: ''})
        }
    }

    return (
        <div className='Menu'>
            <div className="row">
                <div className='col col-md-6'>
                    <a href="#" className={menuStyle.Horloge} onClick={e => {setClass('H')}}>Horloge</a>
                </div>
                <div className='col col-md-6'>
                    <a href="#" className={menuStyle.Timer} onClick={e => {setClass('T')}}>Timer</a>
                </div>
            </div>
        </div>
    );
};

export default Menu;