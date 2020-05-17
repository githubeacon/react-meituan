import React from 'react';
import {connect} from 'react-redux';

import './SortBar.scss';
/**
 * 排序栏
 */
class SortBar extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="sort-bar">
                <div className="multiple item">综合排序</div>
                <div className="hot-sale item">销量最高</div>
                <div className="short-distance item">距离最近</div>
                <div className="filter item">筛选</div>
            </div>
        )
    }
}

export default connect(
    // state => ({
    // //    tabs:state.tabReducer.tabs,
    // //    activeKey:state.tabReducer.activeKey
    // })
)(SortBar);
