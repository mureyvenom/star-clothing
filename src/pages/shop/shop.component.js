import React, { Component } from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

class ShopPage extends Component  {
    componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props;

        fetchCollectionsStartAsync();
    }

    render(){
        const {match, isCollectionFetching, isCollectionsLoaded} = this.props
        return(
            <div>
                {
                    isCollectionFetching && !isCollectionsLoaded ?
                    <h1 style={{textAlign: 'center'}}>Loading...</h1>
                    :
                    <div className="shop-page">
                        <Route exact path={`${match.path}`} component={CollectionsOverview} />
                        <Route  path={`${match.path}/:collectionId`} component={CollectionPage}/>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);