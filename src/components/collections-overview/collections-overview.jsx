import React from 'react';
import {selectShopItems} from '../../redux/shop/shop.selector';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../../components/preview-collection/preview-collection.components'
import './collections-overview.styles.scss';
import { connect } from 'react-redux';


const CollectionsOverview=({collections})=>(
    <div className="collections-overview">
        {
            collections.map(({id,...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
)

const mapStateToProps=createStructuredSelector({
    collections:selectShopItems
})


export default connect(mapStateToProps)(CollectionsOverview);