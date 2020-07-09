import React from 'react';
// import {connect} from 'react-redux';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Hot from '../Hot/Hot.jsx';
import Top from '../../../component/Top/Top.jsx';
import History from '../History/History.jsx';
class Main extends React.Component{
    constructor(props){
        super(props);
    }
   
    render(){
        
        return (
            <div>
                <Top title="搜索页"/>
                  <SearchBar /> 
                  <Hot />
                  <History />
            </div>
                
        )
    }
}

export default Main;