import React from 'react';
import './Order.scss';
import axios from 'axios';
class Order extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orderList: []
        }
    }

    componentDidMount() {
        axios.get("json/queryOrderList.json").then((res) => {
            const data = res.data.data;
            this.setState({
                orderList: data.orderList
            });
        })
    }

    renderProductList(productList) {
        return productList.map((item, index) => {
            let name = item.productName;
            let count = item.productCount;
            return (
                <li className="product" key={index}>
                    <div className="name">{name}</div>
                    <div className="mount">x{count}</div>
                </li>
            );
        });
    }
    renderOrderList() {
        const orderList = this.state.orderList.slice();
        return orderList.map((item, index) => {
            let shopIcon = item.img;
            let shopName = item.shopName;
            let orderTime = item.orderTime;
            // let payStatus = item.payStatus;
            let orderStatusStr = item.orderStatusStr;
            let productList = item.productList;
            let totalPrice = item.totalPrice;
            return (

                <li className="item" key={index}>
                    <div className="shop-info">
                        <div className="shop">
                            <img src={shopIcon} alt="" className="icon" />
                            <div className="name">{shopName}）</div>
                        </div>
                        <div className="arrow"></div>
                    </div>
                    <div className="order-info">
                        <ul className="product-list">
                            {this.renderProductList(productList)}
                        </ul>
                        <div className="order-footer">
                            <div className="order-time">{orderTime}</div>
                            <div className="price">实付{totalPrice}</div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="status">{orderStatusStr}</div>
                        <div className="buttons">
                            <div className="delete">删除</div>
                            <div className="again">再来一单</div>
                        </div>
                    </div>
                </li>
            )
        });
    }
    render() {
        return (
            <div className="order-page">
                <ul className="list">
                    {this.renderOrderList()}
                </ul>
            </div>
        )
    }
}

export default Order;