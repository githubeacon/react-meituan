import React from 'react';
import {connect} from 'react-redux';
import './Header.scss'
/**
 * 头部
 */
class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isHideAddress:false
        };
    }

    componentDidMount(){
        window.addEventListener("scroll",()=>{this.onListenScroll()});
    }

    componentWillUnmount(){
        window.removeEventListener("scroll",()=>{this.onListenScroll()});
    }

    onListenScroll(){


        let scrollTop = document.documentElement.scrollTop;
        if(scrollTop >= 150){
            this.setState({
                isHideAddress:true
            }
            )
        }else{
            this.setState({
                isHideAddress:false
            })
        }


    }
    renderAddress(){
            let cls = "address ";
            if(this.state.isHideAddress){
                cls += "hide";
            }
            return (
                
                <div className={cls}>
                        <div className="address-name one-line" >鸿运公寓鸿运公寓鸿运公寓鸿运公寓鸿运公寓鸿运公寓</div>
                </div>
            )
       
    }
    render(){
        return (
            <div className="header">
                    {this.renderAddress()}
                    <div className="search">
                        <input type="text" className="one-line"  placeholder="请输入商家或者商品名称" />
                    </div>
            </div>
        );
    }
}

export default connect(
    // state => ({
    // //    tabs:state.tabReducer.tabs,
    // //    activeKey:state.tabReducer.activeKey
    // })
)(Header);
