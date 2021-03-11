import React from 'react';
import { CollectionsPreview } from '../collection-preview/collection-preview.component';
import SHOP_DATA from'./shop.data'
class Shop extends React.Component{

constructor(){
    super();
    this.state={
        collections:SHOP_DATA
    }
}
    render(){
        const {collections}=this.state
        return(
            <div className="shop-page">
                {collections.map(({id,...OtherCollectionProps})=>
                    <CollectionsPreview key={id} {...OtherCollectionProps} />)}

            </div>
        )
    }
}
export default Shop;