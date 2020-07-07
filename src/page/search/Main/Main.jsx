import React from 'react';
// import {connect} from 'react-redux';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Hot from '../Hot/Hot.jsx';
class Main extends React.Component{
    constructor(props){
        super(props);
    }
   
    render(){
        
        return (
            <div>
                  <SearchBar /> 
                  <Hot />
            </div>
                
        )
    }
}

export default Main;