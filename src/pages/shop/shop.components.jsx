import React from 'react';
import {Route} from 'react-router-dom';
import './shop.styles.scss';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection.component';
class ShopPage extends React.Component{
    render(){
        return(
            <div className="shop-page">
              <Route  exact path={`${this.props.match.path}`} component={CollectionsOverview}/>
              <Route   path={`${this.props.match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        )
    }
}

export default ShopPage;