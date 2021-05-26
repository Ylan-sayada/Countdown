import React from 'react'
export default function Content(props:{children:JSX.Element[]}) {
    return (
        <div className="contentBackground">
            {props.children}
        </div>
    )
}
