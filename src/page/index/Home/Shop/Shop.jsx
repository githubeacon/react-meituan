import React from 'react';
import {connect} from 'react-redux';

import './Shop.scss';
import axios from 'axios';
/**
 * 商家列表
 */
class Shop extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            shopList:[]
        }
    }

    loadShop(){
        axios.get("json/queryShopList.json")
        .then((res)=>{
            let shopList = res.data.data.shopList;
            this.setState({
                shopList:shopList
            });
        })
        .catch(()=>{
            console.error("exception");
        })
        .then(()=>{
        })

    }
    renderShopList(){
        let shopList = this.state.shopList;
      return shopList.map((item,index)=>{
       return( <div className="item" key={index}>
        <div className="icon">
            <img src={item.picUrl} alt=""/>
        </div>
        <div className="content">
            <div className="name">
                {item.shopName}
            </div>
            <div className="shop-detail">
                <div className="shop-data">
                    <div className="comment-star">
                        {this.renderStar(item.wmPoiScore /10)}
                    </div>
                    <div className="score">
                        {item.wmPoiScore / 10}
                    </div>
                    {/* <div className="count">
                        月售200
                    </div> */}
                </div>
                <div className="shop-distance">
                    <div className="time">
                        {item.deliveryTimeTip}
                    </div>
                    <div className="distance">
                        {item.distance}
                    </div>
                </div>
            </div>
            <div className="deliver-detail">
                <div className="price">
                    {item.minPriceTip}
                </div>
                <div className="deliver-price">
                    {item.shippingFeeTip}
                </div>
                <div className="average-price">
                    {item.averagePriceTip}
                </div>
            </div>
        </div>
    </div>
       )
       })
    }
    renderStar(score){
        let fullStarCount = 0;
        let halfStarCount = 0;
        let zeroStarCount = 0;
        fullStarCount = parseInt(score);
        halfStarCount = (score - fullStarCount) >= 0.5 ? 1 : 0;
        zeroStarCount = 5 - fullStarCount - halfStarCount ;
        let starList = [];
        let index = 0;
        for(let i=0;i<fullStarCount;i++){
            starList.push(<i className='star full' key={++index}></i>);
        }
        for(let i=0;i<halfStarCount;i++){
            starList.push(<i className='star half' key={++index}></i>);
        }
        for(let i=0;i<zeroStarCount;i++){
            starList.push(<i className='star zero' key={++index}></i>);
        }
        return starList;
    }
    componentDidMount(){
        this.loadShop();
    }
    render(){
       return (
        <div className="shop">
           {this.renderShopList()}
        </div>
       ) 
      
    }
}

export default connect(
    // state => ({
    // //    tabs:state.tabReducer.tabs,
    // //    activeKey:state.tabReducer.activeKey
    // })
)(Shop);
