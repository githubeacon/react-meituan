import React from 'react';
import {connect} from 'react-redux';
import './Category.scss';
import axios from 'axios';
/**
 * 分类
 */
class Category extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            categoryList:[]
        };
    }

    loadCategory(){
        axios.get('json/queryCategorylist.json')
        .then((res) => {
            this.setState({
                categoryList:res.data.data.kingkongList.slice(0,10)
            })
        })
        .catch(()=>{
            console.error("exception")
        })
        .then(()=>{
        })
    }
    componentDidMount(){
       this.loadCategory();
    }
    renderCategory(){
        const categoryList = this.state.categoryList.slice();
        return (
            categoryList.map((item,index)=>{
                return  (
                     <li key={index}>
                         <div className="item">
                             <img src={item.icon} alt="" className="item-img" />
                             <div className="item-name">{item.name}</div>
                         </div>
                     </li>
                 )
          }
     )
        )
    }
    render(){
        return (
            <div className="category">
                <ul className="list">
                    {this.renderCategory()}
                </ul>
            </div>
        );
    }
}

export default connect(
    // state => ({
    // //    tabs:state.tabReducer.tabs,
    // //    activeKey:state.tabReducer.activeKey
    // })
)(Category);
