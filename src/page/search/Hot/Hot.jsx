import React from 'react';
import './Hot.scss';

class Hot extends React.Component{

    render(){
        return (
            <div className="hot">
                <div className="name">热门搜索</div>
                <div className="line"></div>
                <ul className="hot-search-list">
                    <li className="item">螺蛳粉</li>
                    <li className="item">麻辣烫</li>
                    <li className="item">粥</li>
                    <li className="item">饺子</li>
                    <li className="item">炒饭</li>
                    <li className="item">烧烤</li>
                    <li className="item">面</li>
                    <li className="item">奶茶</li>
                    <li className="item">汉堡</li>
                    <li className="item">炸鸡</li>
                    <li className="item">小龙虾</li>
                    <li className="item">coco</li>
                </ul>
            </div>
        )
    }
}

export default Hot;