import React from 'react'
import './menu-item.style.scss'
export const Menuitem = ({title,imageUrl,size}) => {
    return (
                <div  className={`${size} menu-item`} >
                    <div className="background-img"
                     style={{
                    background:`url(${imageUrl})`
                }}/>
                    <div className="content">
                        <h1 className="title"> {title.toUpperCase()}</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                
    )
}