import React from 'react';
import './shop.styles.scss';
import CollectionsOverview from '../../components/collections-overview/collections-overview'
class ShopPage extends React.Component{
    render(){
        return(
            <div className="shop-page">
               <CollectionsOverview/>
            </div>
        )
    }
}

export default ShopPage;