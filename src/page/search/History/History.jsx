import React from 'react';
import './History.scss';

class History extends React.Component{

    
    constructor(props){
        super(props);
        this.state = {
            historyList:["粥","麻辣烫"]
        }
    }
    componentDidMount(){

    }

    renderHistoryList(){
        const historyList = this.state.historyList.slice();
        return historyList.map((item,index)=>{
        return <li className="item" key={index}>{item}</li>
        });
    }

    clearHistory(){
        this.setState({
            historyList:[]
        })
    }
    renderHistory(){
        return (
            <div className="history clearfix">
                <div className="head">
                    <div className="name">历史搜索</div>
                    <div className="trash" onClick={()=>{
                        this.clearHistory();
                    }}></div>
                </div>
                <div className="line"></div>
                <ul className="history-search-list">
                {this.renderHistoryList()}
                </ul>
            </div>
        )
    }
    render(){
        return this.renderHistory();
    }
}

export default History;