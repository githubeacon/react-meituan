import React from 'react';

import './SearchBar.scss';
class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchValue:""
        };
    }
    renderClose(){
        let value = this.state.searchValue;
        let isShowClose = value.length > 0;
        if(isShowClose){
            return(
                <i className="close" onClick={()=>{this.close()}}></i>
            )
        }
        return null;
    }

    listenInput(e){
        let value = e.target.value;
        this.setState({
            searchValue:value
        });
    }
    close(){
        this.setState({
            searchValue:""
        })
    }

    inputChange(e){
        this.setState({
            searchValue:e.target.value
        });
    }
    search(){

    }
    render(){
        return (
            <div className="search-bar">
               <div className="left">
                    <input type="text" placeholder="鲜汁道龙虾饭 满20减11" className="search-input" value={this.state.searchValue} onInput={(e)=>{this.listenInput(e)}} onChange={(e)=>{this.inputChange(e)}}/>
                    {this.renderClose()}
               </div>
               <div className="right">
                    <button className="search-btn" onClick={this.search}>
                        搜索
                    </button>
               </div>
            </div>
        )
    }
}

export default SearchBar;