

//控制层  controler
import {store} from './localstorage.js';
//localstorage
let app = {
    dataArr: [],
    info:function(){
        store("todo",app.dataArr);
    },
    addItem:function(value) {
        app.dataArr.push({
            id:Date.now(),
            content:value,
            compile:false
        });
        app.info();
        app.render(app.dataArr);
    },
    toggleAll:function(bl){
        app.dataArr.forEach((item)=>{
            item.compile=bl;
        })
        app.info();
        app.render(app.dataArr);
    },
    toggle(id){
        app.dataArr.forEach((item)=>{
            if(item.id===id)
                item.compile=!item.compile;
        })
        app.info();
        app.render(app.dataArr);
    },
    deleteItem:function(id){
        var newArr=app.dataArr.filter((item)=>{
            return item.id!==id;
        })
        app.dataArr=newArr;
        app.info();
        app.render(app.dataArr);
    }
};
app.dataArr=store("todo")||[];
export default app;

