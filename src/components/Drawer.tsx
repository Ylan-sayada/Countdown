import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
export default function Drawer(props:{children:any,isOpen:boolean,closeIt:any}) {
    return (
        <div className={`drawer ${props.isOpen ? "" : "hidden"}`}>
            <div>
               {props.children} 
            </div>
            <HighlightOffIcon onClick={props.closeIt} style={{alignSelf:"center",fontSize:"15vw",cursor:"pointer"}} />
        </div>
    )
}
