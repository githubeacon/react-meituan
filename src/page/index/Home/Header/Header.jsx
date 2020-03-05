import React from 'react';
import {connect} from 'react-redux';
import './Header.scss'
/**
 * 头部
 */
class Header extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="header">
                <img  />
            </div>
        );
    }
}

export default connect(
    // state => ({
    // //    tabs:state.tabReducer.tabs,
    // //    activeKey:state.tabReducer.activeKey
    // })
)(Header);
