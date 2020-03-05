import React from 'react';
import {connect} from 'react-redux';

import Header from './Header/Header.jsx';
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
