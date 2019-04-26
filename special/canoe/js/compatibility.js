// 兼容ie8以下获取classname
var forms = {
    getElementsByClassName: function(str){
        var searchClass = str.searchClass;//存储要查找的类名
        var node = str.node|| document; //存储要查找的范围
        var tag = str.tag||'*';//存储一定范围内要查找的标签
        var result = [];
        // 判断浏览器不支持getElementsByClassName方法
        if(document.getElementsByClassName){ //如果浏览器支持
            var nodes = node.getElementsByClassName(searchClass);
            if(tag !=='*'){
                for(var i = 0;node = nodes[i++];){
                    if(node.tagName === tag.toUpperCase()){
                        result.push(node);
                    }
                }
            }else{
                result = nodes;
            }
            return result;
        }else{ //使IE8以下的浏览器能够支持该属性
            var els = node.getElementsByTagName(tag);
            var elsLen = els.length;
            var i,j;
            var pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
            for(i = 0,j=0;i<elsLen;i++){
                if(pattern.test(els[i].className)){  //检测正则表达式
                    result[j] = els[i];
                    j++;
                }
            }
            return result;
        }
    }
};
// 兼容ie8以下事件
var EventUtil = {
    addEvent:function(ele,type,handler){
        if(ele.addEventListener){
            ele.addEventListener(type,handler,false);
        }else if(ele.attachEvent){
            ele.attachEvent('on' + type,handler);
        }
    },
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        };
    },
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }
};
// 循环数组；
function each(array,fn){
    for(var i = 0;i < array.length;i++){
        fn(i,array[i]);
    }
}