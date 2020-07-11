import React from 'react';
import './My.scss';
import axios from 'axios';

class My extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: ""
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
    render() {
        return (
            <div className="my-page">
                <div className="head">
                    <img src={require("./images/img.png")} alt="" className="icon" />
                    <p className="name">{this.renderUserName()}</p>
                </div>
                <ul className="list">
                    <li className="item">
                        <div className="name">
                            美团红包
                        </div>
                        <div className="arrow"></div>
                    </li>
                    <li className="item">
                        <div className="name">
                            收货地址
                        </div>
                        <div className="arrow"></div>
                    </li>
                </ul>
                <div className="custemer">

                </div>
                <div className="service">

                </div>
            </div>
        )
    }
}
export default My;