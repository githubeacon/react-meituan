import React from 'react';


class SearchPage extends React.Component{

    render(){
        return (
            <div className="search-page">
                <div className="search-bar">
                    <div className="left">
                        <input type="text" name="search" id="" placeholder="李大叔南昌拌粉 满25-12"/>
                    </div>
                    <div className="right">
                        <button>搜索</button>
                    </div>
                </div>
                <div>
                    热门搜索
                </div>
                <div className="line"></div>
                <div className="hot-key">
                    <ul>
                        <li>螺蛳粉</li>
                        <li>麻辣烫</li>
                        <li>粥</li>
                        <li>饺子</li>
                        <li>炒饭</li>
                        <li>烧烤</li>
                        <li>面</li>
                        <li>奶茶</li>
                        <li>汉堡</li>
                        <li>炸鸡</li>
                        <li>小龙虾</li>
                        <li>coco</li>
                    </ul>
                </div>
            </div>
        )
    }
}