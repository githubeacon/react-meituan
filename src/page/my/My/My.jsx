import React from 'react';
import './My.scss';
import axios from 'axios';

class My extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            listMap: {
                package: {
                    name: "美团红包"
                },
                address: {
                    name: "收货地址"
                },
                comment: {
                    name: "我的评价"
                },
                deal:{
                    name:"我的订单"
                },
                feedback: {
                    name: "意见反馈"
                },
                question: {
                    name: "常见问题"
                },
                logout:{
                    name:"退出登录"
                }
            }
        };
    }

    componentDidMount() {
        this.getUserName();
    }

    getUserName() {
        axios.get("json/queryMy.json").then(res => {
            this.setState({
                userName: res.data.data.userName
            })
        })
    }
    renderUserName() {
        return this.state.userName;
    }

    renderListMap() {
        const listMap = this.state.listMap;
        const keys = Object.keys(listMap);
        return keys.map((key, index) => {
            let obj = listMap[key];
            let cls = "name " + key;
            let name = obj.name;
            return (
                <li className="item" key={index}>
                    <div className={cls}>
                        {name}
                    </div>
                    <div className="arrow"></div>
                </li>
            )
        })
    }
    render() {
        return (
            <div className="my-page">
                <div className="head">
                    <img src={require("./images/img.png")} alt="" className="icon" />
                    <p className="name">{this.renderUserName()}</p>
                </div>
                <ul className="list">
                    {this.renderListMap()}

                </ul>
                <div className="customer">
                    客服电话：123456
                </div>
                <div className="service">
                    服务时间：9:00 - 24：00
                </div>
            </div>
        )
    }
}
export default My;