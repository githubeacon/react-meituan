import React from 'react';
import {connect} from 'react-redux';

import Header from './Header/Header.jsx';
import Category from './Category/Category.jsx';
import Business from './Business/Business.jsx';
import SortBar from './SortBar/SortBar.jsx';
import Shop from './Shop/Shop.jsx';
/**
 * 主页
 */
class Home extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header />
                <Category />
                <Business />
                <SortBar />
                <Shop />
            </div>
        )
    }
}

export default connect(
    // state => ({
    // //    tabs:state.tabReducer.tabs,
    // //    activeKey:state.tabReducer.activeKey
    // })
)(Home);
