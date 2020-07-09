import React from 'react';
import './top.scss';

class Top extends React.Component{
    constructor(props){
        super(props);
    }

    goBack(){
        window.history.back();
    }
    
    render(){
        return (
            <div className="top">
                <div className="back" onClick={this.goBack}>
                    
                </div>
                <div className="title">
                    {this.props.title}
                </div>
            </div>
        )
    }
}
export default Top;