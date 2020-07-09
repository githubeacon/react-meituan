import React from 'react';
import {connect} from 'react-redux';
import BottomTab from '../BottomTab/BottomTab.jsx';
import Order from '../Order/Order.jsx';
class Main extends React.Component{
    constructor(props){
        super(props);
    }
   
    render(){
        
        return (
            <div>
                    <Order />
                    <BottomTab />
            </div>
                
        )
    }
}

export default connect(

    state=>({
        num:state.tabReducer.num
    })
)(Main);