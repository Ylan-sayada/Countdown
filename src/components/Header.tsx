import React from 'react'
import InfoIcon from '@material-ui/icons/Info';

import logo from '../img/logo.jpeg';
export default function Header(props:{clickIcon:any}) {
    return (
        <div className="header">
            
            <img src={logo} alt="logo society"/>
            <InfoIcon onClick={props.clickIcon} className="drawer-button" style={{cursor:"pointer"}}/>
        </div>
    )
}
