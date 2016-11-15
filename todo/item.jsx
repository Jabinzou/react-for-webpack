//渲染输入的li组件
import React from 'react';
import ReactDOM from 'react-dom';
import {classNames} from './localstorage.js';
export default class Item extends React.Component{
    render(){
        return(
            <li className={classNames({
                    completed:this.props.compile
                })}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={this.props.compile} onChange={this.props.toggle}/>
                    <label>{this.props.content}</label>
                    <button className="destroy" onClick={this.props.deleteItem}></button>
                </div>
                <input className="edit" defaultValue="多多对对" />
            </li>
        )
    }
}