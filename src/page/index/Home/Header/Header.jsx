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
                    <div className="address">
                        <div className="address-name one-line" >鸿运公寓鸿运公寓鸿运公寓鸿运公寓鸿运公寓鸿运公寓</div>
                    </div>
                    <div className="search">
                        <input type="text" className="one-line"  placeholder="请输入商家或者商品名称" />
                    </div>
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
