import React from 'react';
import {connect} from 'react-redux';

import './Business.scss';

/**
 * 附近商家间隔
 */
class Business extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="business">
                <div className="name">
                    附近商家
                </div>
            </div>
        )
    }
}

export default connect(
    // state => ({
    // //    tabs:state.tabReducer.tabs,
    // //    activeKey:state.tabReducer.activeKey
    // })
)(Business);
