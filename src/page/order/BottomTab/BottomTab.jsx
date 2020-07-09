import React from 'react';
import {connect} from 'react-redux';
import './BottomTab.scss';
import {changeTab} from '../actions/tabAction.js';
class BottomTab extends React.Component{

    constructor(props){
        super(props);
    }

    changeTab(key){
        this.props.dispatch(changeTab({
            activeKey:key
        }));
    }
    renderItems(){
        let tabs = this.props.tabs;
        let activeKey = this.props.activeKey;
        return tabs.map((item,index)=>{ 
            let cls = item.key + " tab-item";
            if(activeKey === item.key){
                cls += " active";
            }
            return (
            <div  key={index} className={cls} onClick={()=>this.changeTab(item.key)}>
                <div className="item-icon"></div>
                <div className="item-name">{item.name}</div>
            </div>
            )
        });
        
    }
    render(){
        return (
            <div className='bottom-tab'>
                {this.renderItems()}
            </div>
        )
    }
}
export default connect(
    state => ({
       tabs:state.tabReducer.tabs,
       activeKey:state.tabReducer.activeKey
    })
)(BottomTab);