function byId(id) {
    return typeof(id) === "string" ? document.getElementById(id) : id;
}
var logoList = byId('logolist'), listsHeight = 0;
// 获取 图标的类名；
var lists = forms.getElementsByClassName({
    searchClass: 'list',
    node: logoList
});
// 遍历 图标的数量，增加父容器的高度；
for (var i = 0; i < lists.length; i++) {
    if ( i % 5 === 0) {
        listsHeight += 50;
    }
}
// 判断logo图标大于5 触发向下箭头的滑入滑出动作
if (lists.length > 5) {
    $('#logolist').hover(function(){
        $('#logolist').animate({
            height: listsHeight + 'px'
        }, '.5s', function() {
            $('#pullDown').addClass('rotates');
        });
    }, function(){
        $('#logolist').animate({
            height: '60px'
        }, '.5s', function() {
            $('#pullDown').addClass('rotatend').removeClass('rotates');
        });
    });
}
