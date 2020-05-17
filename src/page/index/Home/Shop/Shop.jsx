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
    }

    loadShop(){
        axios.get("json/queryShopList.json")
        .then(()=>{
            console.info("success");
        })
        .catch(()=>{
            console.error("exception");
        })
        .then(()=>{
            console.info("complete");
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
        console.info("did mound");
        this.loadShop();
    }
    render(){
        return(
            <div className="shop">
                <div className="item">
                    <div className="icon">
                        <img src="http://p0.meituan.net/waimaipoi/93b3baca44c5bad9f3154020c7daa69336864.jpg" alt=""/>
                    </div>
                    <div className="content">
                        <div className="name">
                            十里鲜花
                        </div>
                        <div className="shop-detail">
                            <div className="shop-data">
                                <div className="comment-star">
                                    {this.renderStar(4)}
                                </div>
                                <div className="score">
                                    3.6
                                </div>
                                <div className="count">
                                    月售200
                                </div>
                            </div>
                            <div className="shop-distance">
                                <div className="time">
                                    50分钟
                                </div>
                                <div className="distance">
                                    30km
                                </div>
                            </div>
                        </div>
                        <div className="deliver-detail">
                            <div className="price">
                                起送 ¥20
                            </div>
                            <div className="deliver-prize">
                                配送 ¥30
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <img src="http://p0.meituan.net/waimaipoi/93b3baca44c5bad9f3154020c7daa69336864.jpg" alt=""/>
                    </div>
                    <div className="content">
                        <div className="name">
                            十里鲜花
                        </div>
                        <div className="shop-detail">
                            <div className="shop-data">
                                <div className="comment-star">
                                    {this.renderStar(4)}
                                </div>
                                <div className="score">
                                    3.6
                                </div>
                                <div className="count">
                                    月售200
                                </div>
                            </div>
                            <div className="shop-distance">
                                <div className="time">
                                    50分钟
                                </div>
                                <div className="distance">
                                    30km
                                </div>
                            </div>
                        </div>
                        <div className="deliver-detail">
                            <div className="price">
                                起送 ¥20
                            </div>
                            <div className="deliver-prize">
                                配送 ¥30
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <img src="http://p0.meituan.net/waimaipoi/93b3baca44c5bad9f3154020c7daa69336864.jpg" alt=""/>
                    </div>
                    <div className="content">
                        <div className="name">
                            十里鲜花
                        </div>
                        <div className="shop-detail">
                            <div className="shop-data">
                                <div className="comment-star">
                                    {this.renderStar(4)}
                                </div>
                                <div className="score">
                                    3.6
                                </div>
                                <div className="count">
                                    月售200
                                </div>
                            </div>
                            <div className="shop-distance">
                                <div className="time">
                                    50分钟
                                </div>
                                <div className="distance">
                                    30km
                                </div>
                            </div>
                        </div>
                        <div className="deliver-detail">
                            <div className="price">
                                起送 ¥20
                            </div>
                            <div className="deliver-prize">
                                配送 ¥30
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <img src="http://p0.meituan.net/waimaipoi/93b3baca44c5bad9f3154020c7daa69336864.jpg" alt=""/>
                    </div>
                    <div className="content">
                        <div className="name">
                            十里鲜花
                        </div>
                        <div className="shop-detail">
                            <div className="shop-data">
                                <div className="comment-star">
                                    {this.renderStar(4)}
                                </div>
                                <div className="score">
                                    3.6
                                </div>
                                <div className="count">
                                    月售200
                                </div>
                            </div>
                            <div className="shop-distance">
                                <div className="time">
                                    50分钟
                                </div>
                                <div className="distance">
                                    30km
                                </div>
                            </div>
                        </div>
                        <div className="deliver-detail">
                            <div className="price">
                                起送 ¥20
                            </div>
                            <div className="deliver-prize">
                                配送 ¥30
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <img src="http://p0.meituan.net/waimaipoi/93b3baca44c5bad9f3154020c7daa69336864.jpg" alt=""/>
                    </div>
                    <div className="content">
                        <div className="name">
                            十里鲜花
                        </div>
                        <div className="shop-detail">
                            <div className="shop-data">
                                <div className="comment-star">
                                    {this.renderStar(4)}
                                </div>
                                <div className="score">
                                    3.6
                                </div>
                                <div className="count">
                                    月售200
                                </div>
                            </div>
                            <div className="shop-distance">
                                <div className="time">
                                    50分钟
                                </div>
                                <div className="distance">
                                    30km
                                </div>
                            </div>
                        </div>
                        <div className="deliver-detail">
                            <div className="price">
                                起送 ¥20
                            </div>
                            <div className="deliver-prize">
                                配送 ¥30
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <img src="http://p0.meituan.net/waimaipoi/93b3baca44c5bad9f3154020c7daa69336864.jpg" alt=""/>
                    </div>
                    <div className="content">
                        <div className="name">
                            十里鲜花
                        </div>
                        <div className="shop-detail">
                            <div className="shop-data">
                                <div className="comment-star">
                                    {this.renderStar(4)}
                                </div>
                                <div className="score">
                                    3.6
                                </div>
                                <div className="count">
                                    月售200
                                </div>
                            </div>
                            <div className="shop-distance">
                                <div className="time">
                                    50分钟
                                </div>
                                <div className="distance">
                                    30km
                                </div>
                            </div>
                        </div>
                        <div className="deliver-detail">
                            <div className="price">
                                起送 ¥20
                            </div>
                            <div className="deliver-prize">
                                配送 ¥30
                            </div>
                        </div>
                    </div>
                </div>
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
