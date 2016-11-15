/**
 * Created by Administrator on 2016/11/14.
 */
var React =require('react');
var ReactDOM =require('react-dom');
import App from './app.jsx';
var Hello =React.createClass({
    render:function(){
        return(
            <div>1234<App /></div>
        )
    }
});
var div1=document.createElement('div');
document.body.appendChild(div1);
ReactDOM.render(<Hello />,div1);