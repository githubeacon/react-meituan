import React from 'react';
import {connect} from 'react-redux';
import './Category.scss'
/**
 * 分类
 */
class Category extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="category">
                <ul className="list">
                    <li >
                        <div className="item">
                            <img src={require("./image/delicious.png")} alt="" className="item-img" />
                            <div className="item-name">美食</div>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <img src={require("./image/market.png")} alt="" className="item-img" />
                            <div className="item-name">美团超市</div>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <img src={require("./image/vegetable.png")} alt="" className="item-img" />
                            <div className="item-name">生鲜果蔬</div>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <img src={require("./image/deliver.png")} alt="" className="item-img" />
                            <div className="item-name">美团专送</div>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <img src={require("./image/midnight_snack.png")} alt="" className="item-img" />
                            <div className="item-name">夜宵</div>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <img src={require("./image/dessert.png")} alt="" className="item-img" />
                            <div className="item-name">甜点饮品</div>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <img src={require("./image/snack.png")} alt="" className="item-img" />
                            <div className="item-name">小吃馆</div>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <img src={require("./image/home_food.png")} alt="" className="item-img" />
                            <div className="item-name">家常菜</div>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <img src={require("./image/flower_cake.png")} alt="" className="item-img" />
                            <div className="item-name">鲜花蛋糕</div>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <img src={require("./image/brand.png")}alt="" className="item-img" />
                            <div className="item-name">品牌连锁</div>
                        </div>
                    </li>
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
