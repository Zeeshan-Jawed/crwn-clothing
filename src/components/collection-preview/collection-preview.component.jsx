import React from 'react';
import './collection-preview.style.scss'
import CollectionItem from '../collection-item/collection-item.component'
export const CollectionsPreview =({title,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((items,ind)=>ind<4).map(({id,...otherItemProps})=>
            (<CollectionItem key={id} {...otherItemProps} />))}
            
        </div>
    </div>
)