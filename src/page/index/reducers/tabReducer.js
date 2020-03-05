import {CHANGE_TAB} from '../actions/actionType.js';
import {TAB_KEY} from '../config.js';
const initState = {
    tabs:[
        {
            name:'首页',
            key:TAB_KEY.home
        }
        ,
        {
            name:'订单',
            key:TAB_KEY.order
        },
        {
            name:'我的',
            key:TAB_KEY.my
        }
    ],
    activeKey:TAB_KEY.home
};


const changeTab = (state,action)=>{
    let activeKey = action.obj.activeKey;
    return {...state,activeKey:activeKey};
}
const tabReducer = (state = initState,action)=>{
    switch(action.type){ 
        case CHANGE_TAB : return changeTab(state,action);
        default:return state;
    }
};
export default tabReducer;